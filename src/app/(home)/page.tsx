"use client";

import Banner from "../components/main/banner";
import dynamic from "next/dynamic";
import ContainerProduct from "../components/main/container.product";
import Blog from "../components/main/blog";

// import React, { useEffect } from "react";
// import AppTable from "../components/app.table";
// import useSWR from "swr";

export default function page() {
  const Carousel = dynamic(() => import("../components/main/carousel"), {
    ssr: false,
  });
  

  // const fetcher = (url: string) => fetch(url).then((res) => res.json());

  // const { data, error, isLoading } = useSWR(
  //   "http://localhost:8000/blogs",
  //   fetcher,
  //   {
  //     revalidateIfStale: false,
  //     revalidateOnFocus: false,
  //     revalidateOnReconnect: false,
  //   }
  // );

  // console.log("data", data);

  // if (!data) {
  //   return <div>loading...</div>;
  // }

  return (
    <>
      <Carousel />
      <Banner />
      <ContainerProduct />
      <Blog/>
      {/* <AppTable blogs={data?.sort((a: any, b: any) => b.id - a.id)} /> */}
    </>
  );
}
