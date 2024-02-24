import'../assets/css/Blogs.css'
import { Card, CardMedia, CardContent, CardActions, Typography } from '@mui/material';
import Button from '@mui/material/Button';


const Blogs = () => {
  return (
    <div>
          <div className='Oc2'>
          <h1 className='Oc'> OUR BLOGS </h1>
          </div>
          <div className="row">
            <div className='column'>
              <Card sx={{ maxWidth: 345, height:400 }}>
                  <CardMedia sx={{ height: 240 }} image="https://assets.telegraphindia.com/telegraph/0237f535-7cb1-4c7e-84f2-04bd1721c051.jpg" title="green iguana"/>
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="div">Crop State</Typography>
                      <Typography variant="body2" color="text.secondary">
                            A CROP IN THE FIELD BUT
                            NONE TO HARVEST IN THE DELHI.
                      </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small"><a href="https://www.telegraphindia.com/india/coronavirus-lockdown-a-crop-in-the-field-but-none-to-harvest/cid/1762392">Learn More</a></Button>
                  </CardActions>
              </Card>
              </div>
            <div className='column'>
              <Card sx={{ maxWidth: 345, height:400 }}>
                  <CardMedia sx={{ height: 230 }} image="https://drishtiias.com/images/uploads/1683626389_image4.jpg" title="green iguana"/>
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="div">The Graph of crop trade.</Typography>
                      <Typography variant="body2" color="text.secondary">
                        BETWEEN 2013-14 AND 2015-16, INDIAN AGRICULTURAL EXPORTS SHARPLY FELL 
                      </Typography>
                  </CardContent>
                  <br/>
                  <CardActions>
                      <Button size="small"><a href="http://www.decision-innovation.com/blog/disinsights/agritourism-data-insight/">Learn More</a></Button>
                  </CardActions>
              </Card>
              </div>
            <div className='column'>
              <Card sx={{ maxWidth: 345, height:400}}>
                  <CardMedia sx={{ height: 180 }} image="https://www.ifpri.org/sites/default/files/Blog/women_farmers_tanzania.jpg" title="green iguana"/>
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="div">Empowering Africa women farmers</Typography>
                      <Typography variant="body2" color="text.secondary">
                      Closing the gender gap in agriculture in most of Africa south of the Sahara,
                       women rarely own land.
                      </Typography>
                  </CardContent>
                  <br/>
                  <CardActions>
                      <Button size="small"><a href="https://www.ifpri.org/blog/empowering-africas-women-farmers">Learn More</a></Button>
                  </CardActions>
              </Card>
              </div>
           </div>
           </div>
    )
}

export default Blogs