import React, { Component } from "react";

import {
  View,
  Dimensions,
  ImageBackground,
  StatusBar,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { Block, Checkbox, Text, theme } from "galio-framework";
import argontheme from "./Theme";
import Input from "./elements/input";
import Button from "./elements/button";
const { width, height } = Dimensions.get("screen");
const COLORS = {
  DEFAULT: "#172B4D",
  PRIMARY: "#5E72E4",
  SECONDARY: "#F7FAFC",
  LABEL: "#FE2472",
  INFO: "#11CDEF",
  ERROR: "#F5365C",
  SUCCESS: "#2DCE89",
  WARNING: "#FB6340",
  /*not yet changed */
  MUTED: "#ADB5BD",
  INPUT: "#DCDCDC",
  INPUT_SUCCESS: "#7BDEB2",
  INPUT_ERROR: "#FCB3A4",
  ACTIVE: "#5E72E4", //same as primary
  BUTTON_COLOR: "#9C26B0", //wtf
  PLACEHOLDER: "#9FA5AA",
  SWITCH_ON: "#5E72E4",
  SWITCH_OFF: "#D4D9DD",
  GRADIENT_START: "#6B24AA",
  GRADIENT_END: "#AC2688",
  PRICE_COLOR: "#EAD5FB",
  BORDER_COLOR: "#E7E7E7",
  BLOCK: "#E7E7E7",
  ICON: "#172B4D",
  HEADER: "#525F7F",
  BORDER: "#CAD1D7",
  WHITE: "#FFFFFF",
  BLACK: "#000000",
};
const argonTheme = { COLORS };
class login extends Component {
  render() {
    return (
      <ScrollView>
        <Block flex middle>
          <StatusBar backgroundColor="blue" />
          <ImageBackground
            source={require("../assets/images/bg.jpg")}
            style={{ width, height, zIndex: 1 }}
          >
            <Block flex middle>
              <Block style={styles.loginContainer}>
                <Block
                  flex={0.25}
                  middle
                  style={{ ...styles.thinBorder, ...styles.socialConnect }}
                >
                  <Text size={22}>Sign up with</Text>
                  <Block
                    row
                    style={{
                      width: "100%",
                      marginTop: theme.SIZES.BASE,
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Button
                      style={{ ...styles.smallButton, ...styles.socialButtons }}
                    >
                      <Block row>
                        <FontAwesomeIcon
                          name="github"
                          family="FontAwesome"
                          size={14}
                          color="black"
                          style={{ marginTop: 2, marginRight: 5 }}
                        />
                        <Text style={styles.socialTextButtons}>GITHUB</Text>
                      </Block>
                    </Button>
                    <Button
                      style={{ ...styles.smallButton, ...styles.socialButtons }}
                    >
                      <Block row>
                        <FontAwesomeIcon
                          name="google"
                          family="FontAwesome"
                          size={14}
                          color="black"
                          style={{ marginTop: 2, marginRight: 5 }}
                        />
                        <Text style={styles.socialTextButtons}>GOOGLE</Text>
                      </Block>
                    </Button>
                  </Block>
                </Block>
                <Block flex>
                  <Block flex={0.17} middle>
                    <Text color="#8898AA" size={12}>
                      Or sign up the classic way
                    </Text>
                  </Block>
                  <Block flex center>
                    <KeyboardAvoidingView
                      style={{ flex: 1 }}
                      keyboardVerticalOffset={25}
                      enabled
                    >
                      <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                        <Input
                          borderless
                          placeholder="Name"
                          iconContent={
                            <FontAwesomeIcon
                              size={16}
                              color={COLORS.ICON}
                              name="graduation-cap"
                              family="FontAwesome5"
                              style={styles.inputIcons}
                            />
                          }
                        />
                      </Block>
                      <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                        <Input
                          borderless
                          placeholder="Email"
                          iconContent={
                            <FontAwesomeIcon
                              size={16}
                              color={COLORS.ICON}
                              name="envelope"
                              family="FontAwesome5"
                              style={styles.inputIcons}
                            />
                          }
                        />
                      </Block>
                      <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                        <Input
                          password
                          borderless
                          placeholder="Password"
                          iconContent={
                            <FontAwesomeIcon
                              size={16}
                              color={COLORS.ICON}
                              name="lock"
                              family="FontAwesome5"
                              style={styles.inputIcons}
                            />
                          }
                        />
                        <Block row style={styles.passwordCheck}>
                          <Text size={12} color={COLORS.MUTED}>
                            password strength:
                          </Text>
                          <Text bold size={12} color={COLORS.SUCCESS}>
                            {" "}
                            strong
                          </Text>
                        </Block>
                      </Block>
                      <Block middle>
                        <Button color="primary" style={styles.createButton}>
                          <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                            CREATE ACCOUNT
                          </Text>
                        </Button>
                      </Block>
                    </KeyboardAvoidingView>
                  </Block>
                </Block>
              </Block>
            </Block>
          </ImageBackground>
        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  thinBorder: {
    borderColor: "blue",
    borderWidth: StyleSheet.hairlineWidth,
  },
  socialConnect: {
    backgroundColor: COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "green",
  },
  smallButton: {
    width: 75,
    height: 28,
    backgroundColor: "#fff",
  },
  loginContainer: {
    width: width * 0.9,
    height: height * 0.78,
    borderColor: "blue",
    borderWidth: 0.3,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden",
  },

  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  socialTextButtons: {
    color: COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14,
  },
  inputIcons: {
    marginRight: 18,
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30,
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25,
  },
});

export default login;
