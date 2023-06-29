'use client'
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import TravelContent from '@/components/travelContent'
import AccomodationContent from '@/components/accommodationContent'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Travel() {
  let [categories] = useState({
    Travel: <TravelContent/>,
    Accommodation: <AccomodationContent/>,
  })

  return (
    <div className='flex place-content-center'>
      <div className="p-2  w-full md:w-2/3">
        <Tab.Group>
          <Tab.List className="flex space-x-1 bg-slate-50 rounded-xl p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-montserrat font-extralight leading-5 text-slate-800',
                    'ring-slate-500 ring-opacity-60 focus:ring-1',
                    selected
                      ? 'bg-white shadow'
                      : 'text-slate-800'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'rounded-xl bg-white p-3',
                  'ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2'
                )}
              >
                <ul>
                  {posts}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}
