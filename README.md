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

`https://tour-management-system-two.vercel.app/api/v1/tours/:id`

##### GET cheapest tour

`https://tour-management-system-two.vercel.app/api/v1/tour/cheapest`

##### GET trending tour

`https://tour-management-system-two.vercel.app/api/v1/tour/trending`

##### Sample Data

```
    {
        "_id": "632ae886d166fe17afd98d93",
        "image": "image",
        "title": "Tour 1",
        "rating": 9.9,
        "views": 23,
        "price": 0,
        "unit": "USD",
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam minima cum ex rem, voluptatem libero aliquam at quae sit enim. Iste placeat soluta molestiae sed. Et fuga incidunt vitae cumque accusamus eligendi!",
        "destinations": "Tokyo, Hakone, Takayama, Kyoto, Osaka",
        "ageRange": "18 to 39 year olds",
        "regions": "Central Japan, Southern Japan, Honshu",
        "travelStyle": "Group, Fully Guided, Historical, Christmas & New Year",
        "operatedIn": "Bengali",
        "operator": "Thakur Saad's Anime House",
        "createdAt": "2022-09-21T10:33:43.007Z",
        "updatedAt": "2022-09-21T12:15:11.483Z",
        "__v": 0
    }
```

### Simple Documentation

1. `GET /tours`

   - Get all the tours

   - The client can select some specific fields for getting the information he needs as query.

   - Example: `/tours?fields=title,image`

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

   - Body is validated by the schema

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
