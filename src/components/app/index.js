/*
* App Component
* author: Aurélien Dupays-Dexemple
*/

import React                            from 'react';
import {Route, Switch}                  from 'react-router-dom';

import Sidebar                          from 'react-sidebar';

import Navigation                       from '../navigation';
import Page                             from '../page';
import Overlay                          from '../overlay';
import NoMatch                          from '../no-match';

import fonts                            from './fonts.styl';
import normalize                        from './normalize.css';
import presets                          from './presets.css';
import stylesheet                       from './stylesheet.styl';

import {sections, targets}              from '../../configs';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {navigationIsOpen: false, pageScrollTop: 0};
  }

  openNavigation(isOpen) {
    this.setState({navigationIsOpen: isOpen});
  }

  closeNaviation() {
    this.setState({navigationIsOpen: false});
  }

  onSetSidebarOpen(isOpen) {
    this.setState({navigationIsOpen: isOpen});
  }

  getNavigationWidth() {
    return window.innerWidth < 768 ? window.innerWidth * 0.5 : window.innerWidth * 0.3;
  }

  render() {
    const {match} = this.props;
    const {state} = this;

    return (
      <Sidebar
        sidebar={(
          <Navigation
            closeAction={() => {this.closeNaviation()}}
          />
        )}
        open={state.navigationIsOpen}
        onSetOpen={(open) => {this.onSetSidebarOpen(open)}}
        pullRight
        styles={{
          root: {backgroundColor: '#3d3d3d'},
          sidebar: {zIndex: 9998, width: this.getNavigationWidth()},
          overlay: {zIndex: 9997, backgroundColor: 'transparent', boxShadow: 'none !important', WebkitBoxShadow: 'none !important'}
        }}
      >
        <div className='app-container'>
          <Switch>
            <Route exact path={match.url} render={() => (
              <Page
                section='intro'
                navigationIsOpen={this.state.navigationIsOpen}
                openNavigationAction={(isOpen) => {this.openNavigation(isOpen)}}
              />
            )} />
            <Route exact path={`${match.url}:section`} render={({match}) => (
              (
                sections.indexOf(match.params.section) !== -1 ?
                <Page
                  section={match.params.section}
                  navigationIsOpen={this.state.navigationIsOpen}
                  openNavigationAction={(isOpen) => {this.openNavigation(isOpen)}}
                /> :
                <NoMatch />
               )
            )} />
            <Route exact path={`${match.url}:targetname/:targetid`} render={({match}) => (
              (
                targets.indexOf(match.params.targetname) !== -1 ?
                <Overlay
                  target={{name: match.params.targetname, id: match.params.targetid}}
                /> :
                <NoMatch />
              )
            )} />
          </Switch>
        </div>
      </Sidebar>
    );
  }
}
