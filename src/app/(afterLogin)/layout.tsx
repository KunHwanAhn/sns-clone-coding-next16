import Link from "next/link";
import Image from "next/image";

import styles from './Layout.module.scss';
import NavMenu from "./_components/NavMenu";
import LogoutButton from "./_components/LogoutButton";
import FollwRecommendSection from "./_components/FollowRecommendSection";
import TrendSection from "./_components/TrendSection";
import RightSearchZone from "./_components/RightSearchZone";

const AfterLoginLayout = ({ children, composeModal }: LayoutProps<"/">) => {
  return (
    <div className={styles.container}>
      <header className={styles.leftSectionWrapper}>
        <section className={styles.leftSection}>
          <div className={styles.leftSectionFixed}>
            <Link className={styles.logo} href="/home">
              <div className={styles.logoPill}>
                <Image src={"/zlogo.png"} alt="z.com로고" loading="eager" width={40} height={40} />
              </div>
            </Link>
            <nav>
              <ul>
                <NavMenu />
              </ul>
              <Link href="/compose/tweet" className={styles.postButton}>게시하기</Link>
            </nav>
            <LogoutButton />
          </div>
        </section>
      </header>
      <div className={styles.rightSectionWrapper}>
        <div className={styles.rightSectionInner}>
          <main className={styles.main}>{children}</main>
          <section className={styles.rightSection}>
            <RightSearchZone />
            <TrendSection />
            <FollwRecommendSection />
          </section>
        </div>
      </div>
      {composeModal}
    </div>
  );
}

export default AfterLoginLayout;
