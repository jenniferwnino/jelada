import { PageTitle } from "@/components/page-title";
import { RecipeCard } from "@/components/recipe-card";
import { Box, Grid2 } from "@mui/material";
import { testRecipeData } from "@/testData";

export default function BrowseRecipesPage() {
  return (
    <>
      <PageTitle
        title="Explore Recipes"
        subtitle="Discovery recipes and save them to your personal cookbook"
      />
      <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
        <Grid2 container gap={2} direction={"column"}>
          {testRecipeData.map((recipe, idx) => (
            <Grid2 key={idx}>
              <RecipeCard recipe={recipe} />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </>
  );
}
