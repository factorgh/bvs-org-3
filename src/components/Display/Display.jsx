import React from "react";
import styles from "./Display.module.css";
import Avatar from "@mui/material/Avatar";

const Display = ({ item }) => {
  return (
    <div className="flex flex-row">
      <Avatar
        sx={{
          marginTop: "20px",
          width: "70px",
          height: "70px",
          marginRight: "10px",
        }}
        alt="Remy Sharp"
        src={item.image}
      />

      <div className={styles.display__content__main}>
        <h2>{item.title}</h2>

        <h5>{item.desc}</h5>
      </div>
    </div>
  );
};

export default Display;
