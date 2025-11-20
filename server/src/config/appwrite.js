// src/config/appwrite.js

require('dotenv').config(); // PENTING: Panggil dotenv di sini

const sdk = require("node-appwrite");

const client = new sdk.Client();

client
    .setEndpoint(process.env.APPWRITE_ENDPOINT || "https://fra.cloud.appwrite.io/v1")
    .setProject(process.env.APPWRITE_PROJECT_ID || "691ef4460023b014be6e")
    .setKey(process.env.APPWRITE_API_KEY || "standard_fe41407d985f5c328bb8b5b4ff20c5a31e903b5b8b42ff991e4c73902d5730d47d99678f3f4cb242946f3825745a78ecbaf9e1e6df44696bb2dd06fedd6d5949e3e8dc43c4f92c13678b5a4b4429ce0769d2401b5e8c0358e9ea08370356641886bf1e80a650fcdb2946993b3531093620e6d2c668bc52ea822ecf44426c8930"); // Ambil dari ENV!

const database = new sdk.Databases(client);

module.exports = {
    client,
    database,
    config: {
        DATABASE_ID: process.env.APPWRITE_DATABASE_ID || "691efd60003d0b3cb32f",
        COLLECTION_ID: process.env.APPWRITE_COLLECTION_ID || "sppg"
    }
};