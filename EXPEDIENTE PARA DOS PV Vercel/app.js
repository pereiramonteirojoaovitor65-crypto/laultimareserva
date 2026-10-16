(()=>{
'use strict';
const q=s=>document.querySelector(s),qa=s=>Array.from(document.querySelectorAll(s));
let opened=false;
q('#reveal-b').addEventListener('click',()=>{opened=true;q('#sealed-state').hidden=true;q('#b-content').hidden=false;q('#evidence-b').classList.remove('sealed');q('#reveal-b').setAttribute('aria-expanded','true');q('#demo-feedback').textContent='Ahora tienen ambas pruebas. ¿Qué hora pueden justificar?';});
qa('[data-answer]').forEach(btn=>btn.addEventListener('click',()=>{
 if(!opened){q('#demo-feedback').textContent='Todavía les falta una prueba. Abran el archivo B antes de decidir.';q('#reveal-b').focus();return;}
 qa('[data-answer]').forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));
 q('#demo-feedback').textContent=btn.dataset.answer==='20:19'?'Exacto: 20:19. La cámara va 3 minutos atrasada. A aporta el suceso; B permite interpretar su hora.':'Revisen el desfase: cuando son las 20:00, la cámara muestra 19:57. Su reloj va atrasado. ¿Qué deben sumar a 20:16?';
}));
const modal=q('#preview');let previous;
qa('[data-image]').forEach(btn=>btn.addEventListener('click',()=>{previous=btn;q('#preview-image').src=btn.dataset.image;q('#preview-image').alt=btn.dataset.label;q('#preview-title').textContent=btn.dataset.label;if(modal.showModal)modal.showModal();else window.open(btn.dataset.image,'_blank','noopener');}));
q('#close-preview').addEventListener('click',()=>modal.close());modal.addEventListener('close',()=>previous?.focus());modal.addEventListener('click',e=>{if(e.target===modal){const r=modal.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)modal.close();}});
const sticky=q('#sticky'),hero=q('.hero'),offer=q('#oferta');
function updateSticky(){const hr=hero.getBoundingClientRect(),or=offer.getBoundingClientRect();sticky.classList.toggle('visible',hr.bottom<0&&!(or.top<innerHeight&&or.bottom>0)&&!modal.open);}
window.addEventListener('scroll',updateSticky,{passive:true});window.addEventListener('resize',updateSticky);modal.addEventListener('close',updateSticky);updateSticky();
const raw=(window.OFFER_CONFIG||{}).checkoutUrl;let checkout;
try{const u=new URL(raw);if(u.protocol==='https:'&&/^(pay|payment|checkout)\.hotmart\.com$/.test(u.hostname))checkout=u;}catch{}
qa('.checkout').forEach(a=>{
 if(!checkout){a.setAttribute('aria-disabled','true');a.addEventListener('click',e=>e.preventDefault());return;}
 const dest=new URL(checkout);const params=new URLSearchParams(location.search);
 ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','src','sck','fbclid'].forEach(k=>{if(params.has(k)&&!dest.searchParams.has(k))dest.searchParams.set(k,params.get(k));});
 a.href=dest.href;a.addEventListener('click',()=>window.dispatchEvent(new CustomEvent('offer:checkout-click',{detail:{location:a.dataset.location||'offer'}})));
});
})();
