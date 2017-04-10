
import React                            from 'react';
import PropTypes                        from 'prop-types';

export default class HTML extends React.Component {

  renderStylesheet() {
    const {bundle} = this.props;
    var stylesheet = null;

    if (bundle.env === 'production') {
      stylesheet = (<link rel='stylesheet' href={bundle.stylesheet} />);
    }

    return stylesheet;
  }

  renderCommonsScript() {
    const {bundle} = this.props;
    var script = null;

    if (bundle.env === 'production') {
      script = <script src={bundle.commons} />;
    }

    return script
  }

  render() {
    const {bundle} = this.props;
    return (
      <html>
        <head>
          <meta charset='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='description' content='PhiXL - Agence Digitale' />
          <title>PhiXL</title>
          {this.renderStylesheet()}
        </head>
        <body>
          <div id='react-view-root' />
          {this.renderCommonsScript()}
          <script src={bundle.core} />
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  bundle: PropTypes.object.isRequired
};
