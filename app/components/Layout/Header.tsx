"use client";

import { 
    Box,
    Link,
    Avatar
} from "@mui/material";
import Image from "next/image";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useDisconnect } from "wagmi";
import ConnectWallet from "../Button/ConnectWallet";
import Container from "./Container";

import Logo from "../../assets/img/logo.svg";

export default function Header() {
    const { open } = useWeb3Modal();
    const { address, isConnected } = useAccount();
    const { disconnect } = useDisconnect();
    return (
        <Box className="flex items-center" sx={{ height: "80px", borderBottom: "1px solid #DDE1E6" }}>
            <Container className="flex items-center">
                <Link href="/" sx={{flexGrow: 1 }}>
                    <Image src={Logo} alt="Nero" />
                </Link>
                {isConnected ? (
                    <Box className="flex items-center">
                        <Box 
                            className="flex justify-center items-center" 
                            sx={{ border: "1px solid #000000", width: "182px", height: "48px", color: "#697077", borderRadius: "24px" }}
                            mr="12px"
                        >
                            {address?.slice(0, 6)}...{address?.slice(-4)}
                        </Box>
                        <Avatar onClick={() => disconnect()} />
                    </Box>
                ) : (
                    <ConnectWallet onClick={() => open()} >Get started</ConnectWallet>
                )}
            </Container>
        </Box>
    );
}
