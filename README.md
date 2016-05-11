# Ftv::Components::Cnil

This project is part of [francetv zoom open source projects](https://github.com/francetv/zoom-public) (iOS, Android and Angular).

CNIL bar to be displayed on top of your website. This bar is compliant with french law : [https://www.cnil.fr/fr/cookies-traceurs-que-dit-la-loi](https://www.cnil.fr/fr/cookies-traceurs-que-dit-la-loi)

## Get sources

```
git clone git@github.com/francetv/ftv-angular-cnil.git
```

## Required dependencies

- [npm](https://nodejs.org/)
- [gem](https://rubygems.org/)

## How to use

Include javascript

```
<script src="dist/js/ftv.components.cnil.min.js"></script>
```

Include this tag with link to your cnil page.

```
<ftv-cnil link="http://mywebsite.com/privacy.html"></ftv-cnil>
```

## Build process

```
sudo apt-get install ruby ruby-dev gem
npm install -g gulp

npm install
sudo gem install compass

gulp build
```

# Development build for front web only

```
gulp build-dev
```

## Demo

```
npm install -g http-server
gulp build
http-server
```

Open [demo](http://127.0.0.1:8080/demo.html)
