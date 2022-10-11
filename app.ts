import { Product } from './Product';
import { ProductService } from './ProductService';

let _productService = new ProductService();

let products;
let product;

let p = new Product();
p.id = 2;
p.name = 'Iphone 7';
p.price = 2500;
p.category = 'Telefon';

_productService.saveProduct(p);

products = _productService.getProducts();
product = _productService.getById(1);
// _productService.deleteProduct(p);
console.log("All products", products);
console.log("One product", product);