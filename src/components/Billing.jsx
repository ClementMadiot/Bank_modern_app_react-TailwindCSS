import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

function Billing() {
  return (
    <section className={layout.sectionReverse} id="product">
      <article className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="billing"
          className="w-[100$] h-[100%] relative z-[5]"
        />
        {/* gradient color  */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </article>

      <article className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br className='sm"block hidden'/> billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodoi aenean neque. Fusce ispsum orci rhoncus aliporttitor integer platea placerat.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6" >
          <img src={apple} alt="apple-store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
          <img src={google} alt="google-store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
        </div>
      </article>
    </section>
  )
}

export default Billing
