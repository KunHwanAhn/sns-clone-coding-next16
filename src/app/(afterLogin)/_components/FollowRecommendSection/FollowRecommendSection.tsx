import FollowRecommned from "../FollowRecommend/FollowRecommend";
import styles from "./FollowRecommendSection.module.scss";

const FollwRecommendSection = () => {
  return (
    <div className={styles.followRecommendSection}>
      <h3>팔로우 추천</h3>
      <FollowRecommned />
      <FollowRecommned />
      <FollowRecommned />
    </div>
  );
};

export default FollwRecommendSection;
