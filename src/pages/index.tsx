import { useQuery } from "react-query";
import { TextInput } from "flowbite-react";
import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { DetailBukuLists } from "../pages/types/detailBukuList";
import { YearRangePicker } from 'react-year-range-picker';
import Switcher from "@/components/Switcher";
import Card from "@/components/Card";
import Spinner from "@/components/Spinner";
import Head from "next/head";

export default function DaftarBuku() {
  const title = "Daftar List Buku";
  const [view, setView] = useState<"list" | "grid">("grid"); // default view is list
  const [bookLists, setBookLists] = useState([]);
  const [filterBookTitle, setFilterBookTitle] = useState("");
  const [yearRange, setYearRange] = useState({
    startYear: null,
    endYear: null,
  });
  const { isLoading, error } = useQuery("bookLists", () =>
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=search+terms&key=AIzaSyBVTk6hrNq3WsAv0wi1mevJA-2Mqawz9FQ")
      .then((res) => res.data.items)
  )

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      booksListData();
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [filterBookTitle]);

  useEffect(() => {
    booksListData();
  }, [yearRange]);

  async function booksListData() {
    try {
      const response = await axios.get("https://www.googleapis.com/books/v1/volumes?q=search+terms&key=AIzaSyBVTk6hrNq3WsAv0wi1mevJA-2Mqawz9FQ", {
        params: {
          title: filterBookTitle,
          yearStart: yearRange?.startYear,
          yearEnd: yearRange?.endYear,
        },
      });
      const records = response.data;
      setBookLists(records.items)
      setFilterBookTitle(records.items.volumeInfo.title)
      setYearRange(records.items.volumeInfo.publishedDate)
    } catch (err) {
      console.log(err);
    }
  }

  const selectDate = ({ startYear, endYear }: any) => {
    setYearRange({ startYear, endYear });
  };

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
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-1">
                    <div className="flex justify-start">
                        <div className="relative">
                          <TextInput
                            id="filter_booksTitle"
                            placeholder="Cari Nama"
                            defaultValue={filterBookTitle}
                            className="w-[14rem] mr-12 mt-12"
                            onChange={(e) => setFilterBookTitle(e.target.value)}
                          />
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="flex justify-start">
                        <div className="relative">
                          <YearRangePicker
                            minYear={new Date().getFullYear() - 35}
                            maxYear={new Date().getFullYear() + 2}
                            onSelect={(startYear: number, endYear: number) => {
                              setYearRange({ startYear, endYear })
                            }}
                            startYear={yearRange?.startYear}
                            endYear={yearRange?.endYear}
                            style={{marginTop: '3rem', marginLeft: '2rem', padding: '4px', borderRadius: '10px', borderColor: `rgb(203 213 225)`, color: `rgb(203 213 225)`, background: 'white', fontSize: 'initial'}}
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
                {bookLists.map((bookList: any, index) => (
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
