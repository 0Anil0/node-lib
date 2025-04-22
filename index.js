// index.js

function create(payload) {
    console.log("Created:", payload);
    return { status: "success", data: payload };
  }
  
  module.exports = { create };
  