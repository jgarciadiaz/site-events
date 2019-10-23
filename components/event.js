import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import ActionHome from 'material-ui/svg-icons/action/home'
import ActionGrade from 'material-ui/svg-icons/action/grade';
import LazyLoad from 'react-lazyload';

function updateLocation(url) {
  window.location = url
}

function getScoreIcon(score) {
  if (score === 1) {
    return <ActionGrade />
  }

  else if (score === 2) {
    return <ActionHome />
  }

  return null
}

export default ({ data }) => (
  <Card>
    <CardMedia
      overlay={<CardTitle title={data.title} />}
    >
      <LazyLoad height={200}>
        <img src={data.image} alt={data.title} />
      </LazyLoad>
    </CardMedia>
    <CardTitle subtitle={data.description} />
    <CardActions>
      <FlatButton label="Read More" onClick={() => updateLocation(data.url)} />
      <div className="icon">
        { getScoreIcon(data.score) }
      </div>
    </CardActions>
    <style>{`
      img {
        width: 100%
        min-height: 300px;
      }
      .icon {
        float: right
      }
    `}</style>
  </Card>
)

