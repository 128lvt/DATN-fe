'use client'
import Link from 'next/link'
import { useEffect } from 'react'
import Image from 'next/image'

const MobileNav = () => {
  useEffect(() => {
    // Khởi tạo menu offcanvas và các sự kiện liên quan
    const canvasOpen = document.querySelector('.canvas__open')
    const offcanvasWrapper = document.querySelector('.offcanvas-menu-wrapper')
    const offcanvasOverlay = document.querySelector('.offcanvas-menu-overlay')

    if (canvasOpen && offcanvasWrapper && offcanvasOverlay) {
      canvasOpen.addEventListener('click', () => {
        offcanvasWrapper.classList.add('active')
        offcanvasOverlay.classList.add('active')
      })

      offcanvasOverlay.addEventListener('click', () => {
        offcanvasWrapper.classList.remove('active')
        offcanvasOverlay.classList.remove('active')
      })
    }

    return () => {
      if (canvasOpen && offcanvasWrapper && offcanvasOverlay) {
        canvasOpen.removeEventListener('click', () => {})
        offcanvasOverlay.removeEventListener('click', () => {})
      }
    }
  }, [])
  return (
    <>
      <div className="offcanvas-menu-overlay"></div>
      <div className="offcanvas-menu-wrapper">
        <div className="offcanvas__option">
          <div className="offcanvas__links">
            <a href="/">Sign in</a>
            <a href="/">FAQs</a>
          </div>
        </div>
        <div className="offcanvas__nav__option">
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
                width={18}
                height={18}
                style={{ margin: '0 0 0 8px' }}
              />
            </Link>
            <Link href="/">
              <Image
                src={'/img/icon/cart.png'}
                alt="Search Icon"
                width={18}
                height={18}
              />
            </Link>
            <div className="price">$0.00</div>
          </div>
        </div>

        <div className="nav-text">
          <ul>
            <li className="nav-text-list">
              <Link href={'/'}>Home</Link>
            </li>
            <li className="nav-text-list">
              <Link href={'/'}>Shop</Link>
            </li>
            <li className="nav-text-list">
              <Link href={'/'}>Blog</Link>
            </li>
            <li className="nav-text-list">
              <Link href={'/'}>Contacts</Link>
            </li>
          </ul>
        </div>

        <div id="mobile-menu-wrap"></div>
        <div className="offcanvas__text">
          <p>Free shipping, 30-day return or refund guarantee.</p>
        </div>
      </div>
    </>
  )
}

export default MobileNav
