'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('@material-ui/core/styles');

var _core = require('@material-ui/core');

var _Dialog = require('@material-ui/core/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogTitle = require('@material-ui/core/DialogTitle');

var _DialogTitle2 = _interopRequireDefault(_DialogTitle);

var _DialogContent = require('@material-ui/core/DialogContent');

var _DialogContent2 = _interopRequireDefault(_DialogContent);

var _DialogActions = require('@material-ui/core/DialogActions');

var _DialogActions2 = _interopRequireDefault(_DialogActions);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Close = require('@material-ui/icons/Close');

var _Close2 = _interopRequireDefault(_Close);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = function styles(theme) {
  return {
    root: {
      margin: 0,
      padding: theme.spacing(2)
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    }
  };
};

var DialogTitle = (0, _styles.withStyles)(styles)(function (props) {
  var children = props.children,
      classes = props.classes,
      onClose = props.onClose,
      other = _objectWithoutProperties(props, ['children', 'classes', 'onClose']);

  return _react2.default.createElement(
    _DialogTitle2.default,
    _extends({ disableTypography: true, className: classes.root }, other),
    _react2.default.createElement(
      _Typography2.default,
      { variant: 'h6' },
      children
    ),
    onClose ? _react2.default.createElement(
      _IconButton2.default,
      { 'aria-label': 'close', className: classes.closeButton, onClick: onClose },
      _react2.default.createElement(_Close2.default, null)
    ) : null
  );
});

var DialogContent = (0, _styles.withStyles)(function (theme) {
  return {
    root: {
      padding: theme.spacing(2)
    }
  };
})(_DialogContent2.default);

var DialogActions = (0, _styles.withStyles)(function (theme) {
  return {
    root: {
      margin: 0,
      padding: theme.spacing(1)
    }
  };
})(_DialogActions2.default);

/******
 * size can be 'lg''md''sm''xl''xs'false 
 */
var CustomModal = function CustomModal(_ref) {
  var isOpen = _ref.isOpen,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 'md' : _ref$size,
      handleClose = _ref.handleClose,
      title = _ref.title,
      handleSuccess = _ref.handleSuccess,
      children = _ref.children,
      _ref$leftBtnText = _ref.leftBtnText,
      leftBtnText = _ref$leftBtnText === undefined ? 'Cancel' : _ref$leftBtnText,
      _ref$rightBtnText = _ref.rightBtnText,
      rightBtnText = _ref$rightBtnText === undefined ? 'Ok' : _ref$rightBtnText,
      _ref$hideLetfBtn = _ref.hideLetfBtn,
      hideLetfBtn = _ref$hideLetfBtn === undefined ? false : _ref$hideLetfBtn,
      _ref$hideRightBtn = _ref.hideRightBtn,
      hideRightBtn = _ref$hideRightBtn === undefined ? false : _ref$hideRightBtn,
      dialogClasses = _ref.dialogClasses,
      dialogTitleClasses = _ref.dialogTitleClasses,
      dialogContentClasses = _ref.dialogContentClasses,
      dialogActionClasses = _ref.dialogActionClasses,
      buttonClasses = _ref.buttonClasses;


  return _react2.default.createElement(
    _Dialog2.default,
    { fullWidth: true,
      maxWidth: size,
      onClose: handleClose,
      open: isOpen,
      'aria-labelledby': title,
      className: dialogClasses },
    _react2.default.createElement(
      DialogTitle,
      { classes: dialogTitleClasses, id: title, onClose: handleClose },
      title
    ),
    children && _react2.default.createElement(
      DialogContent,
      { className: dialogContentClasses, dividers: true },
      children
    ),
    _react2.default.createElement(
      DialogActions,
      { className: dialogActionClasses },
      !hideLetfBtn && _react2.default.createElement(
        _core.Button,
        { className: buttonClasses, onClick: handleClose, color: 'secondary' },
        leftBtnText
      ),
      !hideRightBtn && _react2.default.createElement(
        _core.Button,
        { className: buttonClasses, onClick: handleSuccess, autoFocus: true, color: 'primary' },
        rightBtnText
      )
    )
  );
};
exports.default = CustomModal;