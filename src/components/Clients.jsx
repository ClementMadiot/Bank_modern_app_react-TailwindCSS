import styles from '../style'
import { clients } from '../constants'

function Clients() {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-48 min-w-[120px]`}
          >
            <img
              src={client.logo}
              alt="client"
              className="sm:w-48 w-24 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients
