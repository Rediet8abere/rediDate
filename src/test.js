
const D = require('./index')
const date = new D()

test('Testing rediDate', () => {
  expect(date.year()).toBe(2021)
  expect(date.yr()).toBe('21')
  expect(date.month()).toBe(date.monthName[date.date.getMonth()])
  expect(date.day()).toBe(date.dayName[date.date.getDay()])
  expect(date.hours()).toBe(date.date.getHours() )

})
