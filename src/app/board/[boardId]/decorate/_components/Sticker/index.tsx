'use client'

import '@/styles/sticker.css'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Moveable from 'react-moveable'
import Selecto from 'react-selecto'
import { useSticker } from '../../_contexts/StickerContext'
import DeleteBtn from './DeleteBtn'

interface StickerProps {
  isDecorating: boolean
}

const Sticker = ({ isDecorating }: StickerProps) => {
  const [targets, setTargets] = useState<Array<SVGElement | HTMLElement>>([])
  const moveableRef = useRef<Moveable>(null)
  const selectoRef = useRef<Selecto>(null)
  const { selectedStickers, deleteSticker } = useSticker()
  const [targetedStickerId, setTargetedStickerId] = useState<
    string | undefined
  >(undefined)

  useEffect(() => {
    const firstTarget = targets[0]
    setTargetedStickerId(firstTarget?.dataset.id ?? undefined)
  }, [targets])

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('.sticker') && !target.closest('.moveable-control')) {
        setTargets([])
      }
    }

    document.addEventListener('click', handleDocumentClick)
    return () => document.removeEventListener('click', handleDocumentClick)
  }, [])

  return (
    <div>
      {isDecorating && (
        <>
          <Moveable
            ref={moveableRef}
            ables={[DeleteBtn]}
            props={{
              editable: true,
              file: targetedStickerId,
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
                moveable
                  .waitToChangeTarget()
                  .then(() => moveable.dragStart(e.inputEvent))
              }
              setTargets(e.selected)
            }}
          />
        </>
      )}

      <div className="absolute left-1/2 top-0 z-10">
        {selectedStickers.map(({ id, file }) => (
          <div
            key={id}
            className="sticker absolute h-24 w-24"
            data-id={id}
            data-file={file}
          >
            <Image
              src={`/icons/stickers/${parseInt(file.split('-')[0], 10)}/${file}`}
              alt="Sticker"
              fill
              sizes="96px"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sticker
