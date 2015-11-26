var each = require('sp-each');
var contextHelper = require('sp-context-helper');

module.exports = function (options, done, error) {
    var contextWrapper = contextHelper(options.webUrl, options.useAppContextSite);
    var web = contextWrapper.web;
    var clientContext = contextWrapper.clientContext;
    var siteUsers = web.get_siteUsers();

    clientContext.load(siteUsers);
    clientContext.executeQueryAsync(function () {
        var propertiesCollection = [];
        var userProfilePropertiesCollection = [];
        var peopleManager = new SP.UserProfiles.PeopleManager(clientContext);

        each(siteUsers, function (user, index) {
            var properties = peopleManager.getPropertiesFor(user.get_loginName());

            propertiesCollection.push(properties);

            clientContext.load(properties);
        });

        clientContext.executeQueryAsync(function () {
            for (var i = 0, length = propertiesCollection.length; i < length; i++) {
                try {
                    // It will throw exception for default users like "c:0(.s|true"
                    userProfilePropertiesCollection.push(propertiesCollection[i].get_userProfileProperties());
                } catch (err) {}
            }

            done(userProfilePropertiesCollection);
        }, function (sender, args) {
            error(args.get_message());
        })
    }, function (sender, args) {
        error(args.get_message());
    });
};
