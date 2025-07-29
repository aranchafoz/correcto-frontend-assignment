import React from "react";
import { useParams } from "react-router";

const MovieDetailPage: React.FC = () => {
  const { id } = useParams();
  return <h1>movie detail {id}</h1>;
};

export default MovieDetailPage;
