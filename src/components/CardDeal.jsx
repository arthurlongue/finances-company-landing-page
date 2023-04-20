import { card } from "../assets"
import styles, { layout } from "../style"
import Button from "./Button"

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find the best card deal{" "}
        <br className="hidden sm:block" /> in a few easy
        steps.
      </h2>
      <p
        className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        Our specialist will find the perfect credit card for
        you, no more endless searches and time wasted. Get
        started and enjoy the freedom.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img
        src={card}
        alt="billing"
        className="h-[100%] w-[100%]"
      />
    </div>
  </section>
)

export default CardDeal
