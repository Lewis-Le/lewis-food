import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../utils/db';

import Order from '../../../models/order';


export default async function handler(req, res) {

    switch (req.method) {
        case 'GET':
            try {
                const orders = await Order.find({});
                res.status(200).json({ success: true, data: orders })
            } catch (error) {
                res.status(400).json({ success: false, err: error });
            }
            break;

        case 'POST':
            try {
                const order = await Order.create(req.body);
                res.status(201).json({ success: true, data: order })
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