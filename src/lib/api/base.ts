'use server'

import { auth, unstable_update as update, signOut } from '@/auth'
import { RequestInit } from 'next/dist/server/web/spec-extension/request'
import { refreshAT } from './auth'

const ERRORS = {
  FETCH_FAILED: '데이터를 불러오는데 실패했습니다.',
  SAVE_FAILED: '데이터를 저장하는데 실패했습니다.',
  DELETE_FAILED: '데이터를 삭제하는데 실패했습니다.',
}

const getBaseUrl = (useMocked: boolean) =>
  useMocked ? 'http://localhost:3001' : process.env.API_HOST

const fetchApi = async (
  path: string,
  options: RequestInit,
  useMocked: boolean,
  errorMessage: string,
) => {
  const session = await auth()

  const fetchOptions = {
    ...options,
    headers: {
      'content-type': 'application/json',
      ...options?.headers,
      ...(session && { Authorization: `Bearer ${session?.accessToken}` }),
    },
  }

  let res = await fetch(getBaseUrl(useMocked) + path, fetchOptions)

  if (res.status === 401 && session) {
    const resJson = await res.json()
    if (resJson.code === 'JWT002') {
      // AT expired
      try {
        const newToken = await refreshAT(session.refreshToken)

        await update({
          accessToken: newToken.accessToken,
          refreshToken: newToken.refreshToken,
          expiredDate: newToken.expiredDate,
        })

        // retry original request
        res = await fetch(getBaseUrl(useMocked) + path, fetchOptions)
      } catch (e) {
        signOut()
      }
    } else {
      // RT expired or invalid
      signOut()
    }
  }

  if (!res.ok) {
    throw new Error(`Error: ${res.status} - ${res.statusText}. ${errorMessage}`)
  }

  const text = await res.text()
  return text ? JSON.parse(text) : null
}

export const get = async (
  path: string,
  options: RequestInit = {},
  useMocked = false,
) =>
  fetchApi(
    path,
    {
      ...options,
      method: 'GET',
    },
    useMocked,
    ERRORS.FETCH_FAILED,
  )

export const post = async (
  path: string,
  options: RequestInit = {},
  useMocked = false,
) =>
  fetchApi(
    path,
    {
      ...options,
      method: 'POST',
    },
    useMocked,
    ERRORS.SAVE_FAILED,
  )

export const put = async (
  path: string,
  options: RequestInit = {},
  useMocked = false,
) =>
  fetchApi(
    path,
    {
      ...options,
      method: 'PUT',
    },
    useMocked,
    ERRORS.SAVE_FAILED,
  )

export const deleteApi = async (
  path: string,
  options: RequestInit = {},
  useMocked = false,
) =>
  fetchApi(
    path,
    {
      ...options,
      method: 'DELETE',
    },
    useMocked,
    ERRORS.DELETE_FAILED,
  )
