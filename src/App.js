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
import {intersection} from 'lodash'
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import Input from '@material-ui/core/Input';
import ListItemText from '@material-ui/core/ListItemText';

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
    props.onSelectChange(state => ({ ...state,origin:event.target.value }))
    
  };
  
  return(
    <div>
    <FormControl>
    <InputLabel id="origin-select">Country</InputLabel>
    <Select
          style= {{minWidth:'230px'}}
          labelId="origin-select"
          id="origin-select"
          
          value={age}
          onChange={handleChange}>
          {props.origins.map((origin)=> <MenuItem key={origin} value={origin}>{origin}</MenuItem>)}
          
        </Select>
      </FormControl>
    </div>
  )

}

function SelectTags(props) {
  const items = props.tags.map(name => (
    <div>
      <MenuItem key={name} value={name}>
        <ListItemText primary={name}/>
        <Checkbox/>
      </MenuItem>
    </div>
  ))
  return (
    <FormControl>
      <Select>
        {items}
      </Select>
    </FormControl>
     
  )
  
}

function Post(props){
  
  return(
    <Grid item  xs={12} sm={6} md={4}>
                <Card  className={props.classes.card}>
                  <CardContent className={props.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      <Link href={props.cardCont.link}>{props.cardCont.title}</Link>
                      { props.cardCont.tags.includes('SP fav') ? <Favorite style={{color:"red"}}/>:null}
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
  
  return (
    <Container className={classes.cardGrid} maxWidth="md">
          
          <Grid container spacing={4}>
            {props.db.map(card => (
              <Post classes={classes} cardCont={card} key={card.title}/>
            ))}
          </Grid>
          
        </Container>
  )
}

let tagList = (db) => {
  return Array.from(new Set(db.map(post => post.tags).reduce((a,b) => a.concat(b))))
}
function filterData(data,fltr){
  if (fltr.origin==='All' && fltr.tags.length===0) 
    return data
    else if(fltr.tags.length===0){
      return data.filter(elem=>elem.origin===fltr.origin)
    }else if(fltr.origin==='All' && fltr.tags.length!==0){
      return data.filter(elem=>intersection(elem.tags,fltr.tags).length!==0)
    }
    else return data.filter(function(elem){
        
        
        return (intersection(elem.tags,fltr.tags).length!==0 && elem.origin===fltr.origin)
    })
}


function App() {
  let initFilter={
    origin:"All",
    tags:[]
  }
  
  const handleFavChange = event => {
    let tempFilter=filter
    if (event.target.checked===true) {
        tempFilter.tags.push('SP fav')
        setFilter(tempFilter)
    }else{
      tempFilter.tags=tempFilter.tags.filter(elem=>elem!=='SP fav')
      setFilter(tempFilter)
    }
    setFav(event.target.checked);
  };

  const classes = useStyles();
  const [filter, setFilter] = useState(initFilter);
  const [favState, setFav] = React.useState(false)
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
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item>
            < SelectOrigin onSelectChange={setFilter} origins={getOrigins(data)}/>
          </Grid>
          <Grid key='selectorFav' item>
          <FormControlLabel
            control=
              {
                <Checkbox
                  checked={favState}
                  onChange={handleFavChange}
                  value="checkedB"
                  color="primary"
              />
              }
              label="Scaredpanties' Favorites"
              />
          </Grid>
         <Grid key='tagSelector' item>
              <SelectTags tags={tagList(filterData(data,filter)).filter(elem=>elem!=='SP fav')}/>
          </Grid> 
        </Grid>
    </Container>
    <CardGrid db={filterData(data,filter)}/>
   
   </div>
  )
}

export default App;
