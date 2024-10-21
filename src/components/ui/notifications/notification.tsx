'use client';

import { CheckCircle, XCircle } from "@phosphor-icons/react";

const icons = {
    success: <CheckCircle className="size-6 text-success" />,
    error: <XCircle className="size-6 text-error" />,
};

export type NotificationProps = {
    notification: {
        id: string;
        type: keyof typeof icons;
        title: string;
        message?: string;
    };
    onDismiss: (id: string) => void;
};

export const Notification = ({
    notification: { id, type, title, message },
    onDismiss,
}: NotificationProps) => {
    return (
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-neutral-700">
                <div className="p-4">
                    <div className="flex items-start">
                        <div className="shrink-0">{icons[type]}</div>
                        <div className="ml-3 w-0 flex-1 pt-0.5">
                            <p className="text-sm font-medium text-neutral-100">{title}</p>
                            <p className="mt-1 text-sm text-neutral-300">{message}</p>
                        </div>
                        <div className="ml-4 flex shrink-0">
                            <button
                                className="inline-flex rounded-md text-primary-500 hover:text-primary-600"
                                onClick={() => {
                                    onDismiss(id);
                                }}
                            >
                                <XCircle className="size-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
