import { FacebookIcon } from "@/components/icons/facebookIcon";
import { InstagramIcon } from "@/components/icons/instagramIcon";
import { LinkedinIcon } from "@/components/icons/linkedinIcon";
import { footerItems } from "@/data/footer/footerItems";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-cdiBlue text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-6 gap-8">
        <div className="flex flex-col space-y-4">
          <Image
            alt="CDI Logo"
            height="267"
            src="/images/logos/cdi_logo_dark.png"
            style={{
              aspectRatio: "392/267",
              objectFit: "contain",
            }}
            width="392"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <Image
              alt="CDI Logo"
              height="267"
              src="/images/logos/cdi_logo_powered_dark.png"
              style={{
                aspectRatio: "392/267",
                objectFit: "contain",
              }}
              width="392"
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

export default Footer;
