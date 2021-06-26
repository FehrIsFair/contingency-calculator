import {
  Card,
  Typography,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";

const Estimate = () => {
  const [open, setOpen] = useState();
  const [rarity, setRarity] = useState();
  const [goldPrice, setGoldPrice] = useState(0);

  const handleClose = () => {
    setOpen(false);
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (event) => {
    setRarity(event.target.value);
  };

  useEffect(() => {
    const determineGoldPrice = () => {
      switch (rarity) {
        case "common":
          setGoldPrice(parseInt(Math.random() * (100 - 50) + 50));
          break;
        case "uncommon":
          setGoldPrice(parseInt(Math.random() * (500 - 101) + 101));
          break;
        case "rare":
          setGoldPrice(parseInt(Math.random() * (5000 - 501) + 501));
          break;
        case "very rare":
          setGoldPrice(parseInt(Math.random() * (50000 - 5001) + 5001));
          break;
        case "legendary":
          setGoldPrice(parseInt(Math.random() * (1000000 - 50000) + 50000));
          break;
        default:
          break;
      }
    };
    determineGoldPrice();
  }, [rarity]);

  return (
    <div id="estimate">
      <Typography variant="h4">Estimate</Typography>
      <Card id="contain">
        <div>
          <InputLabel id="rarity">Rarity</InputLabel>
          <Select
            labelId="rarity"
            id="rarity-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={rarity}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="common">Common</MenuItem>
            <MenuItem value="uncommon">Uncommon</MenuItem>
            <MenuItem value="rare">Rare</MenuItem>
            <MenuItem value="very rare">Very Rare</MenuItem>
            <MenuItem value="legendary">Legendary</MenuItem>
          </Select>
          <Typography>Price in Gold: {goldPrice.toLocaleString()} gp</Typography>
          <Typography>Today's Money: {formatter.format(goldPrice * 300)}</Typography>
          <Typography>Contingency Money: {formatter.format(goldPrice * 300 * 0.0618)}</Typography>
        </div>
      </Card>
    </div>
  );
};
export default Estimate;
