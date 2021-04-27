'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SignInSide;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Avatar = require('@material-ui/core/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _CssBaseline = require('@material-ui/core/CssBaseline');

var _CssBaseline2 = _interopRequireDefault(_CssBaseline);

var _TextField = require('@material-ui/core/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _FormControlLabel = require('@material-ui/core/FormControlLabel');

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _Checkbox = require('@material-ui/core/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Link = require('@material-ui/core/Link');

var _Link2 = _interopRequireDefault(_Link);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Grid = require('@material-ui/core/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _LockOutlined = require('@material-ui/icons/LockOutlined');

var _LockOutlined2 = _interopRequireDefault(_LockOutlined);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _styles = require('@material-ui/core/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      height: '100vh'
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  };
});

function SignInSide() {
  var classes = useStyles();

  return _react2.default.createElement(
    _Grid2.default,
    { container: true, component: 'main', className: classes.root },
    _react2.default.createElement(_CssBaseline2.default, null),
    _react2.default.createElement(_Grid2.default, { item: true, xs: false, sm: 4, md: 7, className: classes.image }),
    _react2.default.createElement(
      _Grid2.default,
      { item: true, xs: 12, sm: 8, md: 5, component: _Paper2.default, elevation: 6, square: true },
      _react2.default.createElement(
        'div',
        { className: classes.paper },
        _react2.default.createElement(
          _Avatar2.default,
          { className: classes.avatar },
          _react2.default.createElement(_LockOutlined2.default, null)
        ),
        _react2.default.createElement(
          _Typography2.default,
          { component: 'h1', variant: 'h5' },
          'Sign in'
        ),
        _react2.default.createElement(
          'form',
          { className: classes.form, noValidate: true },
          _react2.default.createElement(_TextField2.default, {
            variant: 'outlined',
            margin: 'normal',
            required: true,
            fullWidth: true,
            id: 'email',
            label: 'Email Address',
            name: 'email',
            autoComplete: 'email',
            autoFocus: true
          }),
          _react2.default.createElement(_TextField2.default, {
            variant: 'outlined',
            margin: 'normal',
            required: true,
            fullWidth: true,
            name: 'password',
            label: 'Password',
            type: 'password',
            id: 'password',
            autoComplete: 'current-password'
          }),
          _react2.default.createElement(_FormControlLabel2.default, {
            control: _react2.default.createElement(_Checkbox2.default, { value: 'remember', color: 'primary' }),
            label: 'Remember me'
          }),
          _react2.default.createElement(
            _Button2.default,
            {
              type: 'submit',
              fullWidth: true,
              variant: 'contained',
              color: 'primary',
              className: classes.submit
            },
            'Sign In'
          ),
          _react2.default.createElement(
            _Grid2.default,
            { container: true },
            _react2.default.createElement(
              _Grid2.default,
              { item: true, xs: true },
              _react2.default.createElement(
                _Link2.default,
                { href: '#', variant: 'body2' },
                'Forgot password?'
              )
            ),
            _react2.default.createElement(
              _Grid2.default,
              { item: true },
              _react2.default.createElement(
                _Link2.default,
                { href: '#', variant: 'body2' },
                "Don't have an account? Sign Up"
              )
            )
          )
        )
      )
    )
  );
}