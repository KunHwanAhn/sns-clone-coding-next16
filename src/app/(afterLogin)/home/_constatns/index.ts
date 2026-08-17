export const TAB_TYPE = {
  RECOMMEND: "recommend",
  FOLLOW: "follow",
} as const;
export type TabType = typeof TAB_TYPE[keyof typeof TAB_TYPE];

