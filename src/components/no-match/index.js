/*
* NoMatch component
* author: Aurélien Dupays-Dexemple
*/

import React                            from 'react';
import stylesheet                       from './stylesheet.styl';

export default class NoMatch extends React.Component {
  render() {
    return (
      <div className='no-match'>
        {'This page do not exists'}
      </div>
    );
  }
}
