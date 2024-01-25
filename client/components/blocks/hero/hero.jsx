import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

const Hero = ({ image, header, text, button_text, link }) => {
  const router = useRouter();
  return (
    <section
      className="bg-white sm:h-svh md:h-svh sm:max-h-svh md:hax-h-fit lg:h-screen pb-6 pl-6 lg:px-24 lg:py-24 flex items-end justify-start"
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="relative max-w-lg flex justify-start ">
        <div className="text-left">
          <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-white  sm:text-4xl sm:leading-10">
            {header}
          </h2>
          <p className="mt-3 text-xl leading-7 text-white sm:mt-4">{text}</p>
          <Button
            className="mt-4 bg-cdiBlue text-white hover:bg-white hover:text-cdiBlue"
            onClick={() => router.push(link)}
          >
            {button_text.toUpperCase()}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
