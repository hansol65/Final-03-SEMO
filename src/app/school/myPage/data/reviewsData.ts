// 리뷰 타입 정의
export interface Review {
  id: number;
  title: string;
  author: string;
  image: string;
  location: string;
  date: string;
}

// 공통 더미 데이터
export const reviewsData: Review[] = [
  {
    id: 1,
    title: "인간관계론 2학년 교양 교재",
    author: "김지원",
    image: "🧔",
    location: "행복 기숙사",
    date: "2025년 07월 20일",
  },
  { id: 2, title: "컵라면 20개 세트", author: "박서준", image: "👨‍👩‍👧‍👦", location: "꿈 기숙사", date: "2025년 07월 18일" },
  {
    id: 3,
    title: "닭가슴살 샐러드 5개",
    author: "이지아",
    image: "👩‍👧‍👦",
    location: "희망 기숙사",
    date: "2025년 07월 16일",
  },
  { id: 4, title: "노트북 거치대", author: "최민수", image: "👨‍💼", location: "평화 기숙사", date: "2025년 07월 14일" },
  { id: 5, title: "블루투스 이어폰", author: "정수연", image: "👩‍🎓", location: "사랑 기숙사", date: "2025년 07월 12일" },
  {
    id: 6,
    title: "스터디 플래너 3권",
    author: "한준호",
    image: "👨‍🎓",
    location: "미래 기숙사",
    date: "2025년 07월 10일",
  },
  {
    id: 7,
    title: "텀블러 및 보온병",
    author: "신예은",
    image: "👩‍💻",
    location: "행복 기숙사",
    date: "2025년 07월 08일",
  },
  { id: 8, title: "전자사전", author: "오태현", image: "👨‍🔬", location: "지혜 기숙사", date: "2025년 07월 06일" },
  // 페이지네이션 테스트용 임시 데이터(id 중복!)
  {
    id: 1,
    title: "인간관계론 2학년 교양 교재",
    author: "김지원",
    image: "🧔",
    location: "행복 기숙사",
    date: "2025년 07월 20일",
  },
  { id: 2, title: "컵라면 20개 세트", author: "박서준", image: "👨‍👩‍👧‍👦", location: "꿈 기숙사", date: "2025년 07월 18일" },
  {
    id: 3,
    title: "닭가슴살 샐러드 5개",
    author: "이지아",
    image: "👩‍👧‍👦",
    location: "희망 기숙사",
    date: "2025년 07월 16일",
  },
  { id: 4, title: "노트북 거치대", author: "최민수", image: "👨‍💼", location: "평화 기숙사", date: "2025년 07월 14일" },
  { id: 5, title: "블루투스 이어폰", author: "정수연", image: "👩‍🎓", location: "사랑 기숙사", date: "2025년 07월 12일" },
  {
    id: 6,
    title: "스터디 플래너 3권",
    author: "한준호",
    image: "👨‍🎓",
    location: "미래 기숙사",
    date: "2025년 07월 10일",
  },
  {
    id: 7,
    title: "텀블러 및 보온병",
    author: "신예은",
    image: "👩‍💻",
    location: "행복 기숙사",
    date: "2025년 07월 08일",
  },
  { id: 8, title: "전자사전", author: "오태현", image: "👨‍🔬", location: "지혜 기숙사", date: "2025년 07월 06일" },
  {
    id: 1,
    title: "인간관계론 2학년 교양 교재",
    author: "김지원",
    image: "🧔",
    location: "행복 기숙사",
    date: "2025년 07월 20일",
  },
  { id: 2, title: "컵라면 20개 세트", author: "박서준", image: "👨‍👩‍👧‍👦", location: "꿈 기숙사", date: "2025년 07월 18일" },
  {
    id: 3,
    title: "닭가슴살 샐러드 5개",
    author: "이지아",
    image: "👩‍👧‍👦",
    location: "희망 기숙사",
    date: "2025년 07월 16일",
  },
  { id: 4, title: "노트북 거치대", author: "최민수", image: "👨‍💼", location: "평화 기숙사", date: "2025년 07월 14일" },
  { id: 5, title: "블루투스 이어폰", author: "정수연", image: "👩‍🎓", location: "사랑 기숙사", date: "2025년 07월 12일" },
  {
    id: 6,
    title: "스터디 플래너 3권",
    author: "한준호",
    image: "👨‍🎓",
    location: "미래 기숙사",
    date: "2025년 07월 10일",
  },
  {
    id: 7,
    title: "텀블러 및 보온병",
    author: "신예은",
    image: "👩‍💻",
    location: "행복 기숙사",
    date: "2025년 07월 08일",
  },
  { id: 8, title: "전자사전", author: "오태현", image: "👨‍🔬", location: "지혜 기숙사", date: "2025년 07월 06일" },
  {
    id: 1,
    title: "인간관계론 2학년 교양 교재",
    author: "김지원",
    image: "🧔",
    location: "행복 기숙사",
    date: "2025년 07월 20일",
  },
  { id: 2, title: "컵라면 20개 세트", author: "박서준", image: "👨‍👩‍👧‍👦", location: "꿈 기숙사", date: "2025년 07월 18일" },
  {
    id: 3,
    title: "닭가슴살 샐러드 5개",
    author: "이지아",
    image: "👩‍👧‍👦",
    location: "희망 기숙사",
    date: "2025년 07월 16일",
  },
  { id: 4, title: "노트북 거치대", author: "최민수", image: "👨‍💼", location: "평화 기숙사", date: "2025년 07월 14일" },
  { id: 5, title: "블루투스 이어폰", author: "정수연", image: "👩‍🎓", location: "사랑 기숙사", date: "2025년 07월 12일" },
  {
    id: 6,
    title: "스터디 플래너 3권",
    author: "한준호",
    image: "👨‍🎓",
    location: "미래 기숙사",
    date: "2025년 07월 10일",
  },
  {
    id: 7,
    title: "텀블러 및 보온병",
    author: "신예은",
    image: "👩‍💻",
    location: "행복 기숙사",
    date: "2025년 07월 08일",
  },
  { id: 8, title: "전자사전", author: "오태현", image: "👨‍🔬", location: "지혜 기숙사", date: "2025년 07월 06일" },
];

{
  /*API 호출을 시뮬레이션하는 함수들*/
}
// “특정 리뷰 한 건”을 조회하는 함수
export const getReviewById = (id: number): Review | undefined => {
  return reviewsData.find((review) => review.id === id);
};

// “모든 리뷰 리스트”를 가져오는 함수
export const getAllReviews = (): Review[] => {
  return reviewsData;
};
