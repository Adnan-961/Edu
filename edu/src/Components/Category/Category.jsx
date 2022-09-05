import React from 'react'
import "./styles.scss"
export default function Category({name}) {
  return (
    <div className="category_card">
        <span className='category__name'>
            {name}
        </span>
    </div>
  )
}
