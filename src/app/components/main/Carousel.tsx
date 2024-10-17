'use client'
import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

// Sử dụng dynamic import với ssr: false
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const Carousel = () => {
  useEffect(() => {
    const bgImg = document.querySelectorAll('.set-bg')

    bgImg.forEach((img) => {
      const dataSetBg = img.getAttribute('data-setbg')

      if (dataSetBg) {
        (img as HTMLElement).style.backgroundImage = `url(${dataSetBg})`
      }
    })
  }, [])

  return (
    <section className="hero">
      <OwlCarousel
        className="hero__slider owl-carousel autoHeight"
        loop={true}
        margin={0}
        items={1}
        dots={false}
        nav={true}
        navText={[
          '<div class="nav-btn prev-slide">❮</div>',
          '<div class="nav-btn next-slide">❯</div>',
        ]}
        animateIn="fadeIn"
        animateOut="fadeOut"
        smartSpeed={1200}
        autoplay={false}
      >
        <div className="hero__items set-bg" data-setbg="img/hero/hero-1.jpg">
          {/* Nội dung ở đây */}
        </div>
        <div className="hero__items set-bg" data-setbg="img/hero/hero-2.jpg">
          {/* Nội dung ở đây */}
        </div>
      </OwlCarousel>
    </section>
  )
}

export default Carousel
