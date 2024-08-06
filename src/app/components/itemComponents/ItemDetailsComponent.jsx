import React from 'react'

const ItemDetailsComponent = ({data, id}) => {
  const filterId = data.filter((i)=> String(i.id) === String(id))
  console.log(data, id, filterId.name)
  return (
    <div className='border-2 border-zinc-900 m-2 p-2 w-56'>
        <p>
            name : {filterId[0].name}
        </p>
        <div className='w-56 h-64'>
        </div>
        <p>
            description : {filterId[0].description}
        </p>
    </div>
  )
}

export default ItemDetailsComponent