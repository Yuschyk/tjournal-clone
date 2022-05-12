import React from 'react'

import MainLayout from '../layouts/MainLayout'
import Post from '../components/Post'

export default function Home() {
  return (
    <MainLayout>
      <Post />
      <Post />
      <Post />
    </MainLayout>
  )
}
