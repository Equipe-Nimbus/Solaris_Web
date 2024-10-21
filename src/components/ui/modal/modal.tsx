import { X } from "@phosphor-icons/react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {

    const handleBackGroundClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    }

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-neutral-800/40 flex justify-center items-center p-4 z-50"
            onClick={handleBackGroundClick}
        >
            <div className="w-full flex flex-col bg-neutral-700 border border-neutral-600 rounded sm:max-w-[600px]">
                <div className="w-full flex justify-end p-4 z-50">
                    <X size={24} className="text-neutral-400 cursor-pointer" onClick={onClose} />
                </div>
                {children}
            </div>
        </div>
    )
};