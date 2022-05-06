async function handleSearchSong () {
    const searchedSong = document.getElementById('song_input').value;
    const chordifyURL = `https://chordify.net/api/v2/search/?q=${searchedSong}&blogposts=0&artists=0&setlists=0&channels=0&include_deezer=false`;
    const songPath = await fetch(`https://api.allorigins.win/raw?url=${chordifyURL}`)
                    .then(response => {
                      if (response.ok) return response.json()
                      throw new Error('Network response was not ok.')
                    })
                    .then(data => data.songs[0].chordified.link);

    const strippedSongPath = songPath.slice(7);
    document.getElementById('chordify_embed').src = `https://chordify.net/embed/${strippedSongPath}`;
};
