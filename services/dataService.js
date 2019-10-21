import 'isomorphic-unfetch'

const apiUrl = process.env.API_URL

async function getData(query) {
  const res = await fetch(`${apiUrl}${query}`)

  return res.json()
}

async function getEvents() {
  const { data:  { event = [] } = {}} = await getData('/events?query={event(uuid:%22%22){title,description,url,image,uuid,score}}')

  return event
}

async function getWheater() {
  const { data:  { report = {} } = {}} = await getData('/weather?query={report{celsius,fahrenheit}}')

  return report
}

function getAds() {
  return {
    uuid: 'ads-uuid',
    title: 'ads title',
    description: 'ads description',
    url: '/',
    image: '/ads.png',
    type: 'ads'
  }
}

module.exports.getEvents = getEvents
module.exports.getWheater = getWheater
module.exports.getAds = getAds
