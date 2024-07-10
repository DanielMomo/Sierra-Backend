import request from 'supertest';
import app from './app';
import { Server } from 'http';

let server: Server;

beforeAll((done) => {
  server = app.listen(4000, () => {
    done();
  });
});

afterAll((done) => {
  server.close(() => {
    done();
  });
});

describe('API Endpoints', () => {
  it('should add a new listing', async () => {
    const newListing = {
      title: 'Test Listing',
      price: 100000,
      description: 'A test description',
    };

    const response = await request(app)
      .post('/listings')
      .send(newListing);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.title).toBe(newListing.title);
    expect(response.body.price).toBe(newListing.price);
    expect(response.body.description).toBe(newListing.description);
  });

  it('should retrieve all listings', async () => {
    const response = await request(app).get('/listings');

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should delete a listing', async () => {
    const newListing = {
      title: 'Test Listing to Delete',
      price: 50000,
      description: 'A test description to delete',
    };

    const postResponse = await request(app)
      .post('/listings')
      .send(newListing);

    const { id } = postResponse.body;

    const deleteResponse = await request(app).delete(`/listings/${id}`);

    expect(deleteResponse.status).toBe(204);

    const getResponse = await request(app).get('/listings');

    expect(getResponse.body.find((listing: any) => listing.id === id)).toBeUndefined();
  });

  it('should return 404 for deleting a non-existent listing', async () => {
    const response = await request(app).delete('/listings/nonexistent-id');

    expect(response.status).toBe(404);
  });
});