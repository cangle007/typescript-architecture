import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { setupStore } from './redux/setupStore';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPageContainer from './containers/MainPageContainer';
import LoaderComponent from '../src/components/Loader/LoaderComponent';

const store = setupStore(); // Initialize the store

const App = () => {
  return (
    <div className='App'>
      <Provider store={store}>
        <Suspense fallback={<LoaderComponent />}>
          <Router>
            <Routes>
              <Route path='/' element={<MainPageContainer />} />
            </Routes>
          </Router>
        </Suspense>
      </Provider>
    </div>
  );
};

export default App;

/*
In React Router v6, the BrowserRouter manages its own history instance internally. 
However, the history object is not passed directly as props to components. 
Instead, you can access it through the hooks provided by React Router, 
such as useNavigate and useLocation, or directly from the 
router instance in advanced setups.
*/
