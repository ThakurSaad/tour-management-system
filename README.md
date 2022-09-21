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

1. GET /tours
   <br>
   Get all the tours
   <br>
   The client can select some specific fields for getting the information he needs as query.
   <br>
   Example: /tours?fields=name,image
   <br>
   Must be paginated.
   <br>
   (BONUS) The client can send a field (e.g. price) as query to sort the data with it.
   <br>
   Example: /tours?sort=price
   <br>
   <br>

2. POST /tours
   <br>
   Add a tour
   <br>
   Must have a schema and the body should be validated through it.
   <br>
   <br>

3. GET /tours/:id
   <br>
   Get a tour details by id
   <br>
   Send all the information of the tour
   <br>
   Increase the view count by 1 for this tour every time a user hits this endpoint.
   <br>
   <br>

4. PATCH /tour/:id
   <br>
   Update a tour
   <br>
   (BONUS) Body should be validated
   <br>
   <br>

5. GET /tour/trending
   <br>
   Get top 3 viewed tour
   <br>
   <br>
6. GET /tour/cheapest
   <br>
   Get top 3 cheapest tours

### Installed packages

- node
- express
- cors
- mongoose
- dotenv
- colors
