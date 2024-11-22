export const products = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
      category: 'Electronics',
      tag: 'New Arrival'
    },
    {
      id: 2,
      name: 'Minimalist Watch',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
      category: 'Accessories',
      tag: 'Best Seller'
    },
    {
      id: 3,
      name: 'Smart Fitness Tracker',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&q=80',
      category: 'Electronics',
      tag: 'Featured'
    },
    {
      id: 4,
      name: 'Designer Sunglasses',
      price: 179.99,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80',
      category: 'Accessories',
      tag: 'Trending'
    },
    {
      id: 5,
      name: 'Premium Backpack',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
      category: 'Bags',
      tag: 'Popular'
    },
    {
      id: 6,
      name: 'Wireless Earbuds',
      price: 159.99,
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80',
      category: 'Electronics',
      tag: 'Hot'
    },
    {
      id: 7,
      name: 'Smart Water Bottle',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80',
      category: 'Lifestyle',
      tag: 'Eco-friendly'
    },
    {
      id: 8,
      name: 'Premium Notebook',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&q=80',
      category: 'Stationery',
      tag: 'Essential'
    },
    {
      id: 9,
      name: 'Leather Wallet',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80',
      category: 'Accessories',
      tag: 'Handcrafted'
    },
    {
      id: 10,
      name: 'Portable Speaker',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80',
      category: 'Electronics',
      tag: 'Premium'
    }
  ];
  
  export function getProductById(id) {
    return products.find(product => product.id === id);
  }