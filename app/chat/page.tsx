"use client"
import React from 'react'
import SearchInput from '@/components/chat/search-input'
import TopNav from '@/components/chat/top-nav'

export default function Page() {
  return (
    <div className="h-screen p-2">
        <div className="h-full rounded-lg border-2">
          <TopNav />
          <SearchInput />
        </div>
    </div>
  )
}

