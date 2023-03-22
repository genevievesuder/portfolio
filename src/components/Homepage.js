import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';


const Homepage = () => {
  return (
    <div className="homepage">
      <div className="top-container">
        <div className="text">
          <span className="fsd">// SOFTWARE ENGINEER</span><br/>
          <span className="tagline">multidisciplinary full-stack web developer & artist with a backgroud in management</span>
        </div>
       <img className="self" src={process.env.PUBLIC_URL+"/photo.jpg"} alt="Genevieve"/>
      </div>
      <div className='bottom-container'>
        <Card className='card' sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Card 1
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <Button size="small" color="primary">Visit</Button>
        </Card>

        <Card className='card' sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Card 2
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <Button size="small" color="primary">Visit</Button>
        </Card>

        <Card className='card' sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Card 3
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <Button size="small" color="primary">Visit</Button>
        </Card>

      </div>
    </div>
  )
}

export default Homepage