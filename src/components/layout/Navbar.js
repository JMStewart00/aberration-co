import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { ReactComponent as Logo } from '../../assets/images/svg/wordmark--on-dark.svg'

const CustomNav = () => {
  const [open, setOpen] = useState(false);
  const [targetHover, setTargetHover] = useState(0);
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
    'toggle',
    { clicked: open },
  )

  let navClasses = classNames(
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
    if (e.key == 'Escape' && open) {
      setOpen(false);
    }
  })

  return (
    <header>
      <div className="nav">
        <div className="logo">
          <Logo />
        </div>
        <div
          className={toggleClasses}
          onClick={() => setOpen(!open)}
        >
          <div className="bar"></div>
        </div>

        <nav className={navClasses}>
          <div className="showcase">
            <div className="showcase-container">
              <ul
                ref={showcaseRef}
                className="showcase-menu"
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

          <div className="menu">
            <ul className="main-menu">
              {menuItems.map((item, i) => (
                <li
                  key={i}
                  className={targetHover == i ? 'hover' : ''}
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