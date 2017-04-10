/*
* Occabike component
* author: Aurélien Dupays-Dexemple
*/

import classnames                       from 'classnames';

import React                            from 'react';
import PropTypes                        from 'prop-types';
import {Grid, Row, Col}                 from 'react-flexbox-grid';

import stylesheet                       from './stylesheet.styl';

export default class Occabike extends React.Component {
  render() {
    const {projectLink, projectColor} = this.props;

    return (
      <div className='occabike'>
      </div>
    )
  }
}

Occabike.propTypes = {
  projectLink: PropTypes.string.isRequired,
  projectColor: PropTypes.string.isRequired
};
