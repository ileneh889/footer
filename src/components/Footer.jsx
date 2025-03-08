// css
import styles from "../styles/Footer.module.css";

// components
import Button from "../components/shared/Button"


export default function Footer() {
  return (
    <section className={styles.box}>
      <form action="" className={styles.content}>
        <h2>Don't Miss Out</h2>
        <h4>Get the latest news and updates delivered straight to your inbox.</h4>
        <div className={styles.inputBox}>
          <input
            type="text"
            placeholder="your email address"
            className={styles.emailBox}
          />
          <div className={styles.btnBox}>
            <Button content="subscribe" />
          </div>
        </div>
      </form>
    </section>
  )
}
