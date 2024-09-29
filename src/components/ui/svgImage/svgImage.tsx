import pako from 'pako';

type SvgImageProps = {
    compressedImage: string;
    className?: string;
}

const SvgImage = ({ compressedImage, className }: SvgImageProps) => {
    
    function decompressSvg(encodedImage: string) {
        const compressedData = atob(encodedImage);
        const charData = compressedData.split('').map( function (char) {
            return char.charCodeAt(0);
        })

        const compressedBuffer = new Uint8Array(charData);
        const decompressedData = pako.inflate(compressedBuffer, { to: 'string' });
        return decompressedData;
    }

    const svg = decompressSvg(compressedImage);
    let resizableSvg = svg;
    if (!svg.includes('viewBox')) {
        const widthMatch = svg.match(/width="(\d+)"/);
        const heightMatch = svg.match(/height="(\d+)"/);
        const width = widthMatch ? widthMatch[1] : '100';
        const height = heightMatch ? heightMatch[1] : '100';
        resizableSvg = svg.replace('<svg', `<svg viewBox="0 0 ${width} ${height}"`);
    }

    return (
        <div 
            dangerouslySetInnerHTML={{ __html: resizableSvg }}
            className={`svg-container ${className}`}
        />
    )
};

export { SvgImage };