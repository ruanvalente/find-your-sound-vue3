export function save (key: string, data: any): any {
  const item = window.localStorage.getItem(key)
  const stored = JSON.stringify(data)
  // eslint-disable-next-line no-unused-expressions
  if (!item) {
    window.localStorage.setItem(key, stored)
  }
}

export function get (key: string): any {
  const value = window.localStorage.getItem(key)

  return value
}
