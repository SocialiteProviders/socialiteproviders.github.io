### 4. Services Array and .env

#### Add to `config/services.php`.

{% highlight php %}
'{{ provider_key | downcase }}' => [
    'client_id' => env('{{ provider_key }}_KEY'),
    'client_secret' => env('{{ provider_key }}_SECRET'),
    'redirect' => env('{{ provider_key }}_REDIRECT_URI'), {% if extra_service_lines != empty %} {% for line in extra_service_lines %}
    '{{ line.key | downcase }}' => env('{{ provider_key }}_{{ line.value | upcase }}'), {% endfor %}
], {% else %}
],
{% endif %}
{% endhighlight %}

#### Append provider values to your `.env` file

{% highlight php %}
// other environment values will be in this file...
{{ provider_key }}_KEY=yourkeyfortheservice
{{ provider_key }}_SECRET=yoursecretfortheservice
{{ provider_key }}_REDIRECT_URI=https://example.com/login {% if extra_env_lines != empty %} {% for line in extra_env_lines %}
{{ provider_key }}_{{ line.key | upcase }}={{ line.value }} {% endfor %} {% endif %}
{% endhighlight %}

### Dynamically Passing a Config

You can dynamically pass a config by using:
```
$key = 'SocialiteProviders.config.{{ provider_key | downcase }}';
$config = new \SocialiteProviders\Manager\Config('key', 'secret', 'callbackUri');
$this->app->instance($key, $config)
```

**You must call this before you run any Socialite methods.**


#### Reference

* [Laravel docs on configuration](http://laravel.com/docs/master#configuration)
