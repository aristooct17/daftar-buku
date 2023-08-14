import { DateValueType } from "react-tailwindcss-datepicker/dist/types";

export interface CompanyInterface {
  selectedCompanyType: string;
  changeCompanyType: Function;
}

export interface StatusInterface {
  selectedStatus: string;
  changeStatus: Function;
}

export interface DateRangeInterface {
  value: DateValueType;
  setValue: any;
  id?: string | string[];
}
