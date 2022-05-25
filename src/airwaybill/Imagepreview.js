import React, { useContext, useState } from 'react'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto'
import { Document, Page, pdfjs } from 'react-pdf'
import Context from '../context/Context'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const SingleImageUploadComponent = () => {
  const {
    showData,
    hideData,
    showImage,
    hideImage,
    showWarningPopupModel,
    isimageVisible,
    clearFileName
  } = useContext(Context)

  const [file, setfile] = useState(null)

  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const uploadSingleFile = (e) => {
    hideData()
    setfile(URL.createObjectURL(e.target.files[0]))
    // let x = e.target.files[0].name.split('.')[0]
    let x = e.target.files[0].name
    // console.log(x);
    showImage(x)
  }

  const upload = (e) => {
    if (file) {
      showData()
    } else {
      showWarningPopupModel()
      clearFileName()
      hideData()
      hideImage()
    }
    e.preventDefault()
  }

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }
  return (
    <form>
      <div
        style={{ width: '30vw', height: '100vh', backgroundColor: '#E2E2E2' }}
      >
        {/* {isimageVisible && file && <img style={{ width: "29vw", height: "98vh" }} src={file} alt="" />} */}
        {isimageVisible && file && (
          <Document
            style={{ width: '29vw', height: '98vh' }}
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        )}
      </div>
      <div style={{ display: 'flex', marginTop: '2vh' }}>
        <div>
          <label htmlFor='fileupload'>
            <input
              type='file'
              id='fileupload'
              onChange={uploadSingleFile}
              style={{ display: 'none' }}
            />
            <AddAPhotoIcon />
          </label>
        </div>
        <button
          type='button'
          onClick={upload}
          style={{
            width: '15vw',
            height: '5vh',
            color: '#707070',
            border: '0.1px solid #707070',
            borderRadius: '0.2vw',
            outline: 'none',
            backgroundColor: '#fff',
            fontSize: '20px',
            marginLeft: '5.5vw',
            marginTop: '7vh',
            cursor: 'pointer'
          }}
          // onClick={() => showData()}
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default SingleImageUploadComponent
