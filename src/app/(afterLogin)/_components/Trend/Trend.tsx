import styles from "./Tend.module.scss"

import Link from "next/link";

const Trend = () => {
  return (
    <Link href={`/search?q=트렌드`} className={styles.container}>
      <div className={styles.count}>실시간트렌드</div>
      <div className={styles.title}>제로초</div>
      <div className={styles.count}>1,234 posts</div>
    </Link>
  );
};

export default Trend;
