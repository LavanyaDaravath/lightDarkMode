import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  changeStatusDark = () => {
    this.setState({isDarkMode: false})
  }

  changeStatusLight = () => {
    this.setState({isDarkMode: true})
  }

  render() {
    const {isDarkMode} = this.state

    return (
      <div className="bgContainer">
        {isDarkMode && (
          <div className="dark-container inner-container">
            <h1 className="dark-heading heading">Click To Change Mode</h1>
            <button
              type="button"
              className="button"
              onClick={this.changeStatusDark}
            >
              Light Mode
            </button>
          </div>
        )}
        {!isDarkMode && (
          <div className="light-container inner-container">
            <h1 className="light-heading heading">Click To Change Mode</h1>
            <button
              type="button"
              className="button dark-button"
              onClick={this.changeStatusLight}
            >
              Dark Mode
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default LightDarkMode
