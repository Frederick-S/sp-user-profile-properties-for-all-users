# sp-user-profile-properties-for-all-users
Get SharePoint user profile properties for all users in site collection.

## Installation
```
npm install sp-user-profile-properties-for-all-users --save
```

## Usage
```js
var userProfileProperties = require('sp-user-profile-properties-for-all-users');

var options = {
    webUrl: 'web url',
    useAppContextSite: true
};

userProfileProperties(options, function (userProfilePropertiesCollection) {
    // Now you have an array of user profile properties of each user
}, function (errorMessage) {
    // Error
});

```

## License
MIT.
