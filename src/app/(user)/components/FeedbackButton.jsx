import Link from 'next/link'
import React from 'react'
import { FaRocketchat } from 'react-icons/fa'

export default function FeedbackButton() {
  return (
    <Link as={Link} href="/feedback"><div className='feedback-btn my-color btn cat-btn text-end'>
    Feedback &nbsp;&nbsp; <FaRocketchat size={25}/>
  </div></Link>
  )
}
