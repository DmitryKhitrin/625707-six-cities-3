import React, {PureComponent} from "react";
import PropTypes from "prop-types";

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
      const {login} = this.props;

      login(email, password);
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

  return WithLogin;
};

export default withLogin;
