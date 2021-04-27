'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppBar = require('@material-ui/core/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _PhotoCamera = require('@material-ui/icons/PhotoCamera');

var _PhotoCamera2 = _interopRequireDefault(_PhotoCamera);

var _Card = require('@material-ui/core/Card');

var _Card2 = _interopRequireDefault(_Card);

var _CardActions = require('@material-ui/core/CardActions');

var _CardActions2 = _interopRequireDefault(_CardActions);

var _CardContent = require('@material-ui/core/CardContent');

var _CardContent2 = _interopRequireDefault(_CardContent);

var _CardMedia = require('@material-ui/core/CardMedia');

var _CardMedia2 = _interopRequireDefault(_CardMedia);

var _CssBaseline = require('@material-ui/core/CssBaseline');

var _CssBaseline2 = _interopRequireDefault(_CssBaseline);

var _Grid = require('@material-ui/core/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Toolbar = require('@material-ui/core/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _styles = require('@material-ui/core/styles');

var _Container = require('@material-ui/core/Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    icon: {
      marginRight: theme.spacing(2)
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6)
    },
    heroButtons: {
      marginTop: theme.spacing(4)
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8)
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    cardMedia: {
      paddingTop: '56.25%' // 16:9
    },
    cardContent: {
      flexGrow: 1
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6)
    }
  };
});

var cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var Album = function Album(_ref) {
  var Heading = _ref.Heading,
      SubContent = _ref.SubContent;

  var classes = useStyles();

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_CssBaseline2.default, null),
    _react2.default.createElement(
      _AppBar2.default,
      { position: 'relative' },
      _react2.default.createElement(
        _Toolbar2.default,
        null,
        _react2.default.createElement(_PhotoCamera2.default, { className: classes.icon }),
        _react2.default.createElement(
          _Typography2.default,
          { variant: 'h6', color: 'inherit', noWrap: true },
          'Album layout'
        )
      )
    ),
    _react2.default.createElement(
      'main',
      null,
      _react2.default.createElement(
        'div',
        { className: classes.heroContent },
        _react2.default.createElement(
          _Container2.default,
          { maxWidth: 'sm' },
          _react2.default.createElement(
            _Typography2.default,
            { component: 'h1', variant: 'h2', align: 'center', color: 'textPrimary', gutterBottom: true },
            Heading
          ),
          _react2.default.createElement(
            _Typography2.default,
            { variant: 'h5', align: 'center', color: 'textSecondary', paragraph: true },
            SubContent
          )
        )
      ),
      _react2.default.createElement(
        _Container2.default,
        { className: classes.cardGrid, maxWidth: 'md' },
        _react2.default.createElement(
          _Grid2.default,
          { container: true, spacing: 4 },
          cards.map(function (card) {
            return _react2.default.createElement(
              _Grid2.default,
              { item: true, key: card, xs: 12, sm: 6, md: 4 },
              _react2.default.createElement(
                _Card2.default,
                { className: classes.card },
                _react2.default.createElement(_CardMedia2.default, {
                  className: classes.cardMedia,
                  image: 'https://source.unsplash.com/random',
                  title: 'Image title'
                }),
                _react2.default.createElement(
                  _CardContent2.default,
                  { className: classes.cardContent },
                  _react2.default.createElement(
                    _Typography2.default,
                    { gutterBottom: true, variant: 'h5', component: 'h2' },
                    'Heading'
                  ),
                  _react2.default.createElement(
                    _Typography2.default,
                    null,
                    'This is a media card. You can use this section to describe the content.'
                  )
                ),
                _react2.default.createElement(
                  _CardActions2.default,
                  null,
                  _react2.default.createElement(
                    _Button2.default,
                    { size: 'small', color: 'primary' },
                    'View'
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { size: 'small', color: 'primary' },
                    'Edit'
                  )
                )
              )
            );
          })
        )
      )
    )
  );
};

exports.default = Album;