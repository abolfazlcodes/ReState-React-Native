import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Text className="font-bold font-rubik my-10 text-3xl">
        Welcome to ReState
      </Text>
      <Link href={"/sign-in"} className="text-primary-300">
        Sign In
      </Link>
      <Link href={"/explore"}>Explore</Link>
      <Link href={"/profile"}>Profile</Link>
      <Link href={"/properties/1"}>Property</Link>
    </View>
  );
}
