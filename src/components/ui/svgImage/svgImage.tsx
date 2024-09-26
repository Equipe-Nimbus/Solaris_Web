import base64 from 'base-64';

type SvgImageProps = {
    encodedImage: string;
    className?: string;
}

const SvgImage = ({ encodedImage, className }: SvgImageProps) => {
    const svg = base64.decode(encodedImage);

    return (
        <div 
            dangerouslySetInnerHTML={{ __html: svg }}
            className={className}
        />
    )
};

export { SvgImage };