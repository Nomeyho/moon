import { getMoonPhase } from './phases'

const addDay = date => date.setDate(date.getDate() + 1)

const getData = (year) => {
  const data = []
  const startDate = new Date(Date.UTC(year, 0, 1))
  const endDate = new Date(Date.UTC(year + 1, 0, 1))

  for (let date = startDate; date < endDate; addDay(date)) {
    const month = date.getMonth() + 1
    const day = date.getDate()
    data.push({
      month,
      day,
      year,
      phase: getMoonPhase(year, month, day)
    });
  }

  return data
}

export {
  getData,
}
