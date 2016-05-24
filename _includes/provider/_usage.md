* You should now be able to use it like you would regularly use Socialite (assuming you have the facade installed):

```php
return Socialite::with('{{ name | downcase | remove: '.' }}')->redirect();
```

### Stateless

* You can set whether or not you want to use the provider as stateless.  Remember that the OAuth provider (Twitter, Tumblr, etc) must support whatever option you choose.

```php
// to turn off stateless
return Socialite::with('{{ name | downcase | remove: '.' }}')->stateless(false)->redirect();

// to use stateless
return Socialite::with('{{ name | downcase | remove: '.' }}')->stateless()->redirect();
```


### Overriding a config

If you need to override the provider's environment or config variables on a per endpoint basis, you may use the following:

```php
$clientId = "secret";
$clientSecret = "secret";
$redirectUrl = "http://yourdomain.com/api/redirect";
$additionalProviderConfig = ['site' => 'meta.stackoverflow.com'];
$config = new \SocialiteProviders\Manager\Config($clientId, $clientSecret, $redirectUrl, $additionalProviderConfig);
return Socialite::with('{{ name | downcase | remove: '.' }}')->setConfig($config)->redirect();
```


#### Reference

* [Laravel Socialite Docs](https://github.com/laravel/socialite)
* [Laracasts Socialite video](https://laracasts.com/series/whats-new-in-laravel-5/episodes/9)
