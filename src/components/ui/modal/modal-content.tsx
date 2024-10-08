type ModalContentProps = {
    children: React.ReactNode;
}

export const ModalContent = ({ children }: ModalContentProps) => {
    return (
        <div className="p-8">
            {children}
        </div>
    )
}