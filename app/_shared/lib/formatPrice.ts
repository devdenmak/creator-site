export const formatPrice = (price: number, currency = 'USD', locale = 'en-US') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 0,
  }).format(price)
}

export const formatPercentage = (value: number | null, locale = 'en-US') => {
  if (!value) return ''

  return new Intl.NumberFormat(locale, {
    style: 'percent',
    maximumFractionDigits: 2,
  }).format(value)
}
