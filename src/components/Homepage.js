// import Cards from "./Cards"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';


const Homepage = () => {
  return (
    <div className="homepage">
      <div className="left-container">
        <div className="welcome-box">
            <p className="hi">Hi 👋, I'm</p>
            <img className="name" src={process.env.PUBLIC_URL+"/genevieve.png"} alt="Genevieve"/><br/>
            <span className="fsd">FULL-STACK DEVELOPER</span>
            <p>quick about me section...</p>
        </div>
      </div>
      <div className="right-container">
           HIII 
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