import React from 'react';
import Modal from 'react-responsive-modal'; 
// material-ui components
// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";

// core components
import InfoArea from "components/InfoArea/InfoArea.js";
export default class FullNews extends React.Component{
  
  constructor(props){
    super(props);  
     console.log('GGGGGGGGGG');
    console.log(  )  
    this.state={
      open:false
    }
  }
  onOpenModal = () => {
    this.setState({ open: true });

  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
  render(){
    const { open } = this.state;
    return(
    <div>
    <button   class="btn btn-info btn-sm pull-right" onClick={this.onOpenModal}> Read more</button>
    <Modal open={open} onClose={this.onCloseModal} center>
          <InfoArea
      title={this.props.fullnews.title}
        description={this.props.fullnews.description}
      urlToImage={this.props.fullnews.urlToImage}
      source={this.props.fullnews.url}
      author={this.props.fullnews.author}
    />
    
        </Modal>
      </div>
    )
  }
  
 
}