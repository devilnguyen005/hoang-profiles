const menu=document.getElementById('menu');const links=document.getElementById('links');menu.addEventListener('click',()=>links.classList.toggle('open'));links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));document.getElementById('year').textContent=new Date().getFullYear();document.getElementById('copy').addEventListener('click',async()=>{const e='huyhoangnguyenpham62@gmail.com';try{await navigator.clipboard.writeText(e);document.getElementById('copy').textContent='Đã copy email ✓';setTimeout(()=>document.getElementById('copy').textContent='Copy email',1600)}catch{document.getElementById('copy').textContent=e}});

const topologyModal=document.getElementById('topologyModal');
const openTopology=document.getElementById('openTopology');
const closeTopology=document.getElementById('closeTopology');
function setTopology(open){if(!topologyModal)return;topologyModal.classList.toggle('open',open);topologyModal.setAttribute('aria-hidden',String(!open));document.body.style.overflow=open?'hidden':'';}
openTopology?.addEventListener('click',()=>setTopology(true));
closeTopology?.addEventListener('click',()=>setTopology(false));
topologyModal?.addEventListener('click',e=>{if(e.target===topologyModal)setTopology(false)});
document.addEventListener('keydown',e=>{if(e.key==='Escape')setTopology(false)});
