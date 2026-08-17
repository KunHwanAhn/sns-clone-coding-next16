"use client"

import { MouseEventHandler } from "react";

import styles from "./LogoutButton.module.scss";

export default function LogoutButton() {
  const me = { // 임시로 내 정보 있는것처럼
    id: 'user123',
    nickname: '사용자123',
    image: '/5Udwvqim.jpg',
  }

  const onLogout: MouseEventHandler<HTMLButtonElement> = () => {};

  return (
    <button className={styles.logOutButton} onClick={onLogout}>
      <div className={styles.logOutUserImage}>
        <img src={me.image} alt={me.id}/>
      </div>
      <div className={styles.logOutUserName}>
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  )
}
