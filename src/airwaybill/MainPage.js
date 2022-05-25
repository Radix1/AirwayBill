import React, { useState, useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Imagepreview from './Imagepreview'

import Form from './Form'
import Dashboard from './Dashboard'
import Popup from './Popup'
import WarningPopup from './WarningPopup'
import Context from '../context/Context'
import { savefile, savefilefwb } from './Form'

const useStyle = makeStyles((theme) => ({
  Header: {
    height: '7vh',
    backgroundColor: '#fff'
  },
  Button: {
    width: '12vw',
    height: '5vh',
    color: '#707070',
    margin: '2vh 0 2vh 2vw',
    border: '0.1px solid #707070',
    borderRadius: '0.2vw',
    outline: 'none',
    backgroundColor: '#fff',
    fontSize: '20px',
    cursor: 'pointer'
  },

  selButton: {
    width: '15vw',
    height: '5vh',
    color: '#fff',
    margin: '2vh 0 2vh 2vw',
    border: '0.1px solid #707070',
    borderRadius: '0.2vw',
    outline: 'none',
    backgroundColor: '#431A7E',
    fontSize: '20px',
    cursor: 'pointer'
  },

  BillofLading: {
    width: '92vw',
    backgroundColor: '#fff',
    // height: "225vh",
    height: '120vh',
    marginLeft: '2vw',
    padding: '3vh'
  },
  submitButton: {
    width: '6vw',
    height: '4vh',
    position: 'relative',
    top: '2vh',
    left: '11vw',
    color: '#707070',
    backgroundColor: '#fff',
    borderRadius: '.25vw',
    outline: 'none',
    border: '0.2px solid #707070',
    marginLeft: '2vw'
  }
}))

export default function MainPage() {
  const {
    isPopupVisible,
    showPopupModel,
    hidePopupModel,
    hidewarningPopupModel,
    isWarningPopupVisible,
    isEnterData,
    filename
  } = useContext(Context)

  const classes = useStyle()
  const [selectPage, setselectPage] = useState('airway')
  const download = () => {
    // savefile()
  }
  const downloadfilefwb = () => {
    // Get the data from each element on the form.
    var file =
      'http://127.0.0.1:8887/' +
      filename.substring(0, filename.indexOf('.')) +
      '_awb.txt'

    fetch(file)
      .then((response) => response.text())
      .then((text) => {
        console.log(text)
        //  Convert the text to BLOB.
        const textToBLOB = new Blob([text], { type: 'text/plain' })
        const sFileName =
          'FWB#' + filename.substring(0, filename.indexOf('.')) + '.txt' // The file to save the data.
        let newLink = document.createElement('a')
        newLink.download = sFileName
        if (window.webkitURL != null) {
          newLink.href = window.webkitURL.createObjectURL(textToBLOB)
        } else {
          newLink.href = window.URL.createObjectURL(textToBLOB)
          newLink.style.display = 'none'
          document.body.appendChild(newLink)
        }
        newLink.click()
      })
      .catch((error) => console.log('Error : ' + error.message))
  }

  const pageSelect = (e) => {
    console.log(selectPage)
    setselectPage(e.target.id)
  }

  return (
    <div style={{ marginBottom: '4vh' }}>
      <div className={classes.Header}></div>
      <div className={classes.ButtonBar}>
        <button
          className={
            selectPage !== 'dashboard' ? classes.selButton : classes.Button
          }
          id='airway'
          onClick={pageSelect}
        >
          Air Waybill
        </button>
        <button
          className={
            selectPage === 'dashboard' ? classes.selButton : classes.Button
          }
          id='dashboard'
          onClick={pageSelect}
        >
          Dashboard
        </button>
      </div>
      {selectPage === 'airway' ? (
        <div className={classes.BillofLading}>
          <div style={{ display: 'flex' }}>
            <div>
              <Imagepreview />
            </div>
            <div
              style={{
                width: '72vw',
                paddingLeft: '1vw',
                height: '100vh',
                overflowY: 'scroll',
                overflowX: 'hidden'
              }}
            >
              <Form />
            </div>
          </div>
          {/* <div style={{ marginLeft: "29vw", marginTop: "3vh" }}>
            <button className={classes.Button} style={{ marginLeft: "2vw" }} onClick={() => showPopupModel()}>Submit</button>
            <button className={classes.Button} style={{ marginLeft: "2vw" }}>Submit &amp; Download</button>
            <button className={classes.Button} style={{ marginLeft: "2vw" }}>Skip</button>
          </div> */}
          <div style={{ marginLeft: '30vw', marginTop: '-7vh' }}>
            <button
              className={classes.Button}
              style={{ marginLeft: '1.5vw' }}
              onClick={() => showPopupModel()}
            >
              Reset
            </button>
            <button
              className={classes.Button}
              style={{ marginLeft: '1.5vw' }}
              // onClick={(e) => downloadfilefwb(e)}
            >
              Edit{' '}
            </button>
			  <button
              className={classes.Button}
              style={{ marginLeft: '1.5vw' }}
              // onClick={(e) => downloadfilefwb(e)}
            >
              Save{' '}
            </button>
            <button
              className={classes.Button}
              style={{ marginLeft: '1.5vw' }}
              onClick={(e) => downloadfilefwb(e)}
            >
              Generate FWB
            </button>
          </div>
          <Popup open={isPopupVisible} onclose={() => hidePopupModel()} />
          <WarningPopup
            open={isWarningPopupVisible}
            onclose={() => hidewarningPopupModel()}
          />
        </div>
      ) : (
        <div>
          <Dashboard />
        </div>
      )}
      )
    </div>
  )
}
