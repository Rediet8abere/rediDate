
const D = require('./index')
const date = new D()



test('Testing rediDate', () => {
  expect(date.year()).toBe(2021)
  expect(date.yr()).toBe('21')
  expect(date.month()).toBe(date.monthName[date.date.getMonth()])
  expect(date.day()).toBe(date.dayName[date.date.getDay()])
  expect(date.hours()).toBe(date.date.getHours())
  expect(date.format()).toBe(`${date.year()} ${date.month()} ${date.day()} `)
  expect(date.format('y/m/d')).toBe(`${date.yr()}/${date.month()}/${date.day().toString().slice(0, 3)}`)
  expect(date.format('h:i:s')).toBe(`${date.date.getHours()}:${date.mins()}:${date.secs()}`)
  expect(date.format('Y-M-D h:I:S')).toBe(`${date.year()}-${date.month()}-${date.day()}  ${date.date.getHours()}:${date.mins()}:${date.secs()}`)
})
