import React from "react";
import partyFetch from "../axios/config";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const Party = () => {
  const { id } = useParams();
  const [party, setParty] = useState(null);

  //   loadparty
  useEffect(() => {
    const loadParty = async () => {
      const res = await partyFetch.get(`parties/${id}`);
      console.log("this is the data", res.data);
      setParty(res.data);
    };
    loadParty();
  }, []);

  if (!party) return <p>Carregando</p>;

  return <div></div>;
};

export default Party;
