'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultContanierStyle = {
  width: 200
};
var defaultCurrentBgColor = 'rgba(56, 165, 197,.5)';

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default(props) {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.changeTab = function (i) {
      _this.setState({ current_position: i });
    };

    _this.state = {
      current_position: _this.props.current_position && _this.props.current_position < _this.props.titles.length ? _this.props.current_position : 0
    };
    _this.tabs = _this.props.titles;
    _this.contanierStyle = _this.props.contanierStyle ? _this.props.contanierStyle : defaultContanierStyle;
    _this.currentBgColor = _this.props.currentBgColor ? _this.props.currentBgColor : defaultCurrentBgColor;
    _this.list = _this.props.list;
    return _this;
  }

  _default.prototype.componentDidMount = function componentDidMount() {};

  _default.prototype.render = function render() {
    var _this2 = this;

    var current_position = this.state.current_position;

    var currentList = this.list[current_position];
    return _react2.default.createElement(
      'div',
      { className: 'contanier', style: this.contanierStyle },
      _react2.default.createElement(
        'ul',
        { className: 'tab_ul' },
        this.tabs.map(function (item, i) {
          return _react2.default.createElement(
            'li',
            {
              key: i,
              className: current_position == i ? "tab_li current" : 'tab_li',
              style: { backgroundColor: current_position == i ? _this2.currentBgColor : 'rgba(238,238,238,.5)' },
              onClick: _this2.changeTab.bind(_this2, i) },
            item
          );
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement(
          'ul',
          { className: 'content_ul' },
          currentList.map(function (item, i) {
            return _react2.default.createElement(
              'li',
              { className: 'item_li', key: i },
              item
            );
          })
        )
      )
    );
  };

  return _default;
}(_react.Component);

exports.default = _default;


var styles = {
  base_type: {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box'
  },
  contanier: {
    width: 200,
    fontSize: 13
  },
  tab_ul: {
    display: 'flex',
    height: 30,
    backgroundColor: 'rgba(238, 238, 238, .5)',
    listStyle: 'none',
    borderBottomColor: '#999',
    BorderBottomWidth: 2
  },
  tab_li: {
    flex: 1,
    height: 30,
    lineHeight: 30,
    textAlign: 'center'
  },
  current: {
    color: '#fff',
    fontSize: 14
  },
  hover: {
    borderColor: 'rgba(56, 165, 197, .5)'
  },
  content: {
    height: 200,
    backgroundColor: '#eee',
    overFlowY: 'auto'
  },
  content_ul: {
    padding: 10
  },
  item_li: {
    height: 40,
    lineHeight: 40
  }
};
module.exports = exports['default'];