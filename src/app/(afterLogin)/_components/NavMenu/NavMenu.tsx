"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import styles from "./NavMenu.module.scss";
import IconHome from "../IconHome";
import IconExplore from "../IconExplore";
import IconMessage from "../IconMessage";
import IconUser from "../IconUser";

const NavMenu = () => {
  const segment = useSelectedLayoutSegment();

  const me = {
    id: "user123",
  };

  return (
    <>
      <li>
        <Link href="/home">
          <div className={styles.navPill}>
            <IconHome active={segment === 'home'} />
          </div>
        </Link>
      </li>
      <li>
        <Link href="/explore">
          <div className={styles.navPill}>
            <IconExplore active={!!segment && ['search', 'explore'].includes(segment)} />
          </div>
        </Link>
      </li>
      <li>
        <Link href="/messages">
          <div className={styles.navPill}>
            <IconMessage active={segment === 'messages'} />
          </div>
        </Link>
      </li>
      {me?.id && <li>
        <Link href={`/${me?.id}`}>
          <div className={styles.navPill}>
            <IconUser active={segment === me.id} />
          </div>
        </Link>
      </li>}
    </>
  );
};

export default NavMenu;
