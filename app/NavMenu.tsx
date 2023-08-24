import Link from "next/link";
import Image from "next/image";

export default function NavMenu() {
    return (
        <nav className="p-3 flex justify-between m-3">
            <Link href={'/'}>
                <Image
                    src='/next.svg'
                    alt="Logo"
                    height={100}
                    width={100}
                />
            </Link>
            <ul className="flex space-x-5">
                <li>
                    <Link href={'/about'} className="hover:underline">About</Link>
                </li>
                <li>
                    <Link href={'/other'} className="hover:underline">Other</Link>
                </li>
            </ul>
        </nav>
    )
}