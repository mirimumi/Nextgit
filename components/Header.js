import Link from 'next/link'

const Header = () => (
    <div>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/about">
            <a>About</a>
        </Link>
        <Link href="/service">
            <a>Service</a>
        </Link>
    </div>
)

export default Header