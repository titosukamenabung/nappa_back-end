import { Request, Response } from "express";
import { Product } from "../types/product";

let product: Product[] = [];

//1. menampilkan data product
export const getProduct = ( req: Request, res: Response ) => {
    res.json(product);
};

//2. menyimpan data event
export const createProduct = ( req: Request, res: Response ) => {
    const {name , role, foto} = req.body;
        
            if (!name) {
                res.status(500).json({message: "Semua field wajib diisi"});
        }
            const newProduct: Product = {
                id: Date.now(),
                name: name,
                role: role,
                foto: foto,
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
