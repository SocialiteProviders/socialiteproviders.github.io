---
home: true
features:
- title: Simplicity First
  details: Minimal setup with a familiar structure helps you focus on developing your newest product.
- title: Seamless Integration
  details: Following the same API as Laravel Socialite allows for a seamless integration.
- title: Powerful Support
  details: The Socialite Manager grants you access to both custom and official providers.
footer: MIT Licensed | Copyright © 2018-present SocialiteProviders
---

``` bash
# install
composer require socialiteproviders/twitter

# register
protected $listen = [
    \SocialiteProviders\Manager\SocialiteWasCalled::class => [
        'SocialiteProviders\Twitter\TwitterExtendSocialite@handle'
    ],
];

# configure
'twitter' => [
    'client_id' => env('TWITTER_KEY'),
    'client_secret' => env('TWITTER_SECRET'),
    'redirect' => env('TWITTER_REDIRECT_URI'),
]

# start building
return Socialite::with('twitter')->redirect();
```
