import React  from 'react';

import NavPills  from 'components/NavPills/NavPills.js';

import styles from "assets/jss/material-kit-react/views/components.js"; 
  // @material-ui/core components
  import { makeStyles } from "@material-ui/core/styles";
import LatestNews from '../LatestNews/LatestNews';
const useStyles = makeStyles(styles);
export default function NavigationBar (props) {
  const classes = useStyles();  
  return(
        <LatestNews/>
  );
}
