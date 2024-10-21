export function fDate(date: string): string {
    const parsedDate = new Date(date);
    const day = String(parsedDate.getUTCDate()).padStart(2, '0');
    const month = String(parsedDate.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = parsedDate.getUTCFullYear();
    const hours = String(parsedDate.getUTCHours()).padStart(2, '0');
    const minutes = String(parsedDate.getUTCMinutes()).padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}`;
}

export function fDateToServer(date: string): string {
    const dateParts = date.split('-');
    if (dateParts.length === 3) {
        // Verifica se o formato está correto (aaaa-mm-dd)
        if (dateParts[0].length === 4) {
            return date;
        } else {
            // Reorganiza para o formato aaaa-mm-dd
            return [dateParts[2], dateParts[1], dateParts[0]].join('-');
        }
    }
    return date;
}

