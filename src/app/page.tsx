"use client";
import Image from "next/image";
import axios from "axios";

import useSWR from "swr";
const fetcher = async ([url, limit]) => {
  console.log(url, limit);
  const res = await axios.get(`${url}?limit=${limit}`);
  console.log("res", res);
  return res.data.results;
};

interface IComment {
  title: String;
}
const limit = 10;

export default function Home() {
  const { data: comments } = useSWR(
    [`https://houze-portal-api.houze.io/portal/blogs`, limit],
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return (
    <div className="home-page">
      <ul>
        {(comments as unknown as IComment[])?.map((item: IComment, index) => {
          return <li key={index}>{item.title}</li>;
        }) ?? []}
      </ul>
    </div>
  );
}
