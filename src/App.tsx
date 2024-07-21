import { Box, Grid } from '@mui/material';

import Form from './components/form/Form';

function App() {

  return (
    <Grid container sx={{ height: '100vh' }}>
      <Box sx={{
        width: '100%',
        height: '100%',
        backgroundColor: 'lightblue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Form />
      </Box>
    </Grid>
  )
}

export default App
