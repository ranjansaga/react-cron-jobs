import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './style.scss';

const CronBuilder = require('cron-builder');

// This component helps user to build cron expressions. We have built this component on top of
// npm package: cron builder. We take the user inputs and then use the cron builder class and its
// methods to generate the cron expression.
// props:
// getCronExpression: PropTypes.func // Call back function to be called on toggle

class CronJob extends Component {

  constructor(props) {
    super(props);
    this.state = {

      // Display the date time pickers inputs
      // according to the  schedule frequency selected.
      operationCronDict: {
        showMinutePicker: false,
        showHourPicker: false,
        showDayPicker: false,
        showWeekPicker: false,
        showMonthPicker: false,
      },

      // Maintain the user selected time values in state.
      minuteSeletedList: [],
      hourSelectedList: [],
      daySelectedList: [],
      weekSelectedList: [],
      monthSelectedList: [],
    };
  }

  componentDidMount() {

    // Set default schedule frequency as 'minute'.
    this.handleCronSelection('minute');
    this.prepareCronExpression();
  }

  // This is an options list used by
  // minute picker select box.
  minuteOptionsList = [
    { label: '0', value: 0 },
    { label: '5', value: 5 },
    { label: '10', value: 10 },
    { label: '15', value: 15 },
    { label: '20', value: 20 },
    { label: '25', value: 25 },
    { label: '30', value: 30 },
    { label: '35', value: 35 },
    { label: '40', value: 40 },
    { label: '45', value: 45 },
    { label: '50', value: 50 },
    { label: '55', value: 55 }
  ];

  // This is an options list used by
  // hour picker select box.
  hourOptionsList = [
    { label: '0', value: 0 },
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
    { label: '6', value: 6 },
    { label: '7', value: 7 },
    { label: '8', value: 8 },
    { label: '9', value: 9 },
    { label: '10', value: 10 },
    { label: '11', value: 11 },
    { label: '12', value: 12 },
    { label: '13', value: 13 },
    { label: '14', value: 14 },
    { label: '15', value: 15 },
    { label: '16', value: 16 },
    { label: '17', value: 17 },
    { label: '18', value: 18 },
    { label: '19', value: 19 },
    { label: '20', value: 20 },
    { label: '21', value: 21 },
    { label: '22', value: 22 },
    { label: '23', value: 23 }
  ];

  // This is an options list used by
  // day picker select box.
  dayOptionsList = [
    { label: '1st', value: 1 },
    { label: '2nd', value: 2 },
    { label: '3rd', value: 3 },
    { label: '4th', value: 4 },
    { label: '5th', value: 5 },
    { label: '6th', value: 6 },
    { label: '7th', value: 7 },
    { label: '8th', value: 8 },
    { label: '9th', value: 9 },
    { label: '10th', value: 10 },
    { label: '11th', value: 11 },
    { label: '12th', value: 12 },
    { label: '13th', value: 13 },
    { label: '14th', value: 14 },
    { label: '15th', value: 15 },
    { label: '16th', value: 16 },
    { label: '17th', value: 17 },
    { label: '18th', value: 18 },
    { label: '19th', value: 19 },
    { label: '20th', value: 20 },
    { label: '21st', value: 21 },
    { label: '22nd', value: 22 },
    { label: '23rd', value: 23 },
    { label: '24th', value: 24 },
    { label: '25th', value: 25 },
    { label: '26th', value: 26 },
    { label: '27th', value: 27 },
    { label: '28th', value: 28 },
    { label: '29th', value: 29 },
    { label: '30th', value: 30 },
    { label: '31th', value: 31 },
  ]

  // This is an options list used by
  // week picker select box.
  weekOptionsList = [
    { label: 'Sunday', value: 1 },
    { label: 'Monday', value: 2 },
    { label: 'Tuesday', value: 3 },
    { label: 'Wednesday', value: 4 },
    { label: 'Thursday', value: 5 },
    { label: 'Friday', value: 6 },
    { label: 'Saturday', value: 7 }
  ]

