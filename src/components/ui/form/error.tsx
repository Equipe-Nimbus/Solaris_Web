type ErrorProps = {
    errorMessage?: string | null;
}

const Error = ({ errorMessage }: ErrorProps) => {
    if (!errorMessage) return null;

    return (
        <div className="text-small text-error">
            {errorMessage}
        </div>
    )       
}

export { Error };