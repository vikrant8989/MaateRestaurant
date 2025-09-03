import { Stack, useLocalSearchParams } from "expo-router";
import OtpScreen from "../components/common/otp-screen";

const OTP = () => {
  const { mobile,sessionId } = useLocalSearchParams();
  console.log(mobile, "mobileno");
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <OtpScreen mobile={mobile as string} sessionId = {sessionId as string} />
    </>
  );
};

export default OTP;
