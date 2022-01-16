import { atom } from "recoil";
import { MapListType } from "../../../lib/interface/CompanyType";

export const listdata = [
  {
    title: "배달의 민족",
    location: "서울특별시 송파구 위례성대로 2 (방이동) 장은빌딩",
    x: "",
    y: "",
  },
  {
    title: "짐티",
    location: "서울특별시 강남구 역삼동 테헤란로13길 8-10 동영빌딩",
    x: "",
    y: "",
  },
  {
    title: "원티드랩",
    location: "서울특별시 송파구 올림픽로 300 35층 롯데월드타워",
    x: "",
    y: "",
  },
  {
    title: "맹그로브",
    location: "서울특별시 서초구 나루터로 76",
    x: "",
    y: "",
  },
  {
    title: "카카오 본사",
    location: "제주 제주시 첨단로 242",
    x: "",
    y: "",
  },
  {
    title: "opgg",
    location: "서울특별시 강남구 언주로 637 싸이칸홀딩스타워",
    x: "",
    y: "",
  },
  {
    title: "(주)엔씨소프트",
    location: "경기도 성남시 분당구 대왕판교로644번길 12",
    x: "",
    y: "",
  },
  {
    title: "맹그로브 신설",
    location: "서울특별시 동대문구 왕산로 22 맹그로브 신설점",
    x: "",
    y: "",
  },

  {
    title: "맹그로브 숭인",
    location: "서울특별시 종로구 지봉로12길 17",
    x: "",
    y: "",
  },

  {
    title: "오누이",
    location: "서울 노원구 동일로187길 12-47",
    x: "",
    y: "",
  },

  {
    title: "NAVER",
    location: "경기 성남시 분당구 불정로 6",
    x: "",
    y: "",
  },
];

export const MapListState = atom<MapListType[]>({
  key: "MapListState",
  default: listdata,
});

export const MapMarkerState = atom<any>({
  key: "MapMarkerState",
  default: [],
});

export const questionModalState = atom<boolean>({
  key: "questionModalState",
  default: false,
});

export const modalState = atom<boolean>({
  key: "modalState",
  default: false,
});

export const inputModalState = atom<boolean>({
  key: "inputModalState",
  default: false,
});

export const postModalState = atom<boolean>({
  key: "postModalState",
  default: false,
});
