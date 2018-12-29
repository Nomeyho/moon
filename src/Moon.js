import React, { PureComponent } from 'react'
import { arc } from 'd3'
import { phases } from './phases'

const WHITE = '#FFFFFF'
const BLACK = '#010141'

class Moon extends PureComponent {

  getArc(r, start, end) {
    return arc()
      .outerRadius(r)
      .innerRadius(0)
      .startAngle(start)
      .endAngle(end)()
  }

  render() {
    const { x, y, size, phase } = this.props
    const cx = size / 2
    const cy = size / 2
    const r = size / 3
    const { name, invert, scaleX, arcStart, arcEnd } = phases[phase]

    if(name === 'New Moon') {
      return (
        <g className="moon" transform={`translate(${x},${y})`}>
          <circle
            className="background"
            cx={cx}
            cy={cy}
            r={r}
            stroke={WHITE}
            fill="none"
          />
        </g>
      )
    }

    return (
      <g className="moon" transform={`translate(${x},${y})`}>
        <circle
          className="background"
          cx={cx}
          cy={cy}
          r={r}
          stroke={BLACK}
          fill={invert ? BLACK : WHITE}
        />
        <circle
          className="foreground"
          cx={cx * 1.4}
          cy={cy}
          r={r}
          fill={invert ? WHITE : BLACK}
          transform={`scale(${scaleX}, 1)`}
        />
        <path
          d={this.getArc(r, arcStart, arcEnd)}
          fill={invert ? WHITE : BLACK}
          transform={`translate(${cx},${cx})`}
        />
      </g>
    )
  }
}

export default Moon
