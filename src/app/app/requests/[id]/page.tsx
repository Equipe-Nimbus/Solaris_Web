'use client';

import { useParams } from "next/navigation";

import { RequestView } from "@/features/satellite-images/components/req-view";

export default function RequestPage() {
    const { id } = useParams<{ id: string }>()

    return (
        <RequestView requestId={id} />
    )
}