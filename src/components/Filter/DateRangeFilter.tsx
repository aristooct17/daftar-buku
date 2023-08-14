import { DateRangeInterface } from "../../utils/interface/filter";
import Datepicker from "react-tailwindcss-datepicker";

const DateRangeFilter = ({ value, setValue, id }: DateRangeInterface) => {
  const handleValueChange = (newValue: any) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="w-[24rem] mr-12 mt-12 border-gray-500 rounded-sm" style={{border: "1px solid #D1D1D1", borderRadius: '12px'}}>
        <Datepicker
          separator={" to "}
          displayFormat={"DD/MM/YYYY"}
          value={value}
          onChange={handleValueChange}
          readOnly={false}
        />
      </div>
    </>
  );
};

export default DateRangeFilter;
