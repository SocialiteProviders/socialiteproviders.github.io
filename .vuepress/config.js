const providers = require('./providers')

let sidebarItems = []
Object.values(providers).forEach((provider) => sidebarItems.push([
  `/providers/${provider.name}`, provider.name
]))

module.exports = {
  title: 'Socialite Providers',
  description: 'A Collection of Providers for Laravel Socialite',
  themeConfig: {
    nav: [{
      text: 'About',
      link: '/about',
    }, {
      text: 'Contribute',
      link: '/contribute'
    }, {
      text: 'GitHub',
      link: 'https://github.com/SocialiteProviders'
    }, {
      text: 'Packagist',
      link: 'https://packagist.org/packages/socialiteproviders/'
    }],
    sidebar: sidebarItems.sort()
  }
}
