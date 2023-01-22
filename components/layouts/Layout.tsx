import React, { FC, ReactNode } from "react";
import Head from 'next/head'
import { Box } from '@mui/material'
import { Navbar } from "../ui";

interface IProps {
    title?: string;
    children: ReactNode;
}

const Layout: FC<IProps> = ({ title = "OpenJira", children }) => {
    return (
        <Box sx={{ flexFlow: 1 }}>

            <Head>
                <title>{title}</title>
            </Head>

            <Navbar />

            <Box sx={{ padding: "10px 20px" }}>
                {children}
            </Box>

        </Box>
    )
}

export default Layout