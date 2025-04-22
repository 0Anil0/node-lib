// index.js

function create(payload) {
    console.log("Created:", payload);
    return { status: "successfull", data: payload };
  }
  
  module.exports = { create };
  