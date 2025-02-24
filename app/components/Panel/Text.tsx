"use client";

import { 
    Typography,
    TypographyProps
} from "@mui/material";

interface TitleProps extends TypographyProps {
    children?: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ children, sx, ...props }) => {
    return (
        <Typography 
            variant="h1" 
            color="text.primary" 
            fontWeight={700}
            sx={{ 
                fontSize: {
                    xs: 40,
                    lg: 52,
                    xl: 64
                },
                lineHeight: {
                    xs: "46px",
                    lg: "58px",
                    xl: "70.4px"
                },
                ...sx
            }}
            {...props}
        >
            {children}
        </Typography>
    )
}
  
export const SubTitle: React.FC<TitleProps> = ({ children, sx, ...props }) => {
    return (
        <Typography 
            variant="h1" 
            color="text.primary" 
            fontWeight={700}
            sx={{ 
                fontSize: {
                    xs: 32,
                    lg: 42,
                    xl: 54
                },
                lineHeight: {
                    xs: "38px",
                    lg: "48px",
                    xl: "59.4px"
                },
                ...sx
            }}
            {...props}
        >
            {children}
        </Typography>
    )
}

export const ItemTitle: React.FC<TitleProps> = ({ children, sx, ...props }) => {
    return (
        <Typography 
            variant="h1" 
            color="text.primary" 
            fontWeight={700}
            sx={{ 
                fontSize: {
                    xs: 24,
                    lg: 32,
                    xl: 42
                },
                lineHeight: {
                    xs: "29px",
                    lg: "37px",
                    xl: "46.2px"
                },
                ...sx
            }}
            {...props}
        >
            {children}
        </Typography>
    )
}

export const ItemText: React.FC<TitleProps> = ({ children, sx, ...props }) => {
    return (
        <Typography 
            color="text.primary" 
            fontWeight={400}
            sx={{ 
                fontSize: {
                    xs: 14,
                    md: 18
                },
                lineHeight: {
                    xs: "22px",
                    md: "25.2px",
                },
                ...sx
            }}
            {...props}
        >
            {children}
        </Typography>
    )
}
