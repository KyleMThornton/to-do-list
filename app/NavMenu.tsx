import Link from "next/link";
import Image from "next/image";

export default function NavMenu() {
    return (
        <nav className="p-3 flex flex-wrap justify-between m-3">
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
                    <Link href={'/about'}>About</Link>
                </li>
                <li>
                    <Link href={'/other'}>Other</Link>
                </li>
            </ul>
        </nav>
    )
}