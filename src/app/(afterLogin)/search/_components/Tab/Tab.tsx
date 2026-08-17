"use client";

import { MouseEventHandler, useState } from "react";
import style from "./Tab.module.scss";
import { SEARCH_TAB_TYPE, SearchTabType } from "../../_constants";
import { useRouter, useSearchParams } from "next/navigation";

const Tab = () => {
  const [currentTab, setCurrentTab] = useState<SearchTabType>(SEARCH_TAB_TYPE.HOT);
  const router = useRouter();
  const searchParams = useSearchParams();

  const onClickHot: MouseEventHandler<HTMLDivElement> = () => {
    setCurrentTab(SEARCH_TAB_TYPE.HOT);
    router.replace(`/search?q=${searchParams.get("q")}`);
  }

  const onClickNew: MouseEventHandler<HTMLDivElement> = () => {
    setCurrentTab(SEARCH_TAB_TYPE.NEW);
    router.replace(`search?q=${searchParams.get("q")}&f=live`);
  }

  return (
    <div className={style.homeFixed}>
      <div className={style.homeTab}>
        <div onClick={onClickHot}>
          인기
          {currentTab === SEARCH_TAB_TYPE.HOT && <div className={style.tabIndicator}></div>}
        </div>
        <div onClick={onClickNew}>
          최신
          {currentTab === SEARCH_TAB_TYPE.NEW && <div className={style.tabIndicator}></div>}
        </div>
      </div>
    </div>
  );;
};

export default Tab;
