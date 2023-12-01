const TimeAgo = require('./TimeAgo')

const validDatestring = '2023-11-01T18:00:02.000Z'
const invalidDatestring = 'lorem-ipsum'
const validDate = new Date(validDatestring)

test('returns a string', () => {
    expect(typeof TimeAgo(validDatestring)).toBe('string')
})

test('returns an empty string if the input is NaN', () => {
    expect(TimeAgo(invalidDatestring)).toBe('')
})

test('returns "1 day ago"', () => {
    const oneDayAgo = new Date()
    oneDayAgo.setDate(oneDayAgo.getDate() - 1)
    expect(TimeAgo(oneDayAgo.toISOString())).toBe('1 day ago')
})

test('returns "5 days ago"', () => {
    const fiveDaysAgo = new Date()
    fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5)
    expect(TimeAgo(fiveDaysAgo.toISOString())).toBe('5 days ago')
})

test('returns "1 month ago"', () => {
    const oneMonthAgo = new Date()
    oneMonthAgo.setDate(oneMonthAgo.getDate() - 30)
    expect(TimeAgo(oneMonthAgo.toISOString())).toBe('1 month ago')
})

test('returns "2 months ago"', () => {
    const twoMonthsAgo = new Date()
    twoMonthsAgo.setDate(twoMonthsAgo.getDate() - 60)
    expect(TimeAgo(twoMonthsAgo.toISOString())).toBe('2 months ago')
})