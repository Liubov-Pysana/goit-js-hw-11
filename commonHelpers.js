import{S as d,i as u}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const m="43884583-1aaf199fc122235264ed6db18",p="https://pixabay.com/api/",f=s=>{const e=new URLSearchParams({key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}?${e}`).then(n=>{if(!n.ok)throw new Error(n.statusText);return n.json()})},y=s=>s.map(e=>`<li>
        <div class='preview'>
            <a href='${e.largeImageURL}'><img src='${e.webformatURL}' alt="${e.tags}"/></a>
            <div class="stats">
                <div><span class='stat-title'>Likes</span><span>${e.likes}</span></div>
                <div><span class='stat-title'>Views</span><span>${e.views}</span></div>
                <div><span class='stat-title'>Comments</span><span>${e.comments}</span></div>
                <div><span class='stat-title'>Downloads</span><span>${e.downloads}</span></div>
            </div>
        </div>
  </li>`).join(""),h=s=>{s.style.display="block"},g=s=>{s.style.display="none"},v=document.getElementById("search-form"),w=document.getElementById("search-input"),c=document.getElementById("results"),l=document.getElementById("loading-indicator"),L=new d(".gallery a",{});function a(s){u.show({message:s,position:"topRight",timeout:2e3,color:"red"})}v.addEventListener("submit",s=>{s.preventDefault();const e=w.value.trim();if(e===""){a("Please, enter the search query!");return}h(l),c.innerHTML="",f(e).then(n=>{if(n.total===0){a("Sorry, there are no images matching your search query. Please try again!");return}c.innerHTML=y(n.hits),L.refresh()}).catch(n=>{a("Sorry, some error occured. Please, try again!")}).finally(()=>{g(l)})});
//# sourceMappingURL=commonHelpers.js.map
