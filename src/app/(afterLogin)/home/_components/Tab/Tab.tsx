"use client"

import { MouseEventHandler, useContext, useState } from "react"

import { HOME_TAB_TYPE } from "../../_constants";

import style from "./Tab.module.scss"
import { TabContext } from "../TabProvider";

const Tab = () => {
  const { tab, setTab } = useContext(TabContext);

  const onClickRec: MouseEventHandler<HTMLDivElement> = () => {
    setTab(HOME_TAB_TYPE.RECOMMEND);
  }
  const onClickFol: MouseEventHandler<HTMLDivElement> = () => {
    setTab(HOME_TAB_TYPE.FOLLOW);
  }

  return (
    <div className={style.homeFixed}>
      <div className={style.homeText}>홈</div>
      <div className={style.homeTab}>
        <div onClick={onClickRec}>
          추천
          <div className={style.tabIndicator} hidden={tab === HOME_TAB_TYPE.FOLLOW}></div>
        </div>
        <div onClick={onClickFol}>
          팔로우 중
          <div className={style.tabIndicator} hidden={tab === HOME_TAB_TYPE.RECOMMEND}></div>
        </div>
      </div>
    </div>
  )
}

export default Tab;
