import React, { useState, useCallback, useRef,useEffect } from "react";
import { StyleSheet, View, SafeAreaView, Text, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import  Constants from "expo-constants";
import Result from "./Result";
import Control from "./Control";
// import MyHeader from "./Header";
import { displayTime } from "./util";

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setRunning] = useState(false);
  const [results, setResults] = useState([]);
  const timer = useRef(null);

  const handleLeftButtonPress = async() => {
   
    if (isRunning) {
      setResults((previousResults) => [time, ...previousResults]);
      console.log(results.length)
    } else {
      setResults([]);
      setTime(0);
    }
  };

  const handleRightButtonPress =() => {
      
    if (!isRunning) {
      const interval = setInterval(() => {
        setTime((previousTime) => previousTime + 1);
      }, 10);
      timer.current = interval;
    } else {
      clearInterval(timer.current);
    }
    setRunning((previousState) => !previousState);
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <MyHeader /> */}
      <StatusBar style="light" />
      <View style={styles.display}>
        <Text style={styles.displayText}>{displayTime(time)}</Text>
      </View>
    
      <View style={styles.control}>
        <Control
          isRunning={isRunning}
          handleLeftButtonPress={handleLeftButtonPress}
          handleRightButtonPress={handleRightButtonPress}
        />
      </View>
     
      <View style={styles.result}>
          <Result results={results}/>
      </View>
    </SafeAreaView>
  );


}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
         paddingTop:Constants.statusBarHeight,
    },
    display:{
        flex:3/5,
        justifyContent:'center',
        alignItems:'center'
    },
    displayText:{
        color:'#fff',
        fontSize:70,
        fontWeight:"200",
        fontFamily:Platform.OS==='ios'?'Helvetica Neue':null
    },
    control:{
        height:70,
        flexDirection:'row',
        justifyContent:'space-around',
    },
    result:{
        flex:2/5
    }
})
