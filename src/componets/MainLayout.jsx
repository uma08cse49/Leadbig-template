import { Suspense } from "react";
import Loader from "./Loader";
import NavBar from "./NavBar/NavBar";
import BackToTop from "./BackToTop";
import CustomCursor from "./CustomCursor";
import Footer from "./pages/index-1/components/Footer";
const MainLayout = ({
  children
}) => {
  return <>
      <Suspense fallback={<Loader />}>
        <NavBar />
        {children}
        <Footer />
        <BackToTop />
        <CustomCursor />
      </Suspense>
    </>;
};
export default MainLayout;