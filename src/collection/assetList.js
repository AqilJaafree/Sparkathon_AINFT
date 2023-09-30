const { promises: fs } = require("fs");
const url = `https://devnet.helius-rpc.com/?api-key=5282485b-df83-45e9-a993-44aaf1791257https://rpc.helius.xyz/?api-key=`;

const getAssetsByGroup = async () => {
  console.time("getAssetsByGroup"); // Start the timer
  let page = 1;
  let assetList = [];

  try {
    while (page) {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: "my-id",
          method: "getAssetsByGroup",
          params: {
            groupKey: "collection",
            groupValue: "GbEindRrY7gB7RtET17NAGvsMVrLDKi6xaxuCY4WfVic",
            page: page,
            limit: 1000,
          },
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const { result } = await response.json();

      assetList.push(...result.items);
      if (result.total !== 1000) {
        page = false;
      } else {
        page++;
      }
    }

    const resultData = {
      totalResults: assetList.length,
      results: assetList,
    };

    await fs.writeFile("results.json", JSON.stringify(resultData, null, 2));
    console.log("Results saved to results.json");
    console.timeEnd("getAssetsByGroup");
  } catch (error) {
    console.error("Error occurred:", error);
  }
};

getAssetsByGroup();
