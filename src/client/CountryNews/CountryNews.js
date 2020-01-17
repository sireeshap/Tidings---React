import React, {Component} from 'react';
import { Dropdown } from 'semantic-ui-react';

export default class CountryNews extends Component {
  constructor(props) {
    this.state = {
      code : 'in'
    }
  }
compon
  render() {
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