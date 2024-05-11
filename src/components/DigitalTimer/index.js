// Write your code here
import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {startBtn: true, minutes: 25, seconds: 0, fixedTime: 25}

  startBtnToggle = () => {
    const {startBtn, minutes, seconds} = this.state
    this.setState({startBtn: !startBtn})
    if (startBtn) {
      let totalSeconds = minutes * 60 + seconds
      if (totalSeconds > 0) {
        this.intervalId = setInterval(() => {
          if (totalSeconds > 0) {
            totalSeconds -= 1
            this.setState({
              minutes: Math.floor(totalSeconds / 60),
              seconds: totalSeconds % 60,
            })
          } else {
            this.setState({startBtn: true})
            clearInterval(this.intervalId)
          }
        }, 1000)
      } else {
        this.setState({startBtn: true})
        clearInterval(this.intervalId)
      }
    } else {
      clearInterval(this.intervalId)
    }
  }

  minusTimer = () => {
    const {startBtn, minutes} = this.state
    if (startBtn) {
      this.setState({
        minutes: minutes - 1,
      })
    }
  }

  addTimer = () => {
    const {startBtn, minutes} = this.state
    if (startBtn) {
      this.setState({
        minutes: minutes + 1,
      })
    }
  }

  onReset = () => {
    this.setState({minutes: 25, seconds: 0, startBtn: true})
    clearInterval(this.intervalId)
  }

  render() {
    const {startBtn, minutes, seconds, fixedTime} = this.state
    const minutesEle = minutes < 10 ? `0${minutes}` : minutes
    const secondsEle = seconds < 10 ? `0${seconds}` : seconds

    return (
      <div className="bgContainer">
        <div className="cardContainer">
          <h1 className="title">Digital Timer</h1>
          <div className="cardContainer1">
            <div className="timerMainContainer">
              <div className="timerContainer">
                <h1 className="timerClock">
                  {minutesEle}:{secondsEle}
                </h1>
                <p>{startBtn ? 'Paused' : 'Running'}</p>
              </div>
            </div>
            <div className="timerSetContainer">
              <div className="btnContainer">
                {startBtn ? (
                  <button type="button" onClick={this.startBtnToggle}>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                      alt="play icon"
                    />
                    <p>Start</p>
                  </button>
                ) : (
                  <button type="button" onClick={this.startBtnToggle}>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                      alt="pause icon"
                    />
                    <p>Pause</p>
                  </button>
                )}
                <button type="button" onClick={this.onReset}>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                  />
                  <p>reset</p>
                </button>
              </div>
              <p>Set Timer Limit</p>
              <div className="setTimerLimitContainer">
                <button
                  type="button"
                  className="minusBtn"
                  onClick={this.minusTimer}
                >
                  <p className="minus">-</p>
                </button>
                <p className="timerIncrement">{fixedTime}</p>
                <button
                  type="button"
                  className="plusBtn"
                  onClick={this.addTimer}
                >
                  <p className="plus">+</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
