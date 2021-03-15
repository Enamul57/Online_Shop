import React from 'react';
import './directory.styles.scss';
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component{
    constructor(){
      super();
      this.state = {
        sections:[
        {title:"Hats",id:1,imageURL:"https://i.ibb.co/px2tCc3/jackets.png"},
        {title:"Jackets",id:2,imageURL:"https://i.ibb.co/XzhW6Lh/81782950-1508438479319863-2314482207080579072-o.jpg"},
        {title:"Sneakers",id:3,imageURL:"https://i.ibb.co/99X8W4t/Screenshot-20210203-114204.png"},
        {title:"Man",id:4,imageURL:"https://i.ibb.co/vwfzzYT/Screenshot-20210105-144928.png",size:"large"},
        {title:"Women",id:5,imageURL:"https://i.ibb.co/ckLXxyx/118668360-1722814091215633-6426780578571346283-o.jpg",size:"large"}
        ]
      }
    }
    render(){
        return (
            <div className = "directory-menu">
               {
                this.state.sections.map(({title,id,imageURL,size})=>(
                    <MenuItem key={id} title={title} imgurl={imageURL} Size= {size}/>
                    
                ))
               }
              
            </div>
        
        )
    }
}
export default Directory;