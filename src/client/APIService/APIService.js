import React, {Component} from 'react';

//  const APIService=function(countrycode,props){
//   let newsData=[];
//     fetch(process.env.REACT_APP_API_URL+'top-headlines?country='+countrycode+'&apiKey='+process.env.REACT_APP_API_KEY)
//     .then((responce) =>{
//       return responce.json()
//     }).then(data => {
//       newsData=data;
//       console.log(data);
//      return newsData
//     }).catch(error=>{
//       return(<div>Somethinhg went wrong. Sorry forinconvinance</div>)
//     })
//     return newsData
//   }
// export  default APIService;


export default class APIService extends React.Component  {
  static classInstance = 1
 static newsData = [];
 constructor(){
   super();
    this.state ={
      newsData1:[],
      newsData2:' '
    }
  }
  static getAPIServiceInstance() {
    console.log(this.state)
      if (APIService.classInstance === 1)  {
          APIService.classInstance = new APIService();
      }
      return this.classInstance;
  }
  callAPI(countrycode) {
      fetch(process.env.REACT_APP_API_URL+'top-headlines?country='+countrycode+'&apiKey='+process.env.REACT_APP_API_KEY)
      .then((responce) => {
              return responce.json()
          }).then(data => {
          this.setState({
            newsData2 : data
          })
          if(this.state.newsData2.length>0){
            return this.state.newsData2
          }
              //Got data hear
              console.log(data);
              
          }).catch(error => {
              return (<div>Somethinhg went wrong. Sorry for inconvinance</div>)
          })
         
  }
  }