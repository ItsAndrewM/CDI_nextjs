/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/weeVWGbp15n
 */
import Link from "next/link";
import Hero from "../blocks/hero/hero";
import heroImage from "@/public/images/furlers/flexible-furler-1.jpg";
import accordionImage from "@/public/images/furlers/flexible-furler-2.jpg";
import ctaImage from "@/public/images/furlers/flexible-furler-3.jpg";
import CtaAndAccordion from "../blocks/ctaAndAccordion/ctaAndAccordion";
import { homePage } from "@/data/accordion/homePage";
import ProductCarousel from "../blocks/productCarousel/productCarousel";
import Cta from "../blocks/cta/cta";
import Carousel from "../blocks/productCarousel/caoursel";
import { ContactBanner } from "./contact-banner";

export function HomePage() {
  return (
    <div key="1" className="flex flex-col min-h-screen bg-gray-100 ">
      <main className="flex-1 overflow-auto">
        <Hero
          image={heroImage}
          link={"/products"}
          button_text={"shop now"}
          text={"Trusted by sailors for over 40 years"}
          header={"CDI Furlers"}
        />
        <ContactBanner />
        <ProductCarousel />
        <CtaAndAccordion
          data={homePage}
          button_text={"find your furler here"}
          link={"/products"}
          image={accordionImage}
        />
        <Cta
          image={ctaImage}
          header={"Get Your Furl On And Let's Set Sail"}
          text={
            "CDI furlers are a Must-Have for a smooth sailing experience. Treat your sailboat (and yourself) to the luxury it deserves."
          }
          link={"/products"}
          button_text={"Learn more"}
        />
        <section className="bg-cdiLightBlue text-white h-screen px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 flex flex-col gap-8">
              <h2 className="text-5xl font-bold text-cdiBlue  mb-4">
                Sailing With Ease And Confidence
              </h2>
              <p className="text-xl text-cdiDarkBlue  mb-4">
                For over 40 years sailors around the world have trusted CDI with
                their sailboat furling systems.
              </p>
              <p className="text-xl text-cdiDarkBlue  mb-4">
                With CDI&apos;s patented Flexible Furler technology sailing has
                advanced. CDI&apos;s Furlers are safer, easier, and more
                reliable systems that allow sailors to do what they do best –
                sail the open water.
              </p>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 mt-8 md:mt-0 md:ml-8">
              <div className="flex flex-col items-center">
                <CheckmarkCircle className="h-40 w-40" />
                <h3 className="text-2xl text-cdiDarkBlue font-bold">
                  Made to last products
                </h3>
                <p className="text-center text-cdiDarkBlue ">
                  Our bearing assembly uses 1/2” ball-bearings which reduce
                  friction when furling your sail and are capable of rolling
                  over any dirt or sand.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <InstallationIcon className="h-40 w-40" />
                <h3 className="text-2xl text-cdiDarkBlue font-bold">
                  Easy Installation
                </h3>
                <p className="text-center text-cdiDarkBlue ">
                  Designed to be installed over your existing stay, cutting in
                  half the installation.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <CloudLightningIcon className="h-40 w-40" />
                <h3 className="text-2xl text-cdiDarkBlue font-bold">
                  Weather resistant
                </h3>
                <p className="text-center text-cdiDarkBlue ">
                  Our patented one-piece, UV stabilized PVC luff extrusion is
                  stiff for better reefing and furling but flexible enough for
                  trailering.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <ThumbsUpIcon className="h-40 w-40" />
                <h3 className="text-2xl text-cdiDarkBlue font-bold">
                  Simplicity
                </h3>
                <p className="text-center text-cdiDarkBlue ">
                  The Flexible Furler has 1/8 the number of parts of competitive
                  systems and is the easiest to install, operate and maintain.
                  Plus, the Flexible Furler is backed by an unequaled warranty.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function ShoppingCartIcon(props) {
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function CheckIcon(props) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function SettingsIcon(props) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function InstallationIcon(props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m21.67 18.17-5.3-5.3h-.99l-2.54 2.54v.99l5.3 5.3c.39.39 1.02.39 1.41 0l2.12-2.12c.39-.38.39-1.02 0-1.41z"></path>
      <path d="m17.34 10.19 1.41-1.41 2.12 2.12c1.17-1.17 1.17-3.07 0-4.24l-3.54-3.54-1.41 1.41V1.71l-.7-.71-3.54 3.54.71.71h2.83l-1.41 1.41 1.06 1.06-2.89 2.89-4.13-4.13V5.06L4.83 2.04 2 4.87 5.03 7.9h1.41l4.13 4.13-.85.85H7.6l-5.3 5.3c-.39.39-.39 1.02 0 1.41l2.12 2.12c.39.39 1.02.39 1.41 0l5.3-5.3v-2.12l5.15-5.15 1.06 1.05z"></path>
    </svg>
  );
}

function CheckmarkCircle(props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
    </svg>
  );
}

function CloudLightningIcon(props) {
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
      <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
      <path d="m13 12-3 5h4l-3 5" />
    </svg>
  );
}

function ThumbsUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"></path>
    </svg>
  );
}
