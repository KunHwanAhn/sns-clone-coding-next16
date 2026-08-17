import BackButton from "../_components/BackButton";
import Post from "../_components/Post";
import SearchForm from "../_components/SearchForm"
import Tab from "./_components/Tab";

import styles from "./Search.module.scss";

const SearchPage = async ({ searchParams }: PageProps<"/search">) => {
  let { q } = await searchParams;

  if (Array.isArray(q)) {
    q = q[0];
  }

  return (
    <main className={styles.main}>
      <div className={styles.searchTop}>
        <div className={styles.searchZone}>
          <div className={styles.buttonZone}>
            <BackButton/>
          </div>
          <div className={styles.formZone}>
            <SearchForm q={q} />
          </div>
        </div>
        <Tab />
      </div>
      <div className={styles.list}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  )
}

export default SearchPage;
