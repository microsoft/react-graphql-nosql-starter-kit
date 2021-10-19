import SiteMenu from './SiteMenu.jsx';
import ItemList from './ItemList';
import Footer from  './Footer';
import {
  BrowserRouter as Router,
  Switch, Route } from "react-router-dom";

export default function Routing(props) {
  
  return(
    <Router>
        <SiteMenu/>     
      <main>
      
    <Switch>
      
       <Route path="/about">
         <div>ABOUT Page!</div>
        </Route>
      <Route path="/submit/:sid?" component={ItemList}/>:""}
      <Route path="/i/:sid" component={ItemList}/>
      <Route path="/t/:tname" component={ItemList}/>
      <Route path="/" component={ItemList}/>
    </Switch>
    
    </main>
    <Footer/>
  </Router>
    );
}