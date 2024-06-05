import styles, { layout } from '../style'
import { card } from '../assets'
import Button from './Button'

function CardDeal() {
  return (
    <section className={layout.section}>
      <article className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden'/> in few easy steps.</h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>Arcu tortor, pursus in mattis at sed integer faucibus. Aliquet quis aliquiet eget mauris tortor. Aliquet ultrices ac, ametau.</p>
        <Button styles={"mt-10"}/>
      </article>

      <article className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]' />
      </article>
    </section>
  )
}

export default CardDeal