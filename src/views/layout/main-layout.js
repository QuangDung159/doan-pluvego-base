import React from 'react';  
import { Route } from 'react-router-dom';
import Header from '@Components/utility/header'
import Footer from '@Components/utility/footer'

const MainLayout = ({ children }) => (                         
    <div class="w-full">
      <Header/>
      <section>
        <article>{children}</article>
      </section>
      <Footer />
    </div>  
  );  

  const MainLayoutRoute = ({component: Component, ...rest}) => {  
    return (  
      <Route {...rest} render={props => (  
        <MainLayout>  
            <Component {...props} />  
        </MainLayout>  
      )} />  
    )  
  };  

export default MainLayoutRoute;  