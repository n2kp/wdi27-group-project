const port    = process.env.PORT || 4000;
const env     = process.env.NODE_ENV || 'development';
const dbURI = process.env.MONGOB_URI || `mongodb://localhost/wdi27-group-project-${env}`;
const secret = process.env.SECRET || 'shhh, secret squirrel';



module.exports = { port, env, dbURI, secret };
