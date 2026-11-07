(function(){
  var b=document.body,burger=document.querySelector('.burger'),scrim=document.querySelector('.scrim'),close=document.querySelector('.menu-close');
  function set(o){b.classList.toggle('menu-open',o);if(burger)burger.setAttribute('aria-expanded',o?'true':'false');if(scrim)scrim.hidden=!o}
  if(burger)burger.addEventListener('click',function(){set(!b.classList.contains('menu-open'))});
  if(scrim)scrim.addEventListener('click',function(){set(false)});
  if(close)close.addEventListener('click',function(){set(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});
  var menu=document.getElementById('menu');
  if(menu)menu.addEventListener('click',function(e){if(e.target.closest('a'))set(false)});
  window.addEventListener('resize',function(){if(window.innerWidth>991)set(false)});

  var form=document.querySelector('form.search');
  if(form){
    var pages=[['review.html','review score verdict pros cons'],['download.html','download suite windows mac installer'],['update-firmware.html','update firmware flash steps'],['backup-models.html','backup back up restore models'],['supported-radios.html','radios supported transmitters tandem twin horus'],['troubleshooting.html','troubleshooting fixes errors not working'],['ethos-vs-edgetx.html','edgetx compare vs']];
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var q=(form.querySelector('input').value||'').toLowerCase().trim();
      if(!q)return;
      for(var i=0;i<pages.length;i++){if(pages[i][1].indexOf(q)>-1||q.indexOf(pages[i][0].split('.')[0].split('/')[0])>-1){location.href=pages[i][0];return}}
      location.href='index.html';
    });
  }
  var si=document.getElementById('signin');
  if(si)si.addEventListener('submit',function(e){e.preventDefault();var s=document.getElementById('sent');if(s)s.hidden=false});
})();
