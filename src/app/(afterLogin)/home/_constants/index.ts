export const HOME_TAB_TYPE = {
  RECOMMEND: "recommend",
  FOLLOW: "follow",
} as const;
export type HomeTabType = typeof HOME_TAB_TYPE[keyof typeof HOME_TAB_TYPE];

