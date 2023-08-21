import { DetailBukuLists } from "../pages/types/detailBukuList";
import Link from "next/link";

const Card = ({ id, image, bookTitle, writer, year }: DetailBukuLists) => {
  return (
    <Link href={`/${id}`}>
      <div className="bg-white p-4 rounded-md shadow-sm cursor-pointer hover:shadow-2xl border-gray-950">
        <img 
            className="w-full object-cover md:h-[480px]"
            src={image}
            alt="img"
        />
        <h3 className="break-words text-xl font-medium">{bookTitle}</h3>
        <p className="break-words text-sm">{writer}</p>
        <p className="break-words text-sm">{year}</p>
      </div>
    </Link>
  );
};

export default Card;
