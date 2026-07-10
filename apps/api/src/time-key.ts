function formatUtcDayKey(d: Date): string {
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, `0`)}-${String(d.getUTCDate()).padStart(2, `0`)}`
}

export function utcDayKey(): string {
  return formatUtcDayKey(new Date())
}

export function utcHourKey(): string {
  const d = new Date()
  return `${formatUtcDayKey(d)}T${String(d.getUTCHours()).padStart(2, `0`)}`
}
