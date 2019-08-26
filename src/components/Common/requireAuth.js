import React, { Component } from 'react';
import { connect } from 'react-redux';

const RequiredAuth = PassedComponent => {
  class ComposedComponent extends Component {
    // Our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.isAuthenticated) {
        this.props.history.push('/login');
      }
    }

    render() {
      return <PassedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    isAuthenticated: !!state.auth.accessToken
  });

  return connect(mapStateToProps)(ComposedComponent);
};

export default RequiredAuth;
