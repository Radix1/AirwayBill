import React, { useContext } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Context from '../context/Context'
import empty from '../Data/empty.json'
import data from '../Data/data.json'

const Accordion = withStyles({
  root: {
    // border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 'auto'
    }
  },
  expanded: {}
})(MuiAccordion)

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    // borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56
    }
  },
  content: {
    '&$expanded': {
      margin: '12px 0'
    }
  },
  expanded: {}
})(MuiAccordionSummary)

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiAccordionDetails)

const useStyle = makeStyles((theme) => ({
  checkCircle: {
    position: 'relative',
    top: '1.3vh',
    left: '0.2vw'
  }
}))
export const savefile = () => {
  console.log(document.getElementsByTagName('input').length)
  // for (var i = 1; i < document.getElementsByTagName('input').length; i++)
  //   console.log(document.getElementsByTagName('input')[i]['id'])
  var id = ''
  var downloadData = {}

  for (var i = 1; i < 30; i++) {
    console.log(document.getElementsByTagName('input')[i]['id'])
    id = document.getElementsByTagName('input')[i]['id']
    downloadData[id] = document.getElementById(id).value
  }
  console.log(downloadData)

  // Get the data from each element on the form.
  const name = document.getElementById('AWB_Serial_Number')

  var data = ''
  var emptydata = empty['empty']
  Object.keys(emptydata).map(function (key, index) {
    console.log(key)
    console.log(downloadData[key])
    if (downloadData[key] === undefined) downloadData[key] = ''
  })
  Object.keys(downloadData).map(function (key, index) {
    console.log(downloadData[key])
    if (downloadData[key] != '') data += key + ' : ' + downloadData[key] + '\n'
  })
  console.log(data)

  var datafwb =
    'FWB/17\n' +
    downloadData['AWB_Serial_Number'] +
    downloadData['Airport_Of_Departure'] +
    downloadData['Airport_Of_Destination'] +
    '/T' +
    downloadData['Number_of_Pieces'] +
    downloadData['Gross_Weight_Code'] +
    downloadData['Gross_Weight'] +
    '\nFLT/' +
    downloadData['Flight_Date'] +
    +'\n' +
    'RTG/' +
    downloadData['Airport_Of_Destination'] +
    downloadData['Carrier_Code'] +
    '\nSHP' +
    '\nNAM/' +
    downloadData['Shipper_Name'] +
    '\nADR/' +
    downloadData['Shipper_Address'] +
    '\nLOC/' +
    downloadData['Shipper_Place'] +
    '/' +
    downloadData['Shipper_State_Province'] +
    '/' +
    downloadData['Shipper_Country_Code'] +
    '/' +
    downloadData['Shipper_Post_Code'] +
    '/' +
    downloadData['Shipper_Contact_Number'] +
    '\nCNE' +
    '\nNAM/' +
    downloadData['Consignee_Name'] +
    '\nADR/' +
    downloadData['Consignee_Address'] +
    '\nLOC/' +
    downloadData['Consignee_Place'] +
    '/' +
    downloadData['Consignee_State_Province'] +
    '\n/' +
    downloadData['Consignee_Country_Code'] +
    '/' +
    downloadData['Consignee_Post_Code'] +
    '\n/' +
    downloadData['Consignee_Contact_Number'] +
    '\nAGT//' +
    downloadData['Agent_IATA_CODE'] +
    '\n/' +
    downloadData['Agent_Name'] +
    '\n/' +
    downloadData['Agent_City'] +
    '\nACC/' +
    downloadData['Accounting_Information'] +
    '\nCVD/' +
    downloadData['Currency_Code'] +
    '/' +
    downloadData['Charges_Code'] +
    '/' +
    downloadData['WT_VAL_PP'] +
    downloadData['WT_VAL_CO'] +
    downloadData['Other_Charges_PP'] +
    downloadData['Other_Charges_CO'] +
    '/' +
    downloadData['Declared_Value_For_Carriage'] +
    '/' +
    downloadData['Declared_Value_For_Customs'] +
    '/' +
    downloadData['Amount_Of_Insurance']
  console.log(datafwb)

  // Convert the text to BLOB.
  const textToBLOB = new Blob([datafwb], { type: 'text/plain' })
  const sFileName = 'FWB#' + name.value + '.txt' // The file to save the data.

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
}

