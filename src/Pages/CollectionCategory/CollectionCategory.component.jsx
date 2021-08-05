import React from 'react';
import {connect} from 'react-redux';
import { CollectionSelector } from '../../Redux/shop/shop.selector';
import "./CollectionCategory.styles.scss";

import CollectionItem from "../../Components/collection-item/collection-item.component";

const CollectionCategory = ({collection})=> 
    {
        const {title , items} = collection;
        return  (
            <div className='collection-category'>
                <h2 className='title'>{title}</h2>
                <div className ='items'>
                    {
                        items.map(item=> <CollectionItem key={item.id} item ={item}/>)
                    }
                </div>
            </div>
        )
}

const mapStateToProps= (state,ownprops)=> (
    {
        collection: CollectionSelector(ownprops.match.params.collection_categoryId)(state)
    }
)

export default connect(mapStateToProps)(CollectionCategory);