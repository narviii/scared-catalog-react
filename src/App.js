import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import ReactGA from 'react-ga';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { tsExpressionWithTypeArguments } from '@babel/types';

const url = "https://scaredpanties.us20.list-manage.com/subscribe/post?u=65173dffd9ab714c0d2d985ab&amp;id=ed2dc9ceb2";



const useStyles = makeStyles(theme => ({
  icon: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    
    padding: theme.spacing(8, 0, 6),
    backgroundImage:"url(" + "https://blog.scaredpanties.com/content/images/size/w2000/2019/06/B0010006_extended2.jpg"+")",
    
    width:'100%',
    height:' 100%',

    
    backgroundPosition: 'center',
    
    backgroundSize: 'cover'
  },
  heroTypography:{
    color:'white'
  },
  ms:{
    textAlign:"center",
    padding:"30px",
    
    '& *':{
      fontSize: "1.2em",
      
  }
    
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    
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
    justifyContent: "space-evenly",
    
    
    '& > *': {
      margin: theme.spacing(0.5),
    },
    
    
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));



function initializeReactGAmain() {
  ReactGA.initialize('UA-39274880-3');
  ReactGA.pageview('/catalog');
}


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
    //console.log(event.target.value)
    let eventFiltered=event.target.value
    

    if (eventFiltered[0]==='All' && eventFiltered.length>1){
      eventFiltered=eventFiltered.filter(elem=>elem!=='All')
    }
    if (eventFiltered.length<1){
      eventFiltered.push('All')
    }

    if (eventFiltered[(eventFiltered.length-1)]==='All' && eventFiltered.length>1){
      eventFiltered=['All']
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

function SuchEmpty(props){
  return (
     <Typography variant="h5" align="center" color="textSecondary" paragraph>
     Such empty!!! Come back soon, we will add more...
     </Typography>
  )
}

function CardGrid(props){
  const classes = useStyles();
  
  return (
    <Container className={classes.cardGrid} maxWidth="md"  >
          {props.db.length>0?
          <Grid container spacing={4}   alignItems="stretch">
            {props.db.map(card => (
              <Post classes={classes} cardCont={card} key={card.title}/>
            ))}
          </Grid>
          :<SuchEmpty/>}
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
   //console.log(fltr.tags)
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
 
  initializeReactGAmain()
  const classes = useStyles();
  const [filter, setFilter] = useState(initFilter);
  const [favState, setFav] = React.useState(false)

  let tgList=tagList(data)
               
  tgList.unshift('All')
  
  return (
   <div>
    <CssBaseline/>
    <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography variant="h3" align="center" className={classes.heroTypography} gutterBottom >
            scaredpanties'
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" className={classes.heroTypography} paragraph>
              lingerie brands catalog
            </Typography>
          
          </Container>
        </div>
    <Container maxWidth="md" gutterBottom>
      <Grid container justify="space-between" alignItems="center" spacing={2}>
          <Grid item>
            <Button variant="outlined"  color="primary" href="https://blog.scaredpanties.com" > BLOG </Button>
          </Grid>
          <Grid item>
            <IconButton color="primary" aria-label="Mail to scaredpanties" href="mailto:scaredpanties@gmail.com">
                <MailIcon/>
            </IconButton>
            <IconButton color="primary" aria-label="Instagramm" href="https://www.instagram.com/scaredpanties/">
                <InstagramIcon/>
            </IconButton>
            <IconButton color="primary" aria-label="Youtube" href="https://www.youtube.com/channel/UCge0-VKn4mfJfGt1ZCMbcpQ?view_as=subscriber">
                <YouTubeIcon/>
            </IconButton>
            <IconButton color="primary" aria-label="Twitter" href="https://twitter.com/scaredpanties">
                <TwitterIcon/>
            </IconButton>
          </Grid>
        </Grid>
    </Container>
    <Container  maxWidth="md" >
        <Grid container spacing={2} justify="space-between">
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
              label="scaredpanties' favorites"
              />
          <Favorite style={{color:"red"}}/>
          </Grid>
        </Grid>
    </Container>
    <CardGrid db={filterData(data,filter)}/>
    <div >
    <Container maxWidth="sm" className={classes.ms} justify="space-between"  >
        <Typography gutterBottom variant="h6">Subscribe to scaredpanties updates:</Typography>
        <MailchimpSubscribe url={url}/>
    </Container>
    </div>
    <footer className={classes.footer} >
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Lingerie reviews, advice, and tips with a touch of luxury. Feel free to reach out to me via e-mail scaredpanties@gmail.com.
        </Typography>
        <Copyright />
      </footer>
   </div>
  )
}

export default App;
