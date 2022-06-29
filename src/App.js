import React from "react";
import Listing from './components/Listing';
import './App.css';
import data from './etsy.json'

export default function App() {
  return <Listing items={data} />;
}
