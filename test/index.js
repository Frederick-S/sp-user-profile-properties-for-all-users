var queryString = require('query-string');
var userProfileProperties = require('../index');

var hostWebUrl = queryString.parse(location.search).SPHostUrl;
var options = {
    webUrl: hostWebUrl,
    useAppContextSite: true
};

userProfileProperties(options, function (userProfilePropertiesCollection) {
    console.log(userProfilePropertiesCollection);

    $('#message').html('Please check console.');
}, function (sender, args) {
    $('#message').html(args.get_message());
});
