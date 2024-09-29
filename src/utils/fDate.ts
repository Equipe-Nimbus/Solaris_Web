export function fDate(date: string): string {
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