/*
* Loveforlivres component
* author: Aurélien Dupays-Dexemple
*/

import classnames                       from 'classnames';

import React                            from 'react';
import PropTypes                        from 'prop-types';
import {Grid, Row, Col}                 from 'react-flexbox-grid';

import stylesheet                       from './stylesheet.styl';

export default class Loveforlivres extends React.Component {
  render() {
    const {projectLink, projectColor} = this.props;

    return (
      <div className='loveforlivres'>
      </div>
    );
  }
}

Loveforlivres.propTypes = {
  projectLink: PropTypes.string.isRequired,
  projectColor: PropTypes.string.isRequired
};
