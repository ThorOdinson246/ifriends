import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  Text,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import FeatherIcon from "react-native-vector-icons/Feather";
import { auth, db, firestore } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import LoginScreen from "./LoginScreen";
import { isLoggedIn, updateLoginStatus } from "../global";
import { useNavigation } from "@react-navigation/native";
import RoommateFinder from "./RoommateFinder";
import RoomFinder from "./RoomFinder";
// const places = [
//   {
//     id: 1,
//     img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
//     name: "Marbella, Spain",
//     dates: "Apr 23 - May 5",
//     price: 200,
//     rating: 4.45,
//     reviews: 124,
//   },
//   {
//     id: 2,
//     img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
//     name: "Baveno, Italy",
//     dates: "Apr 25 - May 5",
//     price: 320,
//     rating: 4.81,
//     reviews: 409,
//   },
//   {
//     id: 3,
//     img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
//     name: "Tucson, Arizona",
//     dates: "Apr 22 - May 4",
//     price: 695,
//     rating: 4.3,
//     reviews: 72,
//   },
// ];

export default function HomeScreen() {

  const navigator = useNavigation();
  
const onRoommateFinderPress = () => {
  navigator.navigate("Filters2");
}

const onRoomFinderPress = () => {
  navigator.navigate("RoomFinder");
}
  const [places, setPlaces] = React.useState([]);
  const [loading, setLoading] = React.useState(true);


  React.useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const placesCollection = await getDocs(collection(db, "places"));
        const placesData = placesCollection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPlaces(placesData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching places: ", error);
        setLoading(false);
      }
    };
    fetchPlaces();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }
  return (
  
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E0E2DB" }}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.headerAction} />
          <View style={styles.headerAction}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
            >
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.headerLogoContainer}>
        <Image
          style={styles.headerLogo}
          source={require("../assets/ifriends-logo.png")} // Correctly reference the image
        />
        <View style={styles.headerButtonsContainer}>
          <TouchableOpacity 
          onPress={() => {
            onRoommateFinderPress();
          }}
          style={styles.button}>
            <Image
              style={styles.homebuttonlogo}
              source={require("../assets/roommate.png")} // Correctly reference the image
            />
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => {
            onRoomFinderPress();
          }}
          style={styles.button}>
            <Image
              style={styles.homebuttonlogo}
              source={require("../assets/marketplace.png")} // Correctly reference the image
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.homebuttonlogo}
              source={require("../assets/share-ride.png")} // Correctly reference the image
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {places.map(({ id, img, name, dates, price, rating, reviews }) => (
          <TouchableOpacity
            key={id}
            onPress={() => {
              // handle onPress
            }}
          >
            <View style={styles.card}>
              <View style={styles.cardTop}>
                <Image
                  alt=""
                  resizeMode="cover"
                  style={styles.cardImg}
                  source={{ uri: img }}
                />
              </View>

              <View style={styles.cardBody}>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardTitle}>{name}</Text>

                  <FontAwesome
                    color="#ea266d"
                    name="star"
                    solid={true}
                    size={12}
                    style={{ marginBottom: 2 }}
                  />

                  <Text style={styles.cardStars}>{rating}</Text>

                  <Text style={{ color: "#595a63" }}>({reviews} reviews)</Text>
                </View>

                <Text style={styles.cardDates}>{dates}</Text>

                <Text style={styles.cardPrice}>
                  <Text style={{ fontWeight: "600" }}>${price} </Text>/ night
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity onPress={logOut} style={styles.footerButton}>
          <Text>'Log Out'</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const logOut = () => {
  auth.signOut();
  updateLoginStatus(false);
  console.log("Logged out");

  //   // Sign-out successful.
};



const styles = StyleSheet.create({
  content: {
    paddingTop: 0,
    paddingHorizontal: 16,
  },
  /** Header */
  header: {
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTop: {
    marginHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerAction: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1d1d1d",
    fontFamily: "Inter_400Regular",
  },
  headerLogoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 0,
  },
  headerButtonsContainer: {
    marginLeft: "auto",
    flexDirection: "row",
    alignItems: "right",
  },
  homebuttonlogo: {
    marginRight: 20,
    width: 35,
    height: 35,
    alignItems: "center",
  },

  /** Card */
  card: {
    position: "relative",
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 16,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0.5,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardTop: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardImg: {
    width: "100%",
    height: 160,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardBody: {
    padding: 12,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#232425",
    marginRight: "auto",
  },
  cardStars: {
    marginLeft: 2,
    marginRight: 4,
    fontSize: 15,
    fontWeight: "500",
    color: "#232425",
  },
  cardDates: {
    marginTop: 4,
    fontSize: 16,
    color: "#595a63",
  },
  cardPrice: {
    marginTop: 6,
    fontSize: 16,
    color: "#232425",
  },
  headerLogo: {
    width: 150, // Adjust width as needed
    height: 70,
    // Ensure the image scales properly
  },
});
