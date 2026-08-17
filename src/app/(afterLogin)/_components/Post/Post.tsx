import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import Link from "next/link";

import ActionButtons from "../ActionButtons";

import styles from "./Post.module.scss";

dayjs.locale("ko");
dayjs.extend(relativeTime);

const Post = () => {
  const target = {
    user: {
      id: 'user123',
      nickname: 'User123',
      image: '/yRsRRjGO.jpg',
    },
    content: '클론코딩 라이브로 하니 너무 힘들어요 ㅠㅠ',
    createdAt: new Date(),
    images: [],
  }

  return (
    <article className={styles.post}>
      <div className={styles.postWrapper}>
        <div className={styles.postUserSection}>
          <Link href={`/${target.user.id}`} className={styles.postUserImage}>
            <img src={target.user.image} alt={target.user.nickname}/>
            <div className={styles.postShade} />
          </Link>
        </div>
        <div className={styles.postBody}>
          <div className={styles.postMeta}>
            <Link href={`/${target.user.id}`}>
              <span className={styles.postUserName}>{target.user.nickname}</span>
              &nbsp;
              <span className={styles.postUserId}>@{target.user.id}</span>
              &nbsp;
              ·
              &nbsp;
            </Link>
            <span className={styles.postDate}>{dayjs(target.createdAt).fromNow(true)}</span>
          </div>
          <div>{target.content}</div>
          <div className={styles.postImageSection}>

          </div>
          <ActionButtons />
        </div>
      </div>
    </article>
  )
}

export default Post;
