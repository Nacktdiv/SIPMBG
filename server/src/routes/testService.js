// src/routes/testService.js

const { database, config } = require('../config/appwrite'); // Ganti path sesuai struktur Anda
const sdk = require('node-appwrite'); // Perlu untuk sdk.ID.unique() dan sdk.Permission

const { DATABASE_ID, COLLECTION_ID } = config;

async function createIdentity(data) {
    return database.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        sdk.ID.unique(),
        data,
        [sdk.Permission.read(sdk.Role.any())]
    );
}

async function getIdentity(documentId) {
    return database.getDocument(DATABASE_ID, COLLECTION_ID, documentId);
}

async function deleteIdentity(documentId) {
    return database.deleteDocument(DATABASE_ID, COLLECTION_ID, documentId);
}

module.exports = {
    createIdentity,
    getIdentity,
    deleteIdentity
};