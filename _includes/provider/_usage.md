* You should now be able to use it like you would regularly use Socialite:

{% highlight php %}
return Socialite::with('{{ name | downcase | remove: '.' }}')->redirect();
{% endhighlight %}
