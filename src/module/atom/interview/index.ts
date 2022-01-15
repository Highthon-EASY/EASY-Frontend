import { atom } from "recoil";
import { InterviewType } from "../../../lib/interface/InterviewType";

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const reviewListState = atom<string[]>({
  key: "reviewListState",
  default: [],
});

export const reviewData = atom<InterviewType>({
  key: "reviewData",
  default: {
    title: "",
    location: "",
    field: "",
    level: "",
    interview1: "",
    interview2: "",
    interview3: "",
  },
});
