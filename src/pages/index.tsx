import { useQuery } from "react-query";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { DetailBukuLists } from "../pages/types/detailBukuList";
import Switcher from "@/components/Switcher";
import Card from "@/components/Card";
import Spinner from "@/components/Spinner";
import Head from "next/head";

export default function DaftarBuku() {
  const title = "Daftar List Buku";
  const [view, setView] = useState<"list" | "grid">("list"); // default view is list
  const { isLoading, error, data } = useQuery("datas", () =>
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=search+terms&key=AIzaSyBVTk6hrNq3WsAv0wi1mevJA-2Mqawz9FQ")
      .then((res) => res.data.items)
  );

  return (
    <div className="container px-2 md:px-0 mx-auto py-16 min-h-screen">
      <Head>
        <title>{title}</title>
      </Head>
      <div className="grid gap-8">
        <h1 className="text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {error ? (
          <p className="text-center">
            An error has occurred: {(error as AxiosError).message}
          </p>
        ) : isLoading ? (
          <Spinner />
        ) : (
          <>
            <div className="flex justify-center">
              <Switcher view={view} setView={setView} />
            </div>
            <div
              className={`${
                view === "list"
                  ? "flex flex-col"
                  : "grid grid-cols-2 md:grid-cols-3"
              } gap-4`}
            >
              {data?.map((item: any) => (
                <Card
                  key={item.id}
                  id={item.id}
                  image={item.volumeInfo.imageLinks.thumbnail}
                  bookTitle={item.volumeInfo.title}
                  writer={item.volumeInfo.authors}
                  year={item.volumeInfo.publishedDate}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
