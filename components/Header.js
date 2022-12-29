import * as React from "react";
import { Appbar } from "react-native-paper/lib/typescript/components/Appbar/Appbar";

//Heading of Application

const MyHeader = () => {
  return (
    <Appbar.Header>
      <Appbar.Content title="Stopwatch" style={{ alignItems: "center" }} />
    </Appbar.Header>
  );
};
export default MyHeader;