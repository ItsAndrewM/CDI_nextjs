import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/router";

const CtaAndAccordion = ({ data, button_text, link, image }) => {
  const router = useRouter();
  return (
    <section className="container mx-auto px-4 py-8 h-screen flex items-center lg:flex-row md:flex-col  sm:flex-col">
      <div className="w-full md:w-1/2">
        <Image
          alt="Product Image"
          className="w-full h-full object-cover rounded-md"
          height="400"
          src={image.src}
          style={{
            aspectRatio: "400/400",
            objectFit: "cover",
          }}
          width="400"
        />
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8">
        <h2 className="text-2xl font-bold text-gray-800  mb-4">
          Frequently Asked Questions
        </h2>
        <Accordion className="w-full" collapsible type="single">
          {data.map((item, index) => {
            return (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className=" capitalize">
                  {item.header}
                </AccordionTrigger>
                <AccordionContent>{item.text}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
        <div className="flex justify-center mt-4">
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

export default CtaAndAccordion;
