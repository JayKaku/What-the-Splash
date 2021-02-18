// import logo from './logo.svg';
// import './App.css';
// import { Component } from 'react';
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Land from "./components/Land";
// import Get from "./components/Get";
// import Post from './components/Post';
// import Search from './components/Search';
// import LetsSee from './Practise/LetsSee';
// import FormPropsTextFields from './MaterialUItest/FormFieldTest';

// class App extends Component {

//   // state ={
//   //   data:"",
//   //   loaded:false,
//   // }

//   // componentDidMount(){
//   //   fetch("https://cors-anywhere.herokuapp.com/https://pipelinepredators.herokuapp.com/question-get-create")
//   //   .then(res=>{
//   //     return res.json();
//   //   })
//   //   .then(data =>{
//   //     this.setState(()=>{
//   //       return{
//   //         data,
//   //         loaded:true
//   //       }
//   //     })
//   //   })
//   // }

//   render(){
    
//     //console.log(this.state.data);
//     return (
//       <BrowserRouter>
//         <Switch>
//           <Route exact path='/' component={Land}/>
//           <Route path='/get' component={Get}/>
//           <Route path='/post' component={Post}/>
//           <Route path='/search' component={Search}/>
//           <Route path='/practise' component={LetsSee}/>
//           {/* <Route path='/formtest' component={}/> */}
//         </Switch>
//       </BrowserRouter>
//     );
//   }
// }

// export default App;

// // Edvin Clement , Anmol Singh , 
// // doctor availability / assigning, critical level, redirectly patients to different hostpitals
// // doctor scheduling , map with density of patients, 
// // concenterate of each word in the PR
// // Covid 19 test result , last Covid 19 test details,
// // data at a glace and and selection of particular data viewing 
// // encryption

import React, { Component } from 'react';
import {Provider} from "react-redux";
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';

import configureStore from './store'

const store = configureStore();
//console.log(store);
class App extends Component {
    render() {
        return (
            <Provider store = {store}>
              <React.Fragment>
                <div>
                  <Header/>
                  <ImageGrid/>
                </div>
              </React.Fragment>
            </Provider>
        );
    }
}

export default App;