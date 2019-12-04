import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CardActionArea from '@material-ui/core/CardActionArea';
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
import data from "./dbFiltered"; 
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { FormControl, CardHeader } from '@material-ui/core';
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
import Box from '@material-ui/core/Box';

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
    justifyContent: "space-between"
    
    
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    margin:"200px",
    flexGrow: 1,
    alignItems:"flex-end",
    
  },
  chipGrid:{
    display:"flex",
    flexWrap: 'wrap',
    justifyContent: "space-around",
    
    
    '& > *': {
      margin: theme.spacing(0.7),
    },
    
    
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://blog.scaredpanties.com/">
        scaredpanties
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


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
    <InputLabel id="origin-select">Brand origin country</InputLabel>
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
  
  const [tag, setTag] = React.useState([props.tags[0]]);

  const handleChange = event => { 
    let eventFiltered=event.target.value

    if (eventFiltered.includes('All')&& eventFiltered.length>1){
      eventFiltered=eventFiltered.filter(elem=>elem!=='All')
    }
    if (eventFiltered.length<1){
      eventFiltered.push('All')
    }
    setTag(eventFiltered);
    props.onSelectChange(state => ({ ...state,tags:eventFiltered}))
    
  };
  
  return(
    <div>
    <FormControl>
    <InputLabel id="tag-select">Tag selector</InputLabel>
    <Select
          style= {{minWidth:'230px'}}
          labelId="tag-select"
          id="tag-select"
          multiple
          input={<Input/>}
          value={tag}
          onChange={handleChange}>
          {props.tags.map((tag)=> <MenuItem key={tag} value={tag}>{tag}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  )
}

function Post(props){
  const classes = useStyles();
  return(
    <Grid item  xs={12} sm={6} md={4}>
                <Card  className={props.classes.card}>
                  <CardContent className={props.cardContent} >
                    <Typography gutterBottom variant="h5" component="h2">
                      <Link href={props.cardCont.link}>{props.cardCont.title}</Link>
                      { props.cardCont.fav===true ? <Favorite style={{color:"red"}}/>:null} 
                    </Typography>
                    
                    <Typography gutterBottom variant="h6">{props.cardCont.origin}</Typography>
                    <Typography >
                      {props.cardCont.desc}
                    </Typography>
                    
                  </CardContent>
                  <CardActionArea>
                  <Box className={classes.chipGrid}>
                    {props.cardCont.tags.map(tag => <Chip size="small" label={tag}/>)}
                    </Box> 

                  </CardActionArea>
                  
                     
                      
                  
                </Card>
              </Grid>
  )
}

function CardGrid(props){
  const classes = useStyles();
  
  return (
    <Container className={classes.cardGrid} maxWidth="md"  >
          
          <Grid container spacing={4}   alignItems="stretch">
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
   if (fltr.origin!=='All') data = data.filter(elem=>elem.origin===fltr.origin)
   if (fltr.fav===true) data=data.filter(elem=>elem.fav===true)
   if (fltr.tags[0]!=='All') data = data.filter(elem=>intersection(elem.tags,fltr.tags).length!==0)
   console.log(fltr.tags)
   return data
}


function App() {
  let initFilter={
    origin:"All",
    tags:['All'],
    fav:false
  }
  
  const handleFavChange = event => {
    
    setFav(event.target.checked);
    let tmp=event.target.checked
    setFilter(state => ({ ...state,fav:tmp}))
    
  };

  const classes = useStyles();
  const [filter, setFilter] = useState(initFilter);
  const [favState, setFav] = React.useState(false)

  let tgList=tagList(data)
               
  tgList.unshift('All')
  
  return (
   <div>
    <CssBaseline />
    <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              scaredpanties
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Lingerie brands catalog
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
          <Grid key='tagSelectorComp' item>
              <SelectTags tags={tgList} onSelectChange={setFilter}/>
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
          <Favorite style={{color:"red"}}/>
          </Grid>
        </Grid>
    </Container>
    <CardGrid db={filterData(data,filter)}/>
    <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Lingerie reviews, advice, and tips with a touch of luxury
        </Typography>
        <Copyright />
      </footer>
   </div>
  )
}

export default App;
