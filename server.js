module.exports = () => {
    const data = {
        products: [],
    };

    for (let i = 1; i < 1001 ; i++) data.products.push({id: i + 1, price: 80, title: `Camiseta ${i + 1}`})

    return data;
}