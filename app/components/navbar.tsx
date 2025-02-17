"use client";

import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button, Typography } from "@mui/material";

import logo from "../../public/garlick-logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function Navbar() {
  const router = useRouter();

  return (
    <>
      <Toolbar>
        <Box display={"flex"} gap={2} alignItems={"center"} marginBottom={5}>
          <Box
            onClick={() => router.push("/")}
            display={"flex"}
            alignItems={"center"}
            gap={2}
            style={{ cursor: "pointer" }}
          >
            <Image src={logo} alt="logo" style={{ width: 100, height: "auto" }} loading="lazy" />
            <Typography variant="h4" fontWeight={"bold"}>
              GARLICK
            </Typography>
          </Box>

          <Button onClick={() => router.push("/recipes")}>Recipes</Button>
          <Button onClick={() => router.push("/profile")}>Profile</Button>
        </Box>
      </Toolbar>
    </>
  );
}
