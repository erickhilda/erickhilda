import dayjs from 'dayjs'


export function formatDate(d: string | Date, onlyDate = true, format = 'YYYY MMM D') {
  const date = dayjs(d)
  if (onlyDate || date.year() === dayjs().year())
    return date.format(format)
  return date.format(format)
}
