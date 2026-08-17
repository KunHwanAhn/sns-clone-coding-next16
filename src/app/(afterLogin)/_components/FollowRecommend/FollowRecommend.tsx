"use client";

import { MouseEventHandler } from "react";

import style from "./FollowRecommend.module.scss";

const FollowRecommned = () => {
  const user = {
    id: 'elonmusk',
    nickname: 'Elon Musk',
    image: '/yRsRRjGO.jpg'
  };

  const handleFollowClick: MouseEventHandler<HTMLButtonElement> = () => {}

  return (
    <div className={style.container}>
      <div className={style.userLogo}>
        <img src={user.image} alt={user.id} />
      </div>
      <div className={style.userInfo}>
        <div className={style.title}>{user.nickname}</div>
        <div className={style.userId}>@{user.id}</div>
      </div>
      <div className={style.followButtonSection}>
        <button onClick={handleFollowClick}>팔로우</button>
      </div>
    </div>
  );
};

export default FollowRecommned;
