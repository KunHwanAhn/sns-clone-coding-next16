export const SEARCH_TAB_TYPE = {
  NEW: "new",
  HOT: "hot",
} as const;

export type SearchTabType = typeof SEARCH_TAB_TYPE[keyof typeof SEARCH_TAB_TYPE];
