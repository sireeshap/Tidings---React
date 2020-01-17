import React from 'react';
import Articles from './Articles';
import APIService from '../APIService/APIService';
export default class LatestNews extends React.Component {
  
  constructor(props){
    super(props);
    this.state= {
      currentNews:[]
    }
  }

    displayme=(data) =>{
      let blocks=[];
      if(data){
        this.setState({currentNews : data}); 
      } 
   } 
   fetchData (countryCode){
      fetch(process.env.REACT_APP_API_URL+'top-headlines?country='+countryCode+'&apiKey='+process.env.REACT_APP_API_KEY)
    .then((responce) =>{
      return responce.json()
    }).then(data => {
      console.log('hey data')
      console.log(data);
     return this.displayme(data)
    }).catch(error=>{
      return(<div>Somethinhg went wrong. Sorry forinconvinance</div>)
    })
   }
   componentWillMount(){
 let g='us'
  //var result= APIService.getAPIServiceInstance().callAPI('us')
  this.fetchData(g);
 //console.log(result)
    // fetch(process.env.REACT_APP_API_URL+'top-headlines?country=us&apiKey='+process.env.REACT_APP_API_KEY)
    // .then((responce) =>{
    //   return responce.json()
    // }).then(data => {
    //   console.log(data);
    //  return this.displayme(data)
    // }).catch(error=>{
    //   return(<div>Somethinhg went wrong. Sorry forinconvinance</div>)
    // })


  }
  render(){
    let display;
    if(this.state.currentNews.articles && this.state.currentNews.articles.length>0){
       display=<Articles articles={this.state.currentNews.articles}/>
    }
    else{
      display=<p>Loading....please wait</p>
    }
      return(
        <div> 
          {display}
        </div>
        )
       
  }
 
}