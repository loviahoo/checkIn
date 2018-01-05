/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
// import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classnames from 'classnames/bind';
import s from './Register.css';

const cx = classnames.bind(s);

class Register extends React.Component {
  static propTypes = {
    // title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.formContainer}>
            <form>
              <h3>SIGN UP</h3>
              <div className={s.formGroup}>
                <div className={cx(s.alert, s.alertSuccess)} role="alert">
                  Your info has been saved
                </div>
              </div>
              <div className={s.formGroup}>
                <label htmlFor="name" className={s.srOnly}>
                  NAME
                </label>
                <input
                  type="text"
                  className={s.formControl}
                  id="name"
                  placeholder="NAME"
                  autoComplete="off"
                />
              </div>
              <div className={s.formGroup}>
                <label htmlFor="mobile" className={s.srOnly}>
                  MOBILE
                </label>
                <input
                  type="text"
                  className={s.formControl}
                  id="mobile"
                  placeholder="MOBILE"
                  autoComplete="off"
                />
              </div>
              <div className={s.formGroup}>
                <label htmlFor="email" className={s.srOnly}>
                  EMAIL
                </label>
                <input
                  type="text"
                  className={s.formControl}
                  id="email"
                  placeholder="EMAIL"
                  autoComplete="off"
                />
              </div>
              <div className={s.formGroup}>
                <label htmlFor="password" className={s.srOnly}>
                  PASSWORD
                </label>
                <input
                  type="password"
                  className={s.formControl}
                  id="password"
                  placeholder="PASSWORD"
                  autoComplete="off"
                />
              </div>
              <div className={s.formGroup}>
                <label htmlFor="re-password" className={s.srOnly}>
                  PASSWORD
                </label>
                <input
                  type="password"
                  className={s.formControl}
                  id="re-password"
                  placeholder="REPASSWORD"
                  autoComplete="off"
                />
              </div>
              <div className={s.formGroup}>
                <p>Already registered?</p>
                <a href="/">Sign In</a>
              </div>
              <div className={cx(s.formGroup, s.pullRight)}>
                <input type="submit" value="Sign Up" className={s.submitBtn} />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Register);
