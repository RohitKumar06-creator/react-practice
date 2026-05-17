import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full flex overflow-x-auto rounded-4xl flex-nowrap gap-10 p-6 w-3/4'>
      {props.users.map(function(elem, idx){
        return <RightCard id={idx} img={elem.img} tag={elem.tag} intro={elem.intro} />
      })}
      
    </div>
  )
}

export default RightContent
