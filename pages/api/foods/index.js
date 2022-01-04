import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../utils/db';

import Food from '../../../models/food';


export default async function foodHandler(req, res) {

    switch (req.method) {
        case 'GET':
            try {
                const foods = await Food.find({});
                res.status(200).json({ success: true, data: foods })
            } catch (error) {
                res.status(400).json({ success: false, err: error });
            }
            break;

        case 'POST':
            try {
                const food = await Food.create(req.body);
                res.status(201).json({ success: true, data: food })
            } catch (error) {
                res.status(400).json({ success: false, err: error });
            }
            break;

        default:
            res.status(400).json({ success: false });
            break;
    };

    // res.json({ message: 'hello from food API', method: req.method });
};