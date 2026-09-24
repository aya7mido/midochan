(function(){
  var t=document.getElementById('track'),d=document.getElementById('dots');
  var n=t.children.length,pages=n-2;
  for(var i=0;i<pages;i++){d.appendChild(document.createElement('span'))}
  function step(){return t.children[0].offsetWidth+24}
  function upd(){var i=Math.round(t.scrollLeft/step());[].forEach.call(d.children,function(s,k){s.className=k===i?'on':''})}
  document.getElementById('next').onclick=function(){t.scrollBy({left:step(),behavior:'smooth'})};
  document.getElementById('prev').onclick=function(){t.scrollBy({left:-step(),behavior:'smooth'})};
  t.addEventListener('scroll',upd);upd();
})();
