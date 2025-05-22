import {
  View,
  Text,
  Dimensions,
  FlatList,
  StyleSheet,
  StatusBar,
} from "react-native";
import React from "react";
import BannerAds from "@/admobs/BannerAds";
import { useAds } from "@/admobs/ads";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/store/userSlice";
import Header from "@/components/Header";
import BannerCarousel from "@/components/BannerCarousel";
import Schemes from "@/components/Schemes";
import MarketPrices from "@/components/MarketPrices";
import { useRouter } from "expo-router";
import AgriculturalServicesGrid from "@/components/AgriculturalServicesGrid ";
 

const { width, height } = Dimensions.get("window");

const Home = () => {
  const { showAd } = useAds();
  const { user } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const sections = [
     { key: "carousel", render: () => <BannerCarousel /> }, // Optional
    { key: "agriculture", render: () => <AgriculturalServicesGrid /> },
    { key: "schemes", render: () => <Schemes /> },
    { key: "market", render: () => <MarketPrices /> },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
      <Header />
      <BannerAds />
      <FlatList
        data={sections}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <View>{item.render()}</View>}
        showsVerticalScrollIndicator={false}
        // ListHeaderComponent={<BannerAds />}
        
        contentContainerStyle={styles.scrollContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingBottom: 20,
  },
});

export default Home;
