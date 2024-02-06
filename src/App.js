import logo from "./logo.svg";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import React from "react";
import {
  Container,
  Typography,
  Button,
  AppBar,
  Toolbar,
  Link,
  CssBaseline,
  GlobalStyles,
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <GlobalStyles
          styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
        />
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          <Toolbar sx={{ flexWrap: "wrap" }}>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              CodeBlu3
            </Typography>
            {/* Link to the target section using the ID */}
            <nav>
              <Link href="#targetSection" color="text.primary">
                Section
              </Link>

              <Link
                variant="button"
                color="text.primary"
                href="#about"
                sx={{ my: 1, mx: 1.5 }}
              >
                About
              </Link>
              <Link
                variant="button"
                color="text.primary"
                href="#projects"
                sx={{ my: 1, mx: 1.5 }}
              >
               Projects 
              </Link>
              <Link
                variant="button"
                color="text.primary"
                href="#"
                sx={{ my: 1, mx: 1.5 }}
              >
                Support
              </Link>
            </nav>
          </Toolbar>
        </AppBar>

        {/* Content before the target section */}

        {/* Include the TargetSection component */}
        <AboutSection />
        <ProjectsSection />


      </ThemeProvider>
    </>
  );
}

const AboutSection = () => (
  <section id="about">
    <Typography variant="h2">About </Typography>
    <Typography>Hi Im Eph. </Typography>
    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Massa tincidunt nunc pulvinar sapien et ligula. Mauris cursus mattis molestie a iaculis. Nunc vel risus commodo viverra maecenas accumsan lacus. Elementum nibh tellus molestie nunc non blandit massa enim. Dignissim sodales ut eu sem. Urna condimentum mattis pellentesque id nibh tortor id. Eget sit amet tellus cras adipiscing enim. Dui ut ornare lectus sit. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa.
	Sit amet consectetur adipiscing elit pellentesque habitant. Purus ut faucibus pulvinar elementum integer. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Turpis tincidunt id aliquet risus feugiat. Et netus et malesuada fames. Fusce ut placerat orci nulla pellentesque dignissim enim sit. Lectus urna duis convallis convallis tellus id interdum velit. Dui ut ornare lectus sit. Adipiscing elit ut aliquam purus sit. Ipsum consequat nisl vel pretium lectus quam id leo in. Ac tortor dignissim convallis aenean. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Duis tristique sollicitudin nibh sit. Tellus orci ac auctor augue mauris augue neque. Vitae suscipit tellus mauris a diam maecenas. In eu mi bibendum neque egestas congue. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Blandit massa enim nec dui. Amet risus nullam eget felis eget.

	Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Cursus sit amet dictum sit amet justo donec. Risus viverra adipiscing at in tellus. Enim nulla aliquet porttitor lacus luctus accumsan. Ac tortor vitae purus faucibus. Dictum varius duis at consectetur lorem donec. Diam volutpat commodo sed egestas. Feugiat vivamus at augue eget arcu dictum varius duis. Enim tortor at auctor urna nunc. Nullam non nisi est sit amet. Sed elementum tempus egestas sed. Eget duis at tellus at urna condimentum mattis pellentesque. Cras adipiscing enim eu turpis egestas pretium aenean pharetra magna.

	Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Feugiat nisl pretium fusce id velit ut tortor. Ac tortor dignissim convallis aenean et tortor at. Pellentesque nec nam aliquam sem et tortor consequat id. Pretium quam vulputate dignissim suspendisse. Proin libero nunc consequat interdum varius sit amet mattis vulputate. Fames ac turpis egestas integer eget aliquet. Amet massa vitae tortor condimentum lacinia quis vel eros. Amet nisl purus in mollis nunc sed. Tincidunt tortor aliquam nulla facilisi. Felis bibendum ut tristique et egestas. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Nec sagittis aliquam malesuada bibendum arcu. Pellentesque sit amet porttitor eget.
	</Typography>
  </section>
);


const ProjectsSection = () => (

  <section id="projects">

    <Typography variant="h2">Projects</Typography>
    <Typography>Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Placerat vestibulum lectus mauris ultrices eros in cursus. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Enim nulla aliquet porttitor lacus luctus. Dui faucibus in ornare quam viverra orci sagittis. Egestas sed sed risus pretium quam. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Euismod in pellentesque massa placerat duis ultricies lacus sed. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Laoreet suspendisse interdum consectetur libero id faucibus nisl. In cursus turpis massa tincidunt dui ut. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Massa vitae tortor condimentum lacinia quis vel eros donec. Nibh nisl condimentum id venenatis a condimentum. Praesent tristique magna sit amet. Rhoncus aenean vel elit scelerisque. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et.</Typography>
  </section>

)



export default App;
