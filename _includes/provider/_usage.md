* You should now be able to use it like you would regularly use Socialite (assuming you have the facade installed):

{% highlight php %}
return Socialite::with('{{ name | downcase | remove: '.' }}')->redirect();
{% endhighlight %}

#### Reference

* [Laravel Socialite Docs](https://github.com/laravel/socialite)  
* [Laracasts Socialite video](https://laracasts.com/series/whats-new-in-laravel-5/episodes/9)
