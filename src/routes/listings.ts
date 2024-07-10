import { Router, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

interface Listing {
  id: string;
  title: string;
  price: number;
  description: string;
}

const listings: Listing[] = [];

const router = Router();

router.post('/listings', (req: Request, res: Response) => {
  const { title, price, description } = req.body;

  if (!title || typeof price !== 'number' || !description) {
    return res.status(400).send('Missing required fields or invalid data type');
  }

  const newListing: Listing = {
    id: uuidv4(),
    title,
    price,
    description,
  };

  listings.push(newListing);
  res.status(201).json(newListing);
});

router.get('/listings', (req: Request, res: Response) => {
  res.json(listings);
});

router.delete('/listings/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const index = listings.findIndex(listing => listing.id === id);

  if (index === -1) {
    return res.status(404).send('Listing not found');
  }

  listings.splice(index, 1);
  res.status(204).send();
});

export default router;