function TimeAgo(isoDateTime: string): string {
  const currentDate: Date = new Date()
  const inputDate: Date = new Date(isoDateTime)

  if ( isNaN(inputDate.getTime()) ) {
    return '';
  }

  const timeDifference: number = currentDate.getTime() - inputDate.getTime()
  const seconds: number = Math.floor(timeDifference / 1000)
  const minutes: number = Math.floor(seconds / 60)
  const hours: number = Math.floor(minutes / 60)
  const days: number = Math.floor(hours / 24)
  const weeks: number = Math.floor(days / 7)
  const months: number = Math.floor(days / 30)
  const years: number = Math.floor(days / 365)

  if ( years > 0 ) {
    return `${years} year${years > 1 ? 's' : ''} ago`
  } else if ( months > 0 ) {
    return `${months} month${months > 1 ? 's' : ''} ago`
  } else if ( weeks > 0 ) {
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`
  } else if ( days > 0 ) {
    return `${days} day${days > 1 ? 's' : ''} ago`
  } else if ( hours > 0 ) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`
  } else if ( minutes > 0 ) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
  } else {
    return `${seconds} second${seconds > 1 ? 's' : ''} ago`
  }
}

module.exports = TimeAgo