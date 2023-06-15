const axios = require("axios");
const cheerio = require("cheerio");

const url = "https://scrapeme.live/shop/";

async function scrape() {
  const products = [];
  let page = 1;
  while (true) {
    let html;
    try {
      const response = await axios.get(url + `page/${page}`);
      html = response.data;
    } catch {
      break;
    }
    const $ = cheerio.load(html);
    if ($(".product").length > 0) {
      $(".product").each((index, element) => {
        const name = $(element).find("h2").text();
        const price = $(element).find(".price").text();
        const sku = $(element)
          .find("a[data-product_sku]")
          .data("product_sku")
          .toString();
        const id = $(element).find("a[data-product_sku]").data("product_id");
        const image_url = $(element).find("a").find("img").attr("src");
        products.push({ id, name, price, sku, image_url });
      });
      page++;
    } else {
      break;
    }
  }

  return products;
}

module.exports = scrape;
