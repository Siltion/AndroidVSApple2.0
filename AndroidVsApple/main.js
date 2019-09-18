document.getElementById('apple-click').addEventListener('click', appleSelection);
document.getElementById('android-click').addEventListener('click', androidSelection);

function appleSelection() {
    document.getElementById('vsImage').src= 'images/Apple-Logo.jpg';
    document.getElementById('exploreLnk').innerHTML= 'Apple Home';
    document.getElementById('exploreLnk').style.background= '#b6bcca';
    document.getElementById('exploreLnk').href="https://www.apple.com/";
    document.getElementById('bckClr').style.background= '#b6bcca';
  }

  function androidSelection() {
    document.getElementById('vsImage').src= 'images/Android-Logo.jpg';
    document.getElementById('exploreLnk').innerHTML= 'Android Home';
    document.getElementById('exploreLnk').style.background= '#a4c93b';
    document.getElementById('exploreLnk').href="https://www.android.com/";
    document.getElementById('bckClr').style.background= '#a4c93b';
  }