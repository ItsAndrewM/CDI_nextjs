import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/router";

const Cta = ({ image, link, header, text, button_text }) => {
  const router = useRouter();

  return (
    <section className="container mx-auto px-4 py-8 lg:h-screen flex items-center lg:flex-row md:flex-col sm:flex-col sm:border ">
      <div className="w-full md:w-1/2 ">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{header}</h2>
        <p className="text-xl text-gray-600 mb-4">{text}</p>
        <div className="flex justify-center mt-4">
          <Button
            className="mt-4 bg-cdiBlue text-white hover:bg-white hover:text-cdiBlue"
            onClick={() => router.push(link)}
          >
            {button_text.toUpperCase()}
          </Button>
        </div>
      </div>
      <div className="w-full md:w-1/2  mt-8 md:mt-0 md:ml-8">
        <Image
          alt="Sailing Image"
          className="w-full h-full object-cover rounded-md"
          height="400"
          src={image ? image.src : "/placeholder.svg"}
          style={{
            aspectRatio: "400/400",
            objectFit: "cover",
          }}
          width="400"
        />
      </div>
    </section>
  );
};

export default Cta;
