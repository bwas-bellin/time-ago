const TimeAgo = require('./TimeAgo')

test('returns a string', () => {
    expect(typeof TimeAgo(new Date().toISOString())).toBe('string')
})

test('returns an empty string if the input is NaN', () => {
    expect(TimeAgo('lorem-ipsum')).toBe('')
})

test('returns "1 second ago"', () => {
    const oneSecondAgo = new Date(Date.now() - (1 * 1000))
    expect(TimeAgo(oneSecondAgo.toISOString())).toBe('1 second ago')
})

test('returns "10 seconds ago"', () => {
    const tenSecondsAgo = new Date(Date.now() - (10 * 1000))
    expect(TimeAgo(tenSecondsAgo.toISOString())).toBe('10 seconds ago')
})

test('returns "1 minute ago"', () => {
    const oneMinuteAgo = new Date(Date.now() - (1 * 60 * 1000))
    expect(TimeAgo(oneMinuteAgo.toISOString())).toBe('1 minute ago')
})

test('returns "3 minutes ago"', () => {
    const threeMinutesAgo = new Date(Date.now() - (3 * 60 * 1000))
    expect(TimeAgo(threeMinutesAgo.toISOString())).toBe('3 minutes ago')
})

test('returns "1 hour ago"', () => {
    const oneHourAgo = new Date(Date.now() - (1 * 60 * 60 * 1000))
    expect(TimeAgo(oneHourAgo.toISOString())).toBe('1 hour ago')
})

test('returns "3 hours ago"', () => {
    const threeHoursAgo = new Date(Date.now() - (3 * 60 * 60 * 1000))
    expect(TimeAgo(threeHoursAgo.toISOString())).toBe('3 hours ago')
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

