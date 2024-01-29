/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/GmJ9pwXhKLw
 */
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { PhoneIcon } from "../icons/phoneIcon";
import { MailIcon } from "../icons/mailIcon";
import { InstagramIcon } from "../icons/instagramIcon";
import { TwitterIcon } from "../icons/twitterIcon";
import { FacebookIcon } from "../icons/facebookIcon";

export function ContactUs() {
  const [errors, setErrors] = useState({});
  const [modalText, setModalText] = useState({
    title: "",
    message: "",
    error: "",
  });
  const ref = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = e.target.checkValidity();
    const form = e.target;
    const formData = new FormData(e.currentTarget);
    const validationMessages = Array.from(formData.keys()).reduce(
      (acc, key) => {
        acc[key] = form.elements[key].validationMessage;
        return acc;
      },
      {}
    );
    if (isValid) {
      // here you do what you need to do if is valid
      const data = Array.from(formData.keys()).reduce((acc, key) => {
        acc[key] = formData.get(key);
        return acc;
      }, {});
      try {
        const response = await fetch("/contact-us", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (!response.ok) {
          throw new Error(`Invalid response: ${response.status}`);
        }
        ref.current.showModal();
        setModalText({
          message: "We will get back to you soon!",
          title: "Thanks for contacting us!",
        });
      } catch (err) {
        console.error(err);
        setModalText({
          message: "We can't submit the form, try again later?",
          title: "Error",
          error: err,
        });
      }
    } else {
      setErrors(validationMessages);
    }
  };

  const getError = (field) => errors[field];
  return (
    <div className="relative">
      <main className="flex flex-col items-center justify-center space-y-8 p-4 md:p-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="text-gray-500 ">
            We&apos;re here to help and answer any question you might have. We
            look forward to hearing from you.
          </p>
        </div>
        <div className="grid gap-4 w-full max-w-2xl lg:grid-cols-3">
          <div className="flex items-center gap-2">
            <PhoneIcon className="h-6 w-6" />
            <Link
              className="text-sm font-medium hover:text-blue-500 transition-colors duration-200"
              href="tel:1-(123)-456-7890"
            >
              Phone: +1 (123) 456-7890
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <MailIcon className="h-6 w-6" />
            <Link
              className="text-sm font-medium hover:text-blue-500 transition-colors duration-200"
              href="mailto:info@cdifurlers.com"
            >
              Email: info@cdifurlers.com
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <Link className="text-black  hover:text-blue-600 " href="#">
                <FacebookIcon className="h-6 w-6" />
              </Link>
              <Link className="text-black  hover:text-blue-400 " href="#">
                <TwitterIcon className="h-6 w-6" />
              </Link>
              <Link className="text-black  hover:text-pink-500 " href="#">
                <InstagramIcon className="h-6 w-6" />
              </Link>
            </div>
            <div className="text-sm font-medium">Social Media</div>
          </div>
        </div>
        <form
          className="w-full max-w-xl space-y-4"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              required
              name="name"
            />
            <span className="text-red-500 text-xs">{getError("name")}</span>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Enter your email"
              type="email"
              name="email"
              required
            />
            <span className="text-red-500 text-xs">{getError("email")}</span>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              className="min-h-[100px]"
              id="message"
              placeholder="Enter your message"
              name="message"
              required
            />
            <span className="text-red-500 text-xs">{getError("message")}</span>
          </div>
          <Button
            className="w-full bg-cdiBlue text-white hover:bg-cdiLightBlue hover:text-black"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </main>
      <dialog
        className="absolute mx-auto right-0 left-0 top-0 z-50 w-80 backdrop:bg-grey-600 "
        ref={ref}
        open={false}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">
            {!modalText.title ? null : modalText.title}
          </h2>
          <p className="text-gray-600  mb-4">
            {!modalText.message ? null : modalText.message}
          </p>
          <small>{!modalText.error ? null : modalText.error}</small>
          <Button
            className="w-full"
            onClick={(e) => {
              if (ref.current.open) {
                ref.current.close();
              }
            }}
          >
            Close Modal
          </Button>
        </div>
      </dialog>
    </div>
  );
}
