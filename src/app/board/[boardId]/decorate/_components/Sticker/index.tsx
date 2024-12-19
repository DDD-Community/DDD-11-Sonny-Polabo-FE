'use client'

import '@/styles/sticker.css'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Moveable from 'react-moveable'
import Selecto from 'react-selecto'
import { useSticker } from '../../_contexts/StickerContext'
import DeleteBtn from './DeleteBtn'

const Sticker = () => {
  const [targets, setTargets] = useState<Array<SVGElement | HTMLElement>>([])
  const moveableRef = useRef<Moveable>(null)
  const selectoRef = useRef<Selecto>(null)
  const { selectedStickers, deleteSticker } = useSticker()
  const [targetedSticker, setTargetedSticker] = useState<string | undefined>(
    undefined,
  )

  useEffect(() => {
    if (targets.length > 0 && targets[0]) {
      const { file } = targets[0].dataset
      setTargetedSticker(file)
    } else {
      setTargetedSticker(undefined)
    }
  }, [targets])

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      if (!target.closest('.sticker') && !target.closest('.moveable-control')) {
        setTargets([])
      }
    }

    document.addEventListener('click', handleDocumentClick)

    return () => {
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [])

  return (
    <div>
      <Moveable
        ref={moveableRef}
        ables={[DeleteBtn]}
        props={{
          editable: true,
          file: targetedSticker,
          deleteSticker,
        }}
        draggable
        target={targets}
        rotatable={{
          renderDirections: ['se'],
        }}
        resolveAblesWithRotatable={{
          resizable: ['se'],
        }}
        resizable={{
          renderDirections: false,
        }}
        rotateAroundControls
        onRender={(e) => {
          e.target.style.cssText += e.cssText
        }}
      />
      <Selecto
        ref={selectoRef}
        selectableTargets={['.sticker']}
        hitRate={100}
        selectByClick
        selectFromInside={false}
        ratio={0}
        onSelectEnd={(e) => {
          const moveable = moveableRef.current!
          if (e.isDragStart) {
            e.inputEvent.preventDefault()

            moveable.waitToChangeTarget().then(() => {
              moveable.dragStart(e.inputEvent)
            })
          }

          setTargets(e.selected)
        }}
      />
      <div className="absolute left-0 top-0 z-10">
        {selectedStickers.map((file) => (
          <div
            key={file}
            className="sticker absolute h-24 w-24"
            data-file={file}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/icons/stickers/${parseInt(file.split('-')[0], 10)}/${file}`}
              alt="Sticker"
              fill
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sticker
