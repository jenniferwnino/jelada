"use client";
import { PageTitle } from "@/components/page-title";
import { getRecipeBySlug } from "@/testData";
import { Recipe } from "@/types";
import { Box, Button, Grid2, List, ListItem, Paper, Typography } from "@mui/material";
import { useParams, useRouter } from "next/navigation";

export default function RecipeInfoPage() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();

  const recipeData: Recipe | undefined = getRecipeBySlug(slug);

  if (!recipeData) {
    return <PageTitle title={`Recipe not found 🥺 🍽️`} />;
  }

  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => router.back()}
        sx={{ alignSelf: "flex-start" }}
      >
        Back
      </Button>

      <Typography variant="button" fontSize={20}>
        How to make
      </Typography>
      <PageTitle title={`${recipeData.title}`} />
      <Paper style={{ padding: 20, margin: 20, minWidth: 500 }}>
        <Grid2 container gap={2} direction={"column"}>
          <Grid2>
            <Typography variant="h4">Description</Typography>
            <Typography variant="body1">{recipeData.description}</Typography>
          </Grid2>
          <Grid2>
            <Typography variant="h4">Ingredients</Typography>
            <List>
              {recipeData.ingredients.map((ingredient, idx) => (
                <ListItem key={idx}>
                  {ingredient.quantity} {ingredient.ingredient}
                </ListItem>
              ))}
            </List>
          </Grid2>
          <Grid2>
            <Typography variant="h4">Instructions</Typography>
            <List>
              {recipeData.steps.map((step, idx) => (
                <ListItem key={idx}>
                  Step {idx + 1}: {step}
                </ListItem>
              ))}
            </List>
          </Grid2>
        </Grid2>
      </Paper>
    </Box>
  );
}
