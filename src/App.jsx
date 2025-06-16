import AppRoutes from "./routes";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "swiper/swiper-bundle.css";
import "../src/assets/scss/main.scss";
import PageMeta from "./componets/PageMeta";
import { useEffect } from "react";
import Aos from "aos";
const App = () => {
  useEffect(() => {
    Aos.init();
  });
  return <>
      <PageMeta />
      <AppRoutes />
    </>;
};
export default App;