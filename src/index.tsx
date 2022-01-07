import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
 
import Loading from './components/Loading/Loading';
import SheetView from './views/SheetView/SheetView';
import NoMatch from './views/NoMatch/NoMatch';

// lazy loaded routes
const SheetPreview = lazy(() =>import('./views/SheetPreview/SheetPreview'))
const SheetList = lazy(() =>import('./views/SheetList/SheetList'))

ReactDOM.render(
  <RecoilRoot>
    <Router>
      <Routes>
        <Route path="/" element={ <App />}>
          {/* create new sheet */}
            <Route index element={<SheetView/>}/>  
             {/* sheet preview */}
            <Route path="preview/:sheetCode" element={<Suspense fallback={<Loading/>}> <SheetPreview/></Suspense>}/>
           {/* sheet list */}
            <Route path="/list" element={<Suspense fallback={<Loading/>}><SheetList/></Suspense>}/>
           {/* no match route */}
           <Route path="*" element={<NoMatch/>}/>
        </Route>
        
      </Routes>
     
    </Router>
    
  </RecoilRoot> ,
  document.getElementById('root')
);

 