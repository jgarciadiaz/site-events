import React, { Component } from 'react'

import Event from '../components/event'
import Ads from '../components/ads'

export default class extends Component {

  render() {
    const { item } = this.props

    if (item.type === 'ads') {
      return <Ads data={item} />
    }

    return <Event data={item} />
  }
}
