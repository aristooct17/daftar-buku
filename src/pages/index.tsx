import { useQuery } from "react-query";
import { TextInput } from "flowbite-react";
import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { DetailBukuLists } from "../pages/types/detailBukuList";
import Switcher from "@/components/Switcher";
import Card from "@/components/Card";
import Spinner from "@/components/Spinner";
import Head from "next/head";

export default function DaftarBuku({books}) {
  const title = "Daftar List Buku";
  const [view, setView] = useState<"list" | "grid">("grid"); // default view is list
  const { isLoading, error, data } = useQuery("datas", () =>
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=search+terms&key=AIzaSyBVTk6hrNq3WsAv0wi1mevJA-2Mqawz9FQ")
      .then((res) => res.data.items)
  )

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
              <div className="grid grid-cols-6 grid-flow-col gap-4">
                <div className="col-span-1">
                    <div className="flex justify-start">
                        <div className="relative">
                          <TextInput
                            id="filter_booksTitle"
                            placeholder="Cari Nama"
                            required={true}
                            className="w-[14rem] mr-12 mt-12"
                          />
                        </div>
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="flex justify-end">
                        <Switcher view={view} setView={setView} />
                    </div>
                </div>
              </div>
              <div
                className={`${
                  view === "list"
                    ? "flex flex-col"
                    : "grid grid-cols-2 md:grid-cols-3"
                } gap-4`}
              >
                {data.map((bookList: any) => (
                  <Card
                    key={bookList.id}
                    id={bookList.id}
                    image={bookList.volumeInfo.imageLinks.thumbnail}
                    bookTitle={bookList.volumeInfo.title}
                    writer={bookList.volumeInfo.authors}
                    year={bookList.volumeInfo.publishedDate}
                  />
                ))}
              </div>
          </>
        )}
      </div>
    </div>
  );
}
