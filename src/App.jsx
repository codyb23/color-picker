import React, { Component } from 'react'

class App extends Component {
  state = {
    hue: Math.floor(Math.random() * 360),
    saturation: Math.floor(Math.random() * 100),
    lightness: Math.floor(Math.random() * 100),
  }

  handleChangingHue = event => {
    this.setState({ hue: event.target.value })
  }

  handleChangingSaturation = event => {
    this.setState({ saturation: event.target.value })
  }

  handleChangingLightness = event => {
    this.setState({ lightness: event.target.value })
  }

  randomColor = () => {
    const newHue = Math.floor(Math.random() * 360)
    const newSaturation = Math.floor(Math.random() * 100)
    const newLightness = Math.floor(Math.random() * 100)

    this.setState({
      hue: newHue,
      saturation: newSaturation,
      lightness: newLightness,
    })
  }

  render() {
    return (
      <body>
        <main>
          <section>
            <h2>Color</h2>
            <article
              className="colorResult"
              style={{
                backgroundColor: `HSL(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`,
              }}
            ></article>
            <p>{`HSL(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`}</p>
            <button className="randomColor" onClick={this.randomColor}>
              Random Color
            </button>
          </section>
          <section>
            <article>
              <h2>H</h2>
              <input
                type="range"
                min="0"
                max="360"
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
