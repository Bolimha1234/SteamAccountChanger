# SteamAccountChanger
 A node.js app that can change between steam accounts instantly. (CLI)

![Screenshot](https://i.imgur.com/UpKqCxL.png "Screenshot")

To build a .exe from the app using pkg, package.json is already adapted.
```
npm install
pkg package.json
```
And it should create a .exe.

How to use:
* Change the location of Steam shortcut to your steam path.
* npm i
* Change accs.json replace steam account details. **WARNING**: If you don't have steam guard, remove the lines that say "shared_secret".
* node index.js
* Enjoy!

## How to get your shared_secret?
Your shared secret is stored in your steam guard path, if you have your steam guard installed on the phone, you may need to root to get access to the hidden files.
I will leave here a guide that should help manage to get your shared_secret.
__[https://github.com/SteamTimeIdler/stidler/wiki/Getting-your-%27shared_secret%27-code-for-use-with-Auto-Restarter-on-Mobile-Authentication](https://github.com/SteamTimeIdler/stidler/wiki/Getting-your-%27shared_secret%27-code-for-use-with-Auto-Restarter-on-Mobile-Authentication)__