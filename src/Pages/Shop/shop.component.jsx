import React from 'react';
import {Route} from 'react-router-dom';
import CollectionOverview from '../../Components/collection-overview/collection-overview.component';
import CollectionCategory from '../CollectionCategory/CollectionCategory.component';
import {firestore,ConvertCollectiontoArray} from "../../firebase/firebase.utilites";
import {Shop_Action} from "../../Redux/shop/shop.action";
import {connect} from 'react-redux';
    class ShopPage extends React.Component{

        unsubscribeFromSnapsot = null;
        // componentDidMount(){
        //     const CollectionRef = firestore.collection('collection');
        //     CollectionRef.onSnapshot(
        //        async (snapshot)=>
        //       { 
        //           ConvertCollectionToArray(snapshot);
        //     }
        //     );
        // }
        componentDidMount(){
            const {collection} = this.props;
            const collectionRef = firestore.collection('collection');
            this.unsubscribeFromSnapsot = collectionRef.onSnapshot(
                async (snapshot)=>{
                   const collectionStorage=  ConvertCollectiontoArray(snapshot);//this fetches the whole data from firestore to our app
                   collection(collectionStorage);
                }
            );
        }

        render(){
            const {match} = this.props;
            return (
            <div className='shop-page'>
                        <Route exact path={`${match.path}`} component= {CollectionOverview}/>
                        <Route path={`${match.path}/:collection_categoryId`} component= {CollectionCategory}/>
                    </div>
                );
            
        };
    }
const mapDispatchToProps = (dispatch)=>({
    collection : collectionStorage=> dispatch(Shop_Action(collectionStorage))
})


export default connect(null,mapDispatchToProps)(ShopPage);