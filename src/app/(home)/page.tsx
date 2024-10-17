import Banner from '@/app/components/main/Banner'
import Blog from '@/app/components/main/Blog'
import Carousel from '@/app/components/main/Carousel'
import Product from '@/app/components/main/Product'
export default function page() {
  return (
    <>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="css/font-awesome.min.css"
          type="text/css"
        />
        <link rel="stylesheet" href="/css/style.css" type="text/css" />
      </head>
      <Carousel />
      <Banner />
      <Product />
      <Blog />
      {/* <AppTable blogs={data?.sort((a: any, b: any) => b.id - a.id)} /> */}
    </>
  )
}
