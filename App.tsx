import React,{useState} from 'react';
import Navigator from './routes'
import { Provider, useSelector, useDispatch } from 'react-redux'
import store from './store'
export default function App() {  

  return (    
    <Provider store={store}>
      <Navigator/>
    </Provider>    
  );
}
