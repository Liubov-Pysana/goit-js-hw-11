import{S as c,i}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const l="43884583-1aaf199fc122235264ed6db18",d="https://pixabay.com/api/",u=o=>{const e=new URLSearchParams({key:l,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}?${e}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})},p=o=>o.map(e=>`<li>
        <div class='preview'>
            <a href='${e.largeImageURL}'><img src='${e.webformatURL}' alt="${e.tags}"/></a>
            <div class="stats">
                <div><span class='stat-title'>Likes</span><span>${e.likes}</span></div>
                <div><span class='stat-title'>Views</span><span>${e.views}</span></div>
                <div><span class='stat-title'>Comments</span><span>${e.comments}</span></div>
                <div><span class='stat-title'>Downloads</span><span>${e.downloads}</span></div>
            </div>
        </div>
  </li>`).join(""),m=document.getElementById("search-form"),f=document.getElementById("search-input"),h=document.getElementById("results"),g=new c(".gallery a",{});m.addEventListener("submit",o=>{o.preventDefault();const e=f.value.trim();if(e===""){i.show({message:"Please, enter the search query!",position:"topRight",timeout:2e3,color:"red"});return}u(e).then(r=>{if(console.log(r),r.total===0){i.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,color:"red"});return}h.innerHTML=p(r.hits),g.refresh()})});
//# sourceMappingURL=commonHelpers.js.map
