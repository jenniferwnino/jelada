"use client";
import { Recipe } from "@/types";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Card, CardActionArea, IconButton, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function RecipeCard(props: { recipe: Recipe }) {
  const [liked, setLiked] = useState(false);
  const router = useRouter();

  return (
    <Card>
      <CardActionArea
        style={{ padding: 15 }}
        onClick={() => router.push(`/recipes/${props.recipe.slug}`)}
      >
        <Typography variant="h4">{props.recipe.title}</Typography>
        <Typography variant="body1">{props.recipe.description}</Typography>
      </CardActionArea>
      <IconButton onClick={() => setLiked(!liked)} style={{ float: "right" }}>
        {liked ? <Favorite color="error" /> : <FavoriteBorder />}
      </IconButton>
    </Card>
  );
}
