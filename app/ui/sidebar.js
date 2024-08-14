"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/app/ui/sidebar.module.scss";
import Image from "next/image";
import { menuItems as items } from "@/app/lib/data";
import { useState } from "react";

export default function Sidebar() {
  //state for toggle sidebar menu
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname("/");

  return (
    <div
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
      className={`${styles.main} ${!showMenu && styles.hide}`}
    >
      <div className={styles.header}>
        <Link href="/">
          <Image alt="icon" width={50} height={32} src="header.svg" />
        </Link>
      </div>
      <div className={styles.container}>
        {items.map((item) => (
          <div key={item.href}>
            <Link
              className={`${styles.link} ${
                pathname === item.href ? styles.active : ""
              } ${!showMenu && styles.hide}`}
              key={item.name}
              href={item.href}
            >
              {showMenu && <div>{item.name}</div>}
              <Image
                alt="icon"
                width={24}
                height={24}
                src={`${pathname === item.href ? "active" : ""}${
                  item.icon
                }.svg`}
              />
            </Link>
            {item.icon === "manage" && <hr className={styles.line} />}
          </div>
        ))}
      </div>
    </div>
  );
}
