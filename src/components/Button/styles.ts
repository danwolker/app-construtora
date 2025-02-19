import styled from "styled-components";
import { Pressable } from "react-native";
import { Text as RNText } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { DefaultTheme } from 'styled-components';

export const title = styled(RNText)`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONTS.POPPINSMEDIUM};
    text-align: center;

`;  

export const Container = styled(Pressable)`
    margin-left: 40px;
    width: 80%;
    height: 50px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.PRIMARY};
    border-radius: ${RFValue(8)}px;
    margin-top: ${RFValue(10)}px;

`; 

