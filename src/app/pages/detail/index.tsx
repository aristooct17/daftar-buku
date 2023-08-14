/* eslint-disable react/jsx-key */
'use client'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { DetailBukuLists } from "../../../utils/types/detailBukuList";

const DaftarDetailBuku = ({ id }: DetailBukuLists) => {
  const [bukuLists, setBukuLists] = useState([]);

  useEffect(() => {
    if (id) {
        bukuDetailData();
    }
    bukuDetailData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])

  async function bukuDetailData() {
    try {
      const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=search+terms&key=AIzaSyBVTk6hrNq3WsAv0wi1mevJA-2Mqawz9FQ', {
        params: {
          detail_id: id,
        },
      })
      const records = response.data;
      setBukuLists(records.items);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
     <div className="p-[24px] bg-white cursor-pointer">
        <div className="grid gap-4 grid-cols-2">
          { bukuLists.map((DetailBukuLists: any, index) => (
            <div className="p-[12px]">
              <div className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="md:shrink-0">
                    <a 
                      href={DetailBukuLists.volumeInfo.imageLinks.thumbnail}
                      target="_blank"
                    >
                      <img 
                        className="w-full object-cover md:h-48"
                        src={DetailBukuLists.volumeInfo.imageLinks === undefined 
                        ? "" 
                        : DetailBukuLists.volumeInfo.imageLinks.thumbnail} 
                        alt={DetailBukuLists.volumeInfo.title}
                      />
                    </a>
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{DetailBukuLists.volumeInfo.publisher}</div>
                    <a 
                      href={DetailBukuLists.volumeInfo.previewLink} 
                      target="_blank" 
                      className="block mt-1 text-lg leading-tight font-medium text-black">{
                        DetailBukuLists.volumeInfo.title}
                    </a>
                    <p className="mt-2 text-slate-500">{DetailBukuLists.volumeInfo.subtitle}</p>
                    <p className="mt-2 text-xs">{DetailBukuLists.volumeInfo.authors}</p>
                    <p className="mt-2 text-xs">{DetailBukuLists.volumeInfo.description}</p>
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

export default DaftarDetailBuku;
