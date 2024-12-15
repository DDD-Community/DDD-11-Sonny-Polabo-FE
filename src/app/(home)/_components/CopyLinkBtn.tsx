'use client'

import LinkIcon from 'public/icons/linkcopy.svg'
import { useState } from 'react'
import LinkCopiedModal from '@/app/(home)/_components/LinkCopiedModal'
import { copyToClipboard } from '@/lib/utils'

const CopyLinkBtn = () => {
  const [isLinkCopiedModalOpen, setIsLinkCopiedModalOpen] = useState(false)

  const openLinkCopiedModal = () => setIsLinkCopiedModalOpen(true)
  const closeLinkCopiedModal = () => setIsLinkCopiedModalOpen(false)

  const copyCurrentUrl = () => {
    const currentURL = window.location.href
    return copyToClipboard(currentURL).then(openLinkCopiedModal)
  }

  return (
    <>
      <div className="mb-1 text-center text-xxs leading-3 text-gray-0">
        copy link!
      </div>
      <button
        type="button"
        className="rounded-[30px] bg-gray-100 p-3 shadow-[0_4px_8px_0_rgba(0,0,0,0.15)]"
        aria-label="copy link"
        onClick={copyCurrentUrl}
      >
        <LinkIcon />
      </button>
      <LinkCopiedModal
        isOpen={isLinkCopiedModalOpen}
        onClose={closeLinkCopiedModal}
      />
    </>
  )
}

export default CopyLinkBtn
