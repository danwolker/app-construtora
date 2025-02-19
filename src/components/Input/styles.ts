import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { DefaultTheme } from 'styled-components/native';

interface InputContainerProps {
  isFocused: boolean;
  hasError: boolean;
}

export const Container = styled.View`
  margin-left: ${RFValue(35)}px;
  width: 80%;
  margin-bottom: ${RFValue(10)}px;
`;

export const Label = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family:${({ theme }: DefaultTheme) => theme.FONTS.POPPINSMEDIUM};
  color: ${({ theme }: DefaultTheme) => theme.COLORS.BLACK};
  margin-bottom: ${RFValue(5)}px;
`;
export const InputWrapper = styled.View<InputContainerProps>`
  flex-direction: row;
  align-items: center;
  border-radius: ${RFValue(5)}px;
  background-color: ${({ theme }: DefaultTheme) => theme.COLORS.GRAY5};
  padding: 0 ${RFValue(10)}px;

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-bottom-width: ${RFValue(2)}px;
      border-bottom-color: ${theme.COLORS.BLUE1};
    `};

  ${({ hasError, theme }) =>
    hasError &&
    css`
      border-bottom-color: ${theme.COLORS.RED};
    `};
`;

export const InputText = styled(TextInput)`
  flex: 1;
  font-size: ${RFValue(14)}px;
  color: ${({ theme }: DefaultTheme) => theme.COLORS.GRAY1};
  font-family: ${({ theme }: DefaultTheme) => theme.FONTS.POPPINSLIGHT};
  padding: ${RFValue(8)}px;
`;
