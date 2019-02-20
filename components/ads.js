import { Card, CardActions, CardMedia, CardTitle } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const openGrpnPage = () => {
  console.log('w3')
}

export default ({ data }) => (
  <Card>
    <CardMedia
      overlay={<CardTitle title={data.title} />}
    >
      <img src={data.image} alt={data.title} />
    </CardMedia>
    <CardTitle subtitle={data.description} />
    <CardActions>
      <FlatButton label="Read More" onClick={openGrpnPage} />
    </CardActions>
    <style jsx global>{`
      img {
        width: 100%
      }
      .icon {
        float: right
      }
    `}</style>
  </Card>
)

