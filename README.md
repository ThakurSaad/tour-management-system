# Tour Management API

[Live server](https://tour-management-system-two.vercel.app/)

### APIs

##### Base url

`https://tour-management-system-two.vercel.app/`

##### POST/Save a tour

`https://tour-management-system-two.vercel.app/api/v1/tours`

##### GET tours

`https://tour-management-system-two.vercel.app/api/v1/tours`

##### GET tour by ID

`https://tour-management-system-two.vercel.app/api/v1/tour/:id`

##### PATCH/Update tour by ID

`https://tour-management-system-two.vercel.app/api/v1/tour/:id`

##### GET cheapest tour

`https://tour-management-system-two.vercel.app/api/v1/tour/cheapest`

##### GET trending tour

`https://tour-management-system-two.vercel.app/api/v1/tour/trending`

### Simple Documentation

1. `GET /tours`

   - Get all the tours

   - The client can select some specific fields for getting the information he needs as query.

   - Example: `/tours?fields=name,image`

   - Is paginated.

   - The client can send a field (e.g. `price`) as query to `sort` the data with it.

   Example: `/tours?sort=price`

2. `POST /tours`

   - Add a tour

   - Has a schema and the body is validated through it.

3. `GET /tours/:id`

   - Get a tour details by id

   - Send all the information of the tour

   - Increase the view count by 1 for this tour every time a user hits this endpoint.

4. `PATCH /tour/:id`

   - Update a tour

   - Body is validated

5. `GET /tour/trending`

   - Get top 3 viewed tour

6. `GET /tour/cheapest`

   - Get top 3 cheapest tours

### Installed packages

- node
- express
- cors
- mongoose
- dotenv
- colors
