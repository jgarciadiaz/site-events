import { Component } from 'react'
import { Card, CardActions, CardMedia, CardTitle } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Layout from '../components/layout'

class Balance extends Component {

  state = {
    balance: 0
  }

  async componentDidMount() {
    const config = await nearlib.dev.getConfig();
    console.log("nearConfig", config);
    window.near = await nearlib.dev.connect();

    window.contract = await near.loadContract(config.contractName, {
      viewMethods: ["totalSupply", "balanceOf", "allowance"],
      changeMethods: ["init", "transfer", "approve", "transferFrom", "hackOwner"],
      sender: nearlib.dev.myAccountId
    });

    const balance = await contract.balanceOf({'tokenOwner': nearlib.dev.myAccountId})
    this.setState({balance})
  }

  async getCredits() {
    console.log('getting token...')
    const balance = await contract.balanceOf({'tokenOwner': nearlib.dev.myAccountId})
    this.setState({balance}) 
    console.log('done :)')
  }

  async buyCredits() {
    console.log('buying tokens...')
    const from = 'devuser1550626141517'
    const to = nearlib.dev.myAccountId
    const tokens = '100'
    const result = await contract.transferFrom({from, to, tokens })
    const balance = await contract.balanceOf({'tokenOwner': nearlib.dev.myAccountId})
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
          <FlatButton label="Buy credits" onClick={() => this.buyCredits()} />
        </CardActions>
      </Card>
    </Layout>)
  }
}

export default Balance
