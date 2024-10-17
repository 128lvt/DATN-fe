import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="logo-text">
        6AE Fashion<span className="text-danger">.</span>
      </h1>
    </Link>
  )
}

export default Logo
