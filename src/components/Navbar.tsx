import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion"

const Navbar = () => {

  const [mobileNav, toggleMobileNav] = useCycle(false, true)

  return (
    <div className="md:flex md:justify-center">
      <nav className="fixed bg-dark-midnight-blue max-sm:left-2 top-2 max-sm:h-12 md:top-[20px] rounded-md md:rounded-full md:backdrop-blur-md md:bg-opacity-60 text-off-white shadow-lg z-20">

        <div className="md:hidden container mx-auto h-full px-4 flex items-center">
          <div className="z-10">
            <motion.button
              animate={mobileNav ? 'open' : 'closed'}
              onClick={() => toggleMobileNav()}
              className="flex flex-col space-y-1"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 5 }
                }}
                className="w-5 h-px bg-off-white block"
              />

              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                className="w-5 h-px bg-off-white block"
              />

              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -5 }
                }}
                className="w-5 h-px bg-off-white block"
              />
            </motion.button>
          </div>
        </div>
        <AnimatePresence>

          {
            mobileNav && (
              <MotionConfig transition={{
                type: 'spring',
                bounce: 0.099
              }}>
                <motion.div
                  variants={{
                    open: {
                      x: "0%",
                      transition: {
                        type: 'spring',
                        bounce: 0.099,
                        when: 'beforeChildren'
                      }
                    },
                    closed: {
                      x: "-100%",
                      transition: {
                        type: 'spring',
                        bounce: 0.099,
                        when: 'afterChildren'
                      }
                    }
                  }}
                  key='mobile-nav'
                  initial='closed'
                  animate='open'
                  exit='closed'
                  className="fixed inset-0 bg-dark-midnight-blue bg-opacity-60 backdrop-blur-md space-y-10 p-6 container mx-auto flex flex-col justify-center">
                  <motion.div
                    variants={{
                      open: {
                        y: '0%',
                        opacity: 1
                      },
                      closed: {
                        y: '25%',
                        opacity: 0
                      }
                    }}

                  >
                    <ul className="space-y-5 ">
                      <li>
                        <a href="#" className="text-4xl font-bold">Home</a>
                      </li>
                      <li>
                        <a href="#" className="text-4xl font-bold">DLC</a>
                      </li>
                      <li>
                        <a href="#" className="text-4xl font-bold">FAQ</a>
                      </li>
                      <li>
                        <a href="#" className="text-4xl font-bold">Compendium</a>
                      </li>
                    </ul>
                  </motion.div>

                  <motion.div
                    variants={{
                      open: {
                        y: '0%',
                        opacity: 1
                      },
                      closed: {
                        y: '25%',
                        opacity: 0
                      }
                    }}
                    className="w-full bg-off-white h-px"></motion.div>

                  <motion.div
                    variants={{
                      open: {
                        y: '0%',
                        opacity: 1
                      },
                      closed: {
                        y: '25%',
                        opacity: 0
                      }
                    }}
                    className="flex justify-center">
                    <a href="#" target="_blank" className="link">
                      <span className="z-10">
                        Comprar jogo
                      </span>
                    </a>
                  </motion.div>

                </motion.div>
              </MotionConfig>
            )
          }
        </AnimatePresence>

        <div className="hidden md:flex md:gap-16 md:py-3 md:px-10 md:justify-between md:items-center">
          <ul className="flex gap-8 text-xl">

            <li className="relative group cursor-pointer">
              <a href="#">Home</a>
              <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-off-white transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li className="relative group cursor-pointer">
              <a href="#">DLC</a>
              <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-off-white transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li className="relative group cursor-pointer">
              <a href="#">FAQ</a>
              <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-off-white transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li className="relative group cursor-pointer">
              <a href="#">Compendium</a>
              <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-off-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
          <a href="#" target="_blank" className="link">
            <span className="z-10">
              Comprar jogo
            </span>
          </a>
        </div>

      </nav>
    </div>

  )
}

export default Navbar