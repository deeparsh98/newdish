var TAG = 'followback';
var UNFOLLOW_1 = 'Following';
var UNFOLLOW_2 = 'Unfollow';
casper.test.begin('Find people to unfollow', 1, 
    function suite(test) {
        casper.start('https://www.instagram.com/explore/tags/' + TAG, function() {
            var fs = require('fs');
            var utils = require('utils');
            var data = fs.read('/tmp/peopletofollow');
            var allLinks = data.split(',');

            for (var i in allLinks) {
                var link = allLinks[i]
                if (link.indexOf('undefined') == -1) {
                    casper.thenOpen(link, function() {
						//casper.capture('CurrentScreen.png');
                        var x = require('casper').selectXPath;
						casper.wait(1000,function(){
						});
						casper.then(function(){
						this.clickLabel(UNFOLLOW_1, 'button');});
						casper.then(function(){casper.wait(1500);});
						casper.then(function(){
						this.clickLabel(UNFOLLOW_2, 'button');});
					});
                }
            }           
        });

        casper.on('remote.message', function(message) {
            this.echo(message);
        });

        casper.run(function() {
            this.exit();
        });
    }
);
/*casper.then(function(){
this.click('button.deleteButton');
});
*/
