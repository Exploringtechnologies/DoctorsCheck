import { View, Text, Dimensions, SafeAreaView, StatusBar, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import StepIndicator from 'react-native-step-indicator';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const { width, height } = Dimensions.get('window');


const customStyles = {
  stepIndicatorSize: 27,
  currentStepIndicatorSize: 25,
  separatorStrokeWidth: 10,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#1a1d64',
  stepStrokeWidth: 3,
  backgroundColor: "#fff",
  stepStrokeFinishedColor: '#1a1d64',
  stepStrokeUnFinishedColor: '#cbc4e1',
  separatorFinishedColor: '#1a1d64',
  separatorUnFinishedColor: '#cbc4e1',
  stepIndicatorFinishedColor: '#1a1d64',
  stepIndicatorUnFinishedColor: '#cbc4e1',
  stepIndicatorCurrentColor: '#1a1d64',
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0
}

const customStylesforVertical = {
  stepIndicatorSize: 23,
  currentStepIndicatorSize: 27,
  separatorStrokeWidth: 9,
  currentStepStrokeWidth: 2,
  stepStrokeWidth: 2,
  stepStrokeFinishedColor: '#9281bc',
  stepStrokeCurrentColor: '#4b3a96',
  separatorFinishedColor: '#9281bc',
  separatorUnFinishedColor: '#cac3e0',
  stepStrokeUnFinishedColor: '#cac3e0',
  stepIndicatorFinishedColor: '#FFFFFF',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 10,
  currentStepIndicatorLabelFontSize: 10,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#000000',
  stepIndicatorLabelUnFinishedColor: '#484848',
  labelColor: '#a8a8a8',
  labelAlign: 'flex-start',
  labelSize: 15,
  currentStepLabelColor: '#292b2e',
  labelFontFamily: "Roboto_Bold"
}

const Mainpage = () => {
  const data = [
    {
      id: "0",
      label: "No Pain"
    },
    {
      id: "1",
      label: "Minimal"
    },
    {
      id: "2",
      label: "Mild"
    },
    {
      id: "3",
      label: "Uncomfortable"
    },
    {
      id: "4",
      label: "Moderate"
    },
    {
      id: "5",
      label: "Distracting"
    },
    {
      id: "6",
      label: "Distressing"
    },
    {
      id: "7",
      label: "Unmanageable"
    },
    {
      id: "8",
      label: "Intense"
    },
    {
      id: "9",
      label: "Severe"
    },
    {
      id: "10",
      label: "Worst Immaginable Pain"
    }
  ]
  const [currentPosition, setCurrentPosition] = useState(0)
  let [fontsLoaded] = useFonts({
    'Roboto_Regular': require('../assets/Fonts/Roboto_Regular.ttf'),
    'Roboto_Bold': require('../assets/Fonts/Roboto_Bold.ttf'),
  });
  const changePosition = (position) => {
    setCurrentPosition(position)
  }


  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const healthStatus = () => {
    return data.find((data) => data.id == currentPosition)
  }
  const onNextPressed = () => {
    Alert.alert('Hey', `Your Health Status is ${healthStatus().label}`, [
      {
        text: 'Call Doctor',
      },
      {
        text: 'Exit',
      },
    ]);
  }

  return (
    <SafeAreaView>
      <StatusBar hidden={true} />
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.1, width: width, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: "#fdfdfd" }}>
          <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
            <FontAwesome name={'angle-left'} color={"#0c0f5a"} size={40} />
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', top: 1 }}>
            <Text style={{ fontSize: 21, marginLeft: -75, color: '#25276b', fontFamily: 'Roboto_Regular' }}>Least Pain</Text>
          </View>
        </View>
        <View style={{ flex: 1, width: width }}>
          <View style={{ backgroundColor: '#ffffffff', height: 80, width: width, justifyContent: 'center', alignContent: 'center' }}>
            <StepIndicator
              customStyles={customStyles}
              currentPosition={currentPosition}
              stepCount={6}
            />
          </View>
          <View style={{ padding: 10, flex: 1, width: width }}>
            <View style={{ flex: 1, padding: 5, flexDirection: 'row', marginLeft: 10 }}>
              <View style={{ flex: 0.252, backgroundColor: 'red' }}>
                <Image source={require("../assets/background.png")} style={{ width: 65, height: 77 }} />
              </View>
              <View style={{ justifyContent: 'space-evenly', padding: 5, marginLeft: 25 }}>
                <Text style={{ fontSize: 20, color: '#313373', letterSpacing: 0.5, fontFamily: 'Roboto_Bold' }}>
                  Torso (right)
                </Text>
                <Text style={{ fontSize: 20, color: '#49494c', letterSpacing: 0.5, fontFamily: 'Roboto_Regular' }}>
                  Arching
                </Text>
              </View>
            </View>
          </View>
          <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 18, textAlign: 'left', letterSpacing: 1, color: '#363675', lineHeight: 20, fontFamily: 'Roboto_Regular' }}>
              Please choose the one number that {"\n"}
              best describes your <Text style={{ fontWeight: 'bold' }}>Least</Text> pain in this{"\n"}
              location in the last 7 days:
            </Text>
          </View>
          <View style={{ flex: 5, }}>
            <View style={{ height: height / 2.15, width: width - 30, padding: 20, margin: 5, elevation: 10 }}>
              <StepIndicator
                customStyles={customStylesforVertical}
                currentPosition={currentPosition}
                labels={data.map(data => data.label)}
                direction={'vertical'}
                stepCount={11}
                onPress={changePosition}
              />
            </View>

          </View>
          <TouchableOpacity style={{ width: width, height: 60, backgroundColor: '#813767' }} activeOpacity={0.8} onPress={onNextPressed}>
            <View style={{ justifyContent: 'space-evenly', flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1.8, marginLeft: 50, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: "#ffffff", fontSize: 25, letterSpacing: 2, fontFamily: 'Roboto_Regular' }} >
                  Next
                </Text>
              </View>

              <FontAwesome name={'angle-right'} color={"#ffffff"} size={40} style={{ paddingHorizontal: 20, alignSelf: 'center' }} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Mainpage