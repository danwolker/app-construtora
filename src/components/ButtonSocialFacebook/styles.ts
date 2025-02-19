import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { DefaultTheme } from 'styled-components/native';

export const Button = styled(RectButton)<{ theme: DefaultTheme }>`
  align-items: center;
  flex-direction: row;
  margin-bottom: 16px;
  justify-content: center;
  width: ${RFValue(130)}px;
  height: ${RFValue(60)}px;
  margin-left: ${RFValue(10)}px;
  border-radius: ${RFValue(10)}px;
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.BLUE};
`;

export const IconFacebook = styled.Image`
 font-size: ${RFValue(20)}px;
 color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text`
font-size: ${RFValue(14)}px;
margin-left: ${RFValue(10)}px;
color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.WHITE};
font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONTS.POPPINSLIGHT};

`;
