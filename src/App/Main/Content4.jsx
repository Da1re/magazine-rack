import flower from "../../images/flower.gif";

const Content4 = () => {
  return (
    <section className="con4">
      <div className="inner">
        <div className="mainTextBox">
          <p className="title a">
            <i>CRECTION</i>
          </p>
          <p className="title b">
            <i>PRODUCTION</i>
          </p>
          <div className="in">
            <img src={flower} alt="" />

            <p className="title c">
              <i>DIFFUSION</i>
            </p>
          </div>
        </div>
        <ul className="listBox">
          <li className="box a">
            <h2>비대면 원격 근무 환경을 고려한 워케이션 서비스 개발 </h2>
            <h3>Vue.js</h3>
            <div className="text">
              <h4>
                원격근무 환경에서 워케이션 이용자들에게
                <br />
                대시보드와 설문조사 기능을 통한 효율적인 워케이션 도구 제공
                <br />
              </h4>
              <p>
                사용자 친화적인 Dashboard와 Workation 설문조사 Web Modal page
                개발 (기여도 25% | 2022.07.01 ~ 2024.01.31)
                <br />
                <br />
                <br />
              </p>
              <h4>
                📌 주요 역할 : 대시보드 인터페이스, 설문조사 기능, 사용자 데이터
                관리 개발
              </h4>
              <br />
              <p>
                • 사용자의 피드백을 반영해 직관적인 인터페이스로 개선하였습니다.
                <br />
                • Vue.js, Vuex
                <br />
                <br />
              </p>
            </div>
          </li>
          <li className="box b">
            <h2>
              스마트 소비재 부품 제조 협업 플랫폼 기술 개발 (스마트 제조혁신
              기술개발사업)
            </h2>
            <h3>React</h3>
            <div className="text">
              <h4>
                스마트 제조 혁신을 위한 협업 플랫폼 개발
                <br />
              </h4>
              <p>
                CNC, 금형 등 온라인으로 상담 및 견적을 요청할 수 있는 제조 협업
                사이트 개발 <br />
                (기여도 30% | 2023.07.01 ~ 2024.01.31)
                <br />
                <br />
                <br />
              </p>
              <h4>
                📌 주요 역할 : JWT 로그인 및 회원 가입, 메인 페이지, 사용자별
                알림 기능, 배송 API, 검색 상세 페이지, 플랫폼 설정/관리 페이지
                개발
              </h4>
              <br />

              <p>
                • 프로젝트 진행 중 협업의 중요성을 깨닫고, 효율적인 코드 리뷰와
                커뮤니케이션 방식을 반영하여 프로젝트의 완성도를 높였습니다.
                <br />
                • 화면 설계서 작성 및 Web 스타일 가이드 작성 후 개발에 착수하여
                전반적인 개발 프로세스의 흐름을 파악해 업무를 효율적으로 진행할
                수 있었습니다.
                <br />
                <br />
                • React, Redux, Tailwind CSS, JWTToken, Axios
                <br />
                <br />
              </p>
            </div>
          </li>
          <li className="box c">
            <h2>AI Dataset Web & Annotation Tool Lite Ver. 개발</h2>
            <h3>typeScript</h3>
            <div className="text">
              <h4>
                • 인공지능 학습용 데이터의 효율적인 관리 및 검수 시스템 유지보수
                <br />
                • 로컬 환경에서 실행되는 Annotation Tool Lite ver. 개발
                <br />
              </h4>
              <p>
                1️⃣ AI Dataset Web 및 Annotation Tool 유지보수, 2️⃣ Annotation
                Tool Lite ver. 개발 <br />
                (기여도 1️⃣ 10%, 2️⃣ 100% | 2023.07.01 ~ 2024.01.31)
                <br />
                <br />
                <br />
              </p>
              <h4>
                📌 주요 역할 : 데이터 검수, 사용자 관리, Annotation Tool
                유지보수, 네트워크 요소를 제외한 Local AI Dataset Annotation
                Tool Lite 버전 개발 및 빌드, Image Caption 기능 이식
              </h4>
              <br />

              <p>
                • 데이터 검수 과정에서 발생하는 문제를 신속하게 해결하고,
                사용자의 요구사항을 반영하여 유지보수 작업을 진행했습니다.
                <br />
                • 전체 코드에서 네트워크 요소를 사용하는 코드를 모두 파악해
                우회하거나 제외하는 방식으로 짧은 기간 내에 효율적으로 Lite ver.
                개발을 완료하였습니다.
                <br />
                <br />
                • React, Redux, Tailwind CSS, JWTToken, Axios, typeScript
                <br />
                <br />
              </p>
            </div>
          </li>
        </ul>
        <div className="subTextBox">
          <div className="subText">
            <p>
              At Qude, we don't have big or small projects. We only have people,
              creativity, sharing.
            </p>
            <p>
              Each project should be a succession of moments of pleasure.
              Exceptional moments. Design, production, distribution. And
              listening.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Content4;
