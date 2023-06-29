'use client'
import {collection, doc, updateDoc} from "@firebase/firestore"
import {
  useCollection,
  useDocumentDataOnce,
} from "react-firebase-hooks/firestore"
import { db } from '@/firebase/config'
import RsvpForm from "@/components/rsvpForm";
import {FormEvent, useEffect, useState} from "react";

interface Person {
  id: string;
  data: () => any;
}



export default function Rsvp({ params }: any) {
  const [people, loadingPeople] = useCollection(collection(db, 'rsvp', params.id, 'people'));
  const [peopleMap, setPeopleMap] = useState<{ [key: string]: any } | undefined>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    const updatedPeopleMap: { [key: string]: any } | undefined = people?.docs.reduce((acc: { [key: string]: any }, doc: Person) => {
      acc[doc.id] = doc.data();
      return acc;
    }, {});

    setPeopleMap(updatedPeopleMap);
  }, [people]);

  const handleInput = (id: string) => (field: string) => (evt: any) => {
    setPeopleMap((prevGuests: any) => ({
      ...prevGuests,
      [id]: {
        ...prevGuests[id],
        [field]: field !== 'rsvp' ? evt.target.value : evt.target.value === 'true'
      }
    }));
  };

  const handleSubmit = (people: any) => (evt: FormEvent) => {
    evt.preventDefault();
    for (const key in people) {
      const docRef = doc(db, "rsvp", params.id, 'people', key);
      updateDoc(docRef, people[key])
        .then(docRef => {
          console.log("A New Document Field has been added to an existing document");
          setHasSubmitted(true);
        })
        .catch(error => {
          console.log(error);
        })
    }
  }

  if(loadingPeople) {
    return (
      <div className="flex h-full w-full place-content-center">
        <div className="flex w-fit h-fit justify-between items-center bg-stone-100 rounded-lg font-montserrat font-light text-xl pr-2">
          <div className="mr-4 m-2 inline-block h-6 w-6 animate-spin rounded-full border-stone-400 border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status"></div>
          Loading...
        </div>
      </div>
    )
  }

  if(hasSubmitted) {
    return (
      <div className="flex place-content-center">
        <div className="flex p-6 md:p-24 flex-col gap-2 font-montserrat font-extralight text-xl text-center">
          <p>Your response has been saved, thank you for letting us know!</p>
          <p>If you need to update your choices, just fill in the form again.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="px-4 lg:px-16">
      <form onSubmit={handleSubmit(peopleMap)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-500">
          {peopleMap && Object.keys(peopleMap).map((key: string) => {
            const person = peopleMap[key];
            return (
              <div key={key} className="border p-4 rounded-lg">
                <h2 className="block mb-2 text-xl font-montserrat font-extralight text-slate-800">{person.name}</h2>
                <RsvpForm
                  person={person}
                  handleInput={handleInput(key)}
                />
              </div>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <button className="border p-2 rounded-lg font-montserrat font-extralight bg-stone-100 text-slate-500 hover:text-slate-800 hover:bg-stone-200">Submit</button>
        </div>
      </form>
    </main>
  )
}
