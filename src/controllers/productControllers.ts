import { Request, Response } from "express";
import { prisma } from "../lib/db.js";

// 1. Menampilkan semua product
export const getProduct = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil data product",
      error,
    });
  }
};

// 2. Menyimpan product
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, price, stock, category, image } = req.body;

    if (!name || !description || !price || !stock || !category || !image) {
      return res.status(400).json({
        message: "Semua field wajib diisi",
      });
    }

    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        price: Number(price),
        stock: Number(stock),
        category,
        image,
      },
    });

    res.status(201).json({
      message: "Product berhasil ditambahkan",
      product: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal menambahkan product",
      error,
    });
  }
};

// 3. Menampilkan product berdasarkan id
export const showProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const product = await prisma.product.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!product) {
      return res.status(404).json({
        message: "Product tidak ditemukan",
      });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil detail product",
      error,
    });
  }
};

// 4. Mengupdate product
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description, price, stock, category, image } = req.body;

    const updatedProduct = await prisma.product.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        description,
        price: Number(price),
        stock: Number(stock),
        category,
        image,
      },
    });

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengupdate product",
      error,
    });
  }
};

// 5. Menghapus product
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.product.delete({
      where: {
        id: Number(id),
      },
    });

    res.json({
      message: "Product berhasil dihapus",
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal menghapus product",
      error,
    });
  }
};