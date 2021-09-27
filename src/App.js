
import './App.css';
import Header from './Component/Header';
import Main from './Component/Main';
import Footer from './Component/Footer';
import Product1 from './Component/Product1';
import Cart from './Component/Cart'
import Wishlist from './Component/Wishlist'
import Product2 from './Component/Product2';
import Product3 from './Component/Product3';
import Product4 from './Component/Product4';
import CheckProduct from './Component/CheckProduct';
import Payment from './Component/Payment';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { Check } from '@material-ui/icons';

function App() {



  // let dispatch = useDispatch();
  // useEffect(() => {
  //   auth.onAuthStateChanged(authUser => {
  //     console.log('The User is : ', authUser);

  //     if (authUser) {
  //       dispatch({ type: 'SET_USER', user: authUser })
  //     } else {
  //       dispatch({ type: 'SET_USER', user: null })
  //     }
  //   })

  // }, [])
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Main />
            <Footer />
          </Route>
          <Route path='/product1'>
            <Header />
            <Product1 />
            <Footer />
          </Route>
          <Route path='/product2'>
            <Header />
            <Product2 />
            <Footer />
          </Route>
          <Route path='/product3'>
            <Header />
            <Product3 />
            <Footer />
          </Route>
          <Route path='/product4'>
            <Header />
            <Product4 />
            <Footer />
          </Route>
          <Route path='/Cart'>
            <Header />
            <Cart />
          </Route>
          <Route path='/Wishlist'>
            <Header />

            <Wishlist />
          </Route>
          <Route path='/Checkproduct'>
            <Header />

            <CheckProduct />
          </Route>
          <Route path='/Payment'>
            <Header />
            <Payment />

          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
