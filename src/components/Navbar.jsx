import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

// sx - special stylings

const Navbar = () => (
  <Stack
    // all these are the props of stack they can be configured by checking stack api
    direction="row"
    alignItems={"center"}
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    {/* link directs to home that is where we started ⭐ */}
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>

    <SearchBar />
    {/* logo and stack are inside of stack which is flex */}
  </Stack>
);

export default Navbar;
