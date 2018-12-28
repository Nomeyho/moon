
const PERIOD = 29.53
const MS_DAY = 24 * 60 * 60 * 1000
const NEW_MOON_DATE = new Date('2000-6-1T12:24:01')

const diffDays = (date1, date2) => {
  const t1 = date1.getTime()
  const t2 = date2.getTime()
  return (t2 - t1) / MS_DAY
}

const getIllumination = (date) => {
  const days = diffDays(NEW_MOON_DATE, date)
  return (days / PERIOD) % 1
}

export {
  getIllumination
}
