import styles from '../style'
import { clients } from '../constants'

function Clients() {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} mb-6`}
          >
            <p className={`${styles.flexCenter} ${styles.paragraphIcon} text-[#474748] xs:mx-2 hover:text-white transition duration-300 cursor-default`}>{client.logo}{client.desc}</p>
            
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients
