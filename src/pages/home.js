import React from 'react'

import { getName } from '@/utils'

const Home = () => {
  const name = getName('HHHHH123413412')

  if (name === '132') {
    return <>0000</>
  }

  return <>Home {name}</>
}

export default Home
