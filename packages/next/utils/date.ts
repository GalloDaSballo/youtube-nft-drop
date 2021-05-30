import moment from "moment";

export const formatDate = (value: number | Date) => {
  return value ? moment(value).format("MMM DD, YYYY - hh:mmA") : "";
};
export const defaultDateFormat = "d MMM yyyy";
