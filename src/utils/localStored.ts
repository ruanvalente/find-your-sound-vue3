export function writeItem (key: string, data: any) {
  const stored = JSON.stringify(data)
  window.localStorage.setItem(key, stored)
}

export function readItem (key: string): any {
  const stored: any = window.localStorage.getItem(key)

  return JSON.parse(stored)
}
