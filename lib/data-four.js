
export async function loadPosts() {

try {
    const options = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: 'fsq33WTGJe7DEsF9Vt6ev0ipDVqsIMthDu+7k5iCDiAepgY='
        }
      };
     let response = await fetch('https://api.foursquare.com/v3/places/search?query=bar&ll=40.87631176072776%2C29.230439808221284&limit=6', options)
        
     const data  = await response.json();
    
     return data.results;
} catch (error) {
    return [
        {
          "id": "Error1",
          "title": "I am Error",
          "body": "I a error fetchin forsquare data"
        },
    ];
}
}