function denyCopy () {
  alert ('Your can\'t copy the text on this page!'  );
  return false;
}
document.ondragstart = denyCopy;
document.onselectstart = denyCopy;
document.oncontextmenu = denyCopy;