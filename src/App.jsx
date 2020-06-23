import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

class App extends Component {
  state = {
    hue: 0,
    saturation: 0,
    lightness: 0,
  }
  render() {
    return (
      <body>
        <main>
          <section>
            <h2>Color</h2>
            <div style={{ backgroundColor: currentColor }}></div>
          </section>
          <section>
            <article>
              <h2>H</h2>
              <input
                type="range"
                min="0"
                max="255"
                value=""
                onChange=""
              ></input>
            </article>
            <article>
              <h2>S</h2>
              <input
                type="range"
                min="0"
                max="100"
                value=""
                onChange=""
              ></input>
            </article>
            <article>
              <h2>L</h2>
              <input
                type="range"
                min="0"
                max="100"
                value=""
                onChange=""
              ></input>
            </article>
          </section>
        </main>
      </body>
    )
  }
}

export default App
