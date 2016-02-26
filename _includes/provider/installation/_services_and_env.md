<h3 class="section-subtitle">4. Services Array and .env</h3>

<h4 class="section-subtitle">Add to `config/services.php`.</h4>

```php
'{{ provider_key | downcase }}' => [
    'client_id' => env('{{ provider_key }}_KEY'),
    'client_secret' => env('{{ provider_key }}_SECRET'),
    'redirect' => env('{{ provider_key }}_REDIRECT_URI'), {% if extra_service_lines != empty %} {% for line in extra_service_lines %}
    '{{ line.key | downcase }}' => env('{{ provider_key }}_{{ line.value | upcase }}'), {% endfor %}
], {% else %}
],
{% endif %}
```

<h4 class="section-subtitle">Append provider values to your `.env` file</h4>

```php
// other values above
{{ provider_key }}_KEY=yourkeyfortheservice
{{ provider_key }}_SECRET=yoursecretfortheservice
{{ provider_key }}_REDIRECT_URI=https://example.com/login {% if extra_env_lines != empty %} {% for line in extra_env_lines %}
{{ provider_key }}_{{ line.key | upcase }}={{ line.value }} {% endfor %} {% endif %}
```


<h4 class="section-subtitle">Reference</h4>

* [Laravel docs on configuration](http://laravel.com/docs/master/configuration)
