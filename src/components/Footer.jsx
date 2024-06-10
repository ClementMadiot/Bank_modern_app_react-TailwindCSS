import styles from '../style'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'

function Footer() {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <article
        className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}
      >
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="HooBank"
            className=" w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} max-w-[310px] mt-4`}>
            A new way to make the payment an easy, reliable and secure.
          </p>
        </div>

        <div className=" flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footer) => (
            <div
              key={`id-${footer.title}`}
              className="flex flex-col ss:my-0 my-0 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-lg text-white">
                {footer.title}
              </h4>
              <ul className="mt-4">
                {footer.links.map((link, index) => (
                  <li
                    key={`id-${link.name}`}
                    className={`font-poppins font-normal text-base text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footer.links.length - 1 ? 'mb-4' : 'mb-0'
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>

      <article className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t border-t-[#3f3E45]">
        <p className="font-poppins text-lg text-white text-center">
          2024 HooBank. All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6 ">
          {socialMedia.map((social, index) => (
            <div
              key={social.id}
              className={`${styles.flexCenter} text-dimWhite cursor-pointer ${
                index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
              }`}
            >
              {social.icon}
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}

export default Footer
