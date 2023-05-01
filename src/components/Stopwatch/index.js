// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    timeElapsedInSeconds: 0,
    isTimerRunning: false,
  }

  componentWillUnmount() {
    clearInterval(this.IntervalId)
  }

  tick = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onClickStart = () => {
    const {isTimerRunning} = this.state
    if (!isTimerRunning) {
      this.setState({
        isTimerRunning: true,
      })
      this.IntervalId = setInterval(this.tick, 1000)
    }
  }

  onClickStop = () => {
    const {isTimerRunning} = this.state
    if (isTimerRunning) {
      clearInterval(this.IntervalId)
      this.setState({
        isTimerRunning: false,
      })
    }
  }

  onClickReset = () => {
    const {isTimerRunning} = this.state
    if (isTimerRunning) {
      clearInterval(this.IntervalId)
    }
    this.setState({
      timeElapsedInSeconds: 0,
      isTimerRunning: false,
    })
  }

  renderTimerString() {
    const {timeElapsedInSeconds} = this.state
    const timeInMinutes = Math.floor(timeElapsedInSeconds / 60)
    const timeInSeconds = Math.floor(timeElapsedInSeconds % 60)
    const minutesString =
      timeInMinutes > 9 ? timeInMinutes : `0${timeInMinutes}`
    const secondsString =
      timeInSeconds > 9 ? timeInSeconds : `0${timeInSeconds}`

    return (
      <h1 className="time-string">
        {minutesString}:{secondsString}
      </h1>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <div className="responsive-container">
          <h1 className="title">Stopwatch</h1>
          <div className="stopwatch-container">
            <div className="card-title-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                className="icon"
                alt="stopwatch"
              />
              <p className="timer-title">Timer</p>
            </div>
            {this.renderTimerString()}
            <div className="buttons-container">
              <button
                type="button"
                className="button button-start"
                onClick={this.onClickStart}
              >
                Start
              </button>
              <button
                type="button"
                className="button button-stop"
                onClick={this.onClickStop}
              >
                Stop
              </button>
              <button
                type="button"
                className="button button-reset"
                onClick={this.onClickReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
