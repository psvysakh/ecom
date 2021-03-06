import React,{useEffect} from 'react';
import { Switch ,Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selector';
import {checkUserSession} from './redux/user/user.action';



import Homepage from './pages/Home/Homepage';
import Shoppage from './pages/shop/shop';
import Header from './components/Header/header';
import SignInUp from './pages/SignInUp/signInUp';
import Checkoutpage from './pages/checkout/checkoutpage';

/* import {auth,createUser} from './firebase/firebase.util';
import {setCurrentUser} from './redux/user/user.action'; */


const App=({checkUserSession,currentUser})=> {

  useEffect(()=>{
    checkUserSession();
  },[checkUserSession]);
 
  /* toggleSubscription=null;

  componentDidMount(){
    const {checkUserSession} = this.props;
    checkUserSession();
  } */
  /* componentWillUnmount(){
    this.toggleSubscription();
  } */

    return (
      <div>
        <Header/>
        <Switch>
          <Route exact={true} path="/" component={Homepage}/>
          <Route path="/shop" component={Shoppage}/>
          <Route exact={true} path="/checkout" component={Checkoutpage}/>
          <Route exact={true} path="/signInUp" render={()=>currentUser ? (<Redirect to='/'/>):<SignInUp/>}/>
         
        </Switch>
        
      </div>
    );

  
}
const mapStateToProps = createStructuredSelector({ // root-reducer destructured to only get user 
  currentUser:selectCurrentUser
})
const mapDispatchToProps =dispatch=>({
checkUserSession:()=>dispatch(checkUserSession())
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
