import { Stack } from "expo-router";
import AuthScreen from "../components/common/auth-screen";

export default function AuthIndex() {
  console.log("AuthIndex rendered");
  
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <AuthScreen />
    </>
  );
}
