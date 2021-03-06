import React, { useDebugValue } from 'react'
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../preview.collection/preview.collection.component';


class ShopPage extends React.Component {
    constructor(){
        super();
        this.state = {
            collections : SHOP_DATA
        }
    }
    render(){
        const { collections } = this.state
        return ( 
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage