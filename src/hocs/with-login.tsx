import React, {PureComponent} from "react";
import {Subtract} from "utility-types";

type State = {
  email: string;
  password: string;
}

type InjectedProps = {
  handleChange: (T: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (T: React.FormEvent<HTMLFormElement>) => void;
}

export const withLogin = (Component: any) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;

  class WithLogin extends PureComponent {
    state: State;
    props: T;

    constructor(props: T) {
      super(props);

      this.state = {
        email: ``,
        password: ``
      };

      this._handleSubmit = this._handleSubmit.bind(this);
      this._handleChange = this._handleChange.bind(this);
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

    _handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
      evt.preventDefault();

      const {email, password} = this.state;
      const {login: onLogin} = this.props;

      onLogin(email, password);
    }

    _handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
      const {value, name} = evt.target;

      this.setState({
        [name]: value
      });
    }
  }

  return WithLogin;

};


export default withLogin;
