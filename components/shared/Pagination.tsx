import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";

const Paginator = () => {
  return (
    <Pagination className="mt-9 gap-10">
      <PaginationContent>
        <PaginationItem className="rounded-lg bg-accent-blue text-primary-100">
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem className="rounded-lg border border-[rgba(51,51,51,0.5)] text-[rgba(51,51,51,0.5)]">
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem className="rounded-lg border border-[rgba(51,51,51,0.5)] text-[rgba(51,51,51,0.5)]">
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem className="text-[rgba(51,51,51,0.5)]">
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem className="rounded-lg border border-[rgba(51,51,51,0.5)] text-[rgba(51,51,51,0.5)]">
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default Paginator;
