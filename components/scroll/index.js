import { Link, Element, Events } from 'react-scroll'
import styles from 'styles/pages/scroll.module.scss'
import { useRef, useEffect } from 'react'
export default function Scroll() {
  const navbar = useRef()

  useEffect(() => {
    Events.scrollEvent.register('end', function (to) {
      setCenter(to)
    })
    return () => {
      Events.scrollEvent.remove('end')
    }
  })

  function setCenter(to) {
    if (navbar.current) {
      const nvabarW = navbar.current.offsetWidth
      const navbarItem = document.querySelector(`.${to}`)
      const scrollLeftNum =
        navbarItem.offsetLeft - nvabarW / 2 + navbarItem.offsetWidth / 2
      navbar.current.scrollLeft = scrollLeftNum
    }
  }

  function handlerSetActive(to) {
    setCenter(to)
  }

  return (
    <div>
      <ul className={styles.navbar} ref={navbar}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <li className={`test${item}`} key={item}>
            <Link
              activeClass={styles.active}
              className={styles.test}
              to={`test${item}`}
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              onSetActive={handlerSetActive}
            >
              Test {item}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.scrollWrap}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <Element name={`test${item}`} className={styles.element} key={item}>
            test {item}
          </Element>
        ))}
      </div>
    </div>
  )
}
