import { Component } from 'react'
import { Card, CardActions, CardMedia, CardTitle } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const clickAds = async () => {
  console.log('paying tokens...')
  const to = 'bob.near'
  const tokens = '10'
  const result = await contract.transfer({ to, tokens })
  console.log('done :)')
}

class Ads extends Component {
  async componentDidMount() {
    const config = await nearlib.dev.getConfig();
    window.near = await nearlib.dev.connect();

    window.contract = await near.loadContract(config.contractName, {
      viewMethods: ["totalSupply", "balanceOf", "allowance"],
      changeMethods: ["init", "transfer", "approve", "transferFrom"],
      sender: nearlib.dev.myAccountId
    });
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
          <FlatButton label="Click Ads" onClick={clickAds} />
        </CardActions>
      </Card>
    )
  }
}

export default Ads
