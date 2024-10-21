'use client';

import { auth } from "@/lib/auth";
import { paths } from "@/routes/paths";
import { List, SignOut } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useNotifications } from "../notifications";
import { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const router = useRouter();
    const { addNotification } = useNotifications();

    return (
        <>

            <header className="flex items-center gap-5 fixed top-4 w-11/12 left-1/2 transform -translate-x-1/2 bg-neutral-800 px-6 py-3 border border-neutral-600 rounded-2xl text-small xl:max-w-[1280px]">
                <Image src="/logo.svg" alt="Logo" width={90} height={26} />
                <List
                    className="sm:hidden ml-auto p-1 size-8 text-neutral-800 bg-neutral-100/90 rounded-lg cursor-pointer hover:bg-neutral-600/90 hover:text-neutral-300 transition-colors"
                    onClick={() => setMenuOpen(prev => !prev)}
                />
                <Link
                    href={paths.requests.new}
                    className="hidden sm:inline text-neutral-400 font-semibold hover:text-neutral-300 transition-colors"
                >
                    Nova consulta
                </Link>
                <Link
                    href={paths.requests.list}
                    className="hidden sm:inline text-neutral-400 font-semibold hover:text-neutral-300 transition-colors"
                >
                    Consultas anteriores
                </Link>
                <SignOut
                    className="hidden sm:inline ml-auto p-1 size-8 text-neutral-800 bg-neutral-100/90 rounded-lg cursor-pointer hover:bg-neutral-600/90 hover:text-neutral-300 transition-colors"
                    onClick={() => {
                        auth.logout()
                        router.push(paths.auth.login)
                        addNotification({
                            title: 'Logout',
                            message: 'Você foi desconectado com sucesso.',
                            type: 'success'
                        })
                    }}
                />
            </header>
            {menuOpen && (
                <nav className="sm:hidden flex flex-col gap-5 fixed top-20 w-11/12 left-1/2 transform -translate-x-1/2 bg-neutral-800 px-6 py-5 border border-neutral-600 rounded-2xl text-small xl:max-w-[1280px]">
                    <Link
                        href={paths.requests.new}
                        className="text-neutral-400 font-semibold hover:text-neutral-300 transition-colors"
                        onClick={() => setMenuOpen(false)}
                    >
                        Nova consulta
                    </Link>
                    <Link
                        href={paths.requests.list}
                        className="text-neutral-400 font-semibold hover:text-neutral-300 transition-colors"
                        onClick={() => setMenuOpen(false)}
                    >
                        Consultas anteriores
                    </Link>
                    <SignOut
                        className="p-1 size-8 text-neutral-800 bg-neutral-100/90 rounded-lg cursor-pointer hover:bg-neutral-600/90 hover:text-neutral-300 transition-colors"
                        onClick={() => {
                            setMenuOpen(false)
                            auth.logout()
                            router.push(paths.auth.login)
                            addNotification({
                                title: 'Logout',
                                message: 'Você foi desconectado com sucesso.',
                                type: 'success'
                            })
                        }}
                    />
                </nav>
            )}
        </>
    )
}

export { Header };