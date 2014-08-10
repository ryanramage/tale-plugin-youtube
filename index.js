var marked = require('marked');

module.exports = function(options) {
  if (!options) options = {}
  return render.bind(null, options);
}



function render(options, ractive, read, chapter, key, done) {

  if (!options) options = {};
  if (!options.ractive_key) options.ractive_key = 'content';


  if (chapter.youtube) {
    var embedURL: 'http://www.youtube.com/embed/'+ chapter.youtube +'?autoplay=1&controls=0&modestbranding=1'

    if (chapter.start_time) embedURL += '&start=' + chapter.start_time;
    if (chapter.end_time)   embedURL += '&end='   + chapter.end_time;

    ractive.set('youtube', embedURL);
    done();
  }
}

