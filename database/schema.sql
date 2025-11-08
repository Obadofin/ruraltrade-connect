CREATE DATABASE IF NOT EXISTS ruraltrade_connect;
USE ruraltrade_connect;

-- Products Table
CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  price DECIMAL(10,2),
  category VARCHAR(50),
  stock INT
);

-- Buyers Table
CREATE TABLE IF NOT EXISTS buyers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  phone VARCHAR(20)
);

-- Artisans Table
CREATE TABLE IF NOT EXISTS artisans (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  skill VARCHAR(100),
  location VARCHAR(100)
);

-- Orders Table
CREATE TABLE IF NOT EXISTS orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  buyer_id INT,
  product_id INT,
  quantity INT,
  total_price DECIMAL(10,2),
  order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (buyer_id) REFERENCES buyers(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);