  // This is an options list used by
  // month picker select box.
  monthOptionsList = [
    { label: 'January', value: 1 },
    { label: 'Febrauary', value: 2 },
    { label: 'March', value: 3 },
    { label: 'April', value: 4 },
    { label: 'May', value: 5 },
    { label: 'June', value: 6 },
    { label: 'July', value: 7 },
    { label: 'August', value: 8 },
    { label: 'September', value: 9 },
    { label: 'October', value: 10 },
    { label: 'November', value: 11 },
    { label: 'December', value: 12 },
  ];

  // This function returns an option tag using the 'label' and 'value'
  // keys present in the object('item') passed as argument
  getOption = function (item, keyPrefix) {
    return <option key={keyPrefix + item.label} value={item.value}>{item.label}</option>;
  };

  // Display the minute picker select box
  renderMinutePicker = () => {
    return (
      <div className="time-picker-container form-control-wrapper">
        <select
          className="form-control"
          id="minute"
          name="minute"
          onChange={(e) => { this.updateScheduleConfiguration(e.target.options, 'minute'); }}
          multiple
        >
          {this.minuteOptionsList.map((item) => {
            return this.getOption(item, 'minute');
          })}
        </select>
      </div>
    );
  }

  // Display the hour picker select box
  renderHourPicker = () => {
    return (
      <div className="time-picker-container">
        <div className="supporting-words"> at </div>
        <div className="form-control-wrapper">
          <select
            className="form-control"
            id="hour"
            name="hour"
            onChange={(e) => { this.updateScheduleConfiguration(e.target.options, 'hour'); }}
            multiple
          >
            {this.hourOptionsList.map((item) => {
              return this.getOption(item, 'hour');
            })}
          </select>
        </div>
      </div>
    );
  }

  // Display the day picker select box
  renderDayPicker = () => {
    return (
      <div className="time-picker-container">
        <div className="supporting-words"> on the </div>
        <div className="form-control-wrapper">
          <select
            className="form-control"
            id="day"
            name="day"
            onChange={(e) => { this.updateScheduleConfiguration(e.target.options, 'day'); }}
            multiple
          >
            {this.dayOptionsList.map((item) => {
              return this.getOption(item, 'day');
            })}
          </select>
        </div>
      </div>
    );
  }

  // Display the week picker select box
  renderWeekPicker = () => {
    return (
      <div className="time-picker-container">
        <div className="supporting-words"> on </div>
        <div className="form-control-wrapper">
          <select
            className="form-control"
            id="week"
            name="week"
            onChange={(e) => { this.updateScheduleConfiguration(e.target.options, 'week'); }}
            multiple
          >
            {this.weekOptionsList.map((item) => {
              return this.getOption(item, 'week');
            })}
          </select>
        </div>
      </div>
    );
  }

  // Display the month picker select box
  renderMonthPicker = () => {
    return (
      <div className="time-picker-container">
        <div className="supporting-words"> of </div>
        <div className="form-control-wrapper">
          <select
            className="form-control"
            id="month"
            name="month"
            onChange={(e) => { this.updateScheduleConfiguration(e.target.options, 'month'); }}
            multiple
          >
            {this.monthOptionsList.map((item) => {
              return this.getOption(item, 'month');
            })}
          </select>
        </div>
      </div>
    );
  }

  // This function takes care of displaying
  // appropriate date / time pickers as per the
  // schedule frequency selected.
  displayDateTimePicker = (
    selectedFrequency,
    displayMinuteFlag,
    displayHourFlag,
    displayDayFlag,
    displayWeekFlag,
    displayMonthFlag) => {
    const operationCronDictCopy = _.cloneDeep(this.state.operationCronDict);
    operationCronDictCopy.showMinutePicker = displayMinuteFlag;
    operationCronDictCopy.showHourPicker = displayHourFlag;
    operationCronDictCopy.showDayPicker = displayDayFlag;
    operationCronDictCopy.showWeekPicker = displayWeekFlag;
    operationCronDictCopy.showMonthPicker = displayMonthFlag;
    operationCronDictCopy.selectedFrequency = selectedFrequency;

    this.setState({
      operationCronDict: operationCronDictCopy
    });
  }

