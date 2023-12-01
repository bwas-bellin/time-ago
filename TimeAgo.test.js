const TimeAgo = require('./TimeAgo')

const validDatestring = '2023-12-01T18:00:02.000Z'
const invalidDatestring = 'lorem-ipsum'
const validDate = new Date(validDatestring)

test('returns a string', () => {
    expect(typeof TimeAgo(validDatestring)).toBe('string')
})

test('returns an empty string if the input is NaN', () => {
    expect(TimeAgo(invalidDatestring)).toBe('')
})