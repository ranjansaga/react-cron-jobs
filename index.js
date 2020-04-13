"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CronJob = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash"));

require("./_index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CronBuilder = require('cron-builder'); // This component helps user to build cron expressions. We have built this component on top of
// npm package: cron builder. We take the user inputs and then use the cron builder class and its
// methods to generate the cron expression.
// props:
// getCronExpression: PropTypes.func // Call back function to be called on toggle


var CronJob = /*#__PURE__*/function (_Component) {
  _inherits(CronJob, _Component);

  var _super = _createSuper(CronJob);

  function CronJob(props) {
    var _this;

    _classCallCheck(this, CronJob);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "minuteOptionsList", [{
      label: '0',
      value: 0
    }, {
      label: '5',
      value: 5
    }, {
      label: '10',
      value: 10
    }, {
      label: '15',
      value: 15
    }, {
      label: '20',
      value: 20
    }, {
      label: '25',
      value: 25
    }, {
      label: '30',
      value: 30
    }, {
      label: '35',
      value: 35
    }, {
      label: '40',
      value: 40
    }, {
      label: '45',
      value: 45
    }, {
      label: '50',
      value: 50
    }, {
      label: '55',
      value: 55
    }]);

    _defineProperty(_assertThisInitialized(_this), "hourOptionsList", [{
      label: '0',
      value: 0
    }, {
      label: '1',
      value: 1
    }, {
      label: '2',
      value: 2
    }, {
      label: '3',
      value: 3
    }, {
      label: '4',
      value: 4
    }, {
      label: '5',
      value: 5
    }, {
      label: '6',
      value: 6
    }, {
      label: '7',
      value: 7
    }, {
      label: '8',
      value: 8
    }, {
      label: '9',
      value: 9
    }, {
      label: '10',
      value: 10
    }, {
      label: '11',
      value: 11
    }, {
      label: '12',
      value: 12
    }, {
      label: '13',
      value: 13
    }, {
      label: '14',
      value: 14
    }, {
      label: '15',
      value: 15
    }, {
      label: '16',
      value: 16
    }, {
      label: '17',
      value: 17
    }, {
      label: '18',
      value: 18
    }, {
      label: '19',
      value: 19
    }, {
      label: '20',
      value: 20
    }, {
      label: '21',
      value: 21
    }, {
      label: '22',
      value: 22
    }, {
      label: '23',
      value: 23
    }]);

    _defineProperty(_assertThisInitialized(_this), "dayOptionsList", [{
      label: '1st',
      value: 1
    }, {
      label: '2nd',
      value: 2
    }, {
      label: '3rd',
      value: 3
    }, {
      label: '4th',
      value: 4
    }, {
      label: '5th',
      value: 5
    }, {
      label: '6th',
      value: 6
    }, {
      label: '7th',
      value: 7
    }, {
      label: '8th',
      value: 8
    }, {
      label: '9th',
      value: 9
    }, {
      label: '10th',
      value: 10
    }, {
      label: '11th',
      value: 11
    }, {
      label: '12th',
      value: 12
    }, {
      label: '13th',
      value: 13
    }, {
      label: '14th',
      value: 14
    }, {
      label: '15th',
      value: 15
    }, {
      label: '16th',
      value: 16
    }, {
      label: '17th',
      value: 17
    }, {
      label: '18th',
      value: 18
    }, {
      label: '19th',
      value: 19
    }, {
      label: '20th',
      value: 20
    }, {
      label: '21st',
      value: 21
    }, {
      label: '22nd',
      value: 22
    }, {
      label: '23rd',
      value: 23
    }, {
      label: '24th',
      value: 24
    }, {
      label: '25th',
      value: 25
    }, {
      label: '26th',
      value: 26
    }, {
      label: '27th',
      value: 27
    }, {
      label: '28th',
      value: 28
    }, {
      label: '29th',
      value: 29
    }, {
      label: '30th',
      value: 30
    }, {
      label: '31th',
      value: 31
    }]);

    _defineProperty(_assertThisInitialized(_this), "weekOptionsList", [{
      label: 'Sunday',
      value: 1
    }, {
      label: 'Monday',
      value: 2
    }, {
      label: 'Tuesday',
      value: 3
    }, {
      label: 'Wednesday',
      value: 4
    }, {
      label: 'Thursday',
      value: 5
    }, {
      label: 'Friday',
      value: 6
    }, {
      label: 'Saturday',
      value: 7
    }]);

    _defineProperty(_assertThisInitialized(_this), "monthOptionsList", [{
      label: 'January',
      value: 1
    }, {
      label: 'Febrauary',
      value: 2
    }, {
      label: 'March',
      value: 3
    }, {
      label: 'April',
      value: 4
    }, {
      label: 'May',
      value: 5
    }, {
      label: 'June',
      value: 6
    }, {
      label: 'July',
      value: 7
    }, {
      label: 'August',
      value: 8
    }, {
      label: 'September',
      value: 9
    }, {
      label: 'October',
      value: 10
    }, {
      label: 'November',
      value: 11
    }, {
      label: 'December',
      value: 12
    }]);

    _defineProperty(_assertThisInitialized(_this), "getOption", function (item, keyPrefix) {
      return /*#__PURE__*/_react["default"].createElement("option", {
        key: keyPrefix + item.label,
        value: item.value
      }, item.label);
    });

    _defineProperty(_assertThisInitialized(_this), "renderMinutePicker", function () {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "time-picker-container form-control-wrapper"
      }, /*#__PURE__*/_react["default"].createElement("select", {
        className: "form-control",
        id: "minute",
        name: "minute",
        onChange: function onChange(e) {
          _this.updateScheduleConfiguration(e.target.options, 'minute');
        },
        multiple: true
      }, _this.minuteOptionsList.map(function (item) {
        return _this.getOption(item, 'minute');
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "renderHourPicker", function () {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "time-picker-container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "supporting-words"
      }, " at "), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-control-wrapper"
      }, /*#__PURE__*/_react["default"].createElement("select", {
        className: "form-control",
        id: "hour",
        name: "hour",
        onChange: function onChange(e) {
          _this.updateScheduleConfiguration(e.target.options, 'hour');
        },
        multiple: true
      }, _this.hourOptionsList.map(function (item) {
        return _this.getOption(item, 'hour');
      }))));
    });

    _defineProperty(_assertThisInitialized(_this), "renderDayPicker", function () {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "time-picker-container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "supporting-words"
      }, " on the "), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-control-wrapper"
      }, /*#__PURE__*/_react["default"].createElement("select", {
        className: "form-control",
        id: "day",
        name: "day",
        onChange: function onChange(e) {
          _this.updateScheduleConfiguration(e.target.options, 'day');
        },
        multiple: true
      }, _this.dayOptionsList.map(function (item) {
        return _this.getOption(item, 'day');
      }))));
    });

    _defineProperty(_assertThisInitialized(_this), "renderWeekPicker", function () {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "time-picker-container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "supporting-words"
      }, " on "), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-control-wrapper"
      }, /*#__PURE__*/_react["default"].createElement("select", {
        className: "form-control",
        id: "week",
        name: "week",
        onChange: function onChange(e) {
          _this.updateScheduleConfiguration(e.target.options, 'week');
        },
        multiple: true
      }, _this.weekOptionsList.map(function (item) {
        return _this.getOption(item, 'week');
      }))));
    });

    _defineProperty(_assertThisInitialized(_this), "renderMonthPicker", function () {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "time-picker-container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "supporting-words"
      }, " of "), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-control-wrapper"
      }, /*#__PURE__*/_react["default"].createElement("select", {
        className: "form-control",
        id: "month",
        name: "month",
        onChange: function onChange(e) {
          _this.updateScheduleConfiguration(e.target.options, 'month');
        },
        multiple: true
      }, _this.monthOptionsList.map(function (item) {
        return _this.getOption(item, 'month');
      }))));
    });

    _defineProperty(_assertThisInitialized(_this), "displayDateTimePicker", function (selectedFrequency, displayMinuteFlag, displayHourFlag, displayDayFlag, displayWeekFlag, displayMonthFlag) {
      var operationCronDictCopy = _lodash["default"].cloneDeep(_this.state.operationCronDict);

      operationCronDictCopy.showMinutePicker = displayMinuteFlag;
      operationCronDictCopy.showHourPicker = displayHourFlag;
      operationCronDictCopy.showDayPicker = displayDayFlag;
      operationCronDictCopy.showWeekPicker = displayWeekFlag;
      operationCronDictCopy.showMonthPicker = displayMonthFlag;
      operationCronDictCopy.selectedFrequency = selectedFrequency;

      _this.setState({
        operationCronDict: operationCronDictCopy
      });
    });

    _defineProperty(_assertThisInitialized(_this), "prepareCronExpression", function () {
      var cronExp = new CronBuilder();
      _this.state.minuteSeletedList.length && cronExp.set('minute', _this.state.minuteSeletedList);
      _this.state.hourSelectedList.length && cronExp.set('hour', _this.state.hourSelectedList);
      _this.state.daySelectedList.length && cronExp.set('dayOfTheMonth', _this.state.daySelectedList);
      _this.state.weekSelectedList.length && cronExp.set('dayOfTheWeek', _this.state.weekSelectedList);
      _this.state.monthSelectedList.length && cronExp.set('month', _this.state.monthSelectedList);

      _this.props.getCronExpression(cronExp.build(), _this.props.jobName);
    });

    _defineProperty(_assertThisInitialized(_this), "updateSelectedValues", function (selectedValuesList, unitOfTime) {
      switch (unitOfTime) {
        case 'minute':
          _this.setState({
            minuteSeletedList: selectedValuesList
          }, function () {
            _this.prepareCronExpression();
          });

          break;

        case 'hour':
          _this.setState({
            hourSelectedList: selectedValuesList
          }, function () {
            _this.prepareCronExpression();
          });

          break;

        case 'day':
          _this.setState({
            daySelectedList: selectedValuesList
          }, function () {
            _this.prepareCronExpression();
          });

          break;

        case 'week':
          _this.setState({
            weekSelectedList: selectedValuesList
          }, function () {
            _this.prepareCronExpression();
          });

          break;

        case 'month':
          _this.setState({
            monthSelectedList: selectedValuesList
          }, function () {
            _this.prepareCronExpression();
          });

          break;

        default:
          return null;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateScheduleConfiguration", function (options, unitOfTime) {
      var selectedValuesList = []; // get the latest selected values from all the options in select.

      selectedValuesList = _toConsumableArray(options).filter(function (o) {
        return o.selected;
      }).map(function (o) {
        return o.value;
      }); // update the selectedvalues list in the state

      _this.updateSelectedValues(selectedValuesList, unitOfTime);
    });

    _defineProperty(_assertThisInitialized(_this), "handleCronSelection", function (selectedFrequency) {
      switch (selectedFrequency) {
        case 'minute':
          _this.displayDateTimePicker(selectedFrequency, false, false, false, false, false);

          break;

        case 'hour':
          _this.displayDateTimePicker(selectedFrequency, true, false, false, false, false);

          break;

        case 'day':
          _this.displayDateTimePicker(selectedFrequency, true, true, false, false, false);

          break;

        case 'week':
          _this.displayDateTimePicker(selectedFrequency, true, true, false, true, false);

          break;

        case 'month':
          _this.displayDateTimePicker(selectedFrequency, true, true, true, false, false);

          break;

        case 'year':
          _this.displayDateTimePicker(selectedFrequency, true, true, true, false, true);

          break;

        default:
          return null;
      }
    });

    _this.state = {
      // Display the date time pickers inputs
      // according to the  schedule frequency selected.
      operationCronDict: {
        showMinutePicker: false,
        showHourPicker: false,
        showDayPicker: false,
        showWeekPicker: false,
        showMonthPicker: false
      },
      // Maintain the user selected time values in state.
      minuteSeletedList: [],
      hourSelectedList: [],
      daySelectedList: [],
      weekSelectedList: [],
      monthSelectedList: []
    };
    return _this;
  }

  _createClass(CronJob, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Set default schedule frequency as 'minute'.
      this.handleCronSelection('minute');
      this.prepareCronExpression();
    } // This is an options list used by
    // minute picker select box.

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "cron-tab-container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "supporting-words"
      }, " Every "), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-control-wrapper"
      }, /*#__PURE__*/_react["default"].createElement("select", {
        className: "form-control cron-select",
        name: "cronSelect",
        onChange: function onChange(e) {
          _this2.handleCronSelection(e.target.value);
        }
      }, /*#__PURE__*/_react["default"].createElement("option", {
        value: "minute"
      }, "Minute"), /*#__PURE__*/_react["default"].createElement("option", {
        value: "hour"
      }, "Hour"), /*#__PURE__*/_react["default"].createElement("option", {
        value: "day"
      }, "Day"), /*#__PURE__*/_react["default"].createElement("option", {
        value: "week"
      }, "Week"), /*#__PURE__*/_react["default"].createElement("option", {
        value: "month"
      }, "Month"), /*#__PURE__*/_react["default"].createElement("option", {
        value: "year"
      }, "Year"))), /*#__PURE__*/_react["default"].createElement("div", null, this.state.operationCronDict.showDayPicker && this.renderDayPicker()), /*#__PURE__*/_react["default"].createElement("div", null, this.state.operationCronDict.showMonthPicker && this.renderMonthPicker()), /*#__PURE__*/_react["default"].createElement("div", null, this.state.operationCronDict.showWeekPicker && this.renderWeekPicker()), /*#__PURE__*/_react["default"].createElement("div", null, this.state.operationCronDict.showHourPicker && this.renderHourPicker()), /*#__PURE__*/_react["default"].createElement("div", null, this.state.operationCronDict.selectedFrequency !== 'hour' && this.state.operationCronDict.selectedFrequency !== 'minute' && ':'), /*#__PURE__*/_react["default"].createElement("div", null, this.state.operationCronDict.showMinutePicker && this.renderMinutePicker()), /*#__PURE__*/_react["default"].createElement("div", null, this.state.operationCronDict.selectedFrequency === 'hour' && 'past the hour'));
    }
  }]);

  return CronJob;
}(_react.Component);

exports.CronJob = CronJob;
CronJob.propTypes = {
  getCronExpression: _propTypes["default"].func,
  jobName: _propTypes["default"].string
};
