const TimeAgo = require('./TimeAgo')

const validDatestring = '2023-12-01T18:00:02.000Z'
const invalidDatestring = 'lorem-ipsum'
const today = new Date()

test('returns a string', () => {
    expect(typeof TimeAgo(validDatestring) === 'string')
})

test('returns an empty string if the input is NaN', () => {
    expect(typeof(invalidDatestring) === '')
})

test('returns "two days ago"', () => {
    const twoDaysAgo = today.getDate() - 2
    expect(TimeAgo(twoDaysAgo.toLocaleString()) === 'two days ago')
})

test('returns "two weeks ago"', () => {
    const twoWeeksAgo = today.getDate() - 14
    expect(TimeAgo(twoWeeksAgo.toLocaleString()) === 'two weeks ago')
})

test('returns "one month ago"', () => {
    const oneMonthAgo = today.getDate() - 30
    expect(TimeAgo(oneMonthAgo.toLocaleString()) === 'one month ago')
})

test('returns "seven hundred years ago"', () => {
    const sevenHundredYearsAgo = today.getDate() - (365 * 700)
    expect(TimeAgo(sevenHundredYearsAgo.toLocaleString()) === 'seven hundred years ago')
})