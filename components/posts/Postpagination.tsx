"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Postpagination = () => {
  return (
    <Pagination>
      <PaginationContent className="gap-4">
        <PaginationItem>
          <PaginationPrevious href="#" className="flex items-center gap-2" />
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
          <PaginationNext href="#" className="flex items-center gap-2" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default Postpagination;
