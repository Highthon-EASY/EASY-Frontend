import { atom } from "recoil";

export const FeedListState = atom({
  key: "FeedListState",
  default: [],
});

export const feedData = [
  {
    id: 1,
    title: "남녀공학 부럽다아아ㅏㅇ앙",
    name: "익명의 사용자",
    content: [
      { subContent: "같은 마고인인데 왜 다른 삶이지" },
      { subContent: "다른거 모르겠고 나도 공학 보내줘여 ㅠ" },
    ],
    date: "54분 전",
  },
  {
    id: 1,
    title: "Vue 사용하는 FE개발자 모집중",
    name: "익명의 사용자",
    content: [
      { subContent: "2주동안 진행할 토플 인원 모집중입니다!" },
      { subContent: "백엔드 둘, 디자이너 한명 대기중이고," },
      { subContent: "다른거 다 빼고 끈기있는 프엔분 모시고 싶어요!" },
      { subContent: "> w2032@e-mirim.hs.kr < 연락주세요 🙋‍♂️" },
    ],
    date: "1시간 전",
  },
  {
    id: 1,
    title: "미림 마이스터고등학교 오늘의 급식",
    name: "익명의 사용자",
    content: [
      { subContent: "[차조밥 쇠고기미역국 잡채 생일케이크 불고기]" },
      { subContent: "미림오면 8kg찝니다" },
      { subContent: "왜냐면 그만큼 급식이 맛있다고 소문났거든요ㅎ" },
    ],
    date: "4시간 전",
  },
  {
    id: 1,
    title: "여태껏 인강들으면서 좋았던 코딩 유튜버",
    name: "익명의 사용자",
    content: [
      { subContent: "※참고로 필자는 지루한거 못 참음※" },
      { subContent: "노마드코더, 드림코딩엘리, 코딩애플" },
      { subContent: "코딩앙마, ZEROCHO, 생활코딩..." },
      { subContent: "참고로 필자 코딩애플 풀패키지 구매함 👍" },
    ],
    date: "12시간 전",
  },
  {
    id: 1,
    title: "요즘 무슨 게임이 유행하지",
    name: "익명의 사용자",
    content: [
      { subContent: "형 오늘 롤 아이언으로 강등했다.." },
      { subContent: "롤 접고 레식이나 에펙이나 할까.." },
      { subContent: "아.. 프로젝트 마감 3일 남았지.." },
    ],
    date: "22시간 전",
  },
  {
    id: 1,
    title: "요즘 어쩔티비가 유행이라매?",
    name: "익명의 사용자",
    content: [
      { subContent: "우리 개발자들은 어쩔티비 쓰지말고" },
      { subContent: '백엔드들 앞에서 "어쩔디비"나 쓰자 ' },
    ],
    date: "하루 전",
  },
  {
    id: 1,
    title: "기숙사생인데 자취할까말까 고민되네",
    name: "익명의 사용자",
    content: [
      { subContent: "나는 남들이랑 사생활 공유하는거 너무 힘들어;" },
      { subContent: "학교 5분거리에 월25 6개월 계약인 원룸 있는데 " },
      { subContent: "그냥 거기서 자취할까 고민 중..." },
    ],
    date: "하루 전",
  },
  {
    id: 1,
    title: "진학은 솔직히 별 생각 안드는데 취업은",
    name: "익명의 사용자",
    content: [
      { subContent: "친구들끼리 경쟁이 더 심한 것 같음" },
      { subContent: "대학은 뭔가.. 광범위해서 그런가? " },
      { subContent: "마고는 학교에 의뢰하는 회사도 한정적이여서 그럴지도" },
    ],
    date: "하루 전",
  },
  {
    id: 1,
    title: "내년 STAC행사 같이 나갈 사람?",
    name: "익명의 사용자",
    content: [
      { subContent: "매년 아는 애들이랑 하니까 질리는데" },
      { subContent: "안드 쓰는 사람 중에 같이 할 사람 구한다" },
      { subContent: "지난 스택 우수상 탔었다. 올해는 대상 가야징" },
    ],
    date: "이틀 전",
  },
];
