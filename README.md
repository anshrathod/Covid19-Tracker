<div align="center">

# Covid19-Tracker

[![](https://img.shields.io/badge/MADE%20WITH-IONIC-blue?style=for-the-badge&logo=ionic&labelColor=000000&color=3880FF)](https://ionicframework.com/) [![](https://img.shields.io/badge/BUILT%20FOR-ANDROID-blue?style=for-the-badge&logo=android&labelColor=000000&color=3DDC84&logoColor=3DDC84)](https://flask.palletsprojects.com/en/1.1.x/) [![](https://img.shields.io/badge/MADE%20USING-FLASK-blue?style=for-the-badge&logo=flask&labelColor=000000&color=blue&logoColor=ffffff)](https://flask.palletsprojects.com/en/1.1.x/) [![](https://img.shields.io/badge/MADE%20USING-ANGULARJS-blue?style=for-the-badge&logo=angularjs&labelColor=000000&color=E23237&logoColor=E23237)](https://angular.io/)  [![](https://img.shields.io/badge/IDE-VISUAL%20STUDIO%20CODE-blue?style=for-the-badge&logo=visual-studio-code&labelColor=000000&color=007ACC&logoColor=ffffff)](https://code.visualstudio.com/)
</div>

Track the latest Corona ( Covid-19 ) Virus numbers across the India.
In this app, you will get the latest stats on the number of corona virus cases in India.
Cases of Corona Virus in India are further segregated according to the Indian States.

- [x] Live Tracker of Corona Cases
- [x] Latest Corona News
- [x] In-App Calling facility
- [x] Information About Corona Virus

Download the app [here](https://bit.ly/coronavirus106)

## Tech

Covid19 Tracker uses a number of open source projects to work properly:

| Framework/Tech	| Decription |
|------------------------------------------------------	|-----------------------------------------------------------	|
| **[Ionic](https://ionicframework.com/)** 	| *HTML5 SDK that helps you build native-feeling mobile apps*	|
| **[AngularJS](https://angular.io/)** 	| *HTML enhanced for web apps!*	|
| **[node.js](https://nodejs.org/en/)** 	| *Evented I/O for the backend*	|
| **[jQuery](https://jquery.com/)** 	| *duh*	|
| **[Flask](https://flask.palletsprojects.com/en/1.1.x/)** 	| *Python API for scraping.*	|

## Installation

```python
if you_want_see_what_the_app_looks_like:
    if develop_the_backend_yourself:
        run the app using this repo
        return
else:
    download the app
```

To run the app follow the steps:

1. Clone the repository

    ```shell
    git clone https://github.com/anshrathod/Covid19-Tracker.git
    ```

2. Install ionic and cordova

    ```shell
    npm install -g ionic cordova
    ```
4. Install the Dependencies

    ```sh
    cd Covid19-Tracker
    npm install
    ```
5. Copy the `./jquery.min.js` file to `node_module/@types/jquery/dist/`
    
    For Windows
    ```sh
    copy  .\jquery.min.js .\node_modules\@types\jquery\dist\
    ```
    For Linux 
    ```sh
    cp  ./jquery.min.js ./node_modules/@types/jquery/dist/
    ```

5. Run the app on a browser

    ```shell
    ionic serve --host=localhost --port=8000
    ```

6. Open localhost in your browser @http://localhost:8000

7. Build the app

    ```shell
    ionic cordova build android
    ```

8. You will the .apk file in the directory `/platforms/android/app/build/outputs/apk/debug`

## To-dos

 - [ ]  Add World-Section in the app.
 - [ ] Add Districts for all the states of India.
 - [ ] Improve UI by adding graphs and stuff.

<div align="center">

## License

[![](https://img.shields.io/badge/LICENSE-MIT-blue?style=for-the-badge&labelColor=099c77&color=335163)](https://opensource.org/licenses/MIT) [![](https://img.shields.io/badge/CERTIFIED%20BY-SNOOP%20LION-blue?style=for-the-badge&&labelColor=050505&color=b31755&logoColor=ffffff)](#) 


-----

[![](https://img.shields.io/badge/MADE%20BY%20ANSH-WITH%20LOVE-blue?style=for-the-badge&labelColor=64c486&color=244224)](#) [![](https://img.shields.io/badge/STAY%20HOME-STAY%20SAFE-blue?style=for-the-badge&labelColor=64c&color=317)](#)

</div>
