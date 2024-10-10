"use client";

import Banner from "../components/main/banner";
import dynamic from "next/dynamic";
import Product from "../components/main/product";
import Blog from "../components/main/blog";

// import React, { useEffect } from "react";
// import AppTable from "../components/app.table";
// import useSWR from "swr";

export default function page() {
  const Carousel = dynamic(() => import("../components/main/carousel"), {
    ssr: false,
  });

  const products = [
    {
      id: 123,
      name: "IPad Pro 2023",
      price: 812.34,
      thumbnail: "product-1.jpg",
      description: "This is a test",
      category_id: 1,
      size: "11 inches",
      color: "Silver",
    },
    {
      id: 123,
      name: "MacBook Air 2023",
      price: 1299.99,
      thumbnail: "product-2.jpg",
      description: "Light and powerful laptop",
      category_id: 1,
      size: "13.6 inches",
      color: "Space Gray",
    },
    {
      id: 123,
      name: "Samsung Galaxy Tab S8",
      price: 699.99,
      thumbnail: "",
      description: "The ultimate Android tablet",
      category_id: 2,
      size: "11 inches",
      color: "Black",
    },
    {
      id: 123,
      name: "Dell XPS 13",
      price: 1099.99,
      thumbnail: "",
      description: "Compact and powerful ultrabook",
      category_id: 3,
      size: "13 inches",
      color: "Silver",
    },
    {
      id: 123,
      name: "Microsoft Surface Pro 9",
      price: 899.99,
      thumbnail: "",
      description: "Versatile 2-in-1 device",
      category_id: 3,
      size: "13 inches",
      color: "Platinum",
    },
    {
      id: 123,
      name: "HP Spectre x360",
      price: 1199.99,
      thumbnail: "",
      description: "Convertible powerful laptop",
      category_id: 3,
      size: "14 inches",
      color: "Black",
    },
    {
      id: 123,
      name: "Lenovo ThinkPad X1",
      price: 1499.99,
      thumbnail: "",
      description: "Durable business laptop",
      category_id: 4,
      size: "14 inches",
      color: "Black",
    },
    {
      id: 123,
      name: "Asus ZenBook 14",
      price: 899.99,
      thumbnail: "",
      description: "Elegant ultrabook",
      category_id: 4,
      size: "14 inches",
      color: "Blue",
    },
    {
      id: 123,
      name: "Acer Swift 3",
      price: 699.99,
      thumbnail: "",
      description: "Lightweight and affordable laptop",
      category_id: 5,
      size: "14 inches",
      color: "Silver",
    },
    {
      id: 123,
      name: "Huawei MatePad Pro",
      price: 649.99,
      thumbnail: "",
      description: "High-end Android tablet",
      category_id: 2,
      size: "12.6 inches",
      color: "Green",
    },
  ];

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
      <Product products={products}/>
      <Blog />
      {/* <AppTable blogs={data?.sort((a: any, b: any) => b.id - a.id)} /> */}
    </>
  );
}
