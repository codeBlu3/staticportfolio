import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import { Container, Typography, Button, AppBar, Toolbar, Link } from '@mui/material';

function App() {
return (
		      <Container>
		        <AppBar position="static">
		          <Toolbar>
		            {/* Link to the target section using the ID */}
		            <Link href="#targetSection" color="inherit" style={{ textDecoration: 'none' }}>
		              <Typography variant="h6">Go to Target Section</Typography>
		            </Link>
		          </Toolbar>
		        </AppBar>

		        {/* Content before the target section */}
		        <Typography variant="h2">Your Name</Typography>
		        <Typography variant="subtitle1">Web Developer</Typography>

		        {/* Include the TargetSection component */}
		        <TargetSection />

		        {/* Additional content after the target section */}
		        <Typography variant="h5">Projects</Typography>
		        {/* Add your projects here using Material-UI components */}
		        
		        <Button variant="contained" color="primary" mt={4}>
		          Contact Me
		        </Button>
		      </Container>
		    );

}


const TargetSection = () => (
	  <section id="targetSection">
	    <Typography variant="h2">Target Section</Typography>
	    <Typography>This is the section you want to link to.</Typography>
	  </section>
);


export default App;
