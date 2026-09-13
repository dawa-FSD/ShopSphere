# 🛍️ ShopSphere

> A modern and responsive e-commerce web application built with React and Vite.

ShopSphere allows users to browse products, search and filter products, view product details, manage their shopping cart, complete checkout, and view their order history.

---

## 🌐 Project Links

| Resource | Link |
|---|---|
| 🚀 Live Demo | [ShopSphere](https://shop-sphere-o1awqpurc-dawa-s-projects1.vercel.app) |
| 💻 GitHub Repository | [ShopSphere GitHub](https://github.com/dawa-FSD/ShopSphere) |
| 🎥 Demo Video |[Watch the ShopSphere Demo Video](https://www.loom.com/share/f71e90ab57f04b9e9086fb0ff9c461f9)) |

---

## ✨ Features

| Feature | Description |
|---|---|
| 🏠 Home | Hero section and featured products |
| 🛍️ Products | Browse all available products |
| 🔎 Search | Search products by name |
| 📂 Categories | Filter products by category |
| 💰 Sorting | Sort products by price |
| 📄 Product Details | View complete product information |
| 🛒 Shopping Cart | Add, remove, and manage products |
| ➕ Quantity | Increase product quantity |
| ➖ Quantity | Decrease product quantity |
| 💾 LocalStorage | Save cart and order data |
| 💳 Checkout | Complete the order process |
| 📱 TeleBirr | TeleBirr payment option |
| 💵 Cash on Delivery | Cash payment option |
| 📦 Order History | View previous orders |
| ❌ 404 | Custom page for invalid routes |
| 📱 Responsive | Mobile, tablet, and desktop support |

---

## 🛠️ Technologies

| Technology | Purpose |
|---|---|
| ⚛️ React | Frontend UI development |
| ⚡ Vite | Development and build tool |
| 🟨 JavaScript | Application logic |
| JSX | React component structure |
| 🧭 React Router DOM | Page navigation and routing |
| 🧠 Context API | Global cart state management |
| 💾 LocalStorage | Persistent cart and order data |
| 🎨 CSS | Styling and responsive design |
| 🔧 Git | Version control |
| 🐙 GitHub | Source code hosting |
| ▲ Vercel | Application deployment |

---

## ⚛️ React Concepts Used

| Concept | Usage in ShopSphere |
|---|---|
| Components | Build reusable UI sections |
| Props | Pass product data to components |
| JSX | Create UI using JavaScript |
| useState | Manage component state |
| useEffect | Synchronize data with LocalStorage |
| useContext | Access global cart state |
| useParams | Get product ID from URL |
| useNavigate | Navigate programmatically |
| useSearchParams | Handle category filters in URL |
| Events | Handle clicks and form changes |
| Controlled Forms | Manage checkout form inputs |
| Conditional Rendering | Show different UI based on state |
| map() | Render product and order lists |
| Dynamic Routes | Product details pages |
| Context API | Share cart and order data |

---

## 🗺️ Application Routes

| Route | Page | Purpose |
|---|---|---|
| `/` | 🏠 Home | Landing page |
| `/products` | 🛍️ Products | Browse products |
| `/products/:id` | 📄 Product Details | View product details |
| `/categories` | 📂 Categories | Browse categories |
| `/cart` | 🛒 Cart | Manage shopping cart |
| `/checkout` | 💳 Checkout | Complete purchase |
| `/orders` | 📦 Orders | View order history |
| `/about` | ℹ️ About | About ShopSphere |
| `*` | ❌ 404 | Invalid route |

---

## 📁 Project Structure

```text
shopsphere-react/
│
├── src/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── ProductCard.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Categories.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── Orders.jsx
│   │   ├── About.jsx
│   │   └── NotFound.jsx
│   │
│   ├── context/
│   │   └── CartContext.jsx
│   │
│   ├── data/
│   │   └── products.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public/
├── package.json
├── vite.config.js
└── README.md
