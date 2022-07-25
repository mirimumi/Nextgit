import React from "react";
import App from "next/app";
import Nav from "../components/nav";
import Head from 'next/Head'
import Footer from "../components/Footer";
import "../styles/globals.css"

export default class MyApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <div align="center">
        <Head>
          <title>::SRSONE::</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
        </Head>
        <Nav/>
        <Component />
        <Footer/>

      </div>
    );
  }
}