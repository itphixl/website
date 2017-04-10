/*
* CGFFLP component
* author: Aurélien Dupays-Dexemple
*/

import classnames                       from 'classnames';

import React                            from 'react';
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
  projectLink: React.PropTypes.string.isRequired,
  projectColor: React.PropTypes.string.isRequired
};
