/* eslint-disable react/prop-types*/

import styled from "styled-components";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { RESULTS_PAGE } from "../utils/constants";

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.active ? " var(--color-brand-600)" : "var(--color-grey-50)"};
  color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

export default function Pagination({ count }) {
  const [searchPerams, setSearchPerams] = useSearchParams();

  const currentPage = !searchPerams.get("page")
    ? 1
    : Number(searchPerams.get("page"));
  const pageCount = Math.ceil(count / RESULTS_PAGE);
  function handlePrevious() {
    let last = currentPage === 1 ? currentPage : currentPage - 1;
    searchPerams.set("page", last);
    setSearchPerams(searchPerams);
  }

  function handleNext() {
    let next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchPerams.set("page", next);
    setSearchPerams(searchPerams);
  }

  return (
    <StyledPagination>
      <P>
        Showing <span>{(currentPage - 1) * RESULTS_PAGE + 1}</span> to{" "}
        <span>
          {currentPage === pageCount ? count : RESULTS_PAGE * currentPage}
        </span>{" "}
        of <span>{count}</span> results
      </P>
      <Buttons>
        <PaginationButton onClick={handlePrevious} disabled={currentPage === 1}>
          <HiChevronLeft />
          <span>Previous</span>
        </PaginationButton>
        <PaginationButton
          onClick={handleNext}
          disabled={currentPage === pageCount}
        >
          <span>Next</span>
          <HiChevronRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}
