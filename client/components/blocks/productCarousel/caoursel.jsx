import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Carousel() {
  return (
    <div
      key="1"
      className="flex flex-col items-center justify-center space-y-4"
    >
      <div className="flex space-x-4">
        <Image
          alt="Product 1"
          className="rounded-lg"
          height="300"
          src="/placeholder.svg"
          style={{
            aspectRatio: "300/300",
            objectFit: "cover",
          }}
          width="300"
        />
        <Image
          alt="Product 2"
          className="rounded-lg"
          height="300"
          src="/placeholder.svg"
          style={{
            aspectRatio: "300/300",
            objectFit: "cover",
          }}
          width="300"
        />
        <Image
          alt="Product 3"
          className="rounded-lg"
          height="300"
          src="/placeholder.svg"
          style={{
            aspectRatio: "300/300",
            objectFit: "cover",
          }}
          width="300"
        />
      </div>
      <div className="flex items-center space-x-1">
        <div className="h-2 w-2 rounded-full bg-blue-600" />
        <div className="h-2 w-2 rounded-full bg-gray-300" />
        <div className="h-2 w-2 rounded-full bg-gray-300" />
      </div>
      <div className="flex items-center space-x-2">
        <Button className="p-1" variant="ghost">
          <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
          <span className="sr-only">Previous image</span>
        </Button>
        <Button className="p-1" variant="ghost">
          <ChevronRightIcon className="h-6 w-6 text-gray-600" />
          <span className="sr-only">Next image</span>
        </Button>
      </div>
    </div>
  );
}

function ChevronLeftIcon(props) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
