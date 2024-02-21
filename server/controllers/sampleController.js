const express = require("express");
const router = express.Router();
const {getSampleData} = require("../services/sampleService");

router.get("/count", async (req, res) => {
  try {
    const sampleData = await getSampleData({id: "YTe3fCq5GoC7z7MqjzTC"});
    return res.status(200).json({
      count: sampleData.count,
      message: "Successfully retrieved the count",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error retrieving sample count",
    });
  }
});

module.exports = router;
