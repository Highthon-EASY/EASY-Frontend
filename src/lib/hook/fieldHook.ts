import {
  empData,
  etcData,
  feedData,
  interviewData,
} from "../../module/atom/feed";

export function FieldDataHook(field: string | string[] | null) {
  switch (field) {
    case "school":
      return feedData;
    case "company":
      return empData;
    case "interview":
      return interviewData;
    case "etc":
      return etcData;
  }
}
