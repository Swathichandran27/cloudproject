import React from 'react';
import { List, ListItem, ListItemText, Divider, Typography, Box } from '@mui/material';

const MostInfluentialBooks = () => {
  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', marginTop: 5 }}>
      <Typography variant="h5" gutterBottom>
        Most Influential Books of All Time
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="The Holy Bible"
            secondary="Religious text of Christianity, considered sacred and canonical."
          />
        </ListItem>
        <Divider />

        <ListItem>
          <ListItemText
            primary="Quotations from Chairman Mao"
            secondary="Collection of statements from speeches and writings by Mao Zedong."
          />
        </ListItem>
        <Divider />

        <ListItem>
          <ListItemText
            primary="Harry Potter series"
            secondary="Fantasy novels by J.K. Rowling, following the life of a young wizard."
          />
        </ListItem>
        <Divider />

        <ListItem>
          <ListItemText
            primary="The Lord of Rings"
            secondary="High-fantasy novel written by J.R.R.Tolkien,set in Middle-earth."
          />
        </ListItem>
        <Divider />

        <ListItem>
          <ListItemText
            primary="To Kill a Mockingbird"
            secondary="Novel by Haper Lee,dealing with facial injustice and mcral growth."
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default MostInfluentialBooks;