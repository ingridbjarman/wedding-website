'use client'
import { collection } from "@firebase/firestore"
import { useCollection } from "react-firebase-hooks/firestore"
import { db } from '@/firebase/config'
import { useState } from 'react'
import { SelectGroup } from '@/components/selectGroup'
import { useRouter } from 'next/navigation';

export default function Rsvp() {
  return (
    <main>
      <Lg/>
    </main>
  )
}


function Lg() {
  const { push } = useRouter();

  const [selectedGroup, setSelectedGroup] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [values, loading, error] = useCollection(
    collection(db, "rsvp")
  );

  if(loading) {
    return ( 
      <div className="flex h-full w-full place-content-center">
        <div className="flex w-fit h-fit justify-between items-center bg-stone-100 rounded-lg font-montserrat font-light text-xl pr-2">
          <div className="mr-4 m-2 inline-block h-6 w-6 animate-spin rounded-full border-stone-400 border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status"></div>
          Loading...
        </div>
      </div>
    )
  }

  const handleSubmit = (selectedGroup: any) => (evt: any) => {
    evt.preventDefault();
    if(!selectedGroup) {
      setErrorMessage('Please select the group you would like to RSVP for');
      return;
    }

    push(`/rsvp/${selectedGroup.id}`);
  }

  const groups = values?.docs.map((v: any) => ({...{id: v.id},...v.data()}))
  return (
    <div>
      <div className='hidden lg:block'>
        <div className="flex flex-col gap-10 place-items-center min-h-screen p-16">
          <div className="font-montserrat font-extralight text-lg text-slate-600 flex flex-col gap-2 place-items-center">
            <h1 className="text-2xl font-light text-slate-800">Welcome to our RSVP page!</h1>
            <p>To let us know if you're attending, please search the list for your surname</p>
            <p>and select the correct item from the dropdown menu</p>
          </div>
          <form onSubmit={handleSubmit(selectedGroup)} className="flex flex-col w-1/3 h-fit gap-2">
            {errorMessage && (
              <label className="label flex place-self-center">
                <span className="label-text text-error font-montserrat font-extralight text-md text-slate-500">{errorMessage}</span>
              </label>
            )}
            <div className="flex border rounded-lg justify-between p-4 shadow-sm">
              <div>
                <SelectGroup groups={groups} setGroup={setSelectedGroup} />
              </div>
              <div>
                <button type='submit' className="font-montserrat font-extralight text-xl text-slate-600 hover:font-light hover:text-slate-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="block lg:hidden">
        <div className="flex flex-col gap-10 place-items-center min-h-screen px-4">
          <div className="font-montserrat font-extralight text-md text-slate-600 flex flex-col gap-2 place-items-center text-center">
            <h1 className="text-xl font-light text-slate-800">Welcome to our RSVP page!</h1>
            <p>To let us know if you're attending, please search the list for your surname and select the correct item from the dropdown menu</p>
          </div>
          <form onSubmit={handleSubmit(selectedGroup)} className="flex flex-col w-fit h-fit place-items-center gap-4">
            {errorMessage && (
              <label className="label flex text-center">
                <span className="label-text text-error font-montserrat font-extralight text-sm text-slate-500">{errorMessage}</span>
              </label>
            )}
            <div className="flex border rounded-lg justify-between p-4 shadow-sm">
              <div>
                <SelectGroup groups={groups} setGroup={setSelectedGroup} />
              </div>
              <div>
                <button type='submit' className="font-montserrat font-extralight text-lg text-slate-600 hover:font-light hover:text-slate-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

