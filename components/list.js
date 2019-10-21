import React, { Component } from 'react'

import Card from './card'

function adjustItems(items, ads) {
  const adsIndex = 3
  return [...items.slice(0, adsIndex), ads, ...items.slice(adsIndex)]
}

export default class extends Component {

  render() {
    const { events, filter, ads } = this.props

    if (!events.length) {
      return null
    }

    const filteredEvents = events.filter(event => !filter || event.score === filter)

    const items = adjustItems(filteredEvents, ads)
  
    return items.map(item => <Card item={item} key={item.uuid} />)
  }
}
