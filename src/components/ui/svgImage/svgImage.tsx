import { decompressSvg } from '@/utils/decompressSvg';
import { useMemo } from 'react';

type SvgImageProps = {
    compressedImage: string;
    className?: string;
}

const SvgImage = ({ compressedImage, className }: SvgImageProps) => {
    
    const resizableSvg = useMemo(() => {
        return decompressSvg(compressedImage);
    }, [compressedImage]) 
        

    return (
        <div 
            dangerouslySetInnerHTML={{ __html: resizableSvg }}
            className={`svg-container ${className}`}
        />
    )
};

export { SvgImage };