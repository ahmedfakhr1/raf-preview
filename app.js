(function(){
var d=document,$=function(s,r){return (r||d).querySelector(s)},$$=function(s,r){return [].slice.call((r||d).querySelectorAll(s))};
var dr=$('.drawer'),ob=$('.burger'),cb=$('.drawer .x');
function setDrawer(o){dr.classList.toggle('open',o);ob.setAttribute('aria-expanded',o);d.body.style.overflow=o?'hidden':'';if(o){cb.focus()}else{ob.focus()}}
if(ob){ob.addEventListener('click',function(){setDrawer(true)});cb.addEventListener('click',function(){setDrawer(false)});
$$('.drawer a').forEach(function(a){a.addEventListener('click',function(){setDrawer(false)})});
d.addEventListener('keydown',function(e){if(!dr.classList.contains('open'))return;if(e.key==='Escape'){setDrawer(false);return}if(e.key==='Tab'){var f=$$('a,button',dr),a=f[0],z=f[f.length-1];if(e.shiftKey&&d.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&d.activeElement===z){e.preventDefault();a.focus()}}})}
// time-of-day greeting (Cairo time)
var t=new Date(new Date().toLocaleString('en-US',{timeZone:'Africa/Cairo'})),h=t.getHours();
var g=h<5?'Still up, Raffers?':h<12?'Morning, Raffers.':h<17?'Afternoon, Raffers.':'Evening, Raffers.';
$$('[data-greet]').forEach(function(n){n.textContent=g});
// open status: RAF says every branch opens at 7 AM; closing time is not published, so we only claim "opens at 7"
$$('[data-status]').forEach(function(n){
 var before=h<7;n.classList.toggle('open',!before);
 n.querySelector('span').textContent=before?'Opens at 7:00 today':'Open today from 7:00'});
// menu chips: jump + highlight
var chips=$$('.chip[data-target]');
chips.forEach(function(c){c.addEventListener('click',function(e){e.preventDefault();var s=d.getElementById(c.dataset.target);if(s){s.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'});}})});
if(chips.length&&'IntersectionObserver' in window){
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){chips.forEach(function(c){var on=c.dataset.target===e.target.id;c.classList.toggle('on',on);if(on)c.setAttribute('aria-current','true');else c.removeAttribute('aria-current')});
  var on=$('.chip.on');if(on&&on.scrollIntoView)on.parentNode.scrollTo({left:on.offsetLeft-16,behavior:'auto'})}})},{rootMargin:'-140px 0px -60% 0px'});
 $$('.cat').forEach(function(s){io.observe(s)})}
})();
