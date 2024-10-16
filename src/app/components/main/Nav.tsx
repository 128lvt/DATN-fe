import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Nav = () => {
  const links = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Shop',
      url: '/shop',
    },
    {
      name: 'Blog',
      url: '/blog',
    },
    {
      name: 'Contact',
      url: '/contact',
    },
  ]

  const pathName = usePathname()
  console.log(pathName)

  return (
    <div className="col-lg-4 col-md-5">
      <nav className="header__menu mobile-menu">
        <ul>
          {links.map((link) => (
            <li
              className={link.url === pathName ? 'active' : ''}
              key={link.url}
            >
              <Link href={link.url}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Nav
