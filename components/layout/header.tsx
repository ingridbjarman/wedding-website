'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BurgerMenu from "./burgerMenu";
import Monogram from "../../img/monogram.png"

const links = [
  { name: 'Home', href: '/' },
  { name: 'RSVP', href: '/rsvp' },
  { name: 'Travel & Accomodation', href: '/travel' },
  { name: 'FAQ', href: '/faq' },
]

export default function Header() {

return (
  <header>
    <Md />
  </header>
);

}

function Md() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className='p-8'>
      <div className="grid grid-cols-6">
        <div className='col-start-2 col-span-4 flex flex-col gap-4 grid place-content-center'> 
          <div>
            <Link href='/' className="grid place-content-center">
              <Image
                src={Monogram}
                alt="monogram"
                width={200}
                height={250}
                className="flex"
              />
            </Link>
          </div>
          <div className='hidden sm:block'>
            {links.map((link, index) => <Link key={index} href={link.href} className='p-3 font-montserrat font-extralight hover:underline'>{link.name}</Link>)}
          </div>
          <div className="block sm:hidden flex place-content-center">
            <BurgerMenu />
          </div>
        </div>
      </div>
    </div>
  )
}
