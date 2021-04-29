'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppBar = require('@material-ui/core/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _PhotoCamera = require('@material-ui/icons/PhotoCamera');

var _PhotoCamera2 = _interopRequireDefault(_PhotoCamera);

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

var _CustomCard = require('../CustomCard');

var _CustomCard2 = _interopRequireDefault(_CustomCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var classNames = require('classnames');

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

var Album = function Album(props) {
  var Heading = props.Heading,
      SubContent = props.SubContent,
      appBarClasses = props.appBarClasses,
      toolBarClasses = props.toolBarClasses,
      cameraIconClasses = props.cameraIconClasses,
      typographyClasses = props.typographyClasses,
      divClasses = props.divClasses,
      containerClasses = props.containerClasses,
      headingClasses = props.headingClasses,
      contentClasses = props.contentClasses,
      gridContainerClasses = props.gridContainerClasses,
      innerGridClasses = props.innerGridClasses,
      gridClasses = props.gridClasses,
      cardClasses = props.cardClasses,
      cardMediaClasses = props.cardMediaClasses,
      cardContentClasses = props.cardContentClasses,
      cardActionClasses = props.cardActionClasses,
      viewButtonClasses = props.viewButtonClasses,
      editButtonClasses = props.editButtonClasses,
      viewAction = props.viewAction,
      editAction = props.editAction,
      cardHeading = props.cardHeading,
      cardSubHeading = props.cardSubHeading,
      img = props.img,
      numberOfCards = props.numberOfCards;

  var classes = useStyles();
  var cardArray = numberOfCards ? numberOfCards : cards;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_CssBaseline2.default, null),
    _react2.default.createElement(
      _AppBar2.default,
      { position: 'relative', className: appBarClasses },
      _react2.default.createElement(
        _Toolbar2.default,
        { className: toolBarClasses },
        _react2.default.createElement(_PhotoCamera2.default, { className: classNames(classes.icon, cameraIconClasses) }),
        _react2.default.createElement(
          _Typography2.default,
          { variant: 'h6', color: 'inherit', noWrap: true, className: typographyClasses },
          'Album layout'
        )
      )
    ),
    _react2.default.createElement(
      'main',
      null,
      _react2.default.createElement(
        'div',
        { className: classNames(classes.heroContent, divClasses) },
        _react2.default.createElement(
          _Container2.default,
          { maxWidth: 'sm', className: containerClasses },
          _react2.default.createElement(
            _Typography2.default,
            { component: 'h1', variant: 'h2', align: 'center', color: 'textPrimary', gutterBottom: true, className: headingClasses },
            Heading
          ),
          _react2.default.createElement(
            _Typography2.default,
            { variant: 'h5', align: 'center', color: 'textSecondary', paragraph: true, className: contentClasses },
            SubContent
          )
        )
      ),
      _react2.default.createElement(
        _Container2.default,
        { className: classNames(classes.cardGrid, gridContainerClasses), maxWidth: 'md' },
        _react2.default.createElement(
          _Grid2.default,
          { container: true, spacing: 4, className: innerGridClasses },
          cardArray.map(function (card, index) {
            return _react2.default.createElement(
              _Grid2.default,
              { item: true, key: card, xs: 12, sm: 6, md: 4, className: gridClasses },
              _react2.default.createElement(_CustomCard2.default, { headingClasses: headingClasses,
                contentClasses: contentClasses,
                cardClasses: cardClasses,
                cardMediaClasses: cardMediaClasses,
                cardContentClasses: cardContentClasses,
                cardActionClasses: cardActionClasses,
                viewButtonClasses: viewButtonClasses,
                editButtonClasses: editButtonClasses,
                viewAction: viewAction,
                editAction: editAction,
                cardHeading: cardHeading,
                cardSubHeading: cardSubHeading,
                id: index,
                img: img })
            );
          })
        )
      )
    )
  );
};

exports.default = Album;