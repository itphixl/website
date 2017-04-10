/*
* CGFFLP component
* author: Aurélien Dupays-Dexemple
*/

import classnames                       from 'classnames';

import React                            from 'react';
import PropTypes                        from 'prop-types';
import {Grid, Row, Col}                 from 'react-flexbox-grid';

import stylesheet                       from './stylesheet.styl';

export default class CGFFLP extends React.Component {
  render() {
    const {projectLink, projectColor} = this.props;

    return (
      <div className='cgf-future-leaders-programme'>
      </div>
    );
  }
}

CGFFLP.propTypes = {
  projectLink: PropTypes.string.isRequired,
  projectColor: PropTypes.string.isRequired
};
