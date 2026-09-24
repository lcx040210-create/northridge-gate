import { useState } from 'react'
import type { ReadableItem } from '../data/readable'

interface Props {
  item: ReadableItem
  onClose: () => void
}

export default function ReadableViewer({ item, onClose }: Props) {
  const [currentPage, setCurrentPage] = useState(0)

  const nextPage = () => {
    if (currentPage < item.pages.length - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="overlay" style={{ background: 'rgba(0,0,0,0.85)' }}>
      <div
        style={{
          position: 'relative',
          width: 700,
          maxWidth: '90%',
          maxHeight: '80vh',
          margin: '5vh auto',
          background: '#2a2520',
          border: '2px solid #5a4a3a',
          borderRadius: 8,
          padding: 40,
          color: '#e8e2cc',
          fontFamily: 'serif',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          overflow: 'auto',
        }}
      >
        {/* 标题 */}
        <h2
          style={{
            margin: '0 0 24px 0',
            fontSize: 24,
            color: '#e8e2cc',
            borderBottom: '1px solid #5a4a3a',
            paddingBottom: 12,
          }}
        >
          {item.title}
        </h2>

        {/* 内容 */}
        <div
          style={{
            fontSize: 16,
            lineHeight: 1.8,
            whiteSpace: 'pre-wrap',
            minHeight: 300,
            marginBottom: 24,
          }}
        >
          {item.pages[currentPage]}
        </div>

        {/* 翻页控制 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #5a4a3a',
            paddingTop: 16,
          }}
        >
          <button
            className="btn"
            onClick={prevPage}
            disabled={currentPage === 0}
            style={{ opacity: currentPage === 0 ? 0.3 : 1 }}
          >
            ‹ PREV
          </button>

          <span style={{ color: '#a89888', fontSize: 14 }}>
            {currentPage + 1} / {item.pages.length}
          </span>

          <button
            className="btn"
            onClick={nextPage}
            disabled={currentPage === item.pages.length - 1}
            style={{ opacity: currentPage === item.pages.length - 1 ? 0.3 : 1 }}
          >
            NEXT ›
          </button>
        </div>

        {/* 关闭按钮 */}
        <button
          className="btn"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            minWidth: 80,
          }}
        >
          CLOSE
        </button>
      </div>
    </div>
  )
}
