"use client";

import { 
    Typography,
    Box,
    IconButton
} from "@mui/material";
import Image from "next/image";
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

import ConnectWallet from "../Button/ConnectWallet";
import Container from "./Container";

import Logo from "../../assets/img/white-logo.svg";

export default function Footer() {
    return (
        <Box 
            className="flex items-center" 
            sx={{ 
                paddingTop: "48px", 
                paddingBottom: "48px", 
                backgroundColor: "#697077" 
            }}
        >
            <Container>
                <Box>
                    <Image src={Logo} alt="Nero" />
                </Box>
                <Box 
                    className="flex" 
                    sx={{ 
                        my: { xs: "24px", md: "48px" } 
                    }}
                >
                    <Box sx={{ width: {
                        xs: "200px",
                        sm: "350px",
                        md: "600px",
                        lg: "750px",
                        xl: "850px"
                    } }}>
                        <Typography 
                            fontWeight={500} 
                            fontSize="16px" 
                            sx={{ color: "common.white" }}
                            mb="8px" 
                        >
                            Home
                        </Typography>
                        <ConnectWallet>
                            Connect Wallet
                        </ConnectWallet>
                    </Box>
                    <Box>
                        <Typography 
                            variant="h6" 
                            fontSize="18px" 
                            lineHeight="19.8px" 
                            fontWeight={700} 
                            sx={{ color: "common.white", mb: "20px" }}
                        >
                            Follow Us
                        </Typography>
                        <Box>
                            <IconButton size="small">
                                <YouTubeIcon sx={{ color: "common.white" }} />
                            </IconButton>
                            <IconButton size="small">
                                <TwitterIcon sx={{ color: "common.white" }} />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
                <Typography fontSize="14px" sx={{ color: "common.white" }}>
                    NAME @ {new Date().getFullYear()}. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
}
