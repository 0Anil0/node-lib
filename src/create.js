// src/create.js

// async function create(model, data) {
//     try {
//       const result = await model.create(data);
//       console.log("✅ Created:", result.toJSON());
//       return result;
//     } catch (error) {
//       console.error("❌ Error:", error.message);
//       throw error;
//     }
//   }

function create(payload) {
    console.log("Created:", payload);
    return { status: "success full anil", data: payload };
  }
  
  module.exports = create;
  