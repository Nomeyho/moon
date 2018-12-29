// http://bl.ocks.org/bdon/e6405ebabd4f3013c342

const phases = [
  {
    name: 'New Moon',
    arcStart: 0,
    arcEnd: 2 * Math.PI,
    scaleX: 0,
    invert: false
  },
  {
    name: 'Waxing Crescent',
    arcStart: Math.PI,
    arcEnd: 2 * Math.PI,
    scaleX: 0.7,
    invert: false
  },
  {
    name: 'First Quarter',
    arcStart: Math.PI,
    arcEnd: 2 * Math.PI,
    scaleX: 0,
    invert: false
  },
  {
    name: 'Waxing Gibbous',
    arcStart: 0,
    arcEnd: Math.PI,
    scaleX: 0.7,
    invert: true
  },
  {
    name: 'Full Moon',
    arcStart: 0,
    arcEnd: 0,
    scaleX: 0,
    invert: false
  },
  {
    name: 'Waning Gibbous',
    arcStart: Math.PI,
    arcEnd: 2 * Math.PI,
    scaleX: 0.7,
    invert: true
  },
  {
    name: 'Third Quarter',
    arcStart: 0,
    arcEnd: Math.PI,
    scaleX: 0,
    invert: false
  },
  {
    name: 'Waning Crescent',
    arcStart: 0,
    arcEnd: Math.PI,
    scaleX: 0.7,
    invert: false
  }
]

const getMoonPhase = (y, m, d) => {
  if (m < 3) {
    y--
    m += 12
  }
  m = m + 1

  let c = 365.25 * y
  let e = 30.6 * m
  let jd = c + e + d - 694039.09
  jd = jd / 29.53

  let b = Math.floor(jd)
  jd -= b
  b = jd * 8 + 0.5
  b = b & 7

  return b
}

export {
  phases,
  getMoonPhase,
}
