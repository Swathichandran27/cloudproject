import React, { useState } from 'react';
import { TextField, Button, Autocomplete, Box, Typography } from '@mui/material';

const FruitSurvey = () => {
  const [name, setName] = useState('');
  const [fruit, setFruit] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const fruitOptions = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 300, margin: 'auto', mt: 5 }}
    >
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        data-testid="name"
      />
      <Autocomplete
        options={fruitOptions}
        getOptionLabel={(option) => option}
        onChange={(event, value) => setFruit(value)}
        renderInput={(params) => <TextField {...params} label="Choose a fruit" data-testid="autocomplete" />}
      />
      <Button
        type="submit"
        variant="contained"
        data-testid="button"
      >
        Submit
      </Button>
      {submitted && (
        <Typography variant="h6" sx={{ mt: 3 }}>
          Hello, {name}! Your favorite fruit is {fruit}.
        </Typography>
      )}
    </Box>
  );
};

export default FruitSurvey;