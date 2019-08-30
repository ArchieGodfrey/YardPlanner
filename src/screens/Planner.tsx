import React, { Component } from 'react';
import _ from 'lodash';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  Button,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Header from '../components/Header';
import { AgendaList, CalendarProvider, ExpandableCalendar } from 'react-native-calendars';


const today = new Date().toISOString().split('T')[0];
const fastDate = getPastDate(3); 
const futureDates = getFutureDates(9);
const dates = [fastDate, today].concat(futureDates);

function getFutureDates(days) {
  const array = [];
  for (let index = 1; index <= days; index++) {
    const date = new Date(Date.now() + (864e5 * index)); // 864e5 == 86400000 == 24*60*60*1000
    const dateString = date.toISOString().split('T')[0];
    array.push(dateString);
  }
  return array;
}

function getPastDate(days) {
  return new Date(Date.now() - (864e5 * days)).toISOString().split('T')[0];
}

const ITEMS = [

  {title: dates[0], data: [{hour: '9am', duration: '0.5h', title: 'Turn out Bean'}]},
  {title: dates[1], data: [{hour: '4pm', duration: '1h', title: 'Turn out Bean'}, {hour: '5pm', duration: '1h', title: 'School booked by NAME'}]},
  {title: dates[2], data: [{hour: '1pm', duration: '1h', title: 'Bring in Bean'}, {hour: '2pm', duration: '1h', title: 'Farrier at yard'}, {hour: '3pm', duration: '1h', title: 'Private Lesson'}]},
  {title: dates[3], data: [{hour: '12am', duration: '1h', title: 'Bring in Bean'}]},
  {title: dates[4], data: [{}]},
  {title: dates[5], data: [{hour: '9pm', duration: '1h', title: 'Turn out Bean'}, {hour: '10pm', duration: '1h', title: 'Yard Show'}, {hour: '11pm', duration: '1h', title: 'Vet at yard'}, {hour: '12pm', duration: '1h', title: 'Bring in Bean'}]},
  {title: dates[6], data: [{hour: '12am', duration: '1h', title: 'Bring in Bean'}]},
  {title: dates[7], data: [{}]},
  {title: dates[8], data: [{hour: '9pm', duration: '1h', title: 'Turn out Bean'}, {hour: '10pm', duration: '1h', title: 'Farrier at yard'}, {hour: '11pm', duration: '1h', title: 'Private lesson'}, {hour: '12pm', duration: '1h', title: 'Bring in Bean'}]},
  {title: dates[9], data: [{hour: '1pm', duration: '1h', title: 'Bring in Bean'}, {hour: '2pm', duration: '1h', title: 'Dressage clinic'}, {hour: '3pm', duration: '1h', title: 'Private Yoga'}]},
  {title: dates[10], data: [{hour: '12am', duration: '1h', title: 'Bring in Bean'}]}
];

export interface Props {
  navigation: any,
  [key: string]: any,
}

export interface State {
  items: any,
}

