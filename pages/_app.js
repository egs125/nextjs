import NavBar from "./NavBar";
import "../styles/globals.css"; // 커스텀 컴포넌트 위치에 있으면 css 모듈이 아니어도 임포트 가능

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}