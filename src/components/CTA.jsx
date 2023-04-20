import styles from "../style"
import Button from "./Button"

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} bg-black-gradient-2 box-shadow flex-col rounded-[20px] sm:flex-row`}>
    <div className="flex flex-1 flex-col">
      <h2 className={styles.heading2}>
        Try our service now!
      </h2>
      <p
        className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        We can contact you in your prefered way, our team of
        experts works 24/7. We are always ready to answer
        your questions and fullfil your wishes.
      </p>
    </div>

    <div
      className={`${styles.flexCenter} ml-0 mt-10 sm:ml-10 sm:mt-0`}>
      <Button />
    </div>
  </section>
)

export default CTA
