import React from "react";
import { Box, List, ListItem, ListItemText } from "@mui/material";

const MillerColumns = ({ columns, onItemSelected }) => {
  // Ensure there are always 6 columns, filled with content or empty
  const fullColumns = [...columns];
  while (fullColumns.length < 6) {
    fullColumns.push([]); // Add empty arrays for missing columns
  }

  return (
    <Box display="flex" height="50vh" overflow="hidden" bgcolor="#f7f7f7">
      {fullColumns.map((column, columnIndex) => (
        <List
          key={columnIndex}
          style={{
            minWidth: "16.666%",
            maxWidth: "16.666%",
            overflowY: "auto",
            borderRadius: "8px",
            backgroundColor: "#ffffff",
            margin: "10px 5px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          {column.items ? (
            column.items.map((item, itemIndex) => (
              <ListItem
                button
                key={`${item.name}-${itemIndex}`}
                onClick={() => onItemSelected(item.name, columnIndex)}
                selected={item.isSelected}
                style={{
                  backgroundColor: item.isSelected ? "#FFBC0A" : "transparent",
                  padding: "0px 16px",
                }}
              >
                <ListItemText primary={item.name} />
              </ListItem>
            ))
          ) : (
            <ListItem
              key={`placeholder-${columnIndex}`}
              style={{ padding: "0px 16px" }}
            >
              <ListItemText primary="" />
            </ListItem>
          )}
        </List>
      ))}
    </Box>
  );
};

export default MillerColumns;
