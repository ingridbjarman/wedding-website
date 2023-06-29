'use client'
import HomeDesktop from "@/components/homeDesktop";
import HomeMobile from "@/components/homeMobile";
import Image from "next/image";
import Church from "../img/church.png"
import Venue from "../img/venue.png"

export default function Home() {
  return (
    <main>
      <Md/>
    </main>
  )
}

function Md() {
  return (
    <div>
      <div className='hidden md:block'>
        <HomeDesktop/>
      </div>
      <div className="block md:hidden">
        <HomeMobile />
      </div>
    </div>
  )
}