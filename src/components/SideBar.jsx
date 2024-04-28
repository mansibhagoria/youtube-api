import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

// note : we get category-btn from index.css

// const SelectedCategory = "New"; // this is default selected
// now we dont need this
// when it gets replaced by other value its applied to other

const SideBar = ({ SelectedCategory, setSelectedCategory }) => {
  return (
    // md means more than 900 px width then these properties are applied
    <Stack
      direction="row" // default is row
      //   if its row only then it can be changed to column
      sx={{
        overflowY: "auto",
        height: { sm: "auto", md: "95%" },
        flexDirection: { md: "column" }, // more than md this changes to column
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background: category.name === SelectedCategory && "#fc1503",

            // conditional rendering in react

            // default is white and if another tag is selected

            // that specific button changes to red

            color: "white",
          }}
          key={category.name}
        >
          {/* span 1 -> icon
                span 2 -> name */}
          <span
            style={{
              color: category.name === SelectedCategory ? "white" : "red",
              //   terenary operator
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === SelectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
