import Image from "next/image";

const Header = () => {
    return (
        <header className="w-full bg-neutral-800 px-4 py-3 border-b border-b-neutral-400 lg:px-56">
            <Image src="/logo.svg" alt="Logo" width={90} height={26} />    
        </header>
    )
}

export { Header };