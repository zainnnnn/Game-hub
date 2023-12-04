import { HStack, Switch } from "@chakra-ui/react";
import React from "react";

export function ColorModeSwitch() {
  return (
    <HStack>
      <Switch></Switch>
      <Text>Dark Mode</Text>
    </HStack>
  );
}
