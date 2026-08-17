import SearchForm from "../_components/SearchForm";
import Trend from "../_components/Trend";

import styles from "./Explore.module.scss";

const ExplorePage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.formZone}>
        <SearchForm />
      </div>
      <div className={styles.trend}>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </div>
  );
}

export default ExplorePage;
