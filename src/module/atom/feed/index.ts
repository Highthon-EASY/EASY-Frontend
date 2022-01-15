import { atom } from "recoil";

export const FeedListState = atom({
  key: "FeedListState",
  default: [],
});

export const feedData = [
  {
    id: 1,
    title: "면접에서 자주 물어보는 질문 리스트 TOP 3",
    name: "익명의 사용자",
    content: [
      { title: "sdfsfsfsf" },
      { title: "sdfsfsfsf" },
      { title: "sdfsfsfsf" },
    ],
    date: "3시간 전",
  },
  {
    id: 2,
    title: "아브라카타브라 우가차카",
    name: "익명의 사용자",
    content: [
      { title: "sdfsfsfsf" },
      { title: "sdfsfsfsf" },
      { title: "sdfsfsfsf" },
    ],
    date: "6시간 전",
  },
  {
    id: 3,
    title: "고양이가 하늘을 나는 법",
    name: "익명의 사용자",
    content: [
      { title: "sdfsfsfsf" },
      { title: "sdfsfsfsf" },
      { title: "sdfsfsfsf" },
    ],
    date: "23시간 전",
  },
  {
    id: 4,
    title: "니나니나니 고릴라야",
    name: "익명의 사용자",
    content: [
      { title: "sdfsfsfsf" },
      { title: "sdfsfsfsf" },
      { title: "sdfsfsfsf" },
    ],
    date: "하루 전",
  },
];
