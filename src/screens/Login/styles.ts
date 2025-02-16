import styled from "styled-components/native";
import { DefaultTheme } from "styled-components";

export const Container = styled.View<{ theme: DefaultTheme }>`
    flex: 1;
    background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.BACKGROUND};
    align-items: center;
    justify-content: center;
`;

export const ContentHeader = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const ContentBody = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const ContentFooter = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text<{ theme: DefaultTheme }>`
    font-size: 24px;
    color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.TEXT};
    font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONTS.POPPINSBOLD};
`;

export const Description = styled.Text<{ theme: DefaultTheme }>`
font-size: 16px;
color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.TEXT};
font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONTS.POPPINSREGULAR};
`;

export const ViewButton = styled.View<{ theme: DefaultTheme }>`
width: 100%;
height: 50px;
background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.PRIMARY};
align-items: center;
justify-content: center;
`;