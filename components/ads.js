import { Component } from 'react'
import { Card, CardActions, CardMedia, CardTitle } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

import { connect, chargeTokens } from '../services/nearService'

class Ads extends Component {
  async componentDidMount() {
    window.nearInitPromise = await connect()
  }

  render() {
    const { data } = this.props
    return (
      <Card>
        <CardMedia
          overlay={<CardTitle title={data.title} />}
        >
          <img src={data.image} alt={data.title} />
        </CardMedia>
        <CardTitle subtitle={data.description} />
        <CardActions>
          <FlatButton label="Click Ads" onClick={chargeTokens} />
        </CardActions>
      </Card>
    )
  }
}

export default Ads
