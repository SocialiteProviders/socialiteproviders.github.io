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
// other values above
{{ provider_key }}_KEY=yourkeyfortheservice
{{ provider_key }}_SECRET=yoursecretfortheservice
{{ provider_key }}_REDIRECT_URI=https://example.com/login {% if extra_env_lines != empty %} {% for line in extra_env_lines %}
{{ provider_key }}_{{ line.key | upcase }}={{ line.value }} {% endfor %} {% endif %}
{% endhighlight %}


#### Reference

* [Laravel docs on configuration](http://laravel.com/docs/master/configuration)
