import React, { UseState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

const ChooseOne = ({ navigation }) => {
  const arrowBack = "<";
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity
        onPress={() => navigation.navigate("MainMenu")}
        style={{
          marginTop: 30,
          textAlign: "left",
          verticalAlign: "middle",
          width: "30%",
          justifyContent: "center",
          height: "3%",
        }}
      >
        <Text
          style={{
            fontSize: 22,
            paddingLeft: 20,
            fontWeight: "700",
            color: "#BDBDBD",
          }}
        >
          <Text
            style={{
              fontSize: 26,
              color: "#BDBDBD",
              paddingRight: 20,
              fontWeight: "700",
            }}
          >
            {arrowBack}
          </Text>
          <View style={{ width: "3%" }}>
            <Text> </Text>
          </View>
          Menu
        </Text>
      </TouchableOpacity> */}
      <View style={styles.mainContainer}>
        <Text style={styles.mainLabel}>Choose cupcake base</Text>
        <Image
          style={styles.mainImage}
          source={{
            uri:
              "https://i.pinimg.com/564x/ba/e1/00/bae100fd19d0f3b46bcf9b505384557f.jpg",
          }}
        />
        <Text style={{ color: "#BDBDBD", fontSize: 28, marginTop: 5 }}>
          Chocolate dough
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 8,
          }}
        >
          <Image
            style={[styles.smallImg, { marginRight: 5 }]}
            source={{
              uri:
                "https://i.pinimg.com/564x/a0/e2/82/a0e282cdb549d928d5c51bae435ad1fd.jpg",
            }}
          />
          <Image
            style={[styles.smallImg, { marginLeft: 5 }]}
            source={{
              uri:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7q0dm8AEL3FCjCiTSJ---A6qS4hElX9bBrg&usqp=CAU",
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 9,
          }}
        >
          <TouchableOpacity
            disabled={true}
            style={[
              styles.logbtn,
              { marginRight: 15, backgroundColor: "#dddddd" },
            ]}
          >
            <Text style={styles.textBtn}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.logbtn, { marginLeft: 15 }]}
            onPress={() => navigation.navigate("ResultPage")}
          >
            <Text style={styles.textBtn}>Next</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 23,
            justifyContent: "space-around",
            width: "80%",
          }}
        >
          <View style={[styles.circle, { backgroundColor: "#000" }]}>
            <Text style={{ color: "#fff", fontSize: 20 }}>1</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{ fontSize: 20 }}>2</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{ fontSize: 20 }}>3</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{ fontSize: 20 }}>4</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{ fontSize: 20 }}>5</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer: {
    alignItems: "center",

    height: "95%",
    width: "100%",
  },
  mainLabel: {
    marginTop: "7%",
    marginBottom: "3%",
    fontSize: 28,
    fontWeight: "700",
    color: "#E0E0E0",
  },
  mainImage: {
    height: "40%",
    width: "80%",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20,
  },
  smallImg: {
    height: 74,
    width: 74,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#000",
  },
  logbtn: {
    backgroundColor: "#000",
    width: 130,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 17,
    padding: 10,
  },
  textBtn: {
    color: "#fff",
    fontSize: 20,
  },
  circle: {
    height: 40,
    width: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderColor: "#000",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChooseOne;
