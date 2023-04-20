import { apple, bill, google } from "../assets"
import styles, { layout } from "../style"

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="relative z-[5] h-[100%] w-[100%]"
      />
      <div className="white__gradient absolute -left-1/2 top-0 z-[3] h-[50%] w-[50%] rounded-full" />
      <div className="pink__gradient absolute -left-1/2 bottom-0 z-[0] h-[50%] w-[50%] rounded-full" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your{" "}
        <br className="hidden sm:block" /> billing &
        invoicing
      </h2>
      <p
        className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        We offer you not only the best credit card option in
        the market, but also a quick and simple way to
        control your transactions and expenses. Download the
        app and enjoy the best we have to offer for free.
      </p>
      <div className="mt-6 flex flex-row flex-wrap sm:mt-10">
        <img
          src={apple}
          alt="google_play"
          className="mr-5 h-[42.05px] w-[128.86px] cursor-pointer object-contain"
        />
        <img
          src={google}
          alt="google_play"
          className="h-[43.08px] w-[144.17px] cursor-pointer object-contain"
        />
      </div>
    </div>
  </section>
)

export default Billing
