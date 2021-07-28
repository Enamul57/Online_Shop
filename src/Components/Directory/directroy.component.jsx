import React from 'react';
import './directory.styles.scss';
import MenuItem from "../menu-item/menu-item.component";
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { directorySelectorSection } from '../../Redux/directory/directory.selector';
const Directory = ({section})=>{
  return (
    <div className = "directory-menu">
       {
        section.map(({id,...otherSectionProps})=>(
            <MenuItem key={id} {...otherSectionProps}/>
        ))
       }
      
    </div>
)
}

const mapStateToProps = createStructuredSelector(
  {
   section: directorySelectorSection
  }
)
export default connect(mapStateToProps)(Directory);