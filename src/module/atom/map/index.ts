import { atom } from "recoil";
import { MapListType } from "../../../lib/interface/CompanyType";

export const MapListState = atom<MapListType[]>({
  key: "MapListState",
  default: [
    {
      title: "원티드랩",
      location: "서울특별시 송파구 올림픽로 300 35층 롯데월드타워",
      x: "",
      y: "",
    },
    {
      title: "짐티",
      location: "서울특별시 강남구 역삼동 테헤란로13길 8-10 동영빌딩",
      x: "",
      y: "",
    },
  ],
});

export const MapMarkerState = atom<any>({
  key: "MapMarkerState",
  default: [],
});

export const modalState = atom<boolean>({
  key: "modalState",
  default: false,
});
