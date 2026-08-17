"use client";

import { usePathname } from "next/navigation";
import styles from "./RightSearchZone.module.scss";
import SearchForm from "../SearchForm";
import SearchFilter from "../SearchFilter";

const RightSearchZone = () => {
  const pathname = usePathname();

  if (pathname === "/explore") {
    return <></>;
  }

  if (pathname === "/search") {
    return <SearchFilter />
  }

  return (
    <div className={styles.searchFormWrapper}>
      <SearchForm />
    </div>
  );
};

export default RightSearchZone;
