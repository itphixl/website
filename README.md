# Website
Website of PhiXL

## Work with the project
These are the instructions to work with the project

### Prerequisites

- Make sure you have Node at least v6.2.0
- Make sure you have NPM at least 3.8.9
- Make sure you have nodemon at least 1.9.1 installed globally or install it

### Installing
Installing the node modules

```
sudo npm install
```

### Development
To run the project in development make the command

```
sudo npm run dev:start
```

### Deployement
To deploy the project make the command

```
sudo npm run prod:init
```

### Static Deployement
To deploy the project in static production make the command

```
sudo npm run prod:static:init
```

Notes :
* static index is in ./src/assets/static/index.html
* if you change some webpack configurations make sure you have the rights scripts calls in the static index
* always make changes in the static index (./src/assets/static/index.html)

## Version
14.6.0

## Licence
This project is licensed under the MIT License

## Authors
* **PhiXL**
* **Jean-Baptiste Tinchant** - *Lead Designer*
* **Aurélien Dupays-Dexemple** - *Lead Developer*
