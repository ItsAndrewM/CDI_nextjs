// import { useAcceptCookies } from "@/lib/hooks/useAcceptCookies";
import Footer from "../footer/footer";
import Header from "../header/header";

const Layout = ({ children }) => {
  // const { acceptedCookies, onAcceptCookies } = useAcceptCookies();
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
