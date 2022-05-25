import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

import Chart from './Chart'

const useStyle = makeStyles((theme) => ({
  DateSection: {
    backgroundColor: '#fff',
    width: '35vw',
    height: '15vh',
    padding: '2vw'
  },
  textField: {
    marginLeft: '1vw',
    marginTop: '-0.35vh'
  },
  leftBar: {
    backgroundColor: '#fff',
    width: '20vw',
    height: '52.5vh',
    marginTop: '2vh'
  },
  Button: {
    width: '15vw',
    height: '5vh',
    color: '#707070',
    margin: '2vh 0 2vh 2vw',
    border: '0.1px solid #707070',
    borderRadius: '0.2vw',
    outline: 'none',
    backgroundColor: '#fff',
    fontSize: '20px'
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
    fontSize: '20px'
  },
  content: {
    width: '72vw',
    height: '48vh',
    backgroundColor: '#fff',
    marginLeft: '1vw',
    marginTop: '2vh',
    padding: '1vw',
    display: 'flex'
  },
  cardBlock: {
    padding: '1vh'
  },
  smallCard: {
    width: '8vw',
    height: '16vh',
    borderRadius: '0.25vw',
    textAlign: 'center'
  },
  bigCard: {
    width: '15vw',
    height: '16vh',
    borderRadius: '0.25vw',
    textAlign: 'center'
  },
  blockText: {
    fontSize: '2vw',
    fontWeight: 'bold',
    position: 'relative',
    top: '4vh',
    marginBottom: '1vh'
  }
}))

export default function Dashboard() {
  const [context, setcontext] = useState('summary')

  const changeContext = (e) => {
    // console.log(e.target.id);
    setcontext(e.target.id)
  }
  const classes = useStyle()
  return (
    <div>
      <div style={{ margin: '2vh 0 1vh 2vw' }}>
        <div className={classes.DateSection}>
          <form>
            <div>
              <input
                type='radio'
                id='AsOn'
                name='selection'
                value='AsOn'
                defaultChecked
              />
              <label id='AsOn'>As On</label>
              <TextField
                id='asondate'
                label=''
                type='date'
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </div>
            <div style={{ marginTop: '3vh' }}>
              <input type='radio' id='target' name='selection' value='target' />
              <label id='from'>From </label>
              <TextField
                id='fromdate'
                label=''
                type='date'
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <label id='to' style={{ marginLeft: '2vw' }}>
                To
              </label>
              <TextField
                id='todate'
                label=''
                type='date'
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </div>
          </form>
        </div>
        <div style={{ display: 'flex' }}>
          <div className={classes.leftBar}>
            <div style={{ position: 'relative', top: '2vh' }}>
              <button
                id='summary'
                className={
                  context !== 'details' ? classes.selButton : classes.Button
                }
                onClick={changeContext}
              >
                Summary
              </button>
              <button
                id='details'
                className={
                  context === 'details' ? classes.selButton : classes.Button
                }
                onClick={changeContext}
              >
                Details
              </button>
            </div>
          </div>
          {context === 'summary' ? (
            <div className={classes.content}>
              <div className={classes.cardBlock}>
                <div style={{ display: 'flex' }}>
                  <div
                    className={classes.smallCard}
                    style={{ backgroundColor: '#EFE3FE', color: '#707070' }}
                  >
                    <div className={classes.blockText}>789</div>
                    <div style={{ marginTop: '3.5vh' }}>Total</div>
                  </div>
                  <div
                    className={classes.smallCard}
                    style={{
                      marginLeft: '2vw',
                      backgroundColor: '#FC7F59',
                      color: '#fff'
                    }}
                  >
                    <div className={classes.blockText}>789</div>
                    <div style={{ marginTop: '3.5vh' }}>Total</div>
                  </div>
                  <div
                    className={classes.bigCard}
                    style={{
                      marginLeft: '2vw',
                      backgroundColor: '#9DFF80',
                      color: '#707070'
                    }}
                  >
                    <div className={classes.blockText}>600</div>
                    <div style={{ marginTop: '3.5vh' }}>Processed 100%</div>
                  </div>
                </div>
                <div style={{ display: 'flex' }}>
                  <div
                    className={classes.bigCard}
                    style={{
                      backgroundColor: '#FFE67C',
                      color: '#707070',
                      marginTop: '3vh'
                    }}
                  >
                    <div className={classes.blockText}>60</div>
                    <div style={{ marginTop: '3.5vh' }}>Processed 80-90%</div>
                  </div>
                  <div
                    className={classes.smallCard}
                    style={{
                      marginLeft: '2vw',
                      backgroundColor: '#E59F00',
                      color: '#fff',
                      marginTop: '3vh'
                    }}
                  >
                    <div className={classes.blockText}>04</div>
                    <div style={{ marginTop: '3.5vh' }}>
                      Processed <br /> 80-90%
                    </div>
                  </div>
                  <div
                    className={classes.smallCard}
                    style={{
                      marginLeft: '2vw',
                      backgroundColor: '#B2A040',
                      color: '#fff',
                      marginTop: '3vh'
                    }}
                  >
                    <div className={classes.blockText}>789</div>
                    <div style={{ marginTop: '3.5vh' }}>
                      Processed <br /> &#60; 80%
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ width: '50vw', height: '50vh', marginTop: '-4vh' }}>
                <Chart />
              </div>
            </div>
          ) : (
            <div className={classes.content}>{/* <Table /> */}</div>
          )}
        </div>
      </div>
    </div>
  )
}
