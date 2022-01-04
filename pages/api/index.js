import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../utils/db';


export default function handler(req, res) {
    res.json({ message: 'hello from API', method: req.method });
};