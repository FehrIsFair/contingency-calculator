import {
  Card,
  Typography,
  Input
} from "@material-ui/core"
import React, { useState } from "react"

const ManualEstimate = () => {
  const [gold, setGold] = useState(1)
  const [silver, setSilver] = useState(1)
  const [copper, setCopper] = useState(1)

  const handleGold = (event) => {
    setGold(parseInt(event.target.value));
  }
  const handleSilver = (event) => {
    setSilver(parseInt(event.target.value));
  }
  const handleCopper = (event) => {
    setCopper(parseInt(event.target.value));
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

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
          <Input onChange={handleSilver} value={silver ? silver : 0} />
          <Input onChange={handleCopper} value={copper ? copper : 0} />
        </div>
        <div id="today">
          <Typography variant="h6">Today USD</Typography>
          <Typography>{(gold*300).toLocaleString()}</Typography>
          <Typography>{(silver*30).toLocaleString()}</Typography>
          <Typography>{(copper*3).toLocaleString()}</Typography>
        </div>
        <div id="hunter">
          <Typography variant="h6">Contingency</Typography>
          <Typography>{formatter.format((gold*300)*0.0618)}</Typography>
          <Typography>{formatter.format((silver*30)*0.0618)}</Typography>
          <Typography>{formatter.format((copper*3)*0.0618)}</Typography>
        </div>
      </Card>
    </div>
  )
}
export default ManualEstimate