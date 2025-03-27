Created a webpage and a web service that shows apartments for rent.

Data:
JSON file with a list of 10 apartments. Each apartment has the following fields:
- Address
- Description
- Number of Bedrooms
- Number of Bathrooms
- Monthly Rent
(All apartments I found from streeteasy.com.)

WebPage:
Has the following:
- Search field
- Dropdown list of number of bedrooms: Any, Studio, 1, 2+
- Dropdown list of number of bathrooms: Any, 1, 2+
- Sort: None, Price Ascending (Low-High), Price Descending (High-Low)
- Button to execute search
 When the button is pressed, the web page contacts the Web Service with the above filters and then renders the JSON results formatted as HTML.

WebService:
- Receives the query from the web page and return JSON as a result. 
    - Does not return HTML - returns JSON.
- When the search parameter is not blank, then filter if the search appears in the title or description.
- When the dropdown list of bedrooms/bathrooms is used, filter by number of bedrooms/bathrooms.
- All of these can be used at the same time. 
    - Someone could search for “sunlight” with 2+ bedrooms and sort by price ascending.
