import Link from "next/link";
import Image from "next/image";
import Church from "../img/church.png";
import Venue from "../img/venue.png";


export default function HomeDesktop() {
  return (
    <div className="grid grid-cols-9">
      <div className='relative flex col-start-2 col-span-8'>
        <Image
          src={Church}
          alt="church"
          width={1500}
          height={250}
          className='flex rounded-tl-full'
        />
        <div className="absolute -bottom-8 -left-32 h-40 w-2/4 bg-white rounded-tr-full p-10 flex place-content-start">
          <div className="font-brittany text-6xl pb-10 flex">
            We're getting married!
          </div>
        </div>
      </div>
      <div className="col-start-1 col-span-6 p-16 font-montserrat font-extralight text-xl flex flex-col gap-6">
        <p>Welcome to our wedding website - we’re so glad you’re here. This website contains lots of information regarding our wedding day and will hopefully be a helpful resource for you. </p>
        <p>Here you’ll find information about the schedule for the day, the location (how to get there, places to stay) as well as directions to the church and venue. You can also RSVP and request your favourite tune for the dance floor! </p>
        <p>Don't forget to check the FAQ page for lots of other useful info (such as how you can request to make a speech!).</p>
        <p>We are SO excited to share this day with all of our favourite people and can’t wait to celebrate with you! </p>
      </div>
      <div className="relative flex col-start-1 col-span-8">
        <Image
          src={Venue}
          alt="venue"
          width={1300}
          height={250}
          className='flex rounded-tr-full'
        />
        <div className="absolute -bottom-8 -right-24 h-24 w-2/4 bg-white rounded-tl-full p-10 flex place-content-end">
          <div className="font-brittany text-5xl flex text-right">
            Order of events
          </div>
        </div>
      </div>
      <div className="font-montserrat font-extralight text-xl text-right flex flex-col col-start-3 col-span-7 gap-8 p-16">
        <p>On Saturday the 17th of August, we will begin at the beautiful Danmarks church in Uppsala. The doors will open at 12:30pm and the ceremony will begin at 1pm. A more detailed program for the ceremony will be provided on the day. </p>
        <p>After the ceremony, we will all walk next door to the venue where welcome drinks and light snacks will be served.</p>
        <p>Around 4pm, we’ll all take our seats inside for dinner and speeches. After that, we will cut the cake and do a first dance - then we let the partying commence!</p>
      </div>
      <div className="flex col-start-1 col-span-5 flex-col place-items-center">
        <div className="font-brittany text-5xl flex place-self-start px-16">
          Location
        </div>
        <div className="px-16 py-16 flex flex-col gap-6 font-montserrat font-extralight text-xl text-left">
          <p>The church is located a 15 minute drive outside Uppsala city centre, and the venue is right across the street from the church. You can easily get there by car, taxi or bus.</p>
          <p>More details and directions can be found on the FAQ page.</p>
        </div>
      </div>
      <div className="flex col-start-6 col-span-4">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2004.9754741644917!2d17.742408676691806!3d59.83293877060831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465fc94f7090a9d1%3A0x89f1a90eb8ba723d!2sDanmarks%20Kyrka!5e0!3m2!1sen!2suk!4v1685532604881!5m2!1sen!2suk" 
          width="750" 
          height="375" 
          className="flex py-6 pr-16" 
          loading="lazy" 
        >
        </iframe>
      </div>
    </div>
  )
}