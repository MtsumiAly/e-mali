import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Mainlayout from './components/Mainlayout';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Resetpassword from './pages/Resetpassword';
import Dashboard from './pages/Dashboard';
import Enquiries from './pages/Enquiries';
import Bloglist from './pages/Bloglist';
import Blogcategorylist from './pages/Blogcategorylist';
import Couponlist from './pages/Couponlist';
import Addcoupon from './pages/Addcoupon';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Colorlist from './pages/Colorlist';
import Categorylist from './pages/Categorylist';
import Brandlist from './pages/Brandlist';
import Productlist from './pages/Productlist';
import Addblog from './pages/Addblog';
import AddblogCategory from './pages/AddblogCategory';
import Addcolor from './pages/Addcolor';
import Addcategory from './pages/Addcategory';
import Addbrand from './pages/Addbrand';
import Addproduct from './pages/Addproduct';
function App() {
  return( 
    <Router>
      <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/forgot-password" element={<Forgotpassword />}/>
      <Route path="/reset-password" element={<Resetpassword />}/>
      <Route path="/admin" element={<Mainlayout />}>
        <Route index element={<Dashboard/>}/>
        <Route path="enquiries" element={<Enquiries/>}/>
        <Route path="blog-list" element={<Bloglist/>}/>
        <Route path="new-blog" element={<Addblog/>}/>
        <Route path="coupons" element={<Couponlist/>}/>
        <Route path="new-coupon" element={<Addcoupon/>}/>
        <Route path="new-blog-category" element={<AddblogCategory/>}/>
        <Route path="blog-categories" element={<Blogcategorylist/>}/>
        <Route path="orders" element={<Orders/>}/>

        <Route path="customers" element={<Customers/>}/>
        <Route path="color" element={<Addcolor/>}/>
        <Route path="color-list" element={<Colorlist/>}/>
        <Route path="new-category" element={<Addcategory/>}/>
        <Route path="categories" element={<Categorylist/>}/>
        <Route path="new-brand" element={<Addbrand/>}/>
        
        <Route path="brands" element={<Brandlist/>}/>
        <Route path="new-product" element={<Addproduct/>}/>
        <Route path="products" element={<Productlist/>}/>
        <Route path="new-brand/:id" element={<Addbrand/>}/>
        <Route path="new-category/:id" element={<Addcategory/>}/>
        <Route path="new-coupon/:id" element={<Addcoupon/>}/>
        <Route path="new-blog-category/:id" element={<AddblogCategory/>}/>
        
      </Route>
      </Routes>
    </Router>
  );
}

export default App;
