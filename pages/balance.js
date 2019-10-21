import { Component } from 'react'
import { Card, CardActions, CardTitle } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

import Layout from '../components/layout'
import { connect, getBalance } from '../services/nearService'

class Balance extends Component {

  state = {
    balance: 0
  }

  async componentDidMount() {
    window.nearInitPromise = await connect()

    const balance = await getBalance()

    this.setState({balance})
  }

  async getCredits() {
    console.log('getting tokens...')

    const balance = await getBalance()

    this.setState({balance}) 

    console.log('done :)')
  }

  render() {
    const { balance } = this.state
    return (<Layout>
      <Card>
        <CardTitle>
          <h1>Tokens: {balance}</h1>
        </CardTitle>
        <CardActions>
          <FlatButton label="Refresh" onClick={() => this.getCredits()} />
        </CardActions>
      </Card>
    </Layout>)
  }
}

export default Balance
