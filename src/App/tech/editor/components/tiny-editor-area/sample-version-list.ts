import type { EditorVersion } from "./type";

export const sampleVersionList: EditorVersion[] = [
  {
    id: "1",
    title: "2025 어린이날 행사",
    content: `
      <h2>2025 어린이날 행사</h2>
      <p>2025년 어린이날 과천과학관으로 초대합니다.</p>
      <p>과학광장에서 펼쳐지는 다양한 체험과 공연!<br/>
      <b>체험프로그램 예매</b>는 5. 2(금) 11시부터 가능합니다.<br/>
      예매방법을 확인하시고, 피크닉 바구니 추첨도 놓치지 마세요.<br/>
      ※ 체험프로그램 예약하기(5. 2. 11:00~) ※<br/>
      <a href="https://smartstore.naver.com/miceand/products/11781604089" target="_blank">예매 바로가기</a></p>
      <ul>
        <li>일자: 2025. 5. 5.(월)</li>
        <li>장소: 국립과천과학관 과학광장(야외)</li>
        <li>지하철 4호선 대공원역 6번 출구로 나온 후 오른쪽 광장</li>
        <li>★ 일기예보를 보시고, 모자, 우비, 우산 잘 챙겨오세요~</li>
        <li>★ 주차장이 혼잡하니 대중교통을 이용해 주시기 바랍니다.</li>
      </ul>
      <p>과학광장에서 이루어지는 어린이날 행사에 관한 내용이며,<br/>
      이 행사에 대한 문의는 아래로 해주세요.</p>
    `,
    createdAt: "2025.05.07오후 2:43",
  },
  {
    id: "2",
    title: "2025 어린이날 행사(수정본)",
    content: `
      <h2>2025 어린이날 행사 - 최신 공지</h2>
      <p><b>체험프로그램 예약 링크가 변경되었습니다.</b></p>
      <p>새로운 링크: <a href="https://smartstore.naver.com/miceand/products/NEWLINK" target="_blank">여기서 예약</a></p>
      <p>기타 내용은 동일합니다.</p>
    `,
    createdAt: "2025.05.07오후 2:41",
  },
  {
    id: "3",
    title: "2025 어린이날 행사(초안)",
    content: `
      <h2>2025 어린이날 행사(초안)</h2>
      <p>초기 초안입니다. 내용이 더 추가될 예정입니다.</p>
    `,
    createdAt: "2025.05.07오후 2:24",
  },
  {
    id: "4",
    title: "2024 어린이날 행사",
    content: `
      <h2>2024 어린이날 행사</h2>
      <p>작년 행사 내용입니다.</p>
    `,
    createdAt: "2024.05.05오후 2:43",
  },
];
