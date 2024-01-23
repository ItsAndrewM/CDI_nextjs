import Link from "next/link";

const Page = () => {
  return (
    <>
      This is the checkout page
      <Link href={"/checkout/shipping"}>Shipping</Link>
    </>
  );
};

export default Page;
