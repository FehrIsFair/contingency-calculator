import {
  Card,
  Typography,
  Input
} from "@material-ui/core"
import React, { useState, useEffect } from "react"

const ManualEstimate = () => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const [gold, setGold] = useState(1)
  const [silver, setSilver] = useState(1)
  const [copper, setCopper] = useState(1)
  const [total, setTotal] = useState(((gold*300)*0.0618) + ((silver*30)*0.0618) + ((copper*3)*0.0618))

  const handleGold = (event) => {
    setGold(parseInt(event.target.value));
  }
  const handleSilver = (event) => {
    setSilver(parseInt(event.target.value));
  }
  const handleCopper = (event) => {
    setCopper(parseInt(event.target.value));
  }

  useEffect(() => {
    setTotal(((gold*300)*0.0618) + ((silver*30)*0.0618) + ((copper*3)*0.0618))
  }, [gold, silver, copper]);

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
          <Typography>{formatter.format(gold*300)}</Typography>
          <Typography>{formatter.format(silver*30)}</Typography>
          <Typography>{formatter.format(copper*3)}</Typography>
        </div>
        <div id="hunter">
          <Typography variant="h6">Contingency</Typography>
          <Typography>{formatter.format((gold*300)*0.0618)}</Typography>
          <Typography>{formatter.format((silver*30)*0.0618)}</Typography>
          <Typography>{formatter.format((copper*3)*0.0618)}</Typography>
        </div>
        <div>
          <Typography variant="h6">Contingency Total</Typography>
          <Typography>{formatter.format(total)}</Typography>
        </div>
      </Card>
    </div>
  )
}
export default ManualEstimate