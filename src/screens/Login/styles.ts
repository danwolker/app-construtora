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
    border-radius: ${RFValue(20)}px;
    margin-bottom: ${RFValue(20)}px;
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
    margin-top: ${RFValue(50)}px;
    font-size: ${RFValue(15)}px;
    color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.TEXT};
    font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONTS.POPPINSLIGHT};
`;

export const ViewButton = styled.View`
    margin-left: ${RFValue(40)}px;
    flex-direction: row;
`;

export const ContentFooter = styled.View``;

/* 📌 Estilização dos Hyperlinks */
export const ViewLinkContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${RFValue(5)}px;
    padding: 0 ${RFValue(35)}px;
`;

export const LinkText = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.BLUE1};
    font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONTS.POPPINSMEDIUM};
    text-decoration: underline;
`;
