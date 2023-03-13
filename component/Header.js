import { View, Text } from "react-native";
import React from "react";

const Header = (props) => {
  return (
    <center>
    <View style={{ marginLeft: 15,flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontWeight: "bold", fontSize: 28, textAlign: "center", color: "aliceblue"  }}>{props.name}</Text>
    </View>
    </center>
  );
};

export default Header;

