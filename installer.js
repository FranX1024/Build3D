/* async promise based content loader */
function download_resource(theUrl) {
  return new Promise(resolve => {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      resolve(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send(null);
  });
}

(async function() {
  /* load sources ( app_html = application layout, app_init = autorun script ) */
  var app_html = await download_resource("https://raw.githack.com/windows93-community/Build3D/master/app.html");
  var app_init = await download_resource("https://raw.githack.com/windows93-community/Build3D/master/app_init.js");

  /* save sources to filesystem */
  $db.set("etc/3DBuilder/models/README.txt", "You can save your models here.");
  $db.set("etc/3DBuilder/app.html", app_html);
  $db.set("boot/Build3D_init.js", app_init);

  /* create desktop link */
  localStorage.setItem('desktop/Build3D.lnk42', '{"exe":"Build3D"}');

  /* reload page (reboot) */
  location.href="http://windows93.net";
})();
