import Link from "next/link";
import React, { useState } from "react";

const links = [
  { name: 'Home', href: '/' },
  { name: 'RSVP', href: '/rsvp' },
  { name: 'Travel & Accomodation', href: '/travel' },
  { name: 'FAQ', href: '/faq' },
]

const BurgerMenu = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="items-center flex flex-col">
      <button className='flex p-4 ' onClick={handleClick}>
        <svg className='w-8 h-8 ' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M4 6h16M4 12h16M4 18h16'/>
        </svg>
      </button>
      <div className={`${ active ? '' : 'hidden' }`}>
        <div className='items-center flex flex-col'>
          {links.map((link, index) => <Link key={index} href={link.href} className='text-center	font-montserrat font-extralight hover:font-light' onClick={handleClick}>{link.name}</Link>)}
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu