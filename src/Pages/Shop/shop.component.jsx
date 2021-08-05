import React from 'react';
import {Route} from 'react-router-dom';
import CollectionOverview from '../../Components/collection-overview/collection-overview.component';
import CollectionCategory from '../CollectionCategory/CollectionCategory.component';
    const ShopPage =({match})=> {
        console.log(match);
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component= {CollectionOverview}/>
                <Route path={`${match.path}/:collection_categoryId`} component= {CollectionCategory}/>
            </div>
        )
    }



export default ShopPage;