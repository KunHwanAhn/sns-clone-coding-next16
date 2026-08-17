import { ChangeEventHandler } from "react";
import styles from "./SearchFilter.module.scss";

const SearchFilter = () => {
  const handleAllChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement> = () => {};
  const handleFollowChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement> = () => {};

  return (
    <div>
      <h5 className={styles.filterTitle}>검색 필터</h5>
      <div className={styles.filterSection}>
        <div>
          <label>사용자</label>
          <div className={styles.radio}>
            <div>모든 사용자</div>
            <input type="radio" name="pf" defaultChecked onChange={handleAllChange} />
          </div>
          <div className={styles.radio}>
            <div>내가 팔로우하는 사람들</div>
            <input type="radio" name="pf" value="on" onChange={handleFollowChange} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;
