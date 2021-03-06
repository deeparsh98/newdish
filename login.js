var YOUR_USERNAME = 'NNN';
var YOUR_PASSWORD = 'NNN';
var ENTER_BUTTON_NAME = 'Log In';

casper.test.begin('Instagram login', 1, 
    function suite(test) {

        casper.start('https://www.instagram.com/accounts/login/', function() {
            this.echo(this.getTitle());
            console.log('Starting location is ' + this.getCurrentUrl());
        });

        casper.then(function () {
            casper.waitForSelector("form", function() {
                this.fillSelectors('form', {
                    'input[name="username"]': YOUR_USERNAME,
                    'input[name="password"]': YOUR_PASSWORD
                }, true);

                this.clickLabel(ENTER_BUTTON_NAME, 'button');
            });
        });

        casper.then(function () {
            casper.wait(15000, function() {

                casper.capture('login.png');
                
                this.exit();
            });
        });

        casper.run(function() {
            this.echo('Finished with success!');
        });
    }
);
