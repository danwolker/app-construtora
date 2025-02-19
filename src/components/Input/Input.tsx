import React, { useRef, useState, useEffect, forwardRef } from "react";
import { useField } from "@unform/core";
import { useTheme } from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { TextInputProps } from "react-native";
import { Container, InputWrapper, InputText, Label } from "./styles";

interface InputProps extends TextInputProps {
  name: string;
  iconName?: keyof typeof Ionicons.glyphMap;
  label: string;
}

const Input = forwardRef(({ name, iconName, label, ...rest }: InputProps, ref) => {
  const theme = useTheme();
  const inputRef = useRef<any>(null);
  const { registerField, fieldName, defaultValue = "", error } = useField(name);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
      setValue(_, value) {
        inputRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputRef.current.clear();
      },
    });
  }, [registerField, fieldName]);

  return (
    <Container>
      <Label>{label}</Label>
      <InputWrapper isFocused={isFocused} hasError={!!error}>
        {iconName && (
          <Ionicons
            name={iconName}
            size={20}
            color={isFocused ? theme.COLORS.BLUE1 : theme.COLORS.GRAY1}
          />
        )}
        <InputText
          ref={inputRef}
          defaultValue={defaultValue}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholderTextColor={theme.COLORS.GRAY1}
          {...rest}
        />
      </InputWrapper>
    </Container>
  );
});

export default Input;
