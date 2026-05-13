import { Request, Response } from "express";
import { Category } from "../types/category";

let categories: Category[] = [];

//1. menampilkan data category
export const getCategories = ( req: Request, res: Response ) => {
    res.json(categories);
};

//2. menyimpan data category
export const createCategories = ( req: Request, res: Response ) => {
    const {name} = req.body;
    
        if (!name) {
            res.status(500).json({message: "Semua field wajib diisi"});
    }
        const newCategory: Category = {
            id: Date.now(),
            name: name,
        };
    
        categories.push(newCategory);
    
        res.status(200).json({ message: "Data berhasil disimpan", categories: newCategory });
};

//3. menampilkan data category berdasarkan id
export const showCategories = ( req: Request, res: Response ) => {};

//4. mengupdate category berdasarkan id
export const updateCategories = ( req: Request, res: Response ) => {};

//5. menghapus category berdasarkan id
export const deletecategories = ( req: Request, res: Response ) => {};
