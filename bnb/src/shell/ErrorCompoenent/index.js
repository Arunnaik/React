import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as localActions from './actions';
export class ErrorComponent extends Component {
  

  componentDidCatch(error, info) {
    // Display fallback UI
    // this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
    this.props.uncaughtError(error, info);
  }

  render() {
    if (this.props.error && this.props.error.info) {
      return (
       <div className='ErrorContainer'>
             <p>something went wrong</p>
        </div>
         
      );
    }
    return this.props.children;
  }
}

function mapStateToProps(state) {
  const { error } = state;
  return { error };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...localActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorComponent);
