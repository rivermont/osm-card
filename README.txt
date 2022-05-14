# OSM Business Card
Generates an embeddable map that displays business info from an OSM object id.
Loads object type (n/w/r) and id from url parameters type= and id=.
Uses Leaflet, FontAwesome, JQuery, and Roboto font by Google.

For example, see index.html?type=n&id=299508059

Properties shown:
- Name
- Street address
- Website
- Phone
- Fax
- Email
- Facebook
- Instagram
- Twitter
- Pinterest
- Yelp
- YouTube

Future improvements:
- Opening hours (need parser)
- Payments accepted or not accepted
- Display brand data if any (pull Wikimedia Commons logo of brand?)
- Mapillary embed of storefront?
