import React from 'react'

export default function Card(props) {
    const {title, description, time, imgSrc} = props

  return (
    <div className="flex justify-between">
        <div className="h-full">
            <p className="text-sm text-[#8d5e6f] mb-1">{time}</p>
            <h3 className="text-lg font-semibold mb-1">{title}</h3>
            <p className="text-sm text-[#8d5e6f] mb-1">{description}</p>
            <button className="mt-4 text-sm rounded-full bg-gray-100 px-4 py-2">Read more</button>
        </div>
        <img src={imgSrc} alt={title} className="w-28 h-28 object-cover rounded-lg" />
    </div>
  )
}
