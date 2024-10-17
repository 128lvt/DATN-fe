'use client'

import Banner from '@/app/components/main/Banner'
import Blog from '@/app/components/main/Blog'
import Carousel from '@/app/components/main/Carousel'
import Product from '@/app/components/main/Product'
export default function page() {
  return (
    <>
      <Carousel />
      <Banner />
      <Product />
      <Blog />
      {/* <AppTable blogs={data?.sort((a: any, b: any) => b.id - a.id)} /> */}
    </>
  )
}
