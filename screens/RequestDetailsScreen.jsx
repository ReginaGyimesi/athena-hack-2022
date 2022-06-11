import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, StyleSheet, Text } from "react-native";

export const RequestDetailsScreenNavName = "RequestDetailsScreen"
const RequestDetailsScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>Request details</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default RequestDetailsScreen;
