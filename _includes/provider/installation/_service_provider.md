### 2. Service Provider

* Remove `Laravel\Socialite\SocialiteServiceProvider` from your `providers[]` array in `config\app.php` if you have added it already.

* Add `\SocialiteProviders\Manager\ServiceProvider::class` to your `providers[]` array in `config\app.php`.

For example:

``` php
'providers' => [
    // a whole bunch of providers
    // remove 'Laravel\Socialite\SocialiteServiceProvider',
    \SocialiteProviders\Manager\ServiceProvider::class, // add
];
```

* Note: If you would like to use the Socialite Facade, you need to [install it.](http://laravel.com/docs/5.0/authentication#social-authentication)
