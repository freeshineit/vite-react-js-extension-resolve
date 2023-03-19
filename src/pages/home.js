import React from 'react'

import { getName } from '@/utils'

const Home = () => {
  const name = getName('Home page')

  return <>Home {name}</>
}

export default Home
