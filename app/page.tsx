'use client'
import React from 'react';

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
        hello world
      </div>
      <div className="block md:hidden">
        hello smaller world
      </div>
    </div>
  )
}
