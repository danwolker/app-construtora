import styled, { css } from "styled-components/native";
import { TextInput, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { DefaultTheme } from "styled-components";

// Define o tipo correto para as propriedades do container
interface IContainerProps {
  hasError: boolean;
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled(View)`
  width: 85%;
  flex-direction: row;
  height: ${RFValue(50)}px;
  margin-bottom: ${RFValue(10)}px;
`;

export const IContainer = styled(View)<IContainerProps>`
  width: ${RFValue(55)}px;
  height: ${RFValue(50)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY5};
  margin-right: ${RFValue(3)}px;
  border-top-left-radius: ${RFValue(5)}px;
  border-bottom-left-radius: ${RFValue(5)}px;

  ${({ isFocused, isFilled }: IContainerProps) =>
    (isFocused || isFilled) &&
    css`
      border-bottom-width: ${RFValue(2)}px;
      border-bottom-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.BLUE1};
    `}

  ${({ hasError }: IContainerProps) =>
    hasError &&
    css`
      border-bottom-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.RED};
    `}
`;

export const InputText = styled(TextInput)<IContainerProps>`
  flex: 1;
  font-size: ${RFValue(12)}px;
  border-top-right-radius: ${RFValue(5)}px;
  border-bottom-right-radius: ${RFValue(5)}px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY4};
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONTS.POPPINSREGULAR};
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY5};
  padding: 0 ${RFValue(12)}px;

  ${({ isFocused, isFilled }: IContainerProps) =>
    (isFocused || isFilled) &&
    css`
      border-bottom-width: ${RFValue(2)}px;
      border-bottom-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.BLUE1};
    `}
`;
