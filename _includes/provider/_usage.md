* You should now be able to use it like you would regularly use Socialite (assuming you have the facade installed):

{% highlight php %}
return Socialite::with('{{ name | downcase | remove: '.' | remove: '+' }}')->redirect();
{% endhighlight %}

#### Reference

* [Laravel Socialite Docs](http://laravel.com/docs/5.0/authentication#social-authentication)  
* [Laracasts Socialite video](https://laracasts.com/series/whats-new-in-laravel-5/episodes/9)
