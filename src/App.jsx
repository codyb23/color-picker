import React, { Component } from 'react'

class App extends Component {
  state = {
    hue: Math.floor(Math.random() * 360),
    saturation: Math.floor(Math.random() * 100),
    lightness: Math.floor(Math.random() * 100),
  }

  handleChangingSlider = event => {
    const value = event.target.value
    const name = event.target.name

    this.setState({ [name]: value })
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
            <h2>Color Picker</h2>
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
                name="hue"
                type="range"
                min="0"
                max="360"
                value={this.state.hue}
                onChange={this.handleChangingSlider}
              ></input>
            </article>
            <article>
              <h2>S</h2>
              <input
                name="saturation"
                type="range"
                min="0"
                max="100"
                value={this.state.saturation}
                onChange={this.handleChangingSlider}
              ></input>
            </article>
            <article>
              <h2>L</h2>
              <input
                name="lightness"
                type="range"
                min="0"
                max="100"
                value={this.state.lightness}
                onChange={this.handleChangingSlider}
              ></input>
            </article>
          </section>
        </main>
      </body>
    )
  }
}

export default App
