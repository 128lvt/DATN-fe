"use client";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
const Header = () => {
  useEffect(() => {
    // Khởi tạo menu offcanvas và các sự kiện liên quan
    const canvasOpen = document.querySelector(".canvas__open");
    const offcanvasWrapper = document.querySelector(".offcanvas-menu-wrapper");
    const offcanvasOverlay = document.querySelector(".offcanvas-menu-overlay");

    if (canvasOpen && offcanvasWrapper && offcanvasOverlay) {
      canvasOpen.addEventListener("click", () => {
        offcanvasWrapper.classList.add("active");
        offcanvasOverlay.classList.add("active");
      });

      offcanvasOverlay.addEventListener("click", () => {
        offcanvasWrapper.classList.remove("active");
        offcanvasOverlay.classList.remove("active");
      });
    }

    return () => {
      if (canvasOpen && offcanvasWrapper && offcanvasOverlay) {
        canvasOpen.removeEventListener("click", () => {});
        offcanvasOverlay.removeEventListener("click", () => {});
      }
    };
  }, []);

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
              <Link href={"/"}>Home</Link>
            </li>
            <li className="nav-text-list">
              <Link href={"/"}>Shop</Link>
            </li>
            <li className="nav-text-list">
              <Link href={"/"}>Blog</Link>
            </li>
            <li className="nav-text-list">
              <Link href={"/"}>Contacts</Link>
            </li>
          </ul>
        </div>

        <div id="mobile-menu-wrap"></div>
        <div className="offcanvas__text">
          <p>Free shipping, 30-day return or refund guarantee.</p>
        </div>
      </div>
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
                <Link href="/">
                <img src={"/img/logo.png"} alt="Logo" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-5">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li className="">
                    <Link href="./index.html">Home</Link>
                  </li>
                  <li>
                    <Link href="./shop.html">Shop</Link>
                  </li>
                  <li>
                    <Link href="./blog.html">Blog</Link>
                  </li>
                  <li>
                    <Link href="./contact.html">Contacts</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-4 col-md-4 header-option-container">
              <div className="header__nav__option">
                <div className="search-container">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="search-input"                    
                  />
                  <Link href="/" className="search-switch">
                    <img src={"/img/icon/search.png"} alt="Search Icon" style={{margin: "0 26px 0 4px"}}/>
                  </Link>
                </div>
                <Link href="/">
                  <img src={"/img/icon/cart.png"} alt="Logo"></img>{" "}
                  <span>0</span>
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
  );
};

export default Header;
