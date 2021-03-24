import './collectionPreview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';
const CollectionPreview = ({title,items})=>(
    <div className="collection-preview">
        <h2 class='title'>{title.toUpperCase()}</h2>
        <div className='preview'>
            {
                items.filter((item,index)=> index <4).map(({id,...otherProps})=>(
                    <CollectionItem key={id}{...otherProps}/>
                ))
            }
        </div>
    </div>
);
export default CollectionPreview;