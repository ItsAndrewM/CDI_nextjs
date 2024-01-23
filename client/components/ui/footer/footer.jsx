import { footerItems } from "@/data/footer/footerItems";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#002244] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-6 gap-8">
        <div className="flex flex-col space-y-4">
          <Image
            alt="CDI Logo"
            className="h-10"
            height="40"
            src="/placeholder.svg"
            style={{
              aspectRatio: "120/40",
              objectFit: "cover",
            }}
            width="120"
          />
          <p className="text-lg font-bold">FURLERS.COM</p>
          <p className="text-sm">THE BEST CHOICE FOR CRUISERS</p>
        </div>
        <div className="flex flex-col space-y-4">
          <p className="text-lg font-bold">POWERED BY</p>
          <div className="flex items-center space-x-2">
            <Image
              alt="CDI Logo"
              className="h-5"
              height="20"
              src="/placeholder.svg"
              style={{
                aspectRatio: "60/20",
                objectFit: "cover",
              }}
              width="60"
            />
            <span className="text-xl font-bold">X</span>
            <Image
              alt="Precision Sails Logo"
              className="h-5"
              height="20"
              src="/placeholder.svg"
              style={{
                aspectRatio: "60/20",
                objectFit: "cover",
              }}
              width="60"
            />
          </div>
        </div>
        {footerItems.map((item, index) => (
          <div className="flex flex-col space-y-2" key={index}>
            <p className="text-lg font-bold uppercase">
              <Link href={item.url} className="hover:underline">
                {item.header}
              </Link>
            </p>
            {item.subHeader.map((link, index) => (
              <Link
                className="block text-sm capitalize hover:text-gray-300"
                href={link.url}
                key={index}
              >
                {link.header}
              </Link>
            ))}
          </div>
        ))}
        <div className="flex flex-col space-y-2">
          <p className="text-lg font-bold">FOLLOW US</p>
          <Link
            className="block text-sm  hover:text-blue-600"
            href="https://www.facebook.com/CDIFurlers"
          >
            <FacebookIcon className="inline-block mr-2" />
            Facebook
          </Link>
          <Link
            className="block text-sm hover:text-pink-500"
            href="https://www.instagram.com/cdifurlers/"
          >
            <InstagramIcon className="inline-block mr-2" />
            Instagram
          </Link>
          <Link
            className="block text-sm  hover:text-blue-400"
            href="https://www.linkedin.com/company/cdifurlers-com/"
          >
            <LinkedinIcon className="inline-block mr-2" />
            LinkedIn
          </Link>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between">
          <p className="text-sm">© 2023 CDIFurlers.com. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <Link className="text-sm hover:underline" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="text-sm hover:underline" href="/terms-conditions">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default Footer;
