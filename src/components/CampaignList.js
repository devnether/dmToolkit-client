import React from "react";
import { useEffect, useState } from "react";
import { Card, CardContent, Container, Typography } from "@mui/material";

function CampaignList() {
  const loadCampaigns = async () => {
    const response = await fetch("http://localhost:4000/");
    const data = await response.json();
    setCampaign(data);
  };

  const [campaign, setCampaign] = useState([]);

  useEffect(() => {
    loadCampaigns();
  }, []);
  return (
    <div>
      <br />
      <Typography variant="h5">Mis Campañas</Typography>
      <br />
      {campaign.map((campaign) => (
        <div>
          <br />
          <Card>
            <CardContent>
              <Typography variant="h5">{campaign.campaign}</Typography>
              <hr />
              <Typography>{campaign.description}</Typography>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default CampaignList;
