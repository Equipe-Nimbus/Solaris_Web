import pako from "pako";

export function decompressSvg(encodedImage: string): string {
    const compressedData = atob(encodedImage);
    const charData = compressedData.split('').map(function (char) {
        return char.charCodeAt(0);
    })

    const compressedBuffer = new Uint8Array(charData);
    const svg = pako.inflate(compressedBuffer, { to: 'string' });
    
    let resizableSvg = svg;
    if (!svg.includes('viewBox')) {
        const widthMatch = svg.match(/width="(\d+)"/);
        const heightMatch = svg.match(/height="(\d+)"/);
        const width = widthMatch ? widthMatch[1] : '100';
        const height = heightMatch ? heightMatch[1] : '100';
        resizableSvg = svg.replace('<svg', `<svg viewBox="0 0 ${width} ${height}"`);
    }

    return resizableSvg;
}