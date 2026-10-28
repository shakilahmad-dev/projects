const products = [
        {
            id: 1,
            name: "Wireless Bluetooth Headphones",
            price: 79.99,
            category: "Electronics",
            inStock: true,
        },
        {
            id: 2,
            name: "Ergonomic Office Chair",
            price: 199.5,
            category: "Furniture",
            inStock: true,
        },
        {
            id: 3,
            name: "Stainless Steel Water Bottle",
            price: 24.99,
            category: "Accessories",
            inStock: false,
        },
        {
            id: 4,
            name: "Mechanical Gaming Keyboard",
            price: 89.0,
            category: "Electronics",
            inStock: true,
        },
        {
            id: 5,
            name: "Running Shoes",
            price: 120.0,
            category: "Footwear",
            inStock: true,
        },
    ];

export default async function ProductDetailsPage({ params }) {
    const { productId } = await params;
    const product = products.find(product => product.id === parseInt(productId)) 
    console.log("show me params", productId);
    return (
        <div>
            <h1 className="text-3xl">ProductDetails</h1>
            <h3 className="text-3xl">{product.name}</h3>    
            <p>{product.price}</p>
        </div>
    );
}
