* You should now be able to use it like you would regularly use Socialite (assuming you have the facade installed):

```php
return Socialite::with('{{ provider_key | downcase }}')->redirect();
```

#### Reference

* [Laravel Socialite Docs](https://github.com/laravel/socialite)
* [Laracasts Socialite video](https://laracasts.com/series/whats-new-in-laravel-5/episodes/9)
