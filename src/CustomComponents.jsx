import { View, Text, TouchableOpacity, Button, Image, StyleSheet } from 'react-native'
import React from 'react'

const CustomComponents = ({ title, bgcolor, h, w, r, color, fontSize, justifyContent, alignItems, icon1, icon2, flexDirection, marginBottom, marginLeft, marginRight, leftcnt, rightcnt, onclickleft, onclickright, onclickwinner }) => {
    return (

        <View>
            <View style={{
                backgroundColor: bgcolor, height: h, width: w,
                borderRadius: r,
                justifyContent, alignItems,
                flexDirection,
                marginBottom,
                marginLeft,
                marginRight,
            }}>


                <TouchableOpacity onPress={onclickleft}>
                    <Image source={icon2} style={{ height: 60, width: 60, marginRight: 20 }} />
                    <Text style={{ height: 20, width: 20, color: "yellow" }}>{leftcnt}</Text>
                </TouchableOpacity>
                <Text style={{
                    color, fontSize
                }}>
                    {title}</Text>

                <TouchableOpacity onPress={onclickright}>
                    <Image source={icon1} style={{ height: 50, width: 50, marginLeft: 20 }} />
                    <Text style={{ height: 20, width: 20, color }}>{rightcnt}</Text>

                </TouchableOpacity>

            </View>
            <View style={styles.container}>
                <Button title='Which Count is more..?' onPress={
                    () => {
                        if (leftcnt > rightcnt) {
                            onclickwinner(
                                "Left Count is More than Right Count"
                            )
                        }
                        else if (leftcnt == rightcnt) {
                            onclickwinner("Right Count and Left count  is Equal")
                        }
                        else {
                            onclickwinner("Right Count is More than Left Count")
                        }
                    }
                }></Button>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        width: 400,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        letterSpacing: 2,
    }
});
export default CustomComponents;