import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

class App extends Component {
  state = {
    hue: 0,
    saturation: 0,
    lightness: 0,
  }

  handleChangingHue = event => {
    const sliderThatChanged = event.target
    const valueOfSlider = parseInt(sliderThatChanged.value)
    this.setState({ hue: event.target.value })
  }

  handleChangingSaturation = event => {
    const sliderThatChanged = event.target
    const valueOfSlider = parseInt(sliderThatChanged.value)
    this.setState({ saturation: event.target.value })
  }

  handleChangingLightness = event => {
    const sliderThatChanged = event.target
    const valueOfSlider = parseInt(sliderThatChanged.value)
    this.setState({ lightness: event.target.value })
  }

  render() {
    return (
      <body>
        <main>
          <section>
            <h2>Color</h2>
          </section>
          <div style={{ backgroundColor: currentColor }} value={{}}></div>
          <section>
            <article>
              <h2>H</h2>
              <input
                type="range"
                min="0"
                max="255"
                value={this.state.hue}
                onChange={this.handleChangingHue}
              ></input>
            </article>
            <article>
              <h2>S</h2>
              <input
                type="range"
                min="0"
                max="100"
                value={this.state.saturation}
                onChange={this.handleChangingSaturation}
              ></input>
            </article>
            <article>
              <h2>L</h2>
              <input
                type="range"
                min="0"
                max="100"
                value={this.state.lightness}
                onChange={this.handleChangingLightness}
              ></input>
            </article>
          </section>
        </main>
      </body>
    )
  }
}

export default App
