import styles from "../../styles/Button.module.css";

export default function Button({ content = "button" }) {
  return (
    <div className={styles.btnOut}>
      <div className={styles.btnIn}>
        <p className={styles.content}>{content}</p>
        <p className={styles.overlay}>{content}</p>
      </div>
    </div>
  )
}