'use client'
import { Disclosure } from '@headlessui/react'

let questions = [
  {
    question: "When is the RSVP deadline?",
    answer: "1st of June, 2024! We understand that accepting an invitation is not always a quick or simple decision when there’s travel required, but we would appreciate it if you could let us know by then. To RSVP, please follow the directions on this website."
  },
  {
    question: "Is there a dress code?",
    answer: "If we had to put a label on it, this occasion would probably fall somewhere between “formal” and “semi-formal” on the dress code scale. Other than the standard “don’t wear white” advice, we’ll leave the fashion choices up to you. Just make sure you have a good range of movement - we expect everyone to have their turn on the dancefloor, of course!"
  },
  {
    question: "What is the weather like in Sweden during the summer?",
    answer: "Contrary to popular belief, Sweden actually has rather nice summers - a few degrees hotter than the UK on average, would you believe it! The temperature for August tends to sit just over the 20 degree mark, but it is hard to tell in advance of course. If we’re lucky, we’ll get a nice warm day with lots of sunshine! We would recommend packing for similar weather to the UK."
  },
  {
    question: "How do the speeches work at Swedish weddings?",
    answer: "A lot of UK weddings will have all the speeches done in succession, usually before the meal starts. There is also commonly a list of specific people who will be asked to speak. Swedish weddings tend to go a little differently, with the speeches dotted throughout the reception. The speeches are organised by the toastmaster, who is the person that guests will reach out to if they are interested in doing a speech. This means that the couple usually don’t know who has volunteered to speak!"
  },
  {
    question: "Who is our toastmaster and how do I request to make a speech?",
    answer: "The toasmaster for our wedding will be Ingrid's uncle, Christer! If you would like to make a speech, send an email to christer.toastmaster@gmail.com and he'll take it from there. Please include your full name so he can keep track of everybody."
  },
];

export default function Faq() {
  return (
    <div className="w-full px-4 p-4">
      <div className='flex flex-col place-content-center md:text-center mx-auto w-full md:w-3/4 font-montserrat font-extralight text-md'>
        <h1 className='text-xl font-light pb-8'>Frequently Asked Questions</h1>
        <p className='pb-8'>We are not mind readers or fortune tellers, but we have tried our best to predict some of the questions you might have! We have compiled a list of questions and answers below, but please get in touch if we’ve missed something.</p>
        <p>To contact us, please reach out to +447851402141 via text message/whatsapp or send an email to ingridnbjarman@gmail.com</p>
      </div>
      <div className="mx-auto w-full md:w-3/4 rounded-2xl bg-white my-10">
        {questions.map((question) => (
          <Disclosure key={question.question}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-stone-100 px-4 py-2 text-left text-md font-montserrat font-extralight hover:bg-stone-200 focus:outline-none focus-visible:ring focus-visible:ring-stone-500 focus-visible:ring-opacity-75">
                  <span>{question.question}</span>
                  <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke-width="1.5" 
                  stroke="currentColor" 
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-stone-500`}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 font-montserrat font-extralight text-md">
                  {question.answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
        <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-stone-100 px-4 py-2 text-left text-md font-montserrat font-extralight hover:bg-stone-200 focus:outline-none focus-visible:ring focus-visible:ring-stone-500 focus-visible:ring-opacity-75">
                  <span>What about gifts?</span>
                  <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke-width="1.5" 
                  stroke="currentColor" 
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-stone-500`}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 font-montserrat font-extralight text-md">
                After spending nearly five years together, we are lucky enough to have everything we need - the best gift we could possibly hope for is your presence. However, if you do wish to bless us with a gift, a contribution to our honeymoon fund would be greatly appreciated. You can find it <a className='hyperlink underline text-slate-400 hover:text-terracotta' href='https://www.honeyfund.com/wedding/bjarman-aiken-08-17-2024'>here</a>.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
      </div>
    </div>
  )
}
