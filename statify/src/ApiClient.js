import React from 'react';
import axios from 'axios' 


apiURL = "apiendpoint" //this is going to be the api endpoint without the specific endpoint just the base url

class SpotifyAPI{
    client = axios.create({
        baseURL: apiURL,
    });

    async getArtist(ArtistID){ //this is a function that your client has, this function when called will make an api call to the spotify api 

        try {
            const response = await this.client.get('/api/artistname', {}); //this is your client trying to speak to the spotify api and storing its response in a variable called response

            if (response.data && response.status) { 
                const {data, status} = response; 
                if (status == 200) { //checks if status is 200, 200 means successful request
                    console.log("success",data) //will log success and the data returned by the api
                    return data //returns data to where ever the call to this function was made 
                } else {
                    throw "Client error" //if the response was not given then will throw an error
                }
            }

        } catch (error) { //this catches the error, so instead of your app breaking this will take the error handle it in a way where your app doesnt break, anything inside this block will be what happens when the call fails

            throw "error thrown" //throws error saying "error thrown"
        }

    } 



}



const spotifyAPI = new SpotifyAPI; //creating an instance of your client and putting in a variable, now you can use this instance to make the calls: spotifyAPI.getArtist(parameter), notice how the instance is named differently than the class
export default spotifyAPI; //this will allow you to import this instance into different files, so in different files you can just do import spotifyAPI from SpotifyAPI and you'll have the client there to make calls from (no writing individual calls in multiple files just one in the client and you can reuse)

//this isn't necessary but I think its good practice, looks cool and is easier to keep track of than individual calls in different files. 