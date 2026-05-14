import { Request, Response } from "express";
import { Category } from "../types/category.js";
import { prisma } from "../lib/db";

let categories: Category[] = [];

//1. menampilkan data category
export const getCategories = async (req: Request, res: Response) => {
  try {
    const allCategories = await prisma.category.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(allCategories);
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil data category",
      error,
    });
  }
};


//2. menyimpan data category
export const createCategories = async ( req: Request, res: Response ) => {
    const {name, createdAt} = req.body;
    
        if (!name) {
            res.status(500).json({message: "Semua field wajib diisi"});
    }
        const newCategory = await prisma.category.create({
            data: {
                name,
                
            },
        });

        res.status(201).json(newCategory);
};

//3. menampilkan data category berdasarkan id
export const showCategories = ( req: Request, res: Response ) => {};

//4. mengupdate category berdasarkan id
export const updateCategories = ( req: Request, res: Response ) => {};

//5. menghapus category berdasarkan id
export const deletecategories = ( req: Request, res: Response ) => {};
