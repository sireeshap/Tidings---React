import React,{Component} from 'react';
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { cardTitle } from "assets/jss/material-kit-react.js";
import CardFooter from 'components/Card/CardFooter';  
import Moment from 'react-moment';
import Dialog from "@material-ui/core/Dialog";
import FullNews from './FullNews';
const styles = {
  cardTitle,
  textCenter: {
    textAlign: "center"
  },  
  textRight: {
    textAlign: "right"
  },
  textMuted: {
    color: "#6c757d",     
    position: "absolute",
    bottom: "3px",
    left: "0px",
    padding:"5px"
  },
};

const classes = makeStyles(styles);
///const classes = useStyles();
export default class Article extends Component{

  constructor(props){
super(props);
this.state={
  articles: props.articles,
  blocks:[]
  }
  }

  componentWillMount(){
    if(Object.keys(this.state.articles).length>0 ){   
          this.props.articles.map((key)=>{
           // console.log(key)
           if(key.urlToImage!=null){
           this.state.blocks.push (
            <Card className='card-style' >
            <img className={classes.imgCardTop}  style={{height: "180px"}}  src={key.urlToImage} alt="news image" />
            <CardBody className="card-body">
              <span className={classes.cardTitle}>
              <span className='title tailMore'>{key.title}</span>
              <div className="clearfix"></div>
              
               </span>
              </CardBody> 
              <FullNews fullnews={key}/>
            {/* <CardBody>
            <h4 className={classes.cardTitle}>{key.title}</h4>
            <p>{key.description}</p>
            </CardBody> */}
                 <CardFooter className={classes.textMuted}>
           <Moment fromNow>{key.publishedAt}</Moment>
          
         </CardFooter>
           </Card>
      
           )}
         //  this.forceUpdate();
         //return blocks
          })
  }
}//componentwillmount end 
  render(){
    return <div className="article-container">{this.state.blocks}</div>
  }
}