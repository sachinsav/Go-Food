import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  backgroundColor: 'rgb(255,255,255)',
  transform: 'translate(-50%, -50%)',
  zIndex: 1000,
  height: '90%',
  width: '90%'
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(90, 90, 90, 1)',
  zIndex: 1000
}

export default function Modal({ children, onClose }) {

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button className='btn text-white fs-4' style={{ position: 'absolute', top: 0, right: 0, zIndex:10 }} onClick={onClose}>X</button>
        {children}
      </div>
    </>,
    document.getElementById('cart-root')
  )
}