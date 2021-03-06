var args = arguments[0] || {};

if (OS_ANDROID){
  function closeWin(evt){
    $.getView().close();
  }
}

$.getView().addEventListener('close', function(){
  // Let the tabgroup know that a focus event has occurred
  // in case the parent tab needs to be refreshed
  Alloy.Globals.tabGroup.fireEvent('focus');    
});