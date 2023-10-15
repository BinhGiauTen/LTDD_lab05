import { Text, View, Image, Pressable,TouchableOpacity} from "react-native";
import React, { Component, useState } from "react";

function Screen2({navigation}) {
  
  const [image, setImage]= useState(require("../images/vs_blue.png"));

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 3 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={image}
            style={{
              width: 150,
              height: 200,
              marginLeft: 20,
              resizeMode: "contain",
            }}
          />
          <Text style={{ fontSize: 16, fontWeight: 500 }}>
            Điện Thoại Vsmart Joy 3 Hàng chính hãng
          </Text>
        </View>
      </View>
      <View style={{ flex: 7, backgroundColor: "#C4C4C4" }}>
        <Text style={{ fontSize: 18, fontWeight: 500, marginLeft: 20 }}>
          Chọn một màu bên dưới:
        </Text>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            style={{
              width: 85,
              height: 80,
              margin: 6,
              backgroundColor: "#C5F1FB",
            }}
            onPress={()=>{
              setImage(require('../images/vs_silver.png'))
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 85,
              height: 80,
              margin: 6,
              backgroundColor: "#F30D0D",
            }}
            onPress={()=>{
              setImage(require('../images/vs_red.png'))
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 85,
              height: 80,
              margin: 6,
              backgroundColor: "#000",
            }}
            onPress={()=>{
              setImage(require('../images/vs_black.png'));
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 85,
              height: 80,
              margin: 6,
              backgroundColor: "#234896",
            }}
            onPress={()=>{
              setImage(require('../images/vs_blue.png'))
            }}
          ></TouchableOpacity>
        </View>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <TouchableOpacity
            style={{
              width: 326,
              height: 44,
              borderRadius: 10,
              backgroundColor: "rgba(25, 82, 226, 0.58)",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={()=>{navigation.navigate('FirstScreen',image)}}
          >
            <Text style={{ fontSize: 20, fontWeight: 700, color: "#F9F2F2" }}>
              Xong
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Screen2;
