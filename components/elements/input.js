import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Input, Icon } from 'galio-framework';

const  COLORS= {
    DEFAULT: '#172B4D',
    PRIMARY: '#5E72E4',
    SECONDARY: '#F7FAFC',
    LABEL: '#FE2472',
    INFO: '#11CDEF',
    ERROR: '#F5365C',
    SUCCESS: '#2DCE89',
    WARNING: '#FB6340',
    /*not yet changed */
    MUTED: '#ADB5BD',
    INPUT: '#DCDCDC',
    INPUT_SUCCESS: '#7BDEB2',
    INPUT_ERROR: '#FCB3A4',
    ACTIVE: '#5E72E4', //same as primary
    BUTTON_COLOR: '#9C26B0', //wtf
    PLACEHOLDER: '#9FA5AA',
    SWITCH_ON: '#5E72E4',
    SWITCH_OFF: '#D4D9DD',
    GRADIENT_START: '#6B24AA',
    GRADIENT_END: '#AC2688',
    PRICE_COLOR: '#EAD5FB',
    BORDER_COLOR: '#E7E7E7',
    BLOCK: '#E7E7E7',
    ICON: '#172B4D',
    HEADER: '#525F7F',
    BORDER: '#CAD1D7',
    WHITE: '#FFFFFF',
    BLACK: '#000000'
  };

  
class ArInput extends Component {
 

  render() {
      const { shadowless, success, error} = this.props;
      const inputStyles = [styles.input,
    !shadowless && styles.shadow,
    success && styles.success,
    error && styles.error,
    {...this.props.style}
    ]
    return (
   <Input
   placeholder="Write Something Here"
   placeholderTextColor={COLORS.MUTED}
   style={inputStyles}
   color={COLORS.HEADER}
   iconContent={
       <Icon
       size={14}
       color={COLORS.ICON}
       name="link"
       family="AntDesign"
       />
   }
   {...this.props}
   />
    );
  }
}

ArInput.defaultProps = {
    shadowless: false,
    success: false,
    error: false
  };
  
  ArInput.propTypes = {
    shadowless: PropTypes.bool,
    success: PropTypes.bool,
    error: PropTypes.bool
  }
  
  const styles = StyleSheet.create({
    input: {
      borderRadius: 4,
      borderColor: "#CAD1D7",
      height: 44,
      backgroundColor: '#FFFFFF'
    },
    success: {
      borderColor: "#7BDEB2",
    },
    error: {
      borderColor:  '#FCB3A4',
    },
    shadow: {
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 1 },
      shadowRadius: 2,
      shadowOpacity: 0.05,
      elevation: 2,
    }
  });
  

export default ArInput;
