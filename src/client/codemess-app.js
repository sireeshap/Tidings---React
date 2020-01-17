    import React, { Component } from 'react';
import 'assets/scss/material-kit-react.css';
    //Material -ui
    import Header from 'components/Header/Header';
    import HeaderLinks from 'components/Header/HeaderLinks';
    import Parallax from 'components/Parallax/Parallax';
    import styles from "assets/jss/material-kit-react/views/components.js"; 
import NavigationBar from './NavigationBar/NavigationBar';
 // @material-ui/core components
 import { makeStyles } from "@material-ui/core/styles";
 import GridContainer  from 'components/Grid/GridContainer.js';
 import  GridItem  from 'components/Grid/GridItem.js';

 const useStyles = makeStyles(styles);
 const classes = useStyles();
export default class CodeMessApp extends React.Component {

  constructor(props){
super(props)
this.state={
  countryNames:[]
}
  }
  componentWillMount(){
    fetch('./../../json/country.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then((responce) =>{
      return responce.json()
    })
    .then((countryData) => {
      console.log(countryData.countries)
      this.setState({countryNames: countryData.countries})
    })
  }
  render(){

return(
  <div>
  < Header
  rightLinks= {<HeaderLinks countryNames={this.state.countryNames}/>}
  fixed
  color="transparent"
  changeColorOnScroll= {{
    height: 400,
    color:  "white"}}
    font='20px'
  >
  
  
  </Header>

  <Parallax image={require("./../assets/img/newNewsBanner.jpg")}>
  <div className={classes.container}>
  <div>
            <GridContainer>
  
  <GridItem>
    <div className={classes.brand}>
      <h1 className={classes.title}>Tidings</h1>
      <h3 className={classes.subtitle}>
         Catch latest updates all time around world
      </h3>
    </div>
  </GridItem>
</GridContainer>  
             </div>
  </div>
  </Parallax>
  <NavigationBar/>
  </div>
);}
  }