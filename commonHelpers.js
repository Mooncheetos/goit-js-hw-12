import{i as y,S as P,a as S}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();const u=document.querySelector(".gallery"),c=document.getElementById("loader"),w=document.getElementById("search-form"),h=document.getElementById("load-more"),m=document.getElementById("loading-indicator"),F="42175181-9f2e4ea0c75ffabf50c3ef9f9";let l=1,p="",H=0,M=0;function b(e){y.success({title:"Success",message:e,position:"topRight"})}function i(e){y.error({title:"Error",message:e,position:"topRight"})}function o(e){h.style.display=e?"block":"none"}function f(e){c.style.display=e?"block":"none",m.style.display=e?"block":"none"}async function L(e,t=1){const n=`https://pixabay.com/api/?key=${F}&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=15`;try{const s=await S.get(n);return M=s.data.totalHits,s.data.hits}catch(s){throw i("Failed to fetch images."),s}}async function k(){const e=u.querySelector(".image-card").getBoundingClientRect().height;window.scrollBy({top:2*e,left:0,behavior:"smooth"})}w.addEventListener("submit",async function(e){e.preventDefault(),o(!1);const t=document.getElementById("query").value.trim();if(!t){y.warning({title:"Warning",message:"Please enter a search query."});return}try{f(!0),p=t,l=1;const n=await L(t,l);n.length>0?(E(n),b(`Was found: ${n.length} images`),v(),n.length<15?(i("We are sorry, but you have reached the end of search results."),o(!1)):o(!0)):(u.innerHTML="",i("Sorry, there are no images matching your search query. Please try again!"),o(!1))}finally{f(!1)}});h.addEventListener("click",async function(){try{f(!0),l++;const e=await L(p,l);e.length>0?(I(e),b(`Loaded additional ${e.length} images`),v(),e.length<15&&(i("We are sorry, but you have reached the end of search results."),o(!1)),k()):(i("No more images to load"),o(!1))}catch{i("Failed to fetch additional images.")}finally{f(!1)}});function E(e){u.innerHTML="",I(e)}function I(e){const t=document.createDocumentFragment();e.forEach(n=>{const{largeImageURL:s,webformatURL:a,tags:r,likes:d,views:q,comments:B,downloads:C}=n,g=document.createElement("div");g.classList.add("image-card"),g.innerHTML=`
            <a href="${s}" data-lightbox="image-set" data-title="${r}">
                <img src="${a}" alt="${r}">
                <div class="info">Likes: ${d}, Views: ${q}, Comments: ${B}, Downloads: ${C}</div>
            </a>
        `,t.appendChild(g)}),u.appendChild(t),H+=e.length}async function $(e=1){const t="batman car";try{const n=await L(t,e);n.length>0?(E(n),b(`Found ${n.length} images of Batman's car`),v(),n.length<15?(i("We are sorry, but you have reached the end of search results."),o(!1)):o(!0)):(u.innerHTML="",i("Sorry, there are no images of Batman's car. Please try another search query."),o(!1))}finally{c.style.display="none"}}w.addEventListener("submit",async function(e){e.preventDefault(),o(!1);const t=document.getElementById("query").value.trim();if(!t){y.warning({title:"Warning",message:"Please enter a search query."});return}try{c.style.display="block",p=t,l=1,await $(l)}finally{c.style.display="none"}});h.addEventListener("click",async function(){try{c.style.display="block",m.style.display="block",l++,await $(l)}catch(e){console.error("Error fetching images:",e),i("Failed to fetch additional images.")}finally{c.style.display="none",m.style.display="none"}});function v(){new P(".gallery a").refresh()}
//# sourceMappingURL=commonHelpers.js.map