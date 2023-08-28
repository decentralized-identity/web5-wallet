import { Button } from "@/components/Button";
import { ItemAvatar } from "@/components/Item";
import { ColorTheme } from "@/theme/colors";
import { FlexLayouts, Layouts } from "@/theme/layouts";
import { Typography } from "@/theme/typography";
import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";

const AddCredentialDetailScreen = ({ navigation }) => {
  const navigateToAddCredentialOptions = () => {
    navigation.navigate("AddCredentialOptions");
  };
  const navigateToAddCredentialDetail = () => {
    navigation.push("AddCredentialDetail");
  };
  return (
    <SafeAreaView>
      <View style={Layouts.container}>
        <View style={[Layouts.row, FlexLayouts.containerHorizontalCenter]}>
          <ItemAvatar
            iconName="note"
            badgeName="id-badge"
            style={Typography.textCenter}
          />
          <Text style={[Typography.heading2, Typography.textCenter]}>
            US Passport
          </Text>
          <Text style={[Typography.body3, Typography.textCenter]}>
            Issued by U.S. State Department
          </Text>
        </View>
        <View style={Layouts.row}>
          <Text style={Typography.body4}>
            Accepted by law everywhere your physical passport is required
          </Text>
        </View>
        <View style={[Layouts.row, Checklist.callout, Checklist.danger]}>
          <Text style={[Typography.body4, { color: ColorTheme.REDUCED }]}>
            Credentials required
          </Text>
          <View style={FlexLayouts.row}>
            <View style={[Checklist.checkbox, Checklist.success]}>
              <Octicons name="check" size={16} color={ColorTheme.SUCCESS} />
            </View>
            <View>
              <Text style={Typography.body1}>KYC Credential</Text>
              <Text style={[Typography.body4, Checklist.success]}>
                You have this credential
              </Text>
            </View>
          </View>
          <View style={Checklist.row}>
            <View style={[FlexLayouts.row, Checklist.textContainer]}>
              <View style={[Checklist.checkbox, Checklist.danger]}>
                <Octicons name="x" size={16} color={ColorTheme.DANGER} />
              </View>
              <View>
                <Text style={Typography.body1}>Foreign Passport</Text>
                <Text style={[Typography.body4, Checklist.danger]}>
                  You don&apos;t have this credential
                </Text>
              </View>
            </View>
            <View style={Checklist.buttonContainer}>
              <Button kind="primary" onPress={navigateToAddCredentialDetail}>
                Get
              </Button>
            </View>
          </View>
        </View>
        <Button kind="primary" onPress={navigateToAddCredentialOptions}>
          Get this credential
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default AddCredentialDetailScreen;

const Checklist = StyleSheet.create({
  callout: {
    borderWidth: 4,
    borderRadius: 20,
    padding: 16,
    gap: 8,
  },
  success: {
    borderColor: ColorTheme.SUCCESS,
    color: ColorTheme.SUCCESS,
  },
  danger: {
    borderColor: ColorTheme.DANGER,
    color: ColorTheme.DANGER,
  },
  checkbox: {
    padding: 2,
    borderWidth: 2,
    borderRadius: 2,
    height: 24,
    width: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  //TODO: this is a shared style with Item/Tappable styles
  row: {
    flexDirection: "row",
  },
  textContainer: {
    flexBasis: "67%",
    flexDirection: "row",
  },
  buttonContainer: {
    flexBasis: "33%",
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "flex-start",
  },
});
