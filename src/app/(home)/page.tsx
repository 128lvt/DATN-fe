'use client'

import Banner from '@/app/components/main/banner'
import Blog from '@/app/components/main/blog'
import Product from '@/app/components/main/product'
import dynamic from 'next/dynamic'
export default function page() {
  const Carousel = dynamic(() => import('@/app/components/main/carousel'), {
    ssr: false,
  })

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
