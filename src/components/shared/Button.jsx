// general
import React, { useEffect, useRef } from 'react';

// css
import styles from "../../styles/Button.module.css";


export default function Button({ content = "button" }) {
  const buttonRef = useRef(null);

  // fistload animation control and un-hover effect
  useEffect(() => {
    const button = buttonRef.current;

    const handleMouseEnter = () => {
      if (!button.classList.contains(styles.animated)) {
        button.classList.add(styles.animated);
      }
    };

    // 添加事件監聽器
    button.addEventListener("mouseenter", handleMouseEnter);

    // 清理函數 - 移除事件監聽器
    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div className={styles.btnOut} ref={buttonRef}>
      <div className={styles.btnIn}>
        <p className={styles.content}>{content}</p>
        <p className={styles.overlay}>{content}</p>
      </div>
    </div>
  )
}