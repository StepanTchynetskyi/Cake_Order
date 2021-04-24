import React, { UseState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const ResultPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          textAlign: "left",
          marginTop: 15,
          marginLeft: 10,
          flexDirection: "row",

          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 40, color: "#BDBDBD", fontWeight: "700" }}>
          Your order
        </Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            width: "100%",
            alignItems: "center",
            marginTop: 15,
            marginLeft: 17,
          }}
        >
          <Image
            style={styles.smallImg}
            source={{
              uri:
                "https://i.pinimg.com/564x/43/42/44/434244e1c2e559580d6979d773d288cc.jpg",
            }}
          />
          <Text style={{ fontSize: 20, color: "#BDBDBD" }}>
            Vanilla Cupcake{" "}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            width: "100%",
            alignItems: "center",
            marginTop: 15,
            marginLeft: 17,
          }}
        >
          <Image
            style={styles.smallImg}
            source={{
              uri:
                "https://i.pinimg.com/564x/a0/e2/82/a0e282cdb549d928d5c51bae435ad1fd.jpg",
            }}
          />
          <Text style={{ fontSize: 20, color: "#BDBDBD" }}>Vanilla Base</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            width: "100%",
            alignItems: "center",
            marginTop: 15,
            marginLeft: 17,
          }}
        >
          <Image
            style={styles.smallImg}
            source={{
              uri:
                "https://i.pinimg.com/564x/8b/75/59/8b755920031191cb3d2715ae688f503c.jpg",
            }}
          />
          <Text style={{ fontSize: 20, color: "#BDBDBD" }}>Blueberry Jam</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            width: "100%",
            alignItems: "center",
            marginTop: 15,
            marginLeft: 17,
          }}
        >
          <Image
            style={styles.smallImg}
            source={{
              uri:
                "https://i.pinimg.com/564x/e0/2f/44/e02f44e2cb85f3f1dc8d64f74191f272.jpg",
            }}
          />
          <Text style={{ fontSize: 20, color: "#BDBDBD" }}>Chopped Nuts</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            width: "100%",
            alignItems: "center",
            marginTop: 15,
            marginLeft: 17,
          }}
        >
          <Image
            style={styles.smallImg}
            source={{
              uri:
                "https://i.pinimg.com/564x/26/74/78/26747859d57c08b6f5e216134d064fe2.jpg",
            }}
          />
          <Text style={{ fontSize: 20, color: "#BDBDBD" }}>Vanilla Cream</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            width: "100%",
            alignItems: "center",
            marginTop: 15,
            marginLeft: 17,
          }}
        >
          <Image
            style={styles.smallImg}
            source={{
              uri:
                "https://i.pinimg.com/564x/d8/c5/c1/d8c5c1c2384ca05f40be8b7f948131bb.jpg",
            }}
          />
          <Text style={{ fontSize: 20, color: "#BDBDBD" }}>Sprinkles</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 25,

          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 32,
            marginLeft: 17,

            color: "#BDBDBD",
            textDecorationLine: "underline",
          }}
        >
          Price: 5600
        </Text>
        <View
          style={[styles.circle, { marginLeft: 40, backgroundColor: "#000" }]}
        >
          <Text style={{ fontSize: 40, color: "#fff", marginBottom: 4 }}>
            -
          </Text>
        </View>
        <Text style={{ fontSize: 20, marginLeft: 20, color: "#BDBDBD" }}>
          1
        </Text>
        <View style={[styles.circle, { backgroundColor: "#000" }]}>
          <Text style={{ fontSize: 32, color: "#fff", marginBottom: 4 }}>
            +
          </Text>
        </View>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity
          style={styles.logbtn}
          onPress={() => navigation.navigate("Order")}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
  circle: {
    height: 40,
    width: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderColor: "#C5C4C4",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    textAlign: "center",
  },
  smallImg: {
    height: 55,
    width: 55,
    borderWidth: 1,
    borderRadius: 27.5,
    borderColor: "#000",
    marginRight: 20,
  },
  logbtn: {
    backgroundColor: "#000",
    width: 310,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    padding: 10,
  },
});

export default ResultPage;
