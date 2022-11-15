import ljlRequest from '@/services'
import React, { memo, useEffect } from 'react'

const home = memo(() => {
  useEffect(() => {
    ljlRequest.get({ url: '/home/highScore'}).then(res => {
      console.log(res)
    })
  }, [])

  return (
    <div>home</div>
  )
})

export default home