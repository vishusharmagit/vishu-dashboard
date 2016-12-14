require('shelljs/global');

exec('npm install');
exec('bower install');
exec('ember install:addon node_modules/vishu-components');

