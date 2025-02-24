"use client";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useDisconnect } from "wagmi";
import { Button, ButtonProps } from "@mui/material";

interface HeaderProps extends ButtonProps {
    children: string;
}

export default function ConnectWallet({ children, sx, ...props }: HeaderProps) {
    const { open } = useWeb3Modal();
    const { isConnected } = useAccount();
    return (
        <>
            {isConnected ? <></> : (
                <Button 
                    onClick={() => open()} 
                    variant="contained" 
                    color="primary" 
                    sx={{
                        height: "48px",
                        textTransform: "capitalize",
                        ...sx
                    }} 
                    {...props}
                >
                    {children}
                </Button>
            )}
        </>
    );
}
