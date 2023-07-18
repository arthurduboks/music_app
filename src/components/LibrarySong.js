import React from "react";

const LibrarySong = ({
  song,
  songs,
  setCurentSong,
  id,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandle = async () => {
    await setCurentSong(song);
    audioRef.current.play();
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      onClick={songSelectHandle}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
