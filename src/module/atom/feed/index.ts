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

// empData
export const empData = [
  {
    id: 1,
    title: "1년 2개월차 대덕 졸업생인데",
    name: "익명의 사용자",
    content: [
      { subContent: "연봉 1500 올려준다는데 이직하려고" },
      { subContent: "워라밸도 훨 좋다.. 단점은 집이랑 좀 머네" },
      { subContent: "마고인들아 너네도 할 수 있다! 화이팅!!" },
    ],
    date: "5시간 전",
  },
  {
    id: 1,
    title: "회사에서 자꾸 백엔드 시킨다",
    name: "익명의 사용자",
    content: [
      { subContent: "난 분명 퍼블리셔로 입사했는데" },
      { subContent: "처음엔 리액트 가르치면서 프론트로 일까지 시키다가" },
      { subContent: "이제는 백엔드까지 가르치면서 일 시키려 함ㅋㅋ" },
      { subContent: "꼴받아서 그냥 퇴사 박아버릴까보다;" },
    ],
    date: "22시간 전",
  },
  {
    id: 1,
    title: "야근하는 회사",
    name: "익명의 사용자",
    content: [
      { subContent: "나는 개인적으로 좋은 것 가탱" },
      { subContent: "야근 수당도 받고!" },
      { subContent: "실력도 늘고! 히히 ^__^!!" },
      { subContent: "라고 하라고 팀장님이 시켰다.." },
    ],
    date: "하루 전",
  },
  {
    id: 1,
    title: "회사랑 대학이랑 같이 다녀본 후기",
    name: "익명의 사용자",
    content: [
      { subContent: "난 방통대 주말마다 다녔어" },
      { subContent: "근데 어지간하면 하지마 몸이 안따라줘" },
      { subContent: "차라리 학은제나 사이버대 하는게 낫다" },
    ],
    date: "2일 전",
  },
  {
    id: 1,
    title: "도보 3분거리 회사 vs 지하철 12정거장 회사",
    name: "익명의 사용자",
    content: [
      { subContent: "근데 후자가 연봉 500 더 쎔" },
      { subContent: "전자는 식비지원 안해줌" },
      { subContent: "근데 난 집순이라 전자 택할거야" },
      { subContent: "점심시간에 집가서 집밥먹어야지" },
    ],
    date: "2일 전",
  },
  {
    id: 1,
    title: "근데 여기 카테고리 개웃긴겤ㅋㅋ",
    name: "익명의 사용자",
    content: [
      { subContent: "코딩의 ㅋ도 안꺼내네ㅋㅋㅋ" },
      { subContent: "역시 뼛속까지 개발자들 ㅋ;" },
      { subContent: "집와서까지 코딩얘기하기싫다.." },
    ],
    date: "5일 전",
  },
  {
    id: 1,
    title: "회사랑 2시간 거린데 자취해야겠지?",
    name: "익명의 사용자",
    content: [
      { subContent: "워라밸도 너무 좋고 사람들도 너무 좋고" },
      { subContent: "무엇보다 연봉이.. 진짜 너무 마음에 들음" },
      { subContent: "아직 차 뽑기는 이르니까 자취가 맞겠지 흠." },
    ],
    date: "일주일 전",
  },
  {
    id: 1,
    title: "퇴사할건데 스터디 같이 할 사람",
    name: "익명의 사용자",
    content: [
      { subContent: "CS스터디나 FE스터디할 것 같네요" },
      { subContent: "매주 몇요일마다 공부한 내용 발표하는걸로?" },
      { subContent: "관심있으면 w2032@e-mirim.hs.kr 연락주세요" },
    ],
    date: "일주일 전",
  },
  {
    id: 1,
    title: "재택근무에 대하여",
    name: "익명의 사용자",
    content: [
      { subContent: "장점: 집이다" },
      { subContent: "단점: 집이다" },
      { subContent: "필자는 집에 있으면 늘어지는 편이라" },
      { subContent: "재택은 완전완전 비추하는편이다..." },
    ],
    date: "일주일 전",
  },
];
