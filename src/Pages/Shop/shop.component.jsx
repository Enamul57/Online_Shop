import React from 'react';
import SHOP_DATA from './shop_data.js';
import CollectionPreview from "../../Components/collectionPreview/collectionsPreview.component";
class ShopPage extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
           collections: SHOP_DATA
        };
    }

    render(){
        const {collections} = this.state;
        return (
            <div className = "Shop-page">
                {
                    collections.map(({id,...otherProperties})=>(
                        <CollectionPreview key={id} {...otherProperties} />
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;