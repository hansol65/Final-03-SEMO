// 마이페이지 아이템 타입 정의
export interface MyPageItem {
  id: number;
  title: string;
  image: string;
  price: string;
  status: "판매중" | "판매완료";
  category: "팔래요" | "살래요" | "모여요";
}

// 마이페이지 아이템 더미 데이터
export const myPageItemsData: MyPageItem[] = [
  // 팔래요 아이템들
  {
    id: 1,
    title: "인센스 사실분?",
    price: "10,000원",
    image: "🕯️",
    status: "판매중",
    category: "팔래요",
  },
  {
    id: 2,
    title: "기숙사 공기에 좋은 선인장",
    price: "5,000원",
    image: "🌵",
    status: "판매중",
    category: "팔래요",
  },
  {
    id: 3,
    title: "인간관계론 2학년 교양 교재",
    price: "15,000원",
    image: "📚",
    status: "판매완료",
    category: "팔래요",
  },
  {
    id: 4,
    title: "노트북 거치대",
    price: "20,000원",
    image: "💻",
    status: "판매중",
    category: "팔래요",
  },
  {
    id: 5,
    title: "인센스 사실분?",
    price: "10,000원",
    image: "🕯️",
    status: "판매중",
    category: "팔래요",
  },
  {
    id: 6,
    title: "기숙사 공기에 좋은 선인장",
    price: "5,000원",
    image: "🌵",
    status: "판매중",
    category: "팔래요",
  },
  {
    id: 7,
    title: "인간관계론 2학년 교양 교재",
    price: "15,000원",
    image: "📚",
    status: "판매완료",
    category: "팔래요",
  },
  {
    id: 8,
    title: "노트북 거치대2",
    price: "20,000원",
    image: "💻",
    status: "판매중",
    category: "팔래요",
  },
  // 살래요 아이템들
  {
    id: 5,
    title: "여행에서 헤어져서 폴라로이드 팝니다",
    price: "15,000원",
    image: "📷",
    status: "판매완료",
    category: "살래요",
  },
  {
    id: 6,
    title: "노트북 팝니다ㅠ",
    price: "300,000원",
    image: "💻",
    status: "판매완료",
    category: "살래요",
  },
  {
    id: 7,
    title: "블루투스 이어폰",
    price: "50,000원",
    image: "🎧",
    status: "판매중",
    category: "살래요",
  },
  {
    id: 8,
    title: "컵라면 20개 세트",
    price: "25,000원",
    image: "🍜",
    status: "판매중",
    category: "살래요",
  },
  // 모여요 아이템들
  {
    id: 9,
    title: "스터디 그룹 모집",
    price: "무료",
    image: "📖",
    status: "판매중",
    category: "모여요",
  },
  {
    id: 10,
    title: "배달음식 같이 시키실 분",
    price: "배달비 나눔",
    image: "🍕",
    status: "판매완료",
    category: "모여요",
  },
];
