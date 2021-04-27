'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = StickyFooter;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CssBaseline = require('@material-ui/core/CssBaseline');

var _CssBaseline2 = _interopRequireDefault(_CssBaseline);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _styles = require('@material-ui/core/styles');

var _Container = require('@material-ui/core/Container');

var _Container2 = _interopRequireDefault(_Container);

var _Link = require('@material-ui/core/Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Copyright() {
  return _react2.default.createElement(
    _Typography2.default,
    { variant: 'body2', color: 'textSecondary' },
    'Copyright © ',
    _react2.default.createElement(
      _Link2.default,
      { color: 'inherit', href: 'https://www.rxpservices.com/' },
      'RXP DesignOps'
    ),
    ' ',
    new Date().getFullYear(),
    '.'
  );
}

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column'
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2)
    },
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
      backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800]
    }
  };
});

function StickyFooter() {
  var classes = useStyles();

  return _react2.default.createElement(
    'div',
    { className: classes.root },
    _react2.default.createElement(_CssBaseline2.default, null),
    _react2.default.createElement(
      'footer',
      { className: classes.footer },
      _react2.default.createElement(
        _Container2.default,
        { maxWidth: 'sm' },
        _react2.default.createElement(
          _Typography2.default,
          { variant: 'body1' },
          'DesignOps Project'
        ),
        _react2.default.createElement(Copyright, null)
      )
    )
  );
}