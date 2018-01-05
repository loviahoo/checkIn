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
import s from './Home.css';
import cx from 'classnames';

class Home extends React.Component {
  // static propTypes = {
  //   news: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       title: PropTypes.string.isRequired,
  //       link: PropTypes.string.isRequired,
  //       content: PropTypes.string,
  //     }),
  //   ).isRequired,
  // };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.formContainer}>
            <form className={s.formVerticle}>
              <div className={s.formHead}>Sign In</div>
              <div className={s.formBody}>
                <div className={s.controlGroup}>
                  <div className={s.rowFluid}>
                    <input
                      className={s.inputSpan}
                      type="text"
                      id="inputName"
                      placeholder="Username"
                    />
                  </div>
                </div>
                <div className={s.controlGroup}>
                  <div className={s.rowFluid}>
                    <input
                      className={s.inputSpan}
                      type="text"
                      id="inputPassword"
                      placeholder="Password"
                    />
                  </div>
                </div>
              </div>
              <div className={s.formFoot}>
                <div className={s.controlGroup}>
                  <div className={s.clearfix}>
                    <button type="submit" className={s.btnPrimary}>
                      Login
                    </button>
                    <label className={s.checkBox}>
                      <input type="checkbox" />
                      &nbsp;&nbsp;Remember me
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
