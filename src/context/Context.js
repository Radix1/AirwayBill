import React, { useState } from 'react'

const initialContext = {
  isPopupVisible: false,
  showPopupModel: () => {},
  hidePopupModel: () => {},
  isWarningPopupVisible: false,
  showWarningPopupModel: () => {},
  hidewarningPopupModel: () => {},
  isEnterData: false,
  showData: () => {},
  hideData: () => {},
  isimageVisible: false,
  showImage: () => {},
  hideImage: () => {},
  clearFileName: () => {}
}

const Context = React.createContext(initialContext)

const { Provider, Consumer } = Context

export const ContextProvider = ({ children }) => {
  const [value, setValue] = useState({
    isPopupVisible: false,
    isEnterData: false,
    isimageVisible: false,
    isWarningPopupVisible: false,
    filename: ''
  })
  const clearFileName = () => {
    setValue((value) => ({
      ...value,
      filename: ''
    }))
  }
  const showPopupModel = () => {
    setValue((value) => ({
      ...value,
      isPopupVisible: true
    }))
  }
  const hidePopupModel = () => {
    setValue((value) => ({
      ...value,
      isPopupVisible: false,
      isEnterData: false,
      isimageVisible: false
    }))
  }
  const showWarningPopupModel = () => {
    setValue((value) => ({
      ...value,
      isWarningPopupVisible: true
    }))
  }
  const hidewarningPopupModel = () => {
    setValue((value) => ({
      ...value,
      isWarningPopupVisible: false
    }))
  }
  const showData = () => {
    setValue((value) => ({
      ...value,
      isEnterData: true
    }))
  }
  const hideData = () => {
    setValue((value) => ({
      ...value,
      isEnterData: false
    }))
  }

  const showImage = (filename) => {
    setValue((value) => ({
      ...value,
      isimageVisible: true,
      filename
    }))
  }
  const hideImage = () => {
    setValue((value) => ({
      ...value,
      isimageVisible: false
    }))
  }

  return (
    <Provider
      value={{
        ...value,
        showPopupModel,
        hidePopupModel,
        showWarningPopupModel,
        hidewarningPopupModel,
        showData,
        hideData,
        showImage,
        hideImage,
        clearFileName
      }}
    >
      {children}
    </Provider>
  )
}

export const ContextConsumer = Consumer

export default Context
