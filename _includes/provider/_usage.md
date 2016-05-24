* You should now be able to use it like you would regularly use Socialite (assuming you have the facade installed):

```php
return Socialite::with('{{ name | downcase | remove: '.' }}')->redirect();
```

#### Stateless

* You can set whether or not you want to use the provider as stateless.  Remember that the OAuth provider (Twitter, Tumblr, etc) must support whatever option you choose.

```php
// to turn off stateless
return Socialite::with('{{ name | downcase | remove: '.' }}')->stateless(false)->redirect();

// to use stateless
return Socialite::with('{{ name | downcase | remove: '.' }}')->stateless()->redirect();
```


#### Reference

* [Laravel Socialite Docs](https://github.com/laravel/socialite)
* [Laracasts Socialite video](https://laracasts.com/series/whats-new-in-laravel-5/episodes/9)
