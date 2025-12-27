app.json config options:

"name": "real-estate-app", --> for app name on the app list
"slug": "real-estate-app", --> unique identifier for expo itself to open it on browser
"orientation": "portrait", --> default value
"scheme": "realestateapp", --> custom url to enable deep linking
"newArchEnabled": true, --> use the new bridgeless architecture for better performant / before we had to have a bridge that would communicate between js and native mobile app code which led to performance issue bottlenecks delays, jerky empty frames and etc. now, no bridge but uses fabric for rendering, turbo modules and JSI to allow direct synchronous communication between JS and native code without the bridge

Then we have web/android/ios specific features
