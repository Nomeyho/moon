
const getData = (year) => {
  const data = []

  for(let m = 0; m < 12; ++m) {
    data[m] = []
    for(let d = 1; d <= 31; ++d) {
      data[m][d] = new Date(Date.UTC(year, m, d))
    }
  }

  return data
}

export {
  getData,
}
