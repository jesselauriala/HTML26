async function loadProducts() {
  const productsElement = document.querySelector("#products");

  try {
    if (productsElement) {
      productsElement.textContent = "Ladataan tuotteita...";
    }

    const response = await fetch("https://dummyjson.com/products");

    if (!response.ok) {
      throw new Error(`HTTP-virhe: ${response.status}`);
    }

    const data = await response.json();

    if (!productsElement) {
      console.log(data.products);
      return;
    }

    productsElement.replaceChildren();

    data.products.forEach((product) => {
      const article = document.createElement("article");

      const title = document.createElement("h2");
      title.textContent = product.title;

      const price = document.createElement("p");
      price.textContent = `${product.price} €`;

      article.append(title, price);
      productsElement.appendChild(article);
    });
  } catch (error) {
    console.error("Tuotteiden lataaminen epäonnistui:", error);

    if (productsElement) {
      productsElement.textContent = "Tuotteiden lataaminen epäonnistui. Yritä uudelleen.";
    }
  } finally {
    console.log("Tuotteiden lataus valmis.");
  }
}

loadProducts();