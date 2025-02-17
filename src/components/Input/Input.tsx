import React, {
  forwardRef,
  useCallback,
  useState,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import { useField } from "@unform/core";
import { Ionicons } from "@expo/vector-icons";
import { TextInputProps } from "react-native";
import { Container, IContainer, InputText } from "./styles";

interface InputRef {
  focus(): void;
}

interface InputProps extends TextInputProps {
  name: string;
  value?: string;
  iconName?: React.ComponentProps<typeof Ionicons>["name"];
  containerStyle?: Record<string, string | number>;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { iconName,
    name,
    value = "",
    containerStyle,
    ...rest },
  ref
) => {
  if (!name) {
    console.error("O componente <Input> precisa de uma propriedade 'name'.");
    return null;
  }

  const inputElementRef = useRef<any>(null);

  // 🔹 Garantindo que useField não retorne null ou undefined
  let field;
  try {
    field = useField(name);
  } catch (err) {
    console.error(`Erro ao acessar useField('${name}'): `, err);
    return null;
  }

  if (!field) {
    console.error(`Erro: useField('${name}') retornou null ou undefined.`);
    return null;
  }

  const { fieldName, registerField, defaultValue = "", error } = field;
  const inputValueRef = useRef<{ value: string }>({ value: defaultValue });

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(!!defaultValue);

  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputValueRef.current.value);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current?.focus();
    },
  }));

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: "value",
      setValue(ref: any, value: string) {
        inputValueRef.current.value = value;
        inputElementRef.current?.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = "";
        inputElementRef.current?.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container style={containerStyle}>
      {iconName && <Ionicons name={iconName} size={20} color="#666360" />}
      <IContainer isFocused={isFocused} isFilled={isFilled} hasError={!!error}>
        <InputText
          ref={inputElementRef}
          keyboardAppearance="dark"
          defaultValue={defaultValue}
          onChangeText={(value: string) => (inputValueRef.current.value = value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          isFocused={isFocused}
          isFilled={isFilled}
          hasError={!!error}
          {...rest}
        />
      </IContainer>
    </Container>
  );
};

export default forwardRef(Input);
