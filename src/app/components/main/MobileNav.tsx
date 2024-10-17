'use client'
import Link from 'next/link'
import { useEffect } from 'react'

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
          <a href="/" className="search-switch">
            <img src="/img/icon/search.png" alt="" />
          </a>
          <a href="/">
            <img src="/img/icon/heart.png" alt="" />
          </a>
          <a href="/">
            <img src="/img/icon/cart.png" alt="" /> <span>0</span>
          </a>
          <div className="price">$0.00</div>
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
