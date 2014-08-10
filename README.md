tale-plugin-youtube
===================

Add a youtube video to your tale chapter.

Usage
=====

    npm install tale-plugin-youtube

On your chapter.json add the following

    "plugins": [
        "youtube"
    ],
    "youtube": "-u7Jg5_Yk-I",
    "start_time": 61,
    "end_time": 300,

Add this section to your template

      {{#youtube}}
        <iframe width="400" height="315" src="{{youtube}}" frameborder="0" allowfullscreen></iframe>
      {{/youtube}}