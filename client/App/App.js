import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Style
import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Link } from 'react-router';

// Import Actions
import { toggleAddPost } from './AppActions';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }

  //toggleAddPostSection = () => {
  //  this.props.dispatch(toggleAddPost());
  //};

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

//App.propTypes = {
//  children: PropTypes.object.isRequired,
//  dispatch: PropTypes.func.isRequired,
//  intl: PropTypes.object.isRequired,
//};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    //intl: store.intl,
  };
}

export default connect(mapStateToProps)(App);