  // This function generates the cron expression using the CronBuilder
  // class and its methods (cron builder npm pacakge).
  prepareCronExpression = () => {
    const cronExp = new CronBuilder();
    this.state.minuteSeletedList.length && cronExp.set('minute', this.state.minuteSeletedList);
    this.state.hourSelectedList.length && cronExp.set('hour', this.state.hourSelectedList);
    this.state.daySelectedList.length && cronExp.set('dayOfTheMonth', this.state.daySelectedList);
    this.state.weekSelectedList.length && cronExp.set('dayOfTheWeek', this.state.weekSelectedList);
    this.state.monthSelectedList.length && cronExp.set('month', this.state.monthSelectedList);
    this.props.getCronExpression(cronExp.build(), this.props.jobName);
  }

  // This function updates the selected values list in the state
  updateSelectedValues = (selectedValuesList, unitOfTime) => {

    switch (unitOfTime) {

      case 'minute':
        this.setState({ minuteSeletedList: selectedValuesList },
          () => { this.prepareCronExpression(); });
        break;

      case 'hour':
        this.setState({ hourSelectedList: selectedValuesList },
          () => { this.prepareCronExpression(); });
        break;

      case 'day':
        this.setState({ daySelectedList: selectedValuesList },
          () => { this.prepareCronExpression(); });
        break;

      case 'week':
        this.setState({ weekSelectedList: selectedValuesList },
          () => { this.prepareCronExpression(); });
        break;

      case 'month':
        this.setState({ monthSelectedList: selectedValuesList },
          () => { this.prepareCronExpression(); });
        break;

      default:
        return null;
    }
  }

  // This function is called when any changes are done on
  // any of the select boxes ofdate time picker UI. This function
  // takes two arguments:
  // options: List containing DOM objects of all options
  // unitOfTime: The date / time picker select box which is updated in UI
  updateScheduleConfiguration = (options, unitOfTime) => {
    let selectedValuesList = [];

    // get the latest selected values from all the options in select.
    selectedValuesList = [...options].filter(o => o.selected).map(o => o.value);

    // update the selectedvalues list in the state
    this.updateSelectedValues(selectedValuesList, unitOfTime);
  }

  // This function decides which date / time picker should be displayed
  // based on schedule frequency selected.
  handleCronSelection = (selectedFrequency) => {
    switch (selectedFrequency) {

      case 'minute':
        this.displayDateTimePicker(selectedFrequency, false, false, false, false, false);
        break;

      case 'hour':
        this.displayDateTimePicker(selectedFrequency, true, false, false, false, false);
        break;

      case 'day':
        this.displayDateTimePicker(selectedFrequency, true, true, false, false, false);
        break;

      case 'week':
        this.displayDateTimePicker(selectedFrequency, true, true, false, true, false);
        break;

      case 'month':
        this.displayDateTimePicker(selectedFrequency, true, true, true, false, false);
        break;

      case 'year':
        this.displayDateTimePicker(selectedFrequency, true, true, true, false, true);
        break;

      default:
        return null;
    }
  }

  render() {
    return (
      <div className="cron-tab-container">
        <div className="supporting-words"> Every </div>
        <div className="form-control-wrapper">
          <select
            className="form-control cron-select"
            name="cronSelect"
            onChange={(e) => { this.handleCronSelection(e.target.value); }}
          >
            <option value="minute">Minute</option>
            <option value="hour">Hour</option>
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="year">Year</option>
          </select>
        </div>

        <div>{this.state.operationCronDict.showDayPicker && this.renderDayPicker()}</div>
        <div>{this.state.operationCronDict.showMonthPicker && this.renderMonthPicker()}</div>
        <div>{this.state.operationCronDict.showWeekPicker && this.renderWeekPicker()}</div>
        <div>
          {this.state.operationCronDict.showHourPicker && this.renderHourPicker()}
        </div>
        <div>
          {(this.state.operationCronDict.selectedFrequency !== 'hour' &&
            this.state.operationCronDict.selectedFrequency !== 'minute') && ':'}
        </div>
        <div>{this.state.operationCronDict.showMinutePicker && this.renderMinutePicker()}</div>
        <div>
          {this.state.operationCronDict.selectedFrequency === 'hour' && 'past the hour'}
        </div>
      </div>
    );
  }
}

export default CronJob;

CronJob.propTypes = {
  getCronExpression: PropTypes.func,
  jobName: PropTypes.string
};
