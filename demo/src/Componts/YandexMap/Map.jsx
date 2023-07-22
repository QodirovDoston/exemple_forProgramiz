import React from 'react'

export default function Map() {
  return (
    <div>
      <YMaps>
    <Map defaultState={{
    center: [55.751574, 37.573856],
    zoom: 9,
    controls: []
  }}>
      <SearchControl options={{
      float: 'right'
    }} />
    </Map>
  </YMaps>
    </div>
  )
}
