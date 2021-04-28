import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  card: {
    maxHeight: "100%"
  },
  title: {
    maxHeight: "1.2rem"
  },
  buttonsArea: {
    marginTop: "1%"
  },
  button: {
    maxWidth: "2%"
  }
})
)

function BlogCard({ blogObject, saveBlog, history }) {
  const classes = useStyles()
  function localClickHandler() {    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // allow for toggling save vs. unsave
    let newValue = blogObject.favorite ? false : true;

    // create the new object
    const savedObject = {
      ...blogObject,
      favorite: newValue
    }

    // stringify
    const raw = JSON.stringify(savedObject);

    // create request options
    const requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    // make PUT request
    fetch(`/blogs/${blogObject.id}`, requestOptions)
      .then(
        response => response.text()
        
        // @TODO update state

        )
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  }
  return (
    <Grid item xs={3}>
      <Card className={classes.card}>
        <CardActionArea >
          <CardMedia
            component="img"
            alt="blog"
            height="200"
            image={blogObject.image}
            title="blog image"
          />
        </CardActionArea>
        <CardContent>
          <Typography className={classes.title} variant="inherit" component="h5" gutterBottom align="center" color="textPrimary">
            {blogObject.title}
          </Typography>
        </CardContent>
        <CardActions className={classes.buttonsArea}>
          <Button size="small" color="primary" onClick={localClickHandler}>
            {
              !blogObject.favorite ? "Save" : "Unsave"
            }
        </Button>
          <Button className={classes.button} component="a" href={blogObject.url} target="_blank" size="small" color="primary">
            Visit
        </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}


export default withRouter(BlogCard)