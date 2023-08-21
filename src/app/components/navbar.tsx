import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="bg-blue-300 px-10">
            <ul className='flex justify-between text-center'>
                <Link href='/'>Home</Link>
                <Link href='/hello'>Hello</Link>
                <Link href='/test'>Test</Link>
            </ul>
        </nav>
    )
}