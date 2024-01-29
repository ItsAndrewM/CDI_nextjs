// import { useAcceptCookies } from "@/lib/hooks/useAcceptCookies";
import Footer from "../footer/footer";
import Header from "../header/header";

const Layout = ({ children }) => {
  // const { acceptedCookies, onAcceptCookies } = useAcceptCookies();
  return (
    <>
      <Header />
      <main className="max-w-screen-3xl ">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
