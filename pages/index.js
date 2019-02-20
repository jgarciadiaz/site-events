import React from 'react'
import 'isomorphic-unfetch'

import Layout from '../components/layout'
import Filters from '../components/filters'
import Event from '../components/event'
import Ads from '../components/ads'

const ads_index = 3

function getAds() {
  const data = {
    uuid: 'ads-uuid',
    title: 'ads title',
    description: 'ads description',
    url: '/',
    image: '/static/ads.png'
  }
  return <Ads data={data} key={data.uuid}></Ads>
}

export default class extends React.Component {

  static async getInitialProps({ req }) {
    // const apiUrl = 'http://api-events'
    const apiUrl = 'http://0.0.0.0:8000'
    const res = await Promise.all([
      fetch(`${apiUrl}/events?query={event(uuid:%22%22){title,description,url,image,uuid,score}}`),
      fetch(`${apiUrl}/weather?query={report{celsius,fahrenheit}}`),
    ])
    const eventsResults = await res[0].json()
    const weatherResults = await res[1].json()

    return {
      events: eventsResults && eventsResults.data && eventsResults.data.event ? eventsResults.data.event : [],
      weather: weatherResults && weatherResults.data && weatherResults.data.report ? weatherResults.data.report[0] : null
    }
  }

  state = {
    selectedIndex: 0
  }

  setFilterIndex = index => this.setState({ selectedIndex: index })

  printCard(event, index) {
    const result = []
    if (index === ads_index) {
      result.push(getAds())
    }
    result.push(<Event event={event} key={event.uuid}></Event>)

    return result
  }

  renderEvents(selectedIndex) {
    const { events, weather } = this.props

    if (events.length) {
      return events
        .filter(event => !selectedIndex || event.score === selectedIndex - 1)
        .map(this.printCard)
    }

    return null
  }

  render() {
    const { selectedIndex } = this.state
    const { weather } = this.props
    return (<Layout>
      <Filters clickHandler={this.setFilterIndex} selectedIndex={selectedIndex} weather={weather} />
      {this.renderEvents(selectedIndex)}
    </Layout>)
  }
}
