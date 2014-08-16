module.exports = function(options) {
  if (!options) options = {}
  return init.bind(null, options);
}


function init(options, ractive, read) {

  if (!options) options = {};
  if (!options.ractive_key) options.ractive_key = 'youtube';

  ractive.on('chapter', function(chapter, key) {
    if (!chapter.youtube) return ractive.set('youtube', null);

    var embedURL= 'http://www.youtube.com/embed/'+ chapter.youtube +'?autoplay=1&controls=0&modestbranding=1'

    if (chapter.start_time) embedURL += '&start=' + chapter.start_time;
    if (chapter.end_time)   embedURL += '&end='   + chapter.end_time;

    ractive.set(options.ractive_key, embedURL);

  })

}

