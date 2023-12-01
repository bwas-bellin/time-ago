const TimeAgo = require('./TimeAgo')

test('returns a string', () => {
    expect(typeof TimeAgo('2023-12-01T18:00:02.000Z') === 'string')
})