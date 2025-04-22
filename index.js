async function create(model, data) {
    try {
      const result = await model.create(data);
      console.log("✅ Created:", result.toJSON());
      return result;
    } catch (err) {
      console.error("❌ Error creating record:", err.message);
      throw err;
    }
  }
  
  module.exports = { create };
  