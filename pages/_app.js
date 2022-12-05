import "../styles/globals.css";
import LayoutPublic from "layout/LayoutPublic/LayoutPublic";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <LayoutPublic>
        <Component {...pageProps} />
      </LayoutPublic>
    </RecoilRoot>
  );
}

export default MyApp;
