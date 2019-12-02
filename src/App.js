import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

//import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Chip from '@material-ui/core/Chip';
import data from "./db"; 
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { FormControl } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  chipGrid:{
    display:"flex",
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
    
    
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


const getOrigins = (db) =>{
  let items=[]
  items.push('All')
  items=items.concat(Array.from(new Set(db.map(a=>a["origin"]))))
  return items
}

function SelectOrigin(props){
  
  const [age, setAge] = React.useState(props.origins[0]);
  const handleChange = event => {
    setAge(event.target.value);
    props.onSelectChange(event.target.value)
  };
  
  return(
    <div>
    <FormControl>
    <InputLabel id="origin-select">Country</InputLabel>
    <Select
          style= {{minWidth:'120px'}}
          labelId="origin-select"
          id="origin-select"
          
          value={age}
          onChange={handleChange}>
          {props.origins.map((origin)=> <MenuItem value={origin}>{origin}</MenuItem>)}
          
        </Select>
      </FormControl>
    </div>
  )

}

function Post(props){
  
  return(
    <Grid item  xs={12} sm={6} md={4}>
                <Card  className={props.classes.card}>
                  <CardContent className={props.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      <Link href={props.cardCont.link}>{props.cardCont.title}</Link>
                    </Typography>
                    <Typography gutterBottom variant="h6">{props.cardCont.origin}</Typography>
                    <Typography>
                      {props.cardCont.desc}
                    </Typography> 
                  </CardContent>
                </Card>
              </Grid>
  )
}

function CardGrid(props){
  const classes = useStyles();
  //console.log(props.db)
  return (
    <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {props.db.map(card => (
              <Post classes={classes} cardCont={card} key={card.title}/>
            ))}
          </Grid>
          
        </Container>
  )
}

function filterData(data,filter){
  if (filter!='All') {
    return data.filter(item => item.origin===filter)
  }
    else return data
}


function App() {
  
  const classes = useStyles();
  const [filter, setFilter] = useState('USA');
  return (
   <div>
    <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
    <Container maxWidth="md">
        <Grid container spacing={2} justify="center">
          <Grid item>
          < SelectOrigin onSelectChange={setFilter} origins={getOrigins(data)}/>
          
          </Grid>
        </Grid>
    </Container>
    <CardGrid db={filterData(data,filter)}/>
   
   </div>
  )
}

export default App;
