document.querySelectorAll('.tab').forEach(function(tab){
  tab.addEventListener('click', function(){
    document.querySelectorAll('.tab').forEach(function(t){ t.classList.remove('active'); });
    tab.classList.add('active');
  });
});
