import React from 'react'
import FeaturedItem from './FeaturedItem'
import data from '../data/data.json'
import {ReactDOM, useState } from 'react'

function Dashboard() {
    
    const [items, setItems] = useState(data)
  return (
      <div>
          {items.map((item, index) =>(
            <FeaturedItem
                key={index}
                img={item.img}
                name={item.name}
                interested={item.interested}
                date={item.date}
                status={item.status}
            />
          ))}
          
    </div>
  )
}

export default Dashboard
