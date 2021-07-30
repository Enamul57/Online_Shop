import React from 'react';
import CollectionPreview from "../../Components/collectionPreview/collectionsPreview.component";
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { shopCollectionSelector } from '../../Redux/shop/shop.selector';
    const ShopPage =({collections})=> (
            <div className = "Shop-page">
                {
                    collections.map(({id,...otherProperties})=>(
                        <CollectionPreview key={id} {...otherProperties} />
                    ))
                }
            </div>
        )

const mapStateToProps = createStructuredSelector(
    {
        collections : shopCollectionSelector
    }
)

export default connect(mapStateToProps)(ShopPage);