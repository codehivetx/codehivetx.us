
const fmt = new Intl.DateTimeFormat(['en-US'], {day: 'numeric', month: 'short', year: 'numeric'});

/** iso, fmt */
export default function formatDate(raw: string): string[] {
    const d = new Date(raw);
    d.setUTCHours(12); // keep away from boundaries
    return [d.toISOString(), fmt.format(d)];
}
