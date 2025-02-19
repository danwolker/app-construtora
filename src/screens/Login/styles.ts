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
   
    margin-top: ${RFValue(-30)}px;
    background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.BACKGROUNDLIGHT};
    border-top-left-radius: ${RFValue(20)}px;
    border-top-right-radius: ${RFValue(20)}px;
    border-bottom-left-radius: ${RFValue(20)}px;
    border-bottom-right-radius: ${RFValue(20)}px;
    margin-bottom: ${RFValue(20)}px;

`;

export const ContentFooter = styled.View`
 
`;

export const Title = styled.Text`
   text-align: center;
    font-size: ${RFValue(28)}px;
    font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const Description = styled.Text`
    text-align: center;
    margin-top: ${RFValue(30)}px;
    font-size: ${RFValue(15)}px;
    color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.TEXT};
    font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONTS.POPPINSLIGHT};
`;
export const SubDescription = styled.Text`
    text-align: center;
    margin-bottom: ${RFValue(10)}px;
    font-size: ${RFValue(15)}px;
    color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.TEXT};
    font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONTS.POPPINSLIGHT};
`;

export const ViewButton = styled.View`
    margin-left: ${RFValue(40)}px;
    flex-direction: row;
`;