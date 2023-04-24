import Image from 'next/image'
import { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import { Inter } from 'next/font/google'
import React from 'react'
import SearchBar from '@/components/searchBar'
import SearchBarResults from '@/components/NavBar'


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <SearchBar/>
    </main>
  )
}



