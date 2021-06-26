import {
  Card,
  Typography,
  Input
} from "@material-ui/core"
import React, { useState, useEffect } from "react"

const ManualEstimate = () => {
  const [usdCopper, setUsdCopper] = useState()
  const [gold, setGold] = useState(0)

  const handleGold = (event) => {
    setGold(parseInt(event.target.value));
  }


  return (
    <div id="manual">
      <Typography variant="h4">Manual Estimate</Typography>
      <Card className="contain">
        <div id="type">
          <Typography variant="h6">Coin Type</Typography>
          <Typography>Gold</Typography>
          <Typography>Silver</Typography>
          <Typography>Copper</Typography>
        </div>
        <div id="inputs">
          <Typography variant="h6">D&D</Typography>
          <Input onChange={handleGold} value={gold ? gold : 0} />
        </div>
        <div id="today">
          <Typography variant="h6">Today USD</Typography>
        </div>
        <div id="hunter">
          <Typography variant="h6">Contingency</Typography>
        </div>
      </Card>
    </div>
  )
}
export default ManualEstimate