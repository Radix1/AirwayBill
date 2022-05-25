import React, { useContext } from 'react'
import Context from '../context/Context'

const OverLayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.7)',
  zIndex: 2000
}

const AssignStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  width: '25vw',
  height: '10vh',
  transform: 'translate(-50%,-50%)',
  background: '#FFF',
  padding: '5vw',
  zIndex: 2000,
  textAlign: 'center',
  color: '#707070'
}

export default function Popup({ open, onclose }) {
  const { isEnterData, showWarningPopupModel } = useContext(Context)
  if (!open) return null
  console.log('outside' + isEnterData)

  return (
    <div style={OverLayStyle}>
      <div style={AssignStyle}>
        <label style={{ fontSize: '2vw' }}>Reset Done!</label>
        <br />
        <button
          style={{
            width: '10vw',
            height: '5vh',
            backgroundColor: '#fff',
            marginTop: '2vw',
            outline: 'none',
            border: '0.2px solid #707070',
            borderRadius: '0.2vw'
          }}
          onClick={() => {
            onclose()
          }}
        >
          Close
        </button>
      </div>
    </div>
  )
}
