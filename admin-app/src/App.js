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
        <Route path="blog" element={<Addblog/>}/>
        <Route path="blog-category" element={<AddblogCategory/>}/>
        <Route path="blog-category-list" element={<Blogcategorylist/>}/>
        <Route path="orders" element={<Orders/>}/>

        <Route path="customer" element={<Customers/>}/>
        <Route path="color" element={<Addcolor/>}/>
        <Route path="color-list" element={<Colorlist/>}/>
        <Route path="category" element={<Addcategory/>}/>
        <Route path="category-list" element={<Categorylist/>}/>
        <Route path="brand" element={<Addbrand/>}/>
        <Route path="brand-list" element={<Brandlist/>}/>
        <Route path="product" element={<Addproduct/>}/>
        <Route path="product-list" element={<Productlist/>}/>
       
        
      </Route>
      </Routes>
    </Router>
  );
}

export default App;
