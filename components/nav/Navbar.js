import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router'
import classNames from 'classnames';
import Image from 'next/image';
import logo from '../../public/assets/images/svg/wordmark--on-dark.svg';
import full from '../../public/assets/images/svg/full--on-dark.svg';
import stack from '../../public/assets/images/svg/stack--on-light.svg';
import Link from 'next/link';

const CustomNav = () => {
  const [open, setOpen] = useState(false);
  const [targetHover, setTargetHover] = useState('0');
  const [showcaseHeight, setShowcaseHeight] = useState(0)
  let showcaseRef = useRef(null)
  const router = useRouter()

  const [menuItems] = useState([
    { label: 'Home', dest: '/' },
    { label: 'Stay With Us!', dest: '/stay-with-us' },
    { label: 'Media Production', dest: '/media-production' },
    { label: 'Food + Drink', dest: '/food-drink' },
  ])

  const [showcaseItems] = useState([
    { content: <Image src={logo} alt="Aberration Co." unoptimized={true} />, backgroundImage: '' },
    { content: <Image src={full} alt="Aberration Co." unoptimized={true} />, backgroundImage: '' },
    { content: <Image src={logo} alt="Aberration Co." unoptimized={true} />, backgroundImage: '' },
    { content: <Image src={full} alt="Aberration Co." unoptimized={true} />, backgroundImage: '' },
  ])


  let toggleClasses = classNames(
    'nav__toggle',
    { clicked: open },
  )

  let navClasses = classNames(
    'nav__nav',
    { open: open },
    { hidden: !open },
  )

  const handleShowTarget = (e) => {
    setTargetHover(e.target.dataset.target);
    setShowcaseHeight(showcaseRef.current.clientHeight);
  };

  useEffect(() => {
    setShowcaseHeight(showcaseRef.current.clientHeight);

    const listenForEscape = (e) => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", listenForEscape)

    return () => {
      window.removeEventListener('keydown', listenForEscape)
    }
  }, []);

  const handleClick = (route) => {
    router.push(route);
    setOpen(false);
  }

  return (
    <header className="nav-wrapper">
      <div className="nav">
        <div className="nav__logo">
          <Link href="/">
            <Image src={logo} alt="Aberration Co." unoptimized={true} />
          </Link>
        </div>
        <div
          className={toggleClasses}
          onClick={() => setOpen(!open)}
        >
          <div className="nav__toggle__bar"></div>
        </div>

        <nav className={navClasses}>
          <div className="nav__showcase">
            <div className="nav__showcase-container">
              <ul
                ref={showcaseRef}
                className="nav__showcase-menu"
                style={{ top: (showcaseHeight * targetHover) * -1 }}
              >
                {showcaseItems.map((item, i) => (
                  <li
                    key={i}
                    data-target={i}
                    style={{ backgroundImage: item?.backgroundImage }}
                  >
                    {item.content}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="nav__menu">
            <ul className="nav__menu-main">
              {menuItems.map((item, i) => (
                <li
                  key={i}
                  className={targetHover === i.toString() ? 'hover' : ''}
                  >
                  <div className="number">
                    <span>{('0' + i).slice(-2)}</span>
                  </div>
                  <button
                    onClick={() => handleClick(item.dest)}
                    onMouseEnter={handleShowTarget}
                    data-target={i}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

      </div>
    </header>
  )
}

export default CustomNav