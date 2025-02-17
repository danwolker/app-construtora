import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { DefaultTheme } from "styled-components";

export const Container = styled.View`
    padding: ${RFValue(5)}px;
`;

export const ContentHeader = styled.View`
    align-items: center;
    justify-content: center;
    padding: ${RFValue(50)}px;
    margin-top: ${RFValue(20)}px;
    background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.BACKGROUNDLIGHT};
`;

export const ContentBody = styled.View`

`;

export const ContentFooter = styled.View`
 
`;

export const Title = styled.Text`
   text-align: center;
    font-size: ${RFValue(25)}px;
    font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const Description = styled.Text`
    text-align: center;
    font-size: ${RFValue(15)}px;
    color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.TEXT};
    margin-top: ${RFValue(50)}px;
    font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONTS.POPPINSLIGHT};
`;

export const ViewButton = styled.View`
    flex-direction: row;
    margin-top: ${RFValue(10)}px;
`;