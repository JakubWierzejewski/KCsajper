import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
app.use(express.json());

const prisma = new PrismaClient();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serwer nasłuchuje na porcie ${PORT}`);
});

app.get('/categories', async (req, res) => {
  try {
    const categories = await prisma.categories.findMany();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/categories', async (req, res) => {
  const { Name } = req.body;
  try {
    const category = await prisma.categories.create({
      data: {
        Name
      }
    });
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get('/customers', async (req, res) => {
  try {
    const customers = await prisma.customers.findMany();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/customers', async (req, res) => {
  const { Name, Email } = req.body;
  try {
    const customer = await prisma.customers.create({
      data: {
        Name,
        Email
      }
    });
    res.status(201).json(customer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get('/orderdetails', async (req, res) => {
    try {
      const orderdetails = await prisma.orderdetails.findMany();
      res.json(orderdetails);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  app.post('/orderdetails', async (req, res) => {
    const { OrderID, ProductID, Quantity, Price } = req.body;
    try {
      const orderdetail = await prisma.orderdetails.create({
        data: {
          OrderID,
          ProductID,
          Quantity,
          Price
        }
      });
      res.status(201).json(orderdetail);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  app.get('/orders', async (req, res) => {
    try {
      const orders = await prisma.orders.findMany();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  app.post('/orders', async (req, res) => {
    const { CustomerID, OrderDate } = req.body;
    try {
      const order = await prisma.orders.create({
        data: {
          CustomerID,
          OrderDate
        }
      });
      res.status(201).json(order);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  app.get('/products', async (req, res) => {
    try {
      const products = await prisma.products.findMany();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  app.post('/products', async (req, res) => {
    const { Name, Price, CategoryID } = req.body;
    try {
      const product = await prisma.products.create({
        data: {
          Name,
          Price,
          CategoryID
        }
      });
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });