import Navbar from './Navbar';
import Link from 'next/link';
import Home from '../pages/home';

const Layout=(props)=>(
    <div>
       
        
        <div>
          {props.children}
        </div>
        
     
    
    </div>
);

export default Layout;