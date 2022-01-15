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

//interviewData
export const interviewData = [
  {
    id: 1,
    title: "면접에서 자주 물어보는 질문 리스트 TOP 3",
    name: "익명의 사용자",
    content: [
      { subContent: "1. 1분 자기소개" },
      { subContent: "2. 회사에 지원한 동기는?" },
      { subContent: "3. 직무를 위해 어떤 자기계발을 하였는지?" },
    ],
    date: "13분 전",
  },
  {
    id: 1,
    title: "면접 잘 보는 제일 좋은 팁",
    name: "익명의 사용자",
    content: [
      { subContent: "진짜 다 필요없고 스터디하면 됨" },
      { subContent: "CS도 면접도 그냥 스터디하면 반 이상은 감" },
    ],
    date: "하루 전",
  },
  {
    id: 1,
    title: "면접 보기전에 여러사이트 뒤져보세여",
    name: "익명의 사용자",
    content: [
      { subContent: "취업관련 사이트들 뒤지면 예상질문같은거" },
      { subContent: "의외로 많이 나와여! 예를 들어서 로켓펀치나," },
      { subContent: "원티드,잡플래닛.. 이런 사이트들! 잘 찾아보세여" },
    ],
    date: "이틀 전",
  },
  {
    id: 1,
    title: "코딩테스트도 물론 중요하지만",
    name: "익명의 사용자",
    content: [
      { subContent: "무엇보다 중요한건 인성면접 같네요." },
      { subContent: "물론 실력을 더 중요시 하는 회사도 있겠지만," },
      { subContent: "여태껏 제가 쌓은 경험으로는 " },
      {
        subContent: "인성을 더 중요시 보네요.",
      },
    ],
    date: "4일 전",
  },
  {
    id: 1,
    title: "면접 볼 때 주의사항!!",
    name: "익명의 사용자",
    content: [
      { subContent: "마고인들! 면접볼 때 꼭 주의할게 있어요" },
      { subContent: "면접관이 본인의 자존감을 까내리거나," },
      { subContent: "하등한 취급을 한다면 무조건 도망치세요!" },
      { subContent: "그런 쓰레기 기업엔 남아서 좋을게 없어요ㅎㅎ" },
    ],
    date: "일주일 전",
  },
  {
    id: 1,
    title: "자기소개 준비 TIP 📢",
    name: "익명의 사용자",
    content: [
      { subContent: "첫번째로 거울을 준비한다" },
      { subContent: "두번째로 또박또박 발음하는 것을 연습한다" },
      { subContent: "세번째로 어떤 미소가 제일 이쁜지 연구한다" },
    ],
    date: "일주일 전",
  },
  {
    id: 1,
    title: "면접날에 가장 중요한 것",
    name: "익명의 사용자",
    content: [
      { subContent: "시간 약속 지키기!!" },
      { subContent: "너무나도 당연한거지만 ㅋㅋㅋㅋㅋㅋ" },
      { subContent: "이 당연한걸 안지키는 사람들이 너무 많아" },
    ],
    date: "이주일 전",
  },
  {
    id: 1,
    title: "면접볼 때 제발 구부정하게 앉지마",
    name: "익명의 사용자",
    content: [
      { subContent: "진짜진짲진짜ㅉ진짜제ㅔ발" },
      { subContent: "제에에에ㅔ발부탁이야ㅠㅠㅠ " },
      { subContent: "격식있는 자리인데 예의있게 앉아있자.." },
    ],
    date: "이주일 전",
  },
  {
    id: 1,
    title: "면접관분들의 질문에 쫄면 지는거다",
    name: "익명의 사용자",
    content: [
      { subContent: "쪼는 순간 바로 탈락이라고 할 수 있어" },
      { subContent: "무조건 자신감이 힘이다!!!" },
      { subContent: "자신감 가지고 하면 절반은 무조건 간다!!" },
    ],
    date: "이주일 전",
  },
];

//etcData
export const etcData = [
  {
    id: 1,
    title: "방탈출 같이 갈 사람?",
    name: "익명의 사용자",
    content: [
      { subContent: "나 방탈경력 +50방인데" },
      { subContent: "혹시 마고인중에서 나랑 같이 방탈할사람?" },
      { subContent: "@s_y__04_로 DM줘!! 기다릴게 ㅠㅠ" },
    ],
    date: "방금 전",
  },
  {
    id: 1,
    title: "민트초코 왜 먹냐니 선넘네",
    name: "익명의 사용자",
    content: [
      { subContent: "민초의 시원한 그 느낌을 알아?" },
      { subContent: "그리고 치약맛 아님 ㅡㅡ;" },
      { subContent: "초코보다 민초가 훨 맛있다" },
    ],
    date: "2시간 전",
  },
  {
    id: 1,
    title: "민트초코 왜 먹어?",
    name: "익명의 사용자",
    content: [
      { subContent: "그 치약맛 나는거.." },
      { subContent: "베라에서 그거 먹는게 제일 이해 안돼" },
      { subContent: "물론 베라 다 맛없음" },
    ],
    date: "2시간 전",
  },
  {
    id: 1,
    title: "이번 하이톤 참가한 후기!!!!!",
    name: "익명의 사용자",
    content: [
      { subContent: "코로나라서 오프인게 좀 아쉽긴한데 ㅠㅠ" },
      { subContent: "대신 요즘 유행 게더타운으로 진행했었다!" },
      { subContent: "물론 난 참가함! 너무 재밌었다" },
      { subContent: "새벽에 잠을 못 잤더니 피곤했던거빼고 ㅎㅎㅎ" },
    ],
    date: "7시간 전",
  },
  {
    id: 1,
    title: "롤 내전마렵네",
    name: "익명의 사용자",
    content: [
      { subContent: "담에 마고vs마고로 학교대항전 했으면 좋겠다 ㅋㅋ" },
      { subContent: '버스태워줄테니까 "hide on bush" 친추 ㄱ' },
    ],
    date: "하루 전",
  },
  {
    id: 1,
    title: "짜파게티 vs 짜짜로니",
    name: "익명의 사용자",
    content: [
      { subContent: "이런건 질문이라고 하기도 뭐함" },
      { subContent: "누가 뭐라해도 답정너 불닭볶음면이니깐ㅋ" },
    ],
    date: "하루 전",
  },
  {
    id: 1,
    title: "요즘 내 PLAY LIST 🎧 ",
    name: "익명의 사용자",
    content: [
      { subContent: "never be the same - camila cabello" },
      { subContent: "낮 밤 - 이영지" },
      { subContent: "문득 - BEO" },
    ],
    date: "하루 전",
  },
  {
    id: 1,
    title: "고삼이라니고삼이라니고라니",
    name: "익명의 사용자",
    content: [
      { subContent: "엊그저께 입학했는데" },
      { subContent: "코로나 때문에 배운 것도 없는데" },
      { subContent: "왜!!?! 벌써 고삼인건데!!!!" },
    ],
    date: "이틀 전",
  },
  {
    id: 1,
    title: "요즘 너무 힘들어",
    name: "익명의 사용자",
    content: [
      { subContent: "마고 입학하고 친구 관계때문에" },
      { subContent: "자꾸 중학교 시절이 그리워진다" },
      { subContent: "며칠째 꿈에 시달리고 있어." },
      { subContent: "너무너무 돌아가고 싶다.." },
    ],
    date: "3일 전",
  },
];