class Planner extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      items: {
        '2012-05-22': [{text: 'item 1 - any js object'}],
        '2012-05-23': [{text: 'item 2 - any js object'}],
        '2012-05-24': [],
        '2012-05-25': [{text: 'item 3 - any js object'},{text: 'any js object'}]
      }
    };
  }

  static info = {
    name: 'Planner'
  };
  
  onDateChanged = (/* date, updateSource */) => {
    // console.warn('ExpandableCalendarScreen onDateChanged: ', date, updateSource);
    // fetch and set data for date + week ahead
  }

  onMonthChange = (/* month, updateSource */) => {
    // console.warn('ExpandableCalendarScreen onMonthChange: ', month, updateSource);
  }
  
  buttonPressed() {
    Alert.alert('show more');
  }

  itemPressed(id) {
    Alert.alert(id);
  }

  renderEmptyItem() {
    return (
      <View style={styles.emptyItem}>
        <Text style={styles.emptyItemText}>No Events Planned</Text>
      </View>
    );
  }

  renderItem = ({item}) => {
    if (_.isEmpty(item)) {
      return this.renderEmptyItem();
    }
    
    return (
      <TouchableOpacity 
        onPress={() => this.itemPressed(item.title)} 
        style={styles.item}
      >
        <View>
          <Text style={styles.itemHourText}>{item.hour}</Text>
          <Text style={styles.itemDurationText}>{item.duration}</Text>
        </View>
        <Text style={styles.itemTitleText}>{item.title}</Text>
        <View style={styles.itemButtonContainer}>
          <Button title={'Info'} onPress={this.buttonPressed}/>
        </View>
      </TouchableOpacity>
    );
  }

  getMarkedDates = () => {
    const marked = {};
    ITEMS.forEach(item => {
      // only mark dates with data
      if (item.data && item.data.length > 0 && !_.isEmpty(item.data[0])) {
        marked[item.title] = {marked: true};
      }
    });
    return marked;
  }

  getTheme = () => {
    const themeColor = '#0059ff';
    const lightThemeColor = '#e6efff';
    const disabledColor = '#a6acb1';
    const black = '#20303c';
    const white = '#ffffff';
    
    return {
      // arrows
      arrowColor: black,
      arrowStyle: {padding: 0},
      // month
      monthTextColor: black,
      textMonthFontSize: 16,
      textMonthFontFamily: 'HelveticaNeue',
      textMonthFontWeight: 'bold',
      // day names
      textSectionTitleColor: black,
      textDayHeaderFontSize: 12,
      textDayHeaderFontFamily: 'HelveticaNeue',
      textDayHeaderFontWeight: 'normal',
      // today
      todayBackgroundColor: lightThemeColor,
      todayTextColor: themeColor,
      // dates
      dayTextColor: themeColor,
      textDayFontSize: 18,
      textDayFontFamily: 'HelveticaNeue',
      textDayFontWeight: '500',
      textDayStyle: {marginTop: Platform.OS === 'android' ? 2 : 4},
      // selected date
      selectedDayBackgroundColor: themeColor,
      selectedDayTextColor: white,
      // disabled date
      textDisabledColor: disabledColor,
      // dot (marked date)
      dotColor: themeColor,
      selectedDotColor: white,
      disabledDotColor: disabledColor,
      dotStyle: {marginTop: -2}
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
      <Header
          navigation={navigation}
          banner
        />
        <CalendarProvider 
          date={ITEMS[0].title} 
          onDateChanged={this.onDateChanged} 
          onMonthChange={this.onMonthChange}
          theme={{todayButtonTextColor: '#0059ff'}} 
          showTodayButton 
          disabledOpacity={0.6}
          // todayBottomMargin={16}
      >
        <ExpandableCalendar 
          // hideArrows
          // disablePan
          // hideKnob
          // initialPosition={ExpandableCalendar.positions.OPEN}
          firstDay={1}
          markedDates={this.getMarkedDates()} // {'2019-06-01': {marked: true}, '2019-06-02': {marked: true}, '2019-06-03': {marked: true}};
          theme={this.getTheme()}
          calendarStyle={styles.calendar}
          // headerStyle={styles.calendar} // for horizontal only
        />
        <AgendaList
          sections={ITEMS}
          extraData={this.state}
          renderItem={this.renderItem}
          // sectionStyle={styles.section}
        />
      </CalendarProvider>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  calendar: {
    paddingLeft: 20, 
    paddingRight: 20
  },
  section: {
    backgroundColor: '#f0f4f7', 
    color: '#79838a'
  },
  item: {
    padding: 20, 
    backgroundColor: 'white', 
    borderBottomWidth: 1, 
    borderBottomColor: '#e8ecf0', 
    flexDirection: 'row'
  },
  itemHourText: {
    color: 'black'
  },
  itemDurationText: {
    color: 'grey', 
    fontSize: 12, 
    marginTop: 4,
    marginLeft: 4
  },
  itemTitleText: {
    color: 'black', 
    marginLeft: 16, 
    fontWeight: 'bold', 
    fontSize: 16
  },
  itemButtonContainer: {
    flex: 1, 
    alignItems: 'flex-end'
  },
  emptyItem: {
    paddingLeft: 20,
    height: 52, 
    justifyContent: 'center',
    borderBottomWidth: 1, 
    borderBottomColor: '#e8ecf0' 
  },
  emptyItemText: {
    color: '#79838a',
    fontSize: 14
  }
});

export default Planner
