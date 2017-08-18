![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# DevBook Readme
#### Installation and setup


- Download or clone the repo
- `yarn` to install dependencies
- `gulp` to compile the source code and open in browser

> **Note**: You'll need to have `gulp-cli` installed globally
> `npm i -g gulp-cli`

## Project Description
The aim of this project was to design an Angular app to act as a professional  hub for web developers, which allows developers the chance to showcase their work. A place to show their ability in different technologies commonly used in the industry, and catch up on latest news and events in their local area. The main features the app is designed to have are:

![Landing Page](http://i.imgur.com/vOSqWMb.png "Landing Page")  

*The user starts by landing on the home page. If the user is not logged in they are greeted with a form to register or they can click to go to the login page. A logged in user will only see a home screen with selected quotes about coding and programming.

![Profile Page](http://i.imgur.com/plbAisg.png "Profile Page")  

*Once a user has registered and logged in they are taken to their profile show page. There is a progress bar to indicate how much of their profile has been filled out. There is the option to edit the profile page and add links to GitHub, LinkedIn and their own portofolio Url. A user can also select the techs they are proficient in and chose an avatar from the list of options.

*On the profile page the user can also view the projects that they have uploaded to the site and click into them to edit the project show page and change descriptions, images and techs used.  

![Project Index Page](http://i.imgur.com/4sGT6gZ.png "Project Index Page")  

*On the index page, all projects that have been uploaded to the app can be viewed. A small image of the project expands across the page with the title of the project overlayed on the top, which is able to be clicked to go to that individual project's show page.

*The index page has a searchbar that can be used to filter the projects by which techs are used so the user can search for specific projects if they wish.

![Project Show Page](http://i.imgur.com/1fkWclV.png "Project Show Page")  

*The project show page showcases a picture of the project, a short description and also links that allow them to contact the user who uploaded the project. The user can do this by clicking on the project user's Github, LinkedIn or email address.

*There is an events page that uses GoogleMaps and EventBrite API to bring in information about tech meetups that are happening on that day specific to the user's location. Also at the bottom is a news feed that is pulling in TechCrunch news via the NewsApi.

## Technologies Used
Below is a list of the technologies that were used to create this project. In addition to them, there were a number of dependancies that were used, which are available to view in the code.

- HTML5
- CSS3
- JavaScript ES6
- Mongoose
- MongoDB
- Express
- AngularJS
- Node.js
- Satellizer
- Bootstrap UI
- SASS
- AWS
- GULP
- Git
- GitHub
- Yarn

![HTML5](http://i.imgur.com/1MbhOJx.png)
![CSS3](http://i.imgur.com/Hk0uKkj.png)
![JavaScript](http://i.imgur.com/DFkzUyL.png)
![MongoDB](http://i.imgur.com/fMfLhEU.png)
![AngularJS](http://i.imgur.com/oUEwalY.png)
![Node.js](http://i.imgur.com/m17V6Vy.png)
![BootStrap UI](http://i.imgur.com/48ggAgm.png)
![SASS](http://i.imgur.com/dM2it0p.png)
![AWS](http://i.imgur.com/cJUvoHt.png)
![Gulp](http://i.imgur.com/mE9yJPB.png)
![Git](http://i.imgur.com/nSNx9rI.png)
![GitHub](http://i.imgur.com/My76ZR3.png)

## Challenges and Innovations
Throughout this project the group hit a number of bugs and obstacles these include:


#### Only allowing the users to select a profile avatar from a set array of pictures.
In order to keep the page consistent and to allow users to judge work and not profile pictures, we implemented the use of avatars for our user profiles. A user is given a selection of 8 images to choose from and this is saved to their profile. The array of pictures to choose from is in the edit controller section of the user controller. There is a function that attaches the avatar that has been clicked on the edit page to the user object as the value to the 'avatar' key. This function is then called in an ng-click, everytime the user clicks on to one of the printed images on the edit profile page. The change is saved when the whole form is submitted.

####  Progressbar for user's profile page
When a user first registers they will give the app their email and username, this is unless they have joined through Github or LinkedIn Oauth. In an effort to get their user to fill out more of their profile, we decided to allocate a progressbar to the user's profile page. This is hidden if a user views another user's profile but present on their own, by using an ng-if statement that checks if the user who is viewing the page is the user who owns the profile. We wrote a virtual in the user model that looks through the user edit form and finds the amount of fields that have been filled in and therefore filled in the user's data in the model. For every field that is filled an extra 15 is added to the value of the progressbar, with the initial first show of the user's profile only showing 10 for completing username and/or email. Once all of the user object has keys and values as displayed in the model, the progressbar is at 100 and displaying as full. The docs from UI-Bootstrap came in handy to understand how the progressbar works and how to implement changes in the value to get the usage that we wanted. We wanted to keep within the color scheme of our site and built another function that changed the 'type' of bar and therefore the color. Again, UI-Bootstrap and Stack Overflow were a huge help to get the results!

#### Installing a "Like" Button.
A user is able to "like" different projects, we wanted this like to be saved, and associated with the project, however we only wanted each user to be able to "like" a project once and to be able to "unlike" it in case they clicked on it by accident. This was achieved by placing a simple function in the projectsShow controller and having a blank array of likes in the model for each project when it was created. To ensure the each user could only like a project once we pulled in the user id from the auth controller, the function then looked to see if that user id was already in the like array of the project, if it was the user could only "unlike" the project, if it wasn't the user was able to "like" the project. Intially this led to the project's createdBy id to be changed to the person who had just liked it, to overcome this we called the project's id and set it inside the controller but outside the function. 

## Future Improvements
There are a number of features we would like to add to the site, these include:

#### Controlled Comments.
The group strongly believe that this site should be used as a supportive network that would encourage developers to flourish. The beauty of social media is the freedom to air free speech, however as we have seen with numerous social media platforms some users take advantage of this and this leads to unsupportive comments that have the potential to disencourage, demean and insult the reciever. For this reason we would only want to install comments if we were able to ensure the comments would be supportive to the user, a few ideas from the group included only allowing users to select feedback from an array of 15 or so comments, or an automatic system that would scan the feedback before it was published. 
#### Forum.
For the site to become a hub of activity and an essential tool for developers we feel a forum would be an excellent addition to allow users to discuss current affairs in technology, share ideas and insights. 

#### Enhanced Events and News features.
Currently the site only shows the top four stories from Tech Crunch and is only pulling in events from Eventbrite. To make these features more useful for the network we would aim to add in events from the meetup API, to bring in technology news from a variety of news APIs. We would also want to introduce the feature for the user to add interests to their account so their newsfeed would focus on their interests. 

#### A jobs board.
We would not aim to become a jobs board, however we feel a section listing jobs in the local area would enhance the site. We would set this up as an additional page and use at least one API from either Monster or Hackrecruiter. We would also consider having a freelancer section, potentially using the GetaFreelancer API.

#### Mentoring scheme.
In the future it would be great if we were able to incorporate some form of mentoring scheme into the site, intially we envision this to be a simple system where senior devs could signal on their portfolio that they would be interested in mentoring someone new to the industry, however we are aware that this could have the potential to allow some senior devs to become inundated with requests and e-mails from junior users. Alternative ways this could be set up could include a site similar to a volunteering page, where a senior dev would advertise that they were interested in volunteering, junior devs would then look through the index to find a mentor they feel is most suited to them, the senior dev could then take down their advert on that index when they have found a mentee. 

#### Online learning courses.
This could potentially include videos showing tips and tricks in some of the most used languages, or it could be an online learning platform introducing new skills, largely aimed at those looking for promotions or starting their own business. Exactly what the online courses would offer would largely depend on feedback from users one the site is up and running. 

#### Enhanced project and profile search.
Currently the site only offers users the option to search for projects using the  tech tools the creator used for the projects, we would however like to add a feature which would allow the creator to add tags based on the subject of their project so fellow users would be able to search based on a topic such as EdTech or FinTech etc.

#### Messaging and Connections
Ultimately we would aim to create a site that would allow users to link with other users and to message them through the site.  This was not seen as a priority for this project as the user portfolio shows the user's email address and linkedIn URLs providing the user to make contact in alternative ways. 


This project was created by:

[**Nimesh Patel**](https://github.com/n2kp)
[**Angela Maugey**] (https://github.com/maugeya)
[**Clare McLoughlin**] (https://github.com/McLoughlinClare)

##Using The Site
DevBook is available to and register on [here.](https://developerbook.herokuapp.com/) 
