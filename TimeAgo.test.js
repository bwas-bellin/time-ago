const TimeAgo = require('./TimeAgo')

test('returns a string', () => {
    expect(typeof TimeAgo(new Date().toISOString())).toBe('string')
})

test('returns an empty string if the input is NaN', () => {
    expect(TimeAgo('lorem-ipsum')).toBe('')
})

test('returns "1 day ago"', () => {
    const oneDayAgo = new Date(Date.now() - (1 * 24 * 60 * 60 * 1000))
    expect(TimeAgo(oneDayAgo.toISOString())).toBe('1 day ago')
})

test('returns "5 days ago"', () => {
    const fiveDaysAgo = new Date(Date.now() - (5 * 24 * 60 * 60 * 1000))
    expect(TimeAgo(fiveDaysAgo.toISOString())).toBe('5 days ago')
})

test('returns "1 month ago"', () => {
    const oneMonthAgo = new Date(Date.now() - (30 * 24 * 60 * 60 * 1000))
    expect(TimeAgo(oneMonthAgo.toISOString())).toBe('1 month ago')
})

test('returns "2 months ago"', () => {
    const twoMonthsAgo = new Date(Date.now() - (60 * 24 * 60 * 60 * 1000))
    expect(TimeAgo(twoMonthsAgo.toISOString())).toBe('2 months ago')
})

