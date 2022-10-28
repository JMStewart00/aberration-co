import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { ReactComponent as Logo } from '../../assets/images/svg/wordmark--on-dark.svg'

const CustomNav = () => {
  const [open, setOpen] = useState(false);
  const [targetHover, setTargetHover] = useState('0');
  const [showcaseHeight, setShowcaseHeight] = useState(0)
  let showcaseRef = useRef(null)

  const [menuItems] = useState([
    { label: 'About', dest: '#!' },
    { label: 'Clothing', dest: '#!' },
    { label: 'Real Estate', dest: '#!' },
    { label: 'Photography & Film', dest: '#!' },
    { label: 'Coffee Shop', dest: '#!' },
  ])

  const [showcaseItems] = useState([
    { content: <Logo />, backgroundImage: '' },
    { content: 'Hover over the list items or click them!', backgroundImage: '' },
    { content: '', backgroundImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/124740/ice-final-white.svg' },
    { content: 'Lorem ipsum', backgroundImage: 'url(https://images.unsplash.com/photo-1537949721120-e8f21f6698e6?ixlib=rb-0.3.5&s=96527c5eff0b3bd24946f77f4dc5a789&auto=format&fit=crop&w=634&80' },
    { content: '', backgroundImage: 'url(https://d2kbkpwf98wmwo.cloudfront.net/images/menu/motion.png)' },
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
  }, []);

  document.addEventListener("keydown", (e) => {
    if (e.key === 'Escape' && open) {
      setOpen(false);
    }
  })

  return (
    <header className="nav-wrapper">
      <div className="nav">
        <div className="nav__logo">
          <Logo />
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
                  <a
                    onMouseEnter={handleShowTarget}
                    href={item.dest}
                    data-target={i}
                  >
                    {item.label}
                  </a>
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