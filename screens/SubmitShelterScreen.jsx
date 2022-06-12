import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import CircleCheckBox from "react-native-circle-checkbox";
import ReserveBottomTab from "../components/ReserveBottomTab";
import ScreenWrapper from "../components/ScreenWrapper";
import { Colors, FontSizes } from "../styles";
import { BadgeScreenNavName } from "./BadgeScreen";
import { SuccessScreen2NavName } from "./SuccessScreen2";

export const SubmitShelterScreenNavName = "SubmitShelterScreen";
const SubmitShelterScreen = () => {
  const navigation = useNavigation();
  const [airc, setAirc] = useState(false);
  const [heat, setHeat] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [washer, setWasher] = useState(false);
  const [dryer, setDryer] = useState(false);

  const [pets, setPets] = useState(false);
  const [guests, setGuests] = useState(false);
  const [smoking, setSmoking] = useState(false);

  return (
    <>
      <ReserveBottomTab title="Submit" navScreenName={SuccessScreen2NavName} />
      <ScreenWrapper title="List accommodation">
        <View style={styles.view}>
          <View style={styles.flex}>
            <Image source={require("../assets/images/jim.png")} />
            <Text style={styles.text}>Petro</Text>
          </View>
          <Text style={styles.label}>Place name</Text>
          <TextInput
            style={{
              paddingLeft: 5,
              height: 30,
              borderRadius: 5,
              borderColor: "#E4E4E4",
              borderWidth: 1,
              backgroundColor: "#F5F5F5",
            }}
            editable
          />
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={{
              textAlignVertical: "top",
              paddingLeft: 5,
              height: 65,
              borderRadius: 5,
              borderColor: "#E4E4E4",
              borderWidth: 1,
              backgroundColor: "#F5F5F5",
            }}
            editable
          />
          <View style={styles.flex3}>
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
          <View style={styles.flex2}>
            <View style={{ paddingRight: 20 }}>
              <Text style={styles.label}>Amenities</Text>
              <CircleCheckBox
                label="Air conditioning"
                checked={airc}
                onToggle={() => setAirc(!airc)}
                innerColor="#5B88B1"
                outerColor="#5B88B1"
                outerSize={18}
                styleCheckboxContainer={{ marginTop: 5 }}
              />
              <CircleCheckBox
                label="Wifi"
                checked={wifi}
                onToggle={() => setWifi(!wifi)}
                innerColor="#5B88B1"
                outerColor="#5B88B1"
                outerSize={18}
                styleCheckboxContainer={{ marginTop: 5 }}
              />
              <CircleCheckBox
                checked={heat}
                onToggle={() => setHeat(!heat)}
                label="Heating"
                innerColor="#5B88B1"
                outerColor="#5B88B1"
                outerSize={18}
                styleCheckboxContainer={{ marginTop: 5 }}
              />
              <CircleCheckBox
                checked={washer}
                onToggle={() => setWasher(!washer)}
                label="Washer"
                innerColor="#5B88B1"
                outerColor="#5B88B1"
                outerSize={18}
                styleCheckboxContainer={{ marginTop: 5 }}
              />
              <CircleCheckBox
                checked={dryer}
                onToggle={() => setDryer(!dryer)}
                label="Dryer"
                innerColor="#5B88B1"
                outerColor="#5B88B1"
                outerSize={18}
                styleCheckboxContainer={{ marginTop: 5 }}
              />
            </View>
            <View>
              <Text style={styles.label}>Allowed</Text>
              <CircleCheckBox
                label="Pets"
                checked={pets}
                onToggle={() => setPets(!pets)}
                innerColor="#5B88B1"
                outerColor="#5B88B1"
                outerSize={18}
                styleCheckboxContainer={{ marginTop: 5 }}
              />
              <CircleCheckBox
                label="Guests"
                checked={guests}
                onToggle={() => setGuests(!guests)}
                innerColor="#5B88B1"
                outerColor="#5B88B1"
                outerSize={18}
                styleCheckboxContainer={{ marginTop: 5 }}
              />
              <CircleCheckBox
                label="Smoking"
                checked={smoking}
                onToggle={() => setSmoking(!smoking)}
                innerColor="#5B88B1"
                outerColor="#5B88B1"
                outerSize={18}
                styleCheckboxContainer={{ marginTop: 5 }}
              />
            </View>
          </View>
          <View style={styles.flex2}>
            <View style={{ paddingRight: 20 }}>
              <Text style={styles.label}>Photos</Text>
              <Image
                source={require("../assets/images/Group_110.png")}
                style={{ width: 147, height: 130 }}
              />
            </View>
            <View>
              <Text style={styles.label}>Location</Text>
              <Image
                source={require("../assets/images/Group_111.png")}
                style={{ width: 147, height: 130 }}
              />
            </View>
          </View>
          <View style={styles.flex2}>
            <Text style={{ ...styles.label2, paddingRight: 4 }}>
              Social credits included.
            </Text>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate(BadgeScreenNavName)}
            >
              <Text style={{ ...styles.label2, color: Colors.secondary }}>
                Learn more.
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScreenWrapper>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Colors.white,
    paddingHorizontal: 35,
    paddingBottom: 100,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontFamily: "Poppins-Regular",
    fontSize: FontSizes.L20,
    marginLeft: 18,
  },
  label: {
    fontSize: FontSizes.M16,
    fontFamily: "Poppins-Regular",
    marginTop: 20,
    marginBottom: 5,
  },
  flex2: {
    flexDirection: "row",
  },
  flex3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label2: {
    fontSize: FontSizes.XS12,
    fontFamily: "Poppins-Regular",
    marginTop: 20,
    marginBottom: 5,
  },
});

export default SubmitShelterScreen;
