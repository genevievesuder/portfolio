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
          <span className="fsd">//SOFTWARE ENGINEER</span><br/><br/>
          <span className="tagline">big picture visionary thinker with a passion for <b>innovative solutions</b></span><br/>
          <p className="sub-tagline">alaskan ❄ // artist 🖌 // creative at ♥ // loves to code ⌨</p>
        </div>
       <img className="self" src={process.env.PUBLIC_URL+"/gg.jpg"} alt="Genevieve"/>
      </div>
      <img className="circuit1" src={process.env.PUBLIC_URL+"/circuit2.png"} alt="circuit design"/>
      <img className="circuit2" src={process.env.PUBLIC_URL+"/circuit2.png"} alt="circuit design"/>
      <img className="circuit3" src={process.env.PUBLIC_URL+"/circuit1.png"} alt="circuit design"/>
      <img className="spotlight" src="https://see.fontimg.com/api/renderfont4/Yz06j/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjQ0NCQzVBIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/cHJvamVjdCBzcG90bGlnaHQ/buljirya-personal-use.png" alt="Fancy fonts"/>
      <div className='bottom-container'>
        <Card className='card' sx={{ minWidth: 325, maxWidth: 345 }}>
          <label className="card-label">RUBY ON RAILS · REACT</label>
          <CardMedia
            className='card-media'
            component="img"
            height="350"
            src={process.env.PUBLIC_URL+"/card1.jpg"}
            // image="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
            alt="mystery at rosewood"
          />
          <CardContent className="card-content">
            <Typography gutterBottom variant="h5" component="div">
            <span className="card-content">Mystery at Rosewood</span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <span className="card-content">Point-and-click adventure game</span>
            </Typography>
          </CardContent>
          <Button size="small" color="success">Visit site</Button>|
          <Button size="small" color="success">github</Button>
        </Card>

        <Card className='card' sx={{ minWidth: 325, maxWidth: 345  }}>
          <label className="card-label">RUBY ON RAILS · REACT</label>
          <CardMedia
            className='card-media'
            component="img"
            height="350"
            src={process.env.PUBLIC_URL+"/card2.jpg"}
            // image="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
            alt="ocular"
          />
          <CardContent className="card-content">
            <Typography gutterBottom variant="h5" component="div">
            <span className="card-content">Ocular</span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <span className="card-content">Educational optometry resource app + community forum</span>
            </Typography>
          </CardContent>
          <Button className="card-content" size="small" color="success">Visit site</Button>|
          <Button size="small" color="success">github</Button>
        </Card>

        <Card className='card' sx={{ minWidth: 325, maxWidth: 345  }}>
          <label className="card-label">RUBY ON RAILS · REACT</label>
          <CardMedia
            className='card-media'
            component="img"
            height="350"
            src={process.env.PUBLIC_URL+"/card3.jpg"}
            // image="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
            alt="hotel azure"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            <span className="card-content">Hotel Azure</span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <span className="card-content">Hotel website + reservation booking engine</span>
            </Typography>
          </CardContent>
          <Button size="small" color="success">Visit site</Button>|
          <Button size="small" color="success">github</Button>
        </Card>

       

      </div>
    </div>
  )
}

export default Homepage