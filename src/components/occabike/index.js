/*
* Occabike component
* author: Aurélien Dupays-Dexemple
*/

import classnames                       from 'classnames';

import React                            from 'react';
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
  projectLink: React.PropTypes.string.isRequired,
  projectColor: React.PropTypes.string.isRequired
};
