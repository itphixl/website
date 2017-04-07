/*
* ProjectsGrid component
* author: Aurélien Dupays-Dexemple
*/

import classnames                       from 'classnames';

import React                            from 'react';
import {Link}                           from 'react-router-dom';
import {Grid, Row, Col}                 from 'react-flexbox-grid';

import stylesheet                       from './stylesheet.styl';

export default class ProjectsGrid extends React.Component {
  getColumn(columnWitdh, project, key) {
    const {baseRoute} = this.props;
    return (
      <Col xs={columnWitdh} key={key}>
        <div className='thumbnail'>
          <div className='content-container'>
            <div
              className='cover'
              style={{
                backgroundImage: `url(${project.cover})`
              }}
            />

            <div className='filter' />

            <div className='infos-box'>
              <Link to={`${baseRoute}/${project.id}`}>
                <div className='infos-container'>
                  <div className='infos-content'>

                    <span className={classnames('name', 'Nexa-Bold')}>
                      {project.name}
                    </span>

                    <div className='dash' />

                    <span className={classnames('type', 'Nexa-Light')}>
                      {project.type}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Col>
    );
  }

  getRows() {
    const {projects, numberByRow} = this.props;
    var rows = [];

    const columnWidth = (12 % numberByRow === 0 ? (12 / numberByRow) : 6);

    const nbColumns = 12 / columnWidth;
    const nbRows = Math.ceil(projects.length / nbColumns);

    var cursor = 0;

    for (var i = 0; i < nbRows; i++) {
      var columns = [];

      for (var c = 0; c < nbColumns; c++) {
        if (typeof projects[cursor] !== 'undefined') {
          columns.push(this.getColumn(columnWidth, projects[cursor], String(i).concat('.'+String(c))));

          cursor = cursor + 1;
        }
      }

      rows.push(
        <Row key={i}>
          {columns}
        </Row>
      );
    }

    return rows;
  }

  render() {
    return (
      <div className='projects-grid'>
        <Grid>
          {this.getRows()}
        </Grid>
      </div>
    );
  }
}

ProjectsGrid.propTypes = {
  projects: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  numberByRow: React.PropTypes.number.isRequired,
  baseRoute: React.PropTypes.string.isRequired
};
