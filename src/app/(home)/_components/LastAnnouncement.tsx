'use client'

import Modal from '@/components/Modal'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const LastAnnouncement = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(true)
  }, [])

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <Modal.CenterModal icon={null}>
        <Modal.Close />
        <Modal.Title>POLABO 서비스 종료 안내</Modal.Title>

        <div className="max-h-[450px] overflow-y-auto py-6 text-xs">
          <div className="mb-4 space-y-4 px-8 text-center leading-relaxed">
            안녕하세요, 쏘니팀입니다.
            <br />
            그동안 POLABO 서비스를 사랑해주신 모든
            <br />
            이용자 여러분께 진심으로 감사의 말씀을
            <br />
            드립니다.
            <br />
            <br />
            내부 논의 끝에, 1년 남짓의 시간을 함께 해온
            <br />
            POLABO 서비스를 2025년 8월 31일을 끝으로
            <br />
            종료하게 되었습니다.
            <br />
            <br />
            종료 이후에는 서비스 이용이 제한되므로
            <br />
            아래의 상세내용을 확인해주시길 바랍니다.
            <br />
            그동안 이용해주셔서 감사합니다.
          </div>

          <div className="mx-4 rounded-2xl bg-gray-50 p-4 text-center">
            <div>
              <span className="text-gray-600">종료일자: </span>
              <span className="font-semiBold">2025년 8월 31일</span>
            </div>
            <div>
              <span className="text-gray-600">데이터 백업 기간: </span>
              <span className="font-semiBold">2025년 7월 21일 ~ 8월 30일</span>
            </div>
            <div>
              <span className="text-gray-600">백업 방법: </span>
              <span className="font-semiBold">
                마이페이지 &gt; 내 보드 목록 &gt; 보드 페이지 &gt; 내 보드
                꾸미고 저장하기
              </span>
            </div>

            <Link
              href="https://hwanheejung.notion.site/FAQ-22812c53a4f280548693c082148d34d4?source=copy_link"
              className="underline"
            >
              FAQ 페이지 바로가기
            </Link>
            <div>
              문의:{' '}
              <a href="mailto:dddsonny2024@gmail.com" className="underline">
                dddsonny2024@gmail.com
              </a>
            </div>
          </div>
        </div>

        <Modal.CenterConfirm
          confirmText="확인"
          onConfirm={() => setIsOpen(false)}
        />
      </Modal.CenterModal>
    </Modal>
  )
}

export default LastAnnouncement
