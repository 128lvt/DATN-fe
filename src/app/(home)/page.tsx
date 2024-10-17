import Banner from '@/app/components/main/Banner'
import Blog from '@/app/components/main/Blog'
import Product from '@/app/components/main/Product'
import dynamic from 'next/dynamic'
export default function page() {
  const Carousel = dynamic(() => import('@/app/components/main/Carousel'), {
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