export default function Form() {
  const classes = useStyle()
  const { isEnterData, filename } = useContext(Context)
  const [expanded1, setExpanded1] = React.useState('panel1')
  const [expanded2, setExpanded2] = React.useState('panel2')
  const [expanded3, setExpanded3] = React.useState('panel3')
  const [expanded4, setExpanded4] = React.useState('panel4')
  const [expanded5, setExpanded5] = React.useState('panel5')

  const handleChange = (panel) => (event, newExpanded) => {
    if (panel === 'panel1') setExpanded1(newExpanded ? panel : false)
    if (panel === 'panel2') setExpanded2(newExpanded ? panel : false)
    if (panel === 'panel3') setExpanded3(newExpanded ? panel : false)
    if (panel === 'panel4') setExpanded4(newExpanded ? panel : false)
    if (panel === 'panel5') setExpanded5(newExpanded ? panel : false)
  }
  // const localdata = filename === "bill" ? testJson : test1Json;
  // console.log(localdata);
  let localdata,
    tempdata = ''
  // console.log(filename)
  tempdata = data[filename]
  // console.log(filename)

  // switch (filename) {
  //   case 'awb_part1':
  //     tempdata = awb_part1
  //     break
  //   default:
  //     tempdata = data['020-26043883_20200701_163253_0.pdf']
  //   // console.log('no file')
  // }
  // console.log(tempdata)
  localdata = isEnterData ? tempdata : empty['empty']
  localdata['Shipper_Address'] = isEnterData
    ? localdata.Shipper_Street_Address +
      '\n' +
      localdata.Shipper_Place +
      '\n' +
      localdata.Shipper_State_Province +
      localdata.Shipper_Country_Code +
      '\n' +
      localdata.Shipper_Post_Code
    : ''

  localdata['Consignee_Address'] = isEnterData
    ? localdata.Consignee_Street_Address +
      '\n' +
      localdata.Consignee_Place +
      '\n' +
      localdata.Consignee_State_Province +
      localdata.Consignee_Country_Code +
      '\n' +
      localdata.Consignee_Post_Code
    : ''
  return (
    <div>
      <form>
        {/* <Accordion square onChange={handleChange("panel1")}> */}
        <Accordion
          square
          expanded={expanded1 === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
            <div style={{ fontSize: '1.2vw' }}>
              Section 1
              <span style={{ marginLeft: '47vw' }}>
                {expanded1 === 'panel1' ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandMoreIcon />
                )}
              </span>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ display: 'flex', fontSize: '16px' }}>
              <div>
                <div style={{ marginBottom: '1vh' }}>
                  AWB serial number <br />{' '}
                  <div>
                    <input
                      type='text'
                      id='AWB_Serial_Number'
                      style={{ width: '15vw' }}
                      defaultValue={localdata.AWB_Serial_Number}
                    />
                    {/* <CheckCircleIcon className={classes.checkCircle} /> */}
                  </div>
                </div>

                <div style={{ marginBottom: '1vh' }}>
                  Airport of Departure <br />{' '}
                  <div>
                    <input
                      type='text'
                      id='Airport_Of_Departure'
                      style={{ width: '15vw' }}
                      defaultValue={localdata.Airport_Of_Departure}
                    />
                    {/* <CheckCircleIcon className={classes.checkCircle} /> */}
                  </div>
                </div>
                <div style={{ marginBottom: '1vh' }}>
                  Airport of Destination <br />{' '}
                  <div>
                    <input
                      type='text'
                      id='Airport_Of_Destination'
                      style={{ width: '15vw' }}
                      defaultValue={localdata.Airport_Of_Destination}
                    />
                    {/* <CheckCircleIcon className={classes.checkCircle} /> */}
                  </div>
                </div>
                <div style={{ marginBottom: '1vh' }}>
                  Agents IATA code <br />{' '}
                  <div>
                    <input
                      type='text'
                      id='Agent_IATA_CODE'
                      style={{ width: '15vw' }}
                      defaultValue={localdata.Agent_IATA_CODE}
                    />
                    {/* <CheckCircleIcon className={classes.checkCircle} /> */}
                  </div>
                </div>
                <div style={{ marginBottom: '1vh' }}>
                  Carrier Code <br />{' '}
                  <div>
                    <input
                      type='text'
                      id='CARRIER_CODE'
                      style={{ width: '15vw' }}
                      defaultValue={localdata.Carrier_Code}
                    />
                    {/* <CheckCircleIcon className={classes.checkCircle} /> */}
                  </div>
                </div>
                <div style={{ marginBottom: '1vh' }}>
                  Flight/Date <br />
                  <div>
                    {' '}
                    <input
                      type='text'
                      id='Flight_Date'
                      style={{ width: '15vw' }}
                      defaultValue={localdata.Flight_Date}
                    />
                    {/* <CheckCircleIcon className={classes.checkCircle} /> */}
                  </div>
                </div>
              </div>
              <div style={{ marginLeft: '3vw' }}>
                <div style={{ marginBottom: '1vh' }}>
                  Shipper's Name <br />{' '}
                  <input
                    type='text'
                    id='Shipper_Name'
                    style={{ width: '15vw' }}
                    defaultValue={localdata.Shipper_Name}
                  />
                  {/* <CheckCircleIcon className={classes.checkCircle} /> */}
                </div>

                <div style={{ marginBottom: '1vh' }}>
                  <div>
                    Shipper's Street Address <br />
                    <input
                      type='text'
                      id='Shipper_Street_Address'
                      style={{ width: '15vw' }}
                      defaultValue={localdata.Shipper_Street_Address}
                    />
                    {/* <CheckCircleIcon className={classes.checkCircle} /> */}
                  </div>
                  <div>
                    Shipper's Place <br />
                    <input
                      type='text'
                      id='Shipper_Place'
                      style={{ width: '15vw' }}
                      defaultValue={localdata.Shipper_Place}
                    />
                    {/* <CheckCircleIcon className={classes.checkCircle} /> */}
                  </div>
                  <div>
                    Shipper's State/Province <br />
                    <input
                      type='text'
                      id='Shipper_State_Province'
                      style={{ width: '15vw' }}
                      defaultValue={localdata.Shipper_State_Province}
                    />
                    {/* <CheckCircleIcon className={classes.checkCircle} /> */}
                  </div>
                  <div>
                    Shipper's Country Code <br />
                    <input
                      type='text'
                      id='Shipper_Country_Code'
                      style={{ width: '15vw' }}
                      defaultValue={localdata.Shipper_Country_Code}
                    />
                    {/* <CheckCircleIcon className={classes.checkCircle} /> */}
                  </div>
                  <div>
                    Shipper's Post Code <br />
                    <input
                      type='text'
                      id='Shipper_Post_Code'
                      style={{ width: '15vw' }}
                      defaultValue={localdata.Shipper_Post_Code}
                    />
                    {/* <CheckCircleIcon className={classes.checkCircle} /> */}
                  </div>
                  <div style={{ marginBottom: '1vh' }}>
                    Shipper's Contact Number <br />{' '}
                    <input
                      type='text'
                      id='Shipper_Contact_Number'
                      style={{ width: '15vw' }}
                      defaultValue={localdata.Shipper_Contact_Number}
                    />
                  </div>
                </div>
              </div>
              <div style={{ marginLeft: '3vw' }}>
                <div style={{ marginBottom: '1vh' }}>
                  Consignee's Name <br />
                  <div>
                    <input
                      type='text'
                      id='Consignee_Name'
                      style={{ width: '15vw' }}
                      defaultValue={localdata.Consignee_Name}
                    />
                    {/* <CheckCircleIcon className={classes.checkCircle} /> */}
                  </div>
                </div>
                <div style={{ marginBottom: '1vh' }}></div>
                <div>
                  Consignee's Street Address <br />
                  <input
                    type='text'
                    id='Consignee_Street_Address'
                    style={{ width: '15vw' }}
                    defaultValue={localdata.Consignee_Street_Address}
                  />
                  {/* <CheckCircleIcon className={classes.checkCircle} /> */}
                </div>
                <div>
                  Consignee's Place <br />
                  <input
                    type='text'
                    id='Consignee_Place'
                    style={{ width: '15vw' }}
                    defaultValue={localdata.Consignee_Place}
                  />
                  {/* <CheckCircleIcon className={classes.checkCircle} /> */}
                </div>
                <div>
                  Consignee's State/Province <br />
                  <input
                    type='text'
                    id='Consignee_State_Province'
                    style={{ width: '15vw' }}
                    defaultValue={localdata.Consignee_State_Province}
                  />
                  {/* <CheckCircleIcon className={classes.checkCircle} /> */}
                </div>
                <div>
                  Consignee's Country Code <br />
                  <input
                    type='text'
                    id='Consignee_Country_Code'
                    style={{ width: '15vw' }}
                    defaultValue={localdata.Consignee_Country_Code}
                  />
                  {/* <CheckCircleIcon className={classes.checkCircle} /> */}
                </div>
                <div>
                  Consignee's Post Code <br />
                  <input
                    type='text'
                    id='Consignee_Post_Code'
                    style={{ width: '15vw' }}
                    defaultValue={localdata.Consignee_Post_Code}
                  />
                  {/* <CheckCircleIcon className={classes.checkCircle} /> */}
                </div>
                <div style={{ marginBottom: '1vh' }}>
                  Consignee's Contact Number
                  <br />{' '}
                  <input
                    type='text'
                    id='Consignee_Contact_Number'
                    style={{ width: '15vw' }}
                    defaultValue={localdata.Consignee_Contact_Number}
                  />
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        {/* <Accordion square onChange={handleChange("panel2")}> */}
        <Accordion
          square
          expanded={expanded2 === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
            <div style={{ fontSize: '1.2vw' }}>
              Section 2
              <span style={{ marginLeft: '47vw' }}>
                {expanded2 === 'panel2' ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandMoreIcon />
                )}
              </span>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ display: 'flex', fontSize: '16px' }}>
              <div>
                <div style={{ marginBottom: '1vh' }}>
                  Accounting Information <br />{' '}
                  <div>
                    {' '}
                    <input
                      type='text'
                      id='Accounting_Information'
                      style={{ width: '15vw' }}
                      defaultValue={localdata.Accounting_Information}
                    />
                    {/* <CheckCircleIcon className={classes.checkCircle} /> */}
                  </div>
                </div>

                <div style={{ marginBottom: '1vh' }}>
                  Currency code
                  <br />{' '}
                  <div>
                    {' '}
                    <input
                      type='text'
                      id='Currency_Code'
                      style={{ width: '15vw' }}
                      defaultValue={localdata.Currency_Code}
                    />
                    {/* <CheckCircleIcon className={classes.checkCircle} /> */}
                  </div>
                </div>
                <div style={{ marginBottom: '1vh' }}>
                  Charges code <br />{' '}
                  <input
                    type='text'
                    id='Charges_Code'
                    style={{ width: '15vw' }}
                    defaultValue={localdata.Charges_Code}
                  />
                </div>
              </div>
              <div style={{ marginLeft: '3vw' }}>
                <div style={{ marginBottom: '1vh' }}>
                  WT/VAL - PP <br />{' '}
                  <input
                    type='text'
                    id='WT_VAL_PP'
                    style={{ width: '15vw' }}
                    defaultValue={localdata.WT_VAL_PP}
                  />
                </div>
                <div style={{ marginBottom: '1vh' }}>
                  WT/VAL - CO <br />{' '}
                  <input
                    type='text'
                    id='WT_VAL_CO'
                    style={{ width: '15vw' }}
                    defaultValue={localdata.WT_VAL_CO}
                  />
                </div>
                <div style={{ marginBottom: '1vh' }}>
                  Other Charges - PP <br />{' '}
                  <input
                    type='text'
                    id='Other_Charges_PP'
                    style={{ width: '15vw' }}
                    defaultValue={localdata.Other_Charges_PP}
                  />
                </div>
                <div style={{ marginBottom: '1vh' }}>
                  Other Charges - CO <br />{' '}
                  <input
                    type='text'
                    id='Other_Charges_CO'
                    style={{ width: '15vw' }}
                    defaultValue={localdata.Other_Charges_CO}
                  />
                </div>
              </div>
              <div style={{ marginLeft: '3vw' }}>
                <div style={{ marginBottom: '1vh' }}>
                  Declared Value for Carriage <br />{' '}
                  <div>
                    <input
                      type='text'
                      id='Declared_Value_For_Carriage'
                      style={{ width: '15vw' }}
                      defaultValue={localdata.Declared_Value_For_Carriage}
                    />
                    {/* <CheckCircleIcon className={classes.checkCircle} /> */}
                  </div>
                </div>
                <div style={{ marginBottom: '1vh' }}>
                  Declared Value for Customs <br />{' '}
                  <input
                    type='text'
                    id='Declared_Value_For_Customs'
                    style={{ width: '15vw' }}
                    defaultValue={localdata.Declared_Value_For_Customs}
                  />
                </div>
                <div style={{ marginBottom: '1vh' }}>
                  Amount of Insurance <br />{' '}
                  <input
                    type='text'
                    id='Amount_Of_Insurance'
                    style={{ width: '15vw' }}
                    defaultValue={localdata.Amount_Of_Insurance}
                  />
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        {/* <Accordion square onChange={handleChange("panel3")}> */}
        <Accordion
          square
          expanded={expanded3 === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
            <div style={{ fontSize: '1.2vw' }}>
              Section 3
              <span style={{ marginLeft: '47vw' }}>
                {expanded3 === 'panel3' ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandMoreIcon />
                )}
              </span>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ display: 'flex', fontSize: '16px' }}>
              <div>
                <div style={{ marginBottom: '1vh' }}>
                  Number of Pieces <br />{' '}
                  <textarea
                    type='text'
                    defaultValue={localdata.Number_of_Pieces}
                    style={{ width: '14vw', height: '6vh' }}
                  />
                </div>
                <div style={{ marginBottom: '1vh' }}>
                  Gross weight <br />{' '}
                  <input
                    type='text'
                    style={{ width: '15vw' }}
                    defaultValue={localdata.Gross_Weight}
                  />
                </div>
                <div style={{ marginBottom: '1vh' }}>
                  Gross Weight Code <br />{' '}
                  <input
                    type='text'
                    style={{ width: '15vw' }}
                    defaultValue={localdata.Gross_Weight_Code}
                  />
                </div>
              </div>
              <div style={{ marginLeft: '3vw' }}>
                <div style={{ marginBottom: '1vh' }}>
                  Rate Class Code <br />{' '}
                  <input
                    type='text'
                    style={{ width: '15vw' }}
                    defaultValue={localdata.Rate_Class_Code}
                  />
                </div>
                <div style={{ marginBottom: '1vh' }}>
                  Commodity Item Number <br />{' '}
                  <input
                    type='text'
                    defaultValue={localdata.Commodity_Item_Number}
                  />
                </div>
                <div style={{ marginBottom: '1vh' }}>
                  Chargeable Weight <br />{' '}
                  <input
                    type='text'
                    style={{ width: '15vw' }}
                    defaultValue={localdata.Chargeable_Weight}
                  />
                </div>
              </div>
              <div style={{ marginLeft: '3vw' }}>
                <div style={{ marginBottom: '1vh' }}>
                  Rate Charge
                  <br />{' '}
                  <input
                    type='text'
                    style={{ width: '15vw' }}
                    defaultValue={localdata.Rate_Charge}
                  />
                </div>
                <div style={{ marginBottom: '1vh' }}>
                  Total Amount <br />{' '}
                  <input type='text' defaultValue={localdata.Total_Amount} />
                </div>
                <div style={{ marginBottom: '1vh' }}>
                  Nature and Quantity of Goods <br />{' '}
                  <input
                    type='text'
                    style={{ width: '15vw' }}
                    defaultValue={localdata.Nature_and_Quantity_of_Goods}
                  />
                </div>
              </div>{' '}
            </div>
          </AccordionDetails>
        </Accordion>
        {/* <Accordion square expanded={expanded === "panel4"} onChange={handleChange("panel4")}> */}
        <Accordion
          square
          expanded={expanded4 === 'panel4'}
          onChange={handleChange('panel4')}
        >
          {/* <Accordion square expanded={true}> */}
          <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
            <div style={{ fontSize: '1.2vw' }}>
              Section 4
              <span style={{ marginLeft: '47vw' }}>
                {expanded4 === 'panel4' ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandMoreIcon />
                )}
              </span>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ display: 'flex', fontSize: '16px' }}>
              <div>
                <div style={{ marginBottom: '1vh' }}>
                  Prepaid Weight Charge <br />{' '}
                  <input
                    type='text'
                    style={{ width: '15vw' }}
                    defaultValue={localdata.Prepaid_Weight_Charge}
                  />
                </div>
                <div style={{ marginBottom: '1vh' }}>
                  Prepaid Valuation Charge <br />{' '}
                  <input
                    type='text'
                    defaultValue={localdata.Prepaid_Valuation_Charge}
                  />
                </div>
                <div style={{ marginBottom: '1vh' }}>
                  Collect Weight Charge <br />{' '}
                  <input
                    type='text'
                    style={{ width: '15vw' }}
                    defaultValue={localdata.Collect_Weight_Charge}
                  />
                </div>
                <div style={{ marginBottom: '1vh' }}>
                  Collect Valuation Charge <br />{' '}
                  <input
                    type='text'
                    style={{ width: '15vw' }}
                    defaultValue={localdata.Collect_Valuation_Charge}
                  />
                </div>
              </div>
              <div style={{ marginLeft: '3vw' }}>
                <div style={{ marginBottom: '1vh' }}>
                  Prepaid Total Other Due Agent <br />{' '}
                  <input
                    type='text'
                    defaultValue={localdata.Prepaid_Total_Other_Due_Agent}
                  />
                </div>
                <div style={{ marginBottom: '1vh' }}>
                  Prepaid Total Other Due Carrier <br />{' '}
                  <input
                    type='text'
                    style={{ width: '15vw' }}
                    defaultValue={localdata.Prepaid_Total_Other_Due_Carrier}
                  />
                </div>

                <div style={{ marginBottom: '1vh' }}>
                  Collect Total Other Due Agent <br />{' '}
                  <input
                    type='text'
                    defaultValue={localdata.Collect_Total_Other_Due_Agent}
                  />
                </div>
                <div style={{ marginBottom: '1vh' }}>
                  Collect Total Other Due Carrier <br />{' '}
                  <input
                    type='text'
                    style={{ width: '15vw' }}
                    defaultValue={localdata.Collect_Total_Other_Due_Carrier}
                  />
                </div>
              </div>
              <div style={{ marginLeft: '3vw' }}>
                <div style={{ marginBottom: '1vh' }}>
                  Prepaid Tax <br />{' '}
                  <input
                    type='text'
                    style={{ width: '15vw' }}
                    defaultValue={localdata.Prepaid_Tax}
                  />
                </div>
                <div style={{ marginBottom: '1vh' }}>
                  Total Prepaid <br />{' '}
                  <input
                    type='text'
                    style={{ width: '15vw' }}
                    defaultValue={localdata.Total_Prepaid}
                  />
                </div>
                <div style={{ marginBottom: '1vh' }}>
                  Collect Tax <br />{' '}
                  <input
                    type='text'
                    style={{ width: '15vw' }}
                    defaultValue={localdata.Collect_Tax}
                  />
                </div>
                <div style={{ marginBottom: '1vh' }}>
                  Total Collect
                  <br />{' '}
                  <input
                    type='text'
                    style={{ width: '15vw' }}
                    defaultValue={localdata.Total_Collect}
                  />
                  {/* <CheckCircleIcon className={classes.checkCircle} /> */}
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded5 === 'panel5'}
          onChange={handleChange('panel5')}
        >
          {/* <Accordion square expanded={true}> */}
          <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
            <div style={{ fontSize: '1.2vw' }}>
              Section 5
              <span style={{ marginLeft: '47vw' }}>
                {expanded5 === 'panel5' ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandMoreIcon />
                )}
              </span>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ marginBottom: '1vh' }}>
              AWB Issue Date <br />{' '}
              <input
                type='text'
                style={{ width: '15vw' }}
                defaultValue={localdata.AWB_Issue_Date}
              />
            </div>
            <div style={{ marginLeft: '3vw' }}>
              <div style={{ marginBottom: '1vh' }}>
                AWB Issue Place <br />{' '}
                <input
                  type='text'
                  style={{ width: '15vw' }}
                  defaultValue={localdata.AWB_Issue_Place}
                />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </form>
    </div>
  )
}
