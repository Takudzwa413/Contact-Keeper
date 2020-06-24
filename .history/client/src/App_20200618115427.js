import React ,{Fragment}from 'react';
import './App.css';

const App=() =>{
  return (
    <Router>
      <Fragment>
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path= '/' component={Home} />
            <Route exact path= '/about' component={About} />
          </Switch>

        </div>
      </Fragment>
    </Router>
  );
}

export default App;