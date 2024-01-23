/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/YFEtvDBISDe
 */
import {
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  PaginationContent,
  Pagination,
} from "@/components/ui/pagination";
import { useRouter } from "next/router";

export function PaginationBar({ pages }) {
  const router = useRouter();
  console.log(router);
  return (
    <div className="w-full flex items-center justify-center space-x-4">
      <Pagination>
        <PaginationContent>
          {pages
            ? pages.map((pageNum, index) => {
                if (typeof pageNum === "number") {
                  return (
                    <PaginationItem key={pageNum}>
                      <PaginationLink
                        href={{
                          pathname: router.pathname,
                          query: { page: pageNum },
                        }}
                      >
                        {pageNum}
                      </PaginationLink>
                    </PaginationItem>
                  );
                }

                if (typeof pageNum === "string") {
                  return (
                    <PaginationItem key={pageNum + index}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  );
                }
              })
            : null}
          {/* <PaginationItem>
            <div />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">10</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <div />
          </PaginationItem> */}
        </PaginationContent>
      </Pagination>
    </div>
  );
}
