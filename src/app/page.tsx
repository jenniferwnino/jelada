import { List, ListItem, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Image
        src="/garlick-logo.png"
        alt="Garlick logo"
        width={180}
        height={0}
        style={{ height: "auto" }}
      />
      <Typography variant="h2">Welcome to Garlick!</Typography>
      <List style={{ fontSize: 20 }}>
        <ListItem>Caroline Kroll</ListItem>
        <ListItem>Catherine Lawrence</ListItem>
        <ListItem>Dayanita Kumar</ListItem>
        <ListItem>Jennifer Nino</ListItem>
        <ListItem>Lucinda Quintal 🌞</ListItem>
      </List>
    </div>
  );
}
