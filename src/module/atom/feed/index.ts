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
    content:
      "1. 1분 자기소개 2. 회사에 지원한 동기는? 3. 직무를 위해 어떤 자기계발을 하였는지?",
    date: "3시간 전",
  },
  {
    id: 2,
    title: "아브라카타브라 우가차카",
    name: "익명의 사용자",
    content: "나는 원시인이 아닌데 자꾸 누군가가 나를 원시인이라고 부른다?!",
    date: "6시간 전",
  },
  {
    id: 3,
    title: "고양이가 하늘을 나는 법",
    name: "익명의 사용자",
    content: "날긴 왜 날아",
    date: "23시간 전",
  },
  {
    id: 4,
    title: "니나니나니 고릴라야",
    name: "익명의 사용자",
    content: "고릴라가 대수인가요",
    date: "하루 전",
  },
];
