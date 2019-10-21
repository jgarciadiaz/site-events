import React, { Component } from 'react'

import Layout from '../components/layout'
import Filters from '../components/filters'
import List from '../components/list'

import { getEvents, getWheater, getAds } from '../services/dataService'

export default class extends Component {

  static async getInitialProps() {
    return {
      events: await getEvents(),
      weather: await getWheater(),
      ads: getAds()
    }
  }

  state = {
    filter: 0
  }

  setFilter = value => this.setState({ filter: value })

  render() {
    const { filter } = this.state
    const { events, weather, ads } = this.props

    return (<Layout>
      <Filters clickHandler={this.setFilter} selectedIndex={filter} weather={weather} />
      <List events={events} filter={filter} ads={ads} />
    </Layout>)
  }
}
