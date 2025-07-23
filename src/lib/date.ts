import dayjs from 'dayjs'


export function formatDate(d: string | Date, onlyDate = true, format = 'YYYY MMM D') {
  const date = dayjs(d)
  if (onlyDate || date.year() === dayjs().year())
    return date.format(format)
  return date.format(format)
}

export function formatDuration(d: number) {
  const hours = Math.floor(d / 60)
  const minutes = d % 60

  if (hours > 0) {
    return `${hours} hours ${minutes} minutes`
  }

  return `${minutes} minutes`
}