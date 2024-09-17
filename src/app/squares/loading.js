import React from 'react'

const loading = () => {
    console.log('loading')
  return (
    <div className='flex flex-row *:m-2 rounded-lg border-2 border-zinc-600 bg-zinc-900/75 m-2 p-2 '>
      <p className='font-bold text-zinc-200'>
        SQUARING ...
      </p>
      <div className='w-5 h-5 border-zinc-200 border-2 animate-spin'>

      </div>
    </div>
  )
}

export default loading