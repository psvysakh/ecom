import React from 'react'
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {selectCartItemsCount} from '../../redux/cart/cart.selector';
import {toggleCartHidden} from '../../redux/cart/cart.action';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cartIcon.scss';

const CartIcon=({toggleHidden,itemCount})=>(
    <div className="cart-icon" onClick={toggleHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
)
const mapStateToProps=createStructuredSelector({
itemCount:selectCartItemsCount
})
const mapDispatchToProps=dispatch=>({
    toggleHidden:()=>dispatch(toggleCartHidden())
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);