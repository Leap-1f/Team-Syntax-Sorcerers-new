"use client";
import { replace } from "formik";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { use } from "react";
import { string } from "yup";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  function handleSearch(term: String) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <>
      <input
        type="text"
        placeholder="search"
        className="border rounded-[4px] px-2"
        onChange={(e: any) => {
          handleSearch(e.target.value);
        }}
      />
    </>
  );
};
export default Search;
