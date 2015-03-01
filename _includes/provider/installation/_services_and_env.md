### 4. Services Array and .env

#### Add to `config/services.php`.

{% highlight php %}
'23andme' => [
    'client_id' => env('{{ name | upcase }}_KEY'),
    'client_secret' => env('{{ name | upcase }}_SECRET'),
    'redirect' => env('{{ name | upcase }}_REDIRECT_URI'), {% if extra_service_lines != empty %} {% for line in extra_service_lines %}    
    '{{ line.key | downcase }}' => env('{{ name | upcase }}_{{ line.value | upcase }}'), {% endfor %}
], {% else %}
],
{% endif %}
{% endhighlight %}

#### Append provider values to your `.env` file

{% highlight php %}
// other values above
{{ name | upcase }}_KEY=yourkeyfortheservice
{{ name | upcase }}_SECRET=yoursecretfortheservice
{{ name | upcase }}_REDIRECT_URI=https://example.com/login {% if extra_env_lines != empty %} {% for line in extra_env_lines %}
{{ name | upcase }}_{{ line.key | upcase }}={{ line.value }} {% endfor %} {% endif %}
{% endhighlight %}
