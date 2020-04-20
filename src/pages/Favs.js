import React from "react";
import { Helmet } from "react-helmet";
import { FavWithQuery } from "../container/GetFavorites";
import { Layout } from "../components/Layout";

export default () => (
  <Layout title=" Tus Favoritos" subtitle="Aqui encontraras tus favoritos">
    <FavWithQuery />
  </Layout>
);
