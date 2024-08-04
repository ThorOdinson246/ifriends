import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { db } from "../firebase";
import { collection, getDocs } from "@firebase/firestore";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";

const RoomFinder = () => {
  const [rooms, setRooms] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchRooms = async () => {
      try {
        const roomsCollection = await getDocs(collection(db, "roommate"));
        const roomsData = roomsCollection.docs.map((doc) => ({
          id: doc.name,
          ...doc.data(),
        }));
        setRooms(roomsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching rooms: ", error);
        setLoading(false);
      }
    };
    fetchRooms();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

 showOnlyHindu = () => {
    const hinduRooms = rooms.filter((room) => room.sex === "Male");
    // console.log(hinduRooms);
 }

  return (
    <ScrollView style={styles.container}>
      {rooms.map(({ name, enrollment, religion, sex }) => (
        <Text>
          {name} is an {enrollment} student of {religion} religion. He is {sex}
        </Text>
      ))}

      <Text>'............'</Text>
      <Text>'............'</Text>

      <TouchableOpacity 
      onPress={ showOnlyHindu()}
        >
        <Text>Show Only Hindu</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default RoomFinder;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: "#f4f4f6",
  },
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
