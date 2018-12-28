import React, { PureComponent } from 'react'
import { getIllumination } from './illumination'

class Moon extends PureComponent {

  render() {
    const { day, x, y, size } = this.props
    const cx = x + (size / 2)
    const cy = y + (size / 2)
    const r = size / 3
    const illumination = getIllumination(day)

    return (
      <g className="moon">
        <circle
          className="back"
          cx={cx}
          cy={cy}
          r={r}
        />
        <circle
          className="front"
          cx={cx + 2 * r * illumination}
          cy={cy}
          r={r}
        />
        <text
          x={cx}
          y={cy}
          fontSize={r / 1.5}
        >
          { (illumination * 100).toFixed(0) }%
        </text>
      </g>
    )
  }
}

export default Moon;
