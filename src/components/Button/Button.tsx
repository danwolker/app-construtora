import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Container } from "./styles";

interface IButtonProps {
  title: string;
  onPress: () => void;
}

const Button: React.FC<IButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container onPress={onPress}>
        <Text>{title}</Text>
      </Container>
    </TouchableOpacity>
  );
};

export default Button;