import { useRouter } from "next/router";
import Image from "next/image";
import NavigationLinks from "./navigation/navigationLinks";

const Header = () => {
  const router = useRouter();
  return (
    <header className="bg-white py-4 px-8 w-full">
      {/* {router.asPath === "/" ? (
        <div className={styles.logoWrapper}>
          <Link href={"/"}>
            <Image
              src={logo}
              width={277}
              height={175}
              priority
              alt="cdi logo"
            />
          </Link>
        </div>
      ) : (
        <></>
      )} */}
      <div className=" w-full  flex flex-col items-center justify-center ">
        <div className="mb-4 ">
          <Image
            alt="Company Logo"
            className="h-44"
            height="175"
            src="/images/logos/cdi_logo.png"
            style={{
              aspectRatio: "277/175",
              objectFit: "cover",
            }}
            width="277"
          />
        </div>

        <NavigationLinks />
      </div>
    </header>
  );
};

export default Header;
