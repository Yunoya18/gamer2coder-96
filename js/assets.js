fetch("https://gamertocoder.garena.co.th/api/assets")
  .then((response) => {
    if (response.status !== 200) {
      return response.status;
    }
    return response.json();
  })
  .then((data) => {
    if (typeof data == "number") {
      alert(data);
    } else {
        document.getElementById('bg').style.backgroundImage = "linear-gradient(rgba(0,0,0,0.50),rgba(0,0,0,0.30)), url("+ data.banner[0] +")"
        document.getElementById('pvp').style.backgroundImage = "url("+ data.wallpaper[12] +")"
        document.getElementById('simulation').style.backgroundImage = "url("+ data.wallpaper[0] +")"
      }
    }
  );

fetch("https://gamertocoder.garena.co.th/api/minigame/6")
  .then((response) => {
    if (response.status !== 200) {
      return response.status;
    }
    return response.json();
  })
  .then((data) => {
    if (typeof data == "number") {
      alert(data);
    } else {
        document.getElementById('horror').style.backgroundImage = "url("+ data.images[0] +")"
      }
    }
  );

fetch("https://gamertocoder.garena.co.th/api/minigame/5")
  .then((response) => {
    if (response.status !== 200) {
      return response.status;
    }
    return response.json();
  })
  .then((data) => {
    if (typeof data == "number") {
      alert(data);
    } else {
        document.getElementById('battleroyale').style.backgroundImage = "url("+ data.images[0] +")"
      }
    }
  );