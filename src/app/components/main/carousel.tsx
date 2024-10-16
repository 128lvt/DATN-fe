import { useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import 'owl.carousel'

const Carousel = () => {
  useEffect(() => {
    const bgImg = document.querySelectorAll('.set-bg')

    bgImg.forEach((img) => {
      const dataSetBg = img.getAttribute('data-setbg')

      if (dataSetBg) {
        ;(img as HTMLElement).style.backgroundImage = `url(${dataSetBg})`
      }
    })
  }, [])

  return (
    <>
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
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-7 col-md-8">
                  <div className="hero__text">
                    <h6>Summer Collection</h6>
                    <h2>Fall - Winter Collections 2030</h2>
                    <p>
                      A specialist label creating luxury essentials. Ethically
                      crafted with an unwavering commitment to exceptional
                      quality.
                    </p>
                    <a href="#" className="primary-btn">
                      Shop now <span className="arrow_right" />
                    </a>
                    <div className="hero__social">
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa fa-pinterest" />
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero__items set-bg" data-setbg="img/hero/hero-2.jpg">
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-7 col-md-8">
                  <div className="hero__text">
                    <h6>Summer Collection</h6>
                    <h2>Fall - Winter Collections 2030</h2>
                    <p>
                      A specialist label creating luxury essentials. Ethically
                      crafted with an unwavering commitment to exceptional
                      quality.
                    </p>
                    <a href="#" className="primary-btn">
                      Shop now <span className="arrow_right" />
                    </a>
                    <div className="hero__social">
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa fa-pinterest" />
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </section>
    </>
  )
}

export default Carousel
