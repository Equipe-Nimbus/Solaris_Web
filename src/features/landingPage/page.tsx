import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
    return (
        <>
            <div className='bg-neutral-700 flex flex-col px-10 py-10 rounded-lg gap-5 border border-neutral-600 md:min-w-96'>
                <div className="flex px-24 justify-between items-start">
                    <div className="flex items-center gap-1">
                        <Image src="/logo.svg" alt="logo" width={150} height={100} />
                    </div>
                </div>
                <div className="flex bg-white items-end gap-10">
                    <Link href="" className="text-lg font-medium text-text-on-background">Home</Link>
                    <Link href="" className="text-lg font-medium text-text-on-background">Mapa-Mundi</Link>
                    <Link href="" className="text-lg font-medium text-text-on-background">Satélites</Link>
                </div>
                <Image src="/satelite-example.png" alt="satelite example" width={500} height={334} className="rounded-md drop-shadow" />
            </div>
        </>
    )
}