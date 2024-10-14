"use client";

import Banner from "../components/main/banner";
import dynamic from "next/dynamic";
import Product from "../components/main/product";
import Blog from "../components/main/blog";

export default function page() {
  const Carousel = dynamic(() => import("../components/main/carousel"), {
    ssr: false,
  });

  return (
    <>
      <Carousel />
      <Banner />
      <Product />
      <Blog />
      {/* <AppTable blogs={data?.sort((a: any, b: any) => b.id - a.id)} /> */}
    </>
  );
}
