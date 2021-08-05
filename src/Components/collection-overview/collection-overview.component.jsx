import React from 'react';
import './collection-overview.styles.scss';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionPreview } from '../../Redux/shop/shop.selector';
import CollectionPreview from '../collectionPreview/collectionsPreview.component';

const CollectionOverview = ({collections})=>{
    return(
    <div className= 'collection-overview'>
             {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
    </div>
    );
}
    const mapStateToProps = createStructuredSelector(
        {
            collections : selectCollectionPreview
        }
    )

    export default connect(mapStateToProps)(CollectionOverview);
