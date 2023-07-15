import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
const img1 = '/image/arya.jpg';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"}`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={img1} alt='logo' className='w-14 h-14 object-contain rounded-full' />
          <p className='text-white text-[20px] font-bold cursor-pointer flex' style={{ fontFamily: 'sans-serif' }}>
            Arya &nbsp;
          </p>
        </Link>
        <div className="socialIcons" style={{ display: 'flex', gap: '20px', position: 'relative', paddingRight: '20px', paddingLeft: '40px' }}>
          <NavLink to="https://www.linkedin.com/in/arya-das-141747226/">
            <i className="fa-brands fa-linkedin" style={{ fontSize: '25px' }}></i>
          </NavLink>
          <NavLink to="https://github.com/arya512ht/">
            <i className="fa-brands fa-github" style={{ fontSize: '25px' }}></i>
          </NavLink>
          <NavLink to="https://www.facebook.com/arya.das.7792052?mibextid=ZbWKwL/">
            <i className="fa-brands fa-facebook" style={{ fontSize: '25px' }}></i>
          </NavLink>
          <NavLink to="https://instagram.com/aryadas_11?igshid=ZDc4ODBmNjlmNQ==/">
            <i className="fa-brands fa-instagram" style={{ fontSize: '25px' }}></i>
          </NavLink>
          <NavLink to="https://drive.google.com/uc?export=download&id=1ul6yNoqF5RXdf9ockJPkHYE_OInX30zW">
            <i className="fa fa-download" style={{ fontSize: '22px' }}></i>
          </NavLink>
        </div>

        <ul className='list-none hidden sm:flex flex-row gap-8'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;