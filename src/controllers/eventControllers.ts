import { Request, Response } from "express";
import { Event  } from "../types/event.js";

let events: Event[] = [];

//1. menampilkan data event
export const getEvent = ( req: Request, res: Response ) => {
    res.json(events);
};

//2. menyimpan data event
export const createEvent = ( req: Request, res: Response ) => {
    const {name, date, location, description} = req.body;

    if (!name) {
        res.status(500).json({message: "Semua field wajib diisi"});
}
    const newEvent: Event = {
        id: Date.now(),
        name: name,
        date: date,
        location: location,
        description: description,
    };

    events.push(newEvent);

    res.status(200).json({ message: "Data berhasil disimpan", event: newEvent });
};

//3. menampilkan data event berdasarkan id
export const showEvent = ( req: Request, res: Response ) => {};

//4. mengupdate event berdasarkan id
export const updateEvents = ( req: Request, res: Response ) => {};

//5. menghapus event berdasarkan id
export const deleteEvent = ( req: Request, res: Response ) => {};
