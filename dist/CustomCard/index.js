'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Card = require('@material-ui/core/Card');

var _Card2 = _interopRequireDefault(_Card);

var _CardActions = require('@material-ui/core/CardActions');

var _CardActions2 = _interopRequireDefault(_CardActions);

var _CardContent = require('@material-ui/core/CardContent');

var _CardContent2 = _interopRequireDefault(_CardContent);

var _CardMedia = require('@material-ui/core/CardMedia');

var _CardMedia2 = _interopRequireDefault(_CardMedia);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _styles = require('@material-ui/core/styles');

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

var CustomCard = function CustomCard(props) {
  var headingClasses = props.headingClasses,
      contentClasses = props.contentClasses,
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
      img = props.img;

  var classes = useStyles();

  return _react2.default.createElement(
    _Card2.default,
    { className: classNames(classes.card, cardClasses) },
    _react2.default.createElement(_CardMedia2.default, {
      className: classNames(classes.cardMedia, cardMediaClasses),
      image: img ? img : "https://source.unsplash.com/random",
      title: 'Image title' }),
    _react2.default.createElement(
      _CardContent2.default,
      { className: classNames(classes.cardContent, cardContentClasses) },
      _react2.default.createElement(
        _Typography2.default,
        { gutterBottom: true, variant: 'h5', component: 'h2', className: headingClasses },
        cardHeading ? cardHeading : 'Heading'
      ),
      _react2.default.createElement(
        _Typography2.default,
        { className: contentClasses },
        cardSubHeading ? cardSubHeading : 'This is a media card. You can use this section to describe the content.'
      )
    ),
    _react2.default.createElement(
      _CardActions2.default,
      { className: cardActionClasses },
      _react2.default.createElement(
        _Button2.default,
        { size: 'small', color: 'primary', className: viewButtonClasses, onClick: function onClick() {
            return viewAction(cardHeading, cardSubHeading);
          } },
        'View'
      ),
      _react2.default.createElement(
        _Button2.default,
        { size: 'small', color: 'primary', className: editButtonClasses, onClick: function onClick() {
            return editAction(props);
          } },
        'Edit'
      )
    )
  );
};

exports.default = CustomCard;