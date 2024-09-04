import React from "react";
import styles from "../styles/Navbar.module.css";
import { useValue } from "../photoContext";

function Navbar() {
  const {toggleAdd,handleAdd} = useValue();
  return (
    <div className={styles.container}>
      <img src="https://cdn-icons-png.flaticon.com/128/211/211869.png" alt="logo"/>
      <h1 className={styles.heading}>Photo Album</h1>
      <div className={styles.buttonsWrapper}>
        <button className={styles.button} onClick={handleAdd}>{!toggleAdd ? "Add Album" : "Cancel"}</button>
      </div>
    </div>
  );
}

export default Navbar;
