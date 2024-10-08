"use client";

// import React, { useEffect } from "react";
// import AppTable from "../components/app.table";
// import useSWR from "swr";

export default function page() {
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
      {/* <AppTable blogs={data?.sort((a: any, b: any) => b.id - a.id)} /> */}
    </>
  );
}
