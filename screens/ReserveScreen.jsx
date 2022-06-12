import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { Calendar } from "react-native-calendars";
import ReserveBottomTab from "../components/ReserveBottomTab";
import ScreenWrapper from "../components/ScreenWrapper";
import { Colors, FontSizes } from "../styles";
import { SuccessScreenNavName } from "./SuccessScreen";
import { useState } from "react";
import moment from "moment";

let markedDates = {
  "2022-06-15": {
    selected: true,
    startingDay: true,
    color: "lightgrey",
  },
  "2022-06-16": {
    selected: true,
    color: "lightgrey",
  },
  "2022-06-17": {
    selected: true,
    color: "lightgrey",
  },
  "2022-06-18": {
    selected: true,
    endingDay: true,
    color: "lightgrey",
  },
  "2022-06-21": {
    selected: true,
    startingDay: true,
    color: "lightgrey",
  },
  "2022-06-22": {
    selected: true,
    color: "lightgrey",
  },
  "2022-06-23": {
    selected: true,
    endingDay: true,
    color: "lightgrey",
  },
  "2022-06-29": {
    selected: true,
    startingDay: true,
    color: "lightgrey",
  },
  "2022-06-30": {
    selected: true,
    endingDay: true,
    color: "lightgrey",
  },
};

export const ReserveScreenNavName = "ReserveScreen";
const ReserveScreen = () => {
  const [dates, setdates] = useState(markedDates);
  const [isStartDatePicked, setIsStartDatePicked] = useState(false);
  const [isEndDatePicked, setIsEndDatePicked] = useState(false);
  const [startdate, setStartDate] = useState("");

  const selectDate = (day) => {
    if (!isStartDatePicked) {
      let markedDates = {};
      markedDates[day.dateString] = {
        startingDay: true,
        color: "#00B0BF",
        textColor: "#FFFFFF",
      };
      setdates(markedDates);
      setIsEndDatePicked(false);
      setIsStartDatePicked(true);
      setStartDate(day.dateString);
    } else {
      let markedDates = dates;
      let startDate = moment(startdate);
      let endDate = moment(day.dateString);
      let range = endDate.diff(startDate, "days");
      if (range > 0) {
        for (let i = 1; i <= range; i++) {
          let tempDate = startDate.add(1, "day");
          tempDate = moment(tempDate).format("YYYY-MM-DD");
          if (i < range) {
            markedDates[tempDate] = { color: "#00B0BF", textColor: "#FFFFFF" };
          } else {
            markedDates[tempDate] = {
              endingDay: true,
              color: "#00B0BF",
              textColor: "#FFFFFF",
            };
          }
        }
        setdates(markedDates);
        setIsEndDatePicked(true);
        setIsStartDatePicked(false);
        setStartDate("");
      } else {
        alert("Select an upcoming date!");
      }
    }
  };
  return (
    <>
      <ReserveBottomTab title="Reserve" navScreenName={SuccessScreenNavName} />
      <ScreenWrapper title="Reserve accommodation">
        <Image source={require("../assets/images/roomImage.png")} />

        <Text style={styles.text}>
          All accommodations are free of charge, make yourself at home! 🏘️
        </Text>
        <View style={styles.container}>
          <Text style={styles.desc}>Add the details of your stay</Text>
          <Text style={{ ...styles.label, marginTop: 5 }}>
            Available dates (dates marked with grey are reserved):
          </Text>
          <Calendar
            onDayPress={(day) => selectDate(day)}
            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            monthFormat={"MM yyyy"}
            // Do not show days of other months in month page. Default = false
            hideExtraDays={true}
            // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
            // day from another month that is visible in calendar page. Default = false
            disableMonthChange={true}
            // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
            firstDay={1}
            // Hide day names. Default = false
            hideDayNames={true}
            // Show week numbers to the left. Default = false
            showWeekNumbers={true}
            // Handler which gets executed when press arrow icon left. It receive a callback can go back month
            onPressArrowLeft={(subtractMonth) => subtractMonth()}
            // Handler which gets executed when press arrow icon right. It receive a callback can go next month
            onPressArrowRight={(addMonth) => addMonth()}
            // Disable left arrow. Default = false
            disableArrowLeft={true}
            // Disable right arrow. Default = false
            disableArrowRight={true}
            // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
            disableAllTouchEventsForDisabledDays={true}
            // Enable the option to swipe between months. Default = false
            enableSwipeMonths={true}
            markingType={"period"}
            markedDates={dates}
          />
          <View style={styles.flex}>
            <Text style={styles.label}>Number of people</Text>
            <TextInput
              style={{
                marginTop: 20,
                paddingLeft: 5,
                width: 100,
                height: 30,
                borderRadius: 5,
                borderColor: "#E4E4E4",
                borderWidth: 1,
                backgroundColor: "#F5F5F5",
              }}
              editable
            />
          </View>
          <Text style={styles.label}>
            If you have any questions, drop them here.
          </Text>
          <TextInput
            style={{
              padding: 10,
              height: 80,
              borderRadius: 5,
              marginTop: 20,
              borderColor: "#E4E4E4",
              borderWidth: 1,
              backgroundColor: "#F5F5F5",
              textAlignVertical: "top",
            }}
            editable
          />
        </View>
      </ScreenWrapper>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingBottom: 100,
    paddingTop: 20,
  },
  text: {
    fontFamily: "Poppins-Light",
    paddingTop: 5,
    textAlign: "center",
    backgroundColor: Colors.white,
  },
  desc: {
    fontFamily: "Poppins-Regular",
    fontSize: FontSizes.ML18,
    marginTop: 10,
    marginBottom: 10,
  },
  detail: {
    fontFamily: "Poppins-Light",
    fontSize: FontSizes.XS12,
    color: "#6B6B6B",
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    alignItems: "center",
    borderBottomColor: "#E4E4E4",
    borderBottomWidth: 1,
    paddingBottom: 30,
    marginBottom: 20,
  },
  label: {
    fontSize: FontSizes.M16,
    fontFamily: "Poppins-Regular",
    marginTop: 20,
    marginBottom: 5,
  },
});

export default ReserveScreen;
