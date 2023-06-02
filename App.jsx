import { View, Text,Alert } from 'react-native'
import React, { useState } from 'react'
import CustomComponents from './src/CustomComponents';


const App = () => {

  const [leftcnt,setleftcnt] = useState(0);
  const [rightcnt,setrightcnt] = useState(0);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "red" }}>

      <CustomComponents
        title={"Custom Header"}
        bgcolor={"green"}
        w='100%'
        h={75}
        r={10}
        color={"white"}
        fontSize={20}
        justifyContent='center'
        alignItems='center'
        icon1={require("./icons1.png")}
        icon2={require("./icons2.png")}

        flexDirection='row'
        marginBottom={20}
        marginLeft={20}
        marginRight={20}

        leftcnt = {leftcnt}
        setleftcnt = {setleftcnt}
        rightcnt = {rightcnt}
        setrightcnt = {setrightcnt}

        onclickleft = {()=>{
          setleftcnt(leftcnt+1);
        }}
        onclickright = {()=>{
          setrightcnt(rightcnt+1);
        }}

        onclickwinner = {
          x => {
            Alert.alert(x);
          }
        }
      />
    </View>
  )
}

export default App;