"use client";

import { Box, BoxProps } from "@mui/material";

interface ContainerProps extends BoxProps {
  children?: React.ReactNode;
}


const Container: React.FC<ContainerProps> = ({ children, sx, ...props }) => {
    return (
        <Box
            className="custom-container"
            sx={{
                paddingRight: { xs: 2, sm: 0},
                paddingLeft: { xs: 2, sm: 0},
                width: '100%',
                maxWidth: { 
                    xs: 540,
                    sm: 576,
                    md: 768,
                    lg: 992,
                    xl: 1280
                },
                margin: 'auto',
                ...sx,
            }}
            {...props}
        >
            {children}
        </Box>
    );
};

export default Container;
