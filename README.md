# alttpr-vue-twitch-chat-tracker

> A Link to the Past randomizer tracker which reacts on twitch chat.

## Setup

There are four input fields at the botton.

* channel
  The channel to listen to. If you're streaming on your channel, enter your username.
* listen user
  The user to listen to. Enter the username for the bot to react to.
* twitch user
  login for Twitch IRC. If you don't have a bot, use your username.
* twitch password (oauth)
  Generate a password-like token here: https://twitchapps.com/tmi/

Click connect.

### change tracker user (not implemented)

If another user should be the tracker guy of your trust, enter the new name and click update (button next to it).

---

## Progress

### NEXT

* react to chat commands (top priority obviously). See [#2](https://github.com/bmhm/alttpr-vue-twitch-chat-tracker/issues/2).
* Update button for another user which will be tracker. See [#3](https://github.com/bmhm/alttpr-vue-twitch-chat-tracker/issues/3).
* Save username, channel, oauth.
* Save item state.

### 2108-08-13
* Reconnect works a little better already.
* emit events on valid commands, so the tracker can react. Was [#1](https://github.com/bmhm/alttpr-vue-twitch-chat-tracker/issues/2).
Already can react to !hud \[bow, boomerang blue, boomerang red, arrows, silvers, laggerang, rederang, boomerang both\].

### 2018-08-10
Twitch integration: You can connect and send !hud commands without anything to happen.

### 2018-08-08
Still no twitch integration, which is following next.

### 2018-08-07
The standard layout is done.

---

## Preview

### Resizeable

Standard tournament tracker layout \
![Standard tracker layout](https://github.com/bmhm/alttpr-vue-twitch-chat-tracker/raw/master/assets/resizeable0.png)

Typical streamer’s layout \
![Standard tracker layout](https://github.com/bmhm/alttpr-vue-twitch-chat-tracker/raw/master/assets/resizeable1.png)

### SVG Graphics

Just look at this!

![Bombos](https://github.com/bmhm/alttpr-vue-twitch-chat-tracker/raw/master/assets/svg-graphics.png)

Hint: Take a closer look at bombos and the crystals!

---

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
