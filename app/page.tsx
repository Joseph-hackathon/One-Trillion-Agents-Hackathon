"use client";

import { 
    Box,
    BoxProps
} from "@mui/material";
import Image from "next/image";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Container from "./components/Layout/Container";
import ConnectWallet from "./components/Button/ConnectWallet";
import { Title, SubTitle, ItemTitle, ItemText } from "./components/Panel/Text";

import MacImage from "./assets/img/mac.svg";
import Mac2Image from "./assets/img/mac2.svg";
import Mac3Image from "./assets/img/mac3.svg";
import Mac4Image from "./assets/img/mac4.svg";
import MobileImage from "./assets/img/mobile.svg";

interface ItemContentProps extends BoxProps {
    children?: React.ReactNode;
  }

const ItemContent = ({ children, sx, ...props } : ItemContentProps) => (
    <Box sx={{ 
        width: {
            xs: "100%",
            md: "350px",
            lg: "450px",
            xl: "600px",
        },
        ...sx
    }} {...props}>
        {children}
    </Box>
)

export default function Dashboard() {
    return (
        <div>
            <Header />
            <Box 
                sx={{ 
                    py: { xs: "40px", md: "80px" }, 
                    backgroundColor: "#F2F4F8" 
                }}
            >
                <Container 
                    className="flex justify-between items-center" 
                    sx={{ flexDirection: {
                        xs: "column",
                        md: "row"
                    }}}
                >
                    <ItemContent sx={{ mb: {xs: "24px", md: 0} }}>
                        <SubTitle sx={{ mb: {xs: "16px", lg: "32px", xl:"48px"} }}>
                            NAME, Your AI-Powered DeFi Companion
                        </SubTitle>
                        <ItemText sx={{ mb: {xs: "16px", lg: "32px", xl:"64px"} }}>
                            Manage your Near Protocol assets, optimize your portfolio, and grow your AI character, all in one place
                        </ItemText>
                        <ConnectWallet endIcon={<ArrowForwardIcon />}>
                            Connect Wallet
                        </ConnectWallet>
                    </ItemContent>
                    <ItemContent>
                        <Image className="w-full" src={MacImage} alt="" />
                    </ItemContent>
                </Container>
            </Box>
            <Box sx={{ pt: { xs: "36px", md: "64px" } }}>
                <Container>
                    <Title align="center">
                        KEY FEATURES
                    </Title>
                    {/* AI Portfolio Manager Part */}
                    <Box 
                        className="flex justify-between items-center" 
                        sx={{ 
                            py: { xs: "40px", md: "80px" }, 
                            flexDirection: {
                                xs: "column",
                                md: "row"
                            }
                        }}
                    >
                        <ItemContent sx={{ mb: {xs: "24px", md: 0} }}>
                            <ItemTitle sx={{ mb: {xs: "16px", lg: "32px", xl:"48px"} }}>
                                AI Portfolio Manager
                            </ItemTitle>
                            <ItemText>
                                Automatically optimize your assets for the best yields. 
                            </ItemText>
                        </ItemContent>
                        <ItemContent>
                            <Image className="w-full" src={Mac2Image} alt="" />
                        </ItemContent>
                    </Box>
                    {/* Evolving Chatbot Part */}
                    <Box 
                        className="flex justify-between items-center" 
                        sx={{ 
                            py: { xs: "40px", md: "80px" }, 
                            flexDirection: {
                                xs: "column",
                                md: "row"
                            }
                        }}
                    >
                        <ItemContent sx={{ mb: { xs: "24px", md: 0 } }}>
                            <Image className="w-full" src={Mac3Image} alt="" />
                        </ItemContent>
                        <ItemContent>
                            <ItemTitle sx={{ mb: { xs: "16px", lg: "32px", xl:"48px" } }}>
                                Evolving Chatbot
                            </ItemTitle>
                            <ItemText>
                                Interact with your AI companion and watch it grow.  
                            </ItemText>
                        </ItemContent>
                    </Box>
                    {/* Gamified Quests Part */}
                    <Box 
                        className="flex justify-between items-center" 
                        sx={{ 
                            py: { xs: "40px", md: "80px" }, 
                                flexDirection: {
                                xs: "column",
                                md: "row"
                            }
                        }}
                    >
                        <ItemContent sx={{ mb: {xs: "24px", md: 0} }}>
                            <ItemTitle sx={{ mb: {xs: "16px", lg: "32px", xl:"48px"} }}>
                                Gamified Quests
                            </ItemTitle>
                            <ItemText>
                                Earn XP, level up, and unlock rewards.  
                            </ItemText>
                        </ItemContent>
                        <ItemContent>
                            <Image className="w-full" src={Mac4Image} alt="" />
                        </ItemContent>
                    </Box>
                </Container>
            </Box>
            <Box sx={{ pt: { xs: "40px", md: "80px" }, backgroundColor: "#F2F4F8" }}>
                <Container 
                    className="flex justify-between items-center" 
                    sx={{
                        flexDirection: {
                            xs: "column",
                            md: "row"
                        }
                    }}
                >
                    <Box 
                        sx={{ width: {
                            xs: "100%",
                            md: "350px",
                            lg: "450px",
                            xl: "674px"
                        },
                        mb: { xs: "24px", md: 0 }
                    }}
                    >
                        <SubTitle sx={{ mb: { xs: "16px", lg: "32px", xl:"48px" } }}>
                            The All-In-One App Builder
                        </SubTitle>
                        <ItemText sx={{ mb: { xs: "16px", lg: "32px", xl:"64px" } }}>
                            Manage your Near Protocol assets, optimize your portfolio, and grow your AI character, all in one place
                        </ItemText>
                        <ConnectWallet endIcon={<ArrowForwardIcon />}>
                            Connect Wallet
                        </ConnectWallet>
                    </Box>
                    <Box 
                        className="flex justify-center" 
                        maxWidth="100%" 
                        sx={{ 
                            width: {
                                xs: "350px",
                                lg: "450px",
                                xl: "526px"
                            }, 
                            height: {
                                xs: "350px",
                                lg: "450px",
                                xl: "566px"
                            }
                        }}
                    >
                        <Image className="w-full" src={MobileImage} alt="" />
                    </Box>
                </Container>
            </Box>
            <Footer />
        </div>
    );
}
