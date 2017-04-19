
/*
* Teammate component
* author: Aurélien Dupays-Dexemple
*/

import classnames                       from 'classnames';

import React                            from 'react';
import PropTypes                        from 'prop-types';
import {Row, Col}                       from 'react-flexbox-grid';

import stylesheet                       from './stylesheet.styl';

export default class Teammate extends React.Component {

  renderShapeCol(key) {
    const {shape} = this.props;

    return (
      <Col xs={6} sm={6} md={6} lg={6} key={key}>
        <div
          className='geometric-shape'
          style={{
            backgroundImage: `url(${shape})`
          }}
        />
      </Col>
    );
  }

  renderInfosCol(key) {
    const {nameBrandSrc, nameBrandSizes, job, tagline, linkedinLink} = this.props;

    return (
      <Col xs={6} sm={6} md={6} lg={6} key={1}>
        <div
          className={classnames('name-brand')}
          style={{
            ...nameBrandSizes,
            backgroundImage: `url(${nameBrandSrc})`
          }}
        />

        <h3 className={classnames('job', 'Nexa-Bold')}>
          {job}
        </h3>

        <span className={classnames('tagline', 'Nexa-Light')}>
          {tagline}
        </span>

        <a
          href={linkedinLink}
          target='_blank'
          className={classnames('linkedin-link', 'Roboto-Regular')}
        >
          {'lien LinkedIn'}
        </a>
      </Col>
    );
  }

  render() {
    const {inverted} = this.props;
    var columms = [];

    columms.push(this.renderInfosCol());
    inverted ? columms.push(this.renderShapeCol(0)) : columms.unshift(this.renderShapeCol(2));

    return (
      <Row middle='xs'>
        {columms}
      </Row>
    );
  }
}

Teammate.propTypes = {
  shape: PropTypes.string.isRequired,
  nameBrandSrc: PropTypes.string.isRequired,
  nameBrandSizes: PropTypes.objectOf(PropTypes.number).isRequired,
  job: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  linkedinLink: PropTypes.string.isRequired,
  inverted: PropTypes.bool.isRequired
};
