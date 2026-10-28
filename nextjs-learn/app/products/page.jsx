import Link from "next/link";

export default function ProductsPage() {
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

    return (
        <div>
        
            <h1 className="text-3xl">ProductsPage</h1>
            {
                products.map(product => <div key={product.id}>
                    <h3 className="text-3xl"><span>{product.id} </span>{product.name}</h3>
                    <Link href={`/products/${product.id}`}>Show Details</Link>
                </div>)
            }
        </div>
    );
}
