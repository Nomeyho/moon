import React, { Component } from 'react'
import { getData } from './data'
import { range, months } from './utils'
import Moon from './Moon'

const MARGIN = { left: 50, top: 50, right: 0, bottom: 0 }
const YEAR = new Date().getFullYear()

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      size: 0,
      width: 0,
      height: 0,
      year: YEAR,
      data: getData(YEAR)
    }
    this.container = React.createRef()
    this.onResize = this.onResize.bind(this)
    this.renderMoon = this.renderMoon.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }

  onResize() {
    const container = this.container.current

    if(container) {
      const { clientWidth } = container
      console.debug(`Resize ${clientWidth} px`)

      const width = Math.min(clientWidth * 0.7 || 0, 1000)
      const size = (width - MARGIN.left - MARGIN.right) / 12
      const height = size * 31 + MARGIN.top + MARGIN.bottom

      this.setState({ size, width, height })
    }
  }

  renderMoon(datum) {
    const { size } = this.state
    const { month, day, phase } = datum

    return (
      <Moon
        key={`${month}-${day}`}
        size={size}
        x={MARGIN.left + (month - 1) * size}
        y={MARGIN.top + (day - 1) * size}
        phase={phase}
      />
    )
  }

  renderMonths() {
    const { size } = this.state
    
    return range(12).map(m => 
      <text
        className="legend"
        key={m}
        x={MARGIN.left + (m + 0.5) * size}
        y={MARGIN.top / 2}
        fontSize={size / 3}
      >
        { months[m] }
      </text>
    )
  }

  renderDays() {
    const { size } = this.state

    return range(31).map(d => 
      <text
        className="legend"
        key={d}
        x={MARGIN.left / 2}
        y={MARGIN.top + (d + 0.5) * size}
        fontSize={size / 3}
      >
        {d + 1}
      </text>
    )
  }

  render() {
    const { width, height, year, data } = this.state

    return (
      <div ref={this.container}>
        <h1 className="title">
          Moon
        </h1>
        <h2 className="subtitle">
          {year}
        </h2>
        <svg width={width} height={height}>
          { this.renderMonths() }
          { this.renderDays() }
          { data.map(this.renderMoon) }
        </svg>
      </div>
    );
  }
}

export default App;
