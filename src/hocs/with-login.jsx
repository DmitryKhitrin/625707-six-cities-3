import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {login} from "../redux/user/user-actions";
import {setCity} from "../redux/offers/offer-actions";
// import {RootState} from "../../redux/root-reducer";

export const withLogin = (Component) => {
  class WithLogin extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``
      };

      this._handleSubmit = this._handleSubmit.bind(this);
      this._handleChange = this._handleChange.bind(this);
    }

    _handleSubmit(evt) {
      evt.preventDefault();

      const {email, password} = this.state;
      const {login: onLogin} = this.props;

      onLogin(email, password);
    }

    _handleChange(evt) {
      const {value, name} = evt.target;

      this.setState({
        [name]: value
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          handleChange={this._handleChange}
          handleSubmit={this._handleSubmit}
        />
      );
    }
  }

  WithLogin.propTypes = {
    login: PropTypes.func.isRequired
  };

  const mapStateToProps = ({user}) => {
    return {
      isAuthenticated: user.authorizationStatus,
    };
  };

  const mapDispatchToProps = {
    setCity,
    login,
  };

  return connect(
      mapStateToProps,
      mapDispatchToProps
  )(WithLogin);

};


export default withLogin;
