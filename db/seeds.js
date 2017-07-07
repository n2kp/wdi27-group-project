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
  },{
    email: 'mark@ga',
    username: 'Mark',
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
        title: 'A-level Physics Game',
        description: 'My first game created as my first project at GA. This game is designed for students beginning A-level physics to help build a bridge from GCSE, the game uses Javascript to test students and gives a mark based on answers correct and time to complete, the game then specifies exactly what the student needs to do to improve',
        image: '/images/physicsgame.png',
        projectUrl: 'https://sheltered-brushlands-62914.herokuapp.com/',
        dateCreated: '2017-05-20',
        tech: ['Git', 'Gulp', 'npm', 'Heroku', 'Jquery', 'HTML5', 'SASS', 'JavaScript'],
        createdBy: users[2]
      },{
        title: 'Posi-Live-vity',
        description: 'A RESTful app created for my second project, which incorporates mental health with physical health by pulling in data from the fitbit API and allowing users to log feelings and emotion associated with the day ',
        image: '/images/posi.png',
        projectUrl: 'https://desolate-dawn-12872.herokuapp.com/',
        dateCreated: '2017-05-20',
        tech: ['Git', 'Gulp', 'npm', 'Heroku', 'Jquery', 'HTML5', 'SASS', 'JavaScript'],
        createdBy: users[2]
      },{
        title: 'Lapland Magic',
        description: 'My recent project for a hotel in Lapland.  ',
        image: 'https://www.thebestdesigns.com/design-images/magicoflapland.net_0016_1.jpg',
        projectUrl: 'https://www.magicoflapland.net/',
        dateCreated: '2017-05-20',
        tech: ['Git', 'Gulp', 'npm', 'Heroku', 'Jquery', 'HTML5', 'SASS', 'JavaScript'],
        createdBy: users[2]
      },{
        title: 'Keep Portland Weired',
        description: 'A website designed for the community to celebrate the best bits of the community ',
        image: 'https://designmodo.com/wp-content/uploads/2015/12/21-Keep-Portland-Weird.jpg',
        projectUrl: 'https://www.magicoflapland.net/',
        dateCreated: '2017-05-20',
        tech: ['Git', 'Gulp', 'npm', 'Heroku', 'Jquery', 'HTML5', 'SASS', 'JavaScript'],
        createdBy: users[2]
      },{
        title: 'Creative Cloud',
        description: 'My project based on the Adobe website, testing my CSS skills',
        image: 'https://designmodo.com/wp-content/uploads/2015/12/21-Keep-Portland-Weird.jpg',
        projectUrl: 'https://www.magicoflapland.net/',
        dateCreated: '2017-05-20',
        tech: ['Git', 'Gulp', 'Aws','Azure','Codeigniter', 'Codepen', 'Dreamhost', 'Heroku', 'Jquery', 'HTML5', 'SASS', 'JavaScript'],
        createdBy: users[1]
      },{
        title: 'My Tumbler',
        description: 'I wanted to practise my CSS skills, so I decided to created a replica of tumbler',
        image: 'https://webby-gallery-production.s3.amazonaws.com/uploads/asset/image/entry-asset-8377/optimized_entry_id_141036_idx_0_asset_id_1578.jpg',
        projectUrl: 'https://www.magicoflapland.net/',
        dateCreated: '2016-08-20',
        tech: ['Git', 'Gulp', 'npm', 'Heroku', 'Jquery', 'HTML5', 'SASS', 'JavaScript'],
        createdBy: users[2]
      },{
        title: 'Events and Co',
        description: 'This is a basic website I designed for an events company',
        image: 'http://sbws.biz/wp-content/uploads/2014/07/best-web-design.png',
        projectUrl: 'https://www.magicoflapland.net/',
        dateCreated: '2016-08-20',
        tech: ['Git', 'Gulp', 'npm', 'Heroku', 'Jquery', 'HTML5', 'SASS', 'JavaScript'],
        createdBy: users[2]
      },{
        title: 'Barry\'s Portfolio',
        description: 'Portfolio that I created upon leaving the WDI course at GA. Check out the link and contact for more information',
        image: 'http://i.imgur.com/3BvVoSJ.png',
        projectUrl: 'https://unsplash.com/?photo=Nod1nQ0i5a0',
        dateCreated: '2016-12-03',
        tech: ['Ruby', 'HTML', 'SCSS', 'Bootstrap'],
        createdBy: users[4]
      },{
        title: 'Essential',
        description: 'My porfolio. Went for a minimal page with plenty of photo backgrounds shot on holiday',
        image: 'http://i.imgur.com/XExXfW4.png',
        projectUrl: 'https://unsplash.com/?photo=FlwhX4vtzt0' ,
        dateCreated: '2017-02-15',
        tech: ['Git', 'Gulp', 'Python', 'SASS', 'HTML5'],
        createdBy: users[5]
      },{
        title: 'Whoa Nelly',
        description: 'Project working on the Whoa Nelly Catering website. Quite a minimal page but I learnt loads and really pleased with the outcome!',
        image: 'http://i.imgur.com/XclRzrj.png',
        projectUrl: 'https://whoanellycatering.com/',
        dateCreated: '2016-11-28',
        tech: ['Git', 'CPlusPlus', 'HTML5', 'SASS', 'Gulp'],
        createdBy: users[1]
      },{
        title: 'Indigo',
        description: 'Working to build online journal. Really simple but effective design.',
        image: 'http://i.imgur.com/Crxf5NO.png',
        projectUrl: 'https://unsplash.com/?photo=1d7J26G9xVY',
        dateCreated: '2017-03-10',
        tech: ['Elm', 'Plone', 'Wordpress', 'Azure'],
        createdBy: users[5]
      },{
        title: 'A higher plain',
        description: 'An example of the work I did for A higher plain website.',
        image: 'http://i.imgur.com/ILgpZf7.png',
        projectUrl: 'https://unsplash.com/?photo=Ya3FqJdKVaw',
        dateCreated: '2016-09-28',
        tech: ['Codeigniter', 'npm', 'Apache', 'Grunt', 'Codepen'],
        createdBy: users[4]
      },{
        title: 'A Soft Murmur',
        description: 'Small project working with ambient sounds.',
        projectUrl: 'https://unsplash.com/?photo=1CD3fd8kHnE',
        image: 'http://i.imgur.com/O315LTo.png',
        dateCreated: '2017-04-12',
        tech: ['npm', 'ReactJS', 'CPlusPlus', 'Python', 'SASS'],
        createdBy: users[3]
      }]);
  })
  .then((projects) => console.log(`${projects.length} projects created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
