import { Request, Response } from "express";
import { Product } from "../types/product.js";

let product: Product[] = [];

//1. menampilkan data product
export const getProduct = ( req: Request, res: Response ) => {
    res.json(product);
};

//2. menyimpan data product
export const createProduct = ( req: Request, res: Response ) => {
   const { 
    name,
    description,
    price,
    stock,
    category,
    image
} = req.body;
        
            if (!name) {
                res.status(500).json({message: "Semua field wajib diisi"});
        }
            const newProduct: Product = {
                id: Date.now(),
                name: name,
                description: description,
                price: price,
                stock: stock,
                category: category,
                image: image,
            };
        
            product.push(newProduct);
        
            res.status(200).json({ message: "Data berhasil disimpan", product: newProduct });
    };

//3. menampilkan data product berdasarkan id
export const showProduct = ( req: Request, res: Response ) => {};

//4. mengupdate product berdasarkan id
export const updateProduct = ( req: Request, res: Response ) => {};

//5. menghapus product berdasarkan id
export const deleteProduct = ( req: Request, res: Response ) => {};
