/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/xyMFphgkAMR
 */
import Link from "next/link";
import { CardContent, Card } from "@/components/ui/card";
import { MailIcon } from "../icons/mailIcon";
import { PhoneIcon } from "../icons/phoneIcon";
import { CalendarIcon } from "../icons/calendarIcon";

export function ContactBanner() {
  return (
    <Card
      key="1"
      className="container mx-auto p-10 mt-4 flex gap-10 justify-center items-center"
    >
      <CardContent className="p-0 flex gap-4">
        <div className="flex items-center gap-4 text-sm">
          <CalendarIcon className="w-6 h-6" />
          <div className="grid gap-1">
            <div className="font-semibold">Hours of Operation</div>
            <Link
              className="line-clamp-1 text-xs hover:text-blue-500 transition-colors duration-200"
              href="mailto:info@cdifurlers.com"
            >
              Monday - Friday: 8am - 4pm PST
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <MailIcon className="w-6 h-6" />
          <div className="grid gap-1">
            <div className="font-semibold">Email</div>
            <Link
              className="line-clamp-1 text-xs hover:text-blue-500 transition-colors duration-200"
              href="mailto:info@cdifurlers.com"
            >
              info@cdifurlers.com
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <PhoneIcon className="w-6 h-6" />
          <div className="grid gap-1">
            <div className="font-semibold">Phone</div>
            <Link
              className="line-clamp-1 text-xs hover:text-blue-500 transition-colors duration-200"
              href="tel:1-(888)-880-6813"
            ></Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
