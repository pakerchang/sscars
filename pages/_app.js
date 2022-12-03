import "../styles/globals.css";
import LayoutPublic from "layout/LayoutPublic/LayoutPublic";

function MyApp({ Component, pageProps }) {
  return (
    <LayoutPublic>
      <Component {...pageProps} />
    </LayoutPublic>
  );
}

export default MyApp;
