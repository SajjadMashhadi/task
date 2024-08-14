"use client";

import styles from "@/app/ui/tab.module.scss";
import Image from "next/image";
import { routes } from "../lib/data";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState, useEffect } from "react";
import localFont from "next/font/local";
import Loading from "./Loading";

const myFont = localFont({ src: "../Shabnam.woff2" });

export default function Tab() {
  const [events, setEvents] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(events[0]);

  //state for user name dropdown
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //state for event dropdown
  const [anchorElEvent, setAnchorElEvent] = useState();
  const openEvent = Boolean(anchorElEvent);
  const handleClickEvent = (event) => {
    setAnchorElEvent(event.currentTarget);
    console.log(event);
  };
  const handleCloseEvent = () => {
    setAnchorElEvent(null);
  };

  //fetch events list from API
  useEffect(() => {
    fetch(
      "https://d75fe7de-5459-4e69-8d34-76e465dcccf7.mock.pstmn.io/getEvents"
    )
      .then((res) => res.json())
      .then((data) => {
        setEvents(data.map((item) => item.name));
        setLoading(false);
      });
  }, []);

  //set the initil value for events dropdown
  useEffect(() => {
    setSelectedEvent(events[0]);
  }, [events]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={styles.main}>
      <div className={styles.leftSection}>
        <Button
          className={myFont.className}
          style={{ backgroundColor: "#F0F0F0", borderRadius: "8px" }}
          id="demo-positioned-button1"
          aria-controls={openEvent ? "demo-positioned-menu1" : undefined}
          aria-haspopup="true"
          aria-expanded={openEvent ? "true" : undefined}
          onClick={handleClickEvent}
        >
          <Image alt="icon" width={12} height={12} src="down.svg" />
          <div className={styles.nameTag}>{selectedEvent}</div>
        </Button>
        <Menu
          id="demo-positioned-menu1"
          aria-labelledby="demo-positioned-button1"
          anchorEl={anchorElEvent}
          open={openEvent}
          onClose={handleCloseEvent}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          {events.map((event) => (
            <MenuItem
              key={event}
              onClick={() => {
                setSelectedEvent(event);
                handleCloseEvent();
              }}
            >
              {event}
            </MenuItem>
          ))}
        </Menu>
        <div className={styles.iconContainer}>
          <Image alt="icon" width={18} height={18} src="calender.svg" />
        </div>

        <div className={styles.iconContainer}>
          <Image alt="icon" width={18} height={18} src="setting.svg" />
        </div>
      </div>
      <div>
        <Button
          className={myFont.className}
          style={{ borderRadius: "8px" }}
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Image alt="icon" width={12} height={12} src="down.svg" />
          <div className={styles.nameTag}>{routes.userName}</div>
        </Button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={handleClose}>{routes.userName}</MenuItem>
        </Menu>
        <Image
          width={32}
          height={32}
          alt="profile"
          src="/profile.png"
          style={{ borderRadius: 50 }}
        />
      </div>
    </div>
  );
}
