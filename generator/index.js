const fs = require('fs')
const slugify = require('@sindresorhus/slugify')

const template = fs.readFileSync('./template', 'utf8')
const providers = require('../.vuepress/providers')

providers.forEach(provider => {
    const socialiteName = provider.socialite_name || provider.name

    let output = template
    output = output.replace(/__TITLE__/g, provider.name)
    output = output.replace(/__SOCIALITE__/g, socialiteName)
    output = output.replace(/__GITHUB__/g, provider.github)
    output = output.replace(/__PACKAGIST__/g, provider.packagist)
    output = output.replace(/__PROVIDER_KEY__/g, socialiteName.toUpperCase())
    output = output.replace(/__PROVIDER_KEY_LOWER__/g, socialiteName.toLowerCase())
    output = output.replace(/__LISTENER__/g, provider.listener.replace(/\\/g, '\\\\'))

    const filename = slugify(provider.name)

    fs.writeFileSync(`../providers/${filename}.md`, output)
})

