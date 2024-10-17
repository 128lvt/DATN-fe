import Link from 'next/link'
import Nav from './Nav'
import MobileNav from '@/app/components/main/MobileNav'
import Logo from '@/app/components/main/Logo'
import Image from 'next/image'
const Header = () => {
  return (
    <>
      <MobileNav />
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-7">
                <div className="header__top__left">
                  <p>Free shipping, 30-day return or refund guarantee.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-5">
                <div className="header__top__right">
                  <div className="header__top__links">
                    <Link href="/">Sign in</Link>
                    <Link href="/">FAQs</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-3">
              <div className="header__logo">
                <Logo />
              </div>
            </div>
            <Nav />
            <div className="col-lg-4 col-md-4 header-option-container">
              <div className="header__nav__option">
                <div className="search-container">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="search-input"
                  />
                  <Link href="/" className="search-switch">
                    <Image
                      src={'/img/icon/search.png'}
                      alt="Search Icon"
                      width={20}
                      height={20}
                      style={{ margin: '0 26px 0 8px' }}
                    />
                  </Link>
                </div>
                <Link href="/">
                  <Image
                    src={'/img/icon/cart.png'}
                    alt="Search Icon"
                    width={22}
                    height={22}
                  />
                  <span>11</span>
                </Link>
                <div className="price">$0.00</div>
              </div>
            </div>
          </div>
          <div className="canvas__open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
