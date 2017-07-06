const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

const Project = require('../models/project');
const User = require('../models/user');

Project.collection.drop();
User.collection.drop();

User
  .create([{
    email: 'nimesh@ga',
    username: 'Nimesh',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    email: 'angela@ga',
    username: 'Angela',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    email: 'clare@ga',
    username: 'Clare',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    email: 'tina@ga',
    username: 'TinaTurner',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    email: 'barry@ga',
    username: 'BarryWhite',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    email: 'beyonce@ga',
    username: 'Beyonce',
    password: 'password',
    passwordConfirmation: 'password'
  }])

  .then((users) => {
    console.log(`${users.length} users created`);

    return Project
      .create([{
        title: 'The Big J',
        description: 'Project to showcase a portfolio with a big J because the clients name was Jack and he wanted the site to show that',
        image: 'https://s3-eu-west-1.amazonaws.com/wdi27-devbook/portfolio_001.png',
        projectUrl: 'https://jacekjeznach.com/',
        dateCreated: '2017-04-12',
        tech: ['npm', 'HTML5', 'JavaScript', 'SASS', 'Jquery'] ,
        createdBy: users[0]
      },{
        title: 'Multi Projos',
        description: 'Site to display multiple projects at the same time to show the user ',
        image: 'https://s3-eu-west-1.amazonaws.com/wdi27-devbook/portfolio_002.png',
        projectUrl: 'http://claudiocalautti.cc/',
        dateCreated: '2017-04-01',
        tech: ['Mongodb', 'Gulp', 'Git', 'Bootstrap', 'SASS', 'HTML5', 'Nodejs'],
        createdBy: users[1]
      },{
        title: 'Saturn C',
        description: 'Wanted to create a entrance to my site which had stuff circling my name like the rings of Saturn have',
        image: 'https://s3-eu-west-1.amazonaws.com/wdi27-devbook/portfolio_003.png',
        projectUrl: 'http://juanmartinez.co.uk/',
        dateCreated: '2015-06-21',
        tech: ['ReactJS', 'JavaScript', 'Grunt', 'Git', 'Aws', 'Heroku', 'CSS3'],
        createdBy: users[2]
      },{
        title: 'Dark Grey',
        description: 'Simple project to put a uniform background onto a site',
        image: 'https://s3-eu-west-1.amazonaws.com/wdi27-devbook/portfolio_004.png',
        projectUrl: 'https://caferati.me/',
        dateCreated: '2014-05-31',
        tech: ['npm', 'Git', 'Codepen', 'Jquery', 'JavaScript', 'HTML5', 'SASS'],
        createdBy: users[0]
      },{
        title: 'Colourful Icon',
        description: 'Showcasing my new avatar icon on the top of the page to make the users feel like they are contacting myself personally',
        image: 'https://s3-eu-west-1.amazonaws.com/wdi27-devbook/portfolio_005.png',
        projectUrl: 'http://tsimenis.com/#mariettafafouti',
        dateCreated: '2017-05-12',
        tech: ['Ruby', 'JavaScript', 'Heroku', 'Codepen', 'npm'],
        createdBy: users[1]
      },{
        title: 'Deep Blue Site',
        description: 'API, Animations and relevant content all make this project look stunning',
        image: 'https://s3-eu-west-1.amazonaws.com/wdi27-devbook/portfolio_006.png',
        projectUrl: 'http://johnkavanagh.co.uk/',
        dateCreated: '2014-06-25',
        tech: ['CSS3', 'Heroku', 'HTML5', 'SASS', 'Aws'],
        createdBy: users[2]
      },{
        title: 'Showing Off',
        description: 'Just wanted to create a project where I could rub peoples noses in all the amazing companies Ive worked for',
        image: 'https://s3-eu-west-1.amazonaws.com/wdi27-devbook/portfolio_007.png',
        projectUrl: 'https://roybarber.com/',
        dateCreated: '2015-04-24',
        tech: ['Mongodb', 'Bootstrap', 'HTML5', 'SASS','Shell'],
        createdBy: users[0]
      },{
        title: 'Ford Store Game',
        description: 'Project to create a game to be implemented on the Ford Store website',
        image: 'https://s3-eu-west-1.amazonaws.com/wdi27-devbook/portfolio_008.png',
        projectUrl: 'http://joedarrington.com/',
        dateCreated: '2015-10-13',
        tech: ['PHP', 'HTML5', 'Heroku', 'Gulp', 'Git'],
        createdBy: users[1]
      },{
        title: 'Lots of Projects',
        description: 'Displaying all the recent work that I have done to show what I am capable of and how it looks on completion',
        image: 'https://s3-eu-west-1.amazonaws.com/wdi27-devbook/portfolio_009.png',
        projectUrl: 'http://mikeybox.com/',
        dateCreated: '2017-02-03',
        tech: ['Fedora', 'Git', 'Apache', 'Gulp', 'Aws'],
        createdBy: users[2]
      },{
        title: 'Guess Ru?',
        description: 'A small game created in my first project at GA. Using JavaScript,  a board that hides an image, tiles are removed as a button is pressed. The score goes down as each tile is removed, the aim is to guess the drag queen image before there are no points left. Also a special bonus round at the end of the game!',
        image: 'http://i.imgur.com/j5h5tAN.png',
        projectUrl: 'https://sheltered-reef-48200.herokuapp.com/',
        dateCreated: '2017-05-20',
        tech: ['Git', 'Gulp', 'npm', 'Heroku', 'Jquery', 'HTML5', 'SASS', 'JavaScript'],
        createdBy: users[1]
      },{
        title: 'Barry\'s Portfolio',
        description: 'Portfolio that I created upon leaving the WDI course at GA. Check out the link and contact for more information',
        image: 'http://i.imgur.com/3BvVoSJ.png',
        projectUrl: 'https://unsplash.com/?photo=Nod1nQ0i5a0',
        dateCreated: '2016-12-03',
        tech: ['Ruby', 'HTML', 'SCSS', 'Bootstrap'],
        createdBy: users[4]

      }]);
  })
  .then((projects) => console.log(`${projects.length} projects created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
