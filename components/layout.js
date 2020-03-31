import Navbar from './Navbar';
import Link from 'next/link';
//import Home from '../pages/Home';
import Head from 'next/head';

const Layout=(props)=>(
    <div >
        <Head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/darkly/bootstrap.min.css"></link>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/darkly/bootstrap.min.css"></link>
      </Head>
        
        <div>
          {props.children}
        </div>
        
     
    
    </div>
);

export default Layout;