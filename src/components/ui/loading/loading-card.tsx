import { cnMerge } from "@/utils/cnMerge";
import { Spinner } from "./spinner";

type LoadingCardProps = {
    title: string;
    children?: React.ReactNode;
    className?: string;
}

function LoadingCard({ title, className, children }: LoadingCardProps) {
    return (
        <div className={cnMerge("flex flex-col gap-10", className)}>
            <Spinner />
            <div className="flex flex-col justify-center items-center gap-5">
                <span className="text-heading4 text-center font-bold text-neutral-200">{title}</span>
                {children}
            </div>
        </div>
    )
}

export { LoadingCard };