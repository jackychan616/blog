import Script from 'next/script';
import Head from  'next/head';

function Layout({children}){
   return(
       <div>
            {children}
       </div>
    );

}

export default Layout;