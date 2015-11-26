# sp-user-profile-properties-for-all-users
Get SharePoint user profile properties for all users in site collection.

## Installation
```
npm install sp-user-profile-properties-for-all-users --save
```

## Usage
```js
var userProfilePropertyNames = require('sp-user-profile-properties-for-all-users');

var options = {
    webUrl: 'web url',
    useAppContextSite: true
};

userProfilePropertyNames(options, function (userProfilePropertiesCollection) {
    // Now you have an array of user profile properties of each user
}, function (errorMessage) {
    // Error
});

```

## License
MIT.
