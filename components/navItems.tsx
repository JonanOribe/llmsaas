import Link from "next/link"

const navItems = [
    {label:'Home', href: '/'},
    {label:'Companions', href: '/companions'},
    {label:'My Journey', href: '/my-journey'},
    {label:'Sign In', href: '/sign-in'}
]

const NavItems = () => {
    return (
        <nav className='flex items-center gap-4'>
           {navItems.map(({label, href}) => (
                <Link key={label} href={href} className='text-sm font-medium text-gray-700 hover:text-gray-900'>
                    {label}
                </Link>
            )
           )}
        </nav>
    )
}

export default NavItems