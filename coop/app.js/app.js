const express = require("express")
const path = require("path")
const logger = require("morgan");
const PORT = process.env.PORT || 3000;
const hbs = require("hbs");
const mongoose = require("monngoose");

app.get('/', (req, res) => res.send("Welcome!")
