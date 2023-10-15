import {
  View,
  Image,
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { Component, useState,useEffect } from "react";

function FirstScreen( {route,navigation} ) {
  const [image,setImage] = useState();
  useEffect(()=>{
    setImage(route.params);
  },[route.params])

  return (
    <View >
      <View style={{width:"100%",alignItems: "center", justifyContent: "center" }}>
      <Image
        source={route.params || require("../images/vs_blue.png")}
        style={{ width: 301, height: 361 }}
      />
      </View>
      <Text style={{ fontSize: 15, fontWeight: 500 , marginLeft: 40}}>
        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <View style={styles.row}>
          <Image
            source={require("../images/star.png")}
            style={{ width: 23, height: 25 }}
          />
          <Image
            source={require("../images/star.png")}
            style={{ width: 23, height: 25 }}
          />
          <Image
            source={require("../images/star.png")}
            style={{ width: 23, height: 25 }}
          />
          <Image
            source={require("../images/star.png")}
            style={{ width: 23, height: 25 }}
          />
          <Image
            source={require("../images/star.png")}
            style={{ width: 23, height: 25 }}
          />
        </View>
        <Text style={{ marginLeft: 30, fontWeight: 500 }}>
          (Xem 828 đánh giá)
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={{ fontSize: 18, fontWeight: 700 }}>1.790.000 đ</Text>
        <Text
          style={{
            textDecorationLine: "line-through",
            fontSize: 15,
            fontWeight: 700,
            color: "rgba(0, 0, 0, 0.58)",
            marginLeft: 20,
          }}
        >
          1.790.000 đ
        </Text>
      </View>
      <View style={styles.row}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: "#FA0000",
            marginVertical: 10,
          }}
        >
          Ở ĐÂU RẺ HƠN HOÀN TIỀN
        </Text>
        <Image
          source={require("../images/Group 1.png")}
          style={{ width: 20, height: 20, marginLeft: 10 }}
        />
      </View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: 332,
          height: 34,
          borderRadius: 10,
          borderWidth: 1,
          marginLeft: 30
        }}
        onPress={() => {navigation.navigate('Screen2')}}
      >
        <Text style={{ marginLeft: 100 }}>4 MÀU-CHỌN MÀU</Text>
        <Image
          source={require("../images/Vector.png")}
          style={{ width: 12, height: 14, marginLeft: 80 }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 40
  },
  button: {
    width: 322,
    height: 44,
    backgroundColor: "#EE0A0A",
    borderRadius: 10,
    fontSize: 20,
    fontWeight: 700,
    color: "#F9F2F2",
    marginTop: 50,
    alignContent: "center",
    marginLeft: 30
  },
  text: {
    fontSize: 20,
    fontWeight: 700,
    color: "#F9F2F2",
    textAlign: "center",
    height: "100%",
  },
});
export default FirstScreen;
