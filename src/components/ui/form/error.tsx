type ErrorProps = {
    errorMessage?: string | null;
}

const Error = ({ errorMessage }: ErrorProps) => {
    if (!errorMessage) return null;

    return (
        <div>
            {errorMessage}
        </div>
    )       
}

export { Error };