/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
'use client'
import React, { useEffect, useState } from "react";
import moment from "moment";
import axios from 'axios';
import { TextInput } from "flowbite-react";
import DateRangeFilter from "../../src/components/Filter/DateRangeFilter";
import Link from "next/link";
import { DetailBukuLists } from "../utils/types/detailBukuList";

const DaftarBuku = ({ id } : DetailBukuLists) => {
  const [bukuLists, setBukuLists] = useState([]);
  const [filterBookName, setFilterBookName] = useState("");
  const [dateValue, setDateValue] = useState({
    startDate: null,
    endDate: null,
  });
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      bukuListsData();
      setCurrentPage(1);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[filterBookName]);

  useEffect(() => {
    bukuListsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, dateValue]);

  async function bukuListsData() {
    try {
      const startDate = moment(dateValue?.startDate, "YYYY-M-D").format();
      const endDate = moment(
        dateValue?.endDate + " 23:59:59",
        "YYYY-M-D hh:mm:ss"
      ).format();

      const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=search+terms&key=AIzaSyBVTk6hrNq3WsAv0wi1mevJA-2Mqawz9FQ', {
        params: {
          title: filterBookName
          ? "%" + filterBookName + "%" 
          : null,
          page: currentPage || 1,
          startDate: dateValue?.startDate ? startDate : null,
          endDate: dateValue?.endDate ? endDate : null,
        },
      })
      const records = response.data;
      setBukuLists(records.items);
    } catch (err) {
      console.log(err);
    }
  }

  const selectDate = ({ startDate, endDate }: any) => {
    setDateValue({ startDate, endDate });
    setCurrentPage(1);
  };

  return (
    <>
      <div className="pl-[42px]">
        <div className="grid grid-cols-6">
          <div>
            <TextInput
              id="filter_bookName"
              defaultValue={filterBookName}
              placeholder="Cari Nama Buku"
              required={true}
              className="w-[14rem] mr-12 mt-12 border-gray-500 rounded-sm"
              onChange={(e) => {
                if (e.target.value.length >= 4) {
                  setFilterBookName(e.target.value);
                } else if (e.target.value.length === 0) {
                  setFilterBookName("");
                }
              }}
            />
          </div>
          <div>
            <DateRangeFilter
              id="date_filter_scfList"
              value={dateValue}
              setValue={selectDate}
            />
          </div>
        </div>
      </div>
     <div className="p-[24px] bg-white cursor-pointer">
        <div className="grid gap-4 grid-cols-2">
          { bukuLists.map((bukuList: any, index) => (
            <div className="p-[12px]" key={index}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="md:shrink-0">
                    <img 
                      className="w-full object-cover md:h-48"
                      src={bukuList.volumeInfo.imageLinks === undefined 
                        ? "" 
                        : bukuList.volumeInfo.imageLinks.thumbnail} 
                      alt="img"
                    />
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{bukuList.volumeInfo.publisher}</div>
                    <Link href={`/detail/${bukuList.id}`}>
                      <p className="block mt-1 text-lg leading-tight font-medium text-black">{bukuList.volumeInfo.title}</p>
                    </Link>
                    <p className="mt-2 text-slate-500">{bukuList.volumeInfo.subtitle}</p>
                    <p className="mt-2 text-xs">{bukuList.volumeInfo.authors}</p>
                    <p className="mt-2 text-xs">{bukuList.volumeInfo.publishedDate}</p>
                  </div>
                </div>
              </div>
            </div>
            ))
          }
        </div>
     </div>
    </>
  )
};

export default DaftarBuku;
