(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"ct+p":function(n,t,e){"use strict";e.r(t),e.d(t,"HomePageModule",(function(){return b}));var o=e("ofXK"),i=e("TEn/"),c=e("3Pt+"),r=e("tyNb"),a=e("mrSG"),g=e("fXoL");const s=function(){return["/individual-league"]},p=[{path:"",component:(()=>{class n{constructor(n,t){this.router=n,this.toastController=t,this.idPremier=237,this.england=42,this.idChampions=3,this.idLiga=538,this.spain=113,this.idEuropa=7}ionViewDidEnter(){}loadApp(){this.checkToggle(this.prefersDark.matches)}checkToggle(n){this.toggle.checked=n}individual(){}goToPage(n,t){this.router.navigate(["/individual-league/"+n],{queryParams:{league:n,countryid:t}})}notAvalaible(){return Object(a.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:"Esta liga no esta disponible.",duration:2e3})).present()}))}}return n.\u0275fac=function(t){return new(t||n)(g.Jb(r.g),g.Jb(i.z))},n.\u0275cmp=g.Db({type:n,selectors:[["app-home"]],decls:36,vars:6,consts:[[3,"translucent"],[1,"dot"],[3,"fullscreen"],[1,"cover-top"],[1,"first--heading"],["id","card-first",1,"shadow-md"],["id","heading--top"],[1,"sub-heading"],[1,"icons"],[1,"shadow-md",3,"click"],["src","../../assets/imgs/PL3.jpg","alt","Premier",1,"design-img"],[1,"leagues-news","shadow-md",3,"click"],["src","../../assets/imgs/BBVA1.jpg","alt","Liga",1,"design-img"],[1,"shadow-md",3,"routerLink","click"],["src","../../assets//imgs/UCL1.jpg","alt","Champions",1,"design-img"],["src","../../assets//imgs/UEL1.jpg","alt","Europa League",1,"design-img"]],template:function(n,t){1&n&&(g.Ob(0,"ion-header",0),g.Ob(1,"ion-toolbar"),g.Ob(2,"ion-title"),g.tc(3," teamz"),g.Ob(4,"span",1),g.tc(5,"."),g.Nb(),g.Nb(),g.Nb(),g.Nb(),g.Ob(6,"ion-content",2),g.Ob(7,"section",3),g.Ob(8,"h1",4),g.tc(9," teamz"),g.Ob(10,"span",1),g.tc(11,"."),g.Nb(),g.Nb(),g.Nb(),g.Ob(12,"ion-card",5),g.Ob(13,"h2",6),g.tc(14," Nuestras Ligas"),g.Nb(),g.Ob(15,"p",7),g.tc(16,"selecciona la liga que desees buscar mas informacion. "),g.Nb(),g.Ob(17,"ion-grid"),g.Ob(18,"ion-row",8),g.Ob(19,"ion-col",9),g.Wb("click",(function(){return t.goToPage(t.idPremier,t.england)})),g.Kb(20,"img",10),g.Ob(21,"h2",7),g.tc(22,"Premier League"),g.Nb(),g.Nb(),g.Ob(23,"ion-col",11),g.Wb("click",(function(){return t.goToPage(t.idLiga,t.spain)})),g.Kb(24,"img",12),g.Ob(25,"h2",7),g.tc(26,"La Liga Santander"),g.Nb(),g.Nb(),g.Nb(),g.Ob(27,"ion-row",8),g.Ob(28,"ion-col",13),g.Wb("click",(function(){return t.notAvalaible()})),g.Kb(29,"img",14),g.Ob(30,"h2",7),g.tc(31,"UEFA Champions League"),g.Nb(),g.Nb(),g.Ob(32,"ion-col",13),g.Wb("click",(function(){return t.notAvalaible()})),g.Kb(33,"img",15),g.Ob(34,"h2",7),g.tc(35,"UEFA Europa League"),g.Nb(),g.Nb(),g.Nb(),g.Nb(),g.Nb(),g.Nb()),2&n&&(g.dc("translucent",!0),g.xb(6),g.dc("fullscreen",!0),g.xb(22),g.dc("routerLink",g.ec(4,s)),g.xb(4),g.dc("routerLink",g.ec(5,s)))},directives:[i.m,i.t,i.s,i.k,i.f,i.l,i.r,i.j,i.y,r.h],styles:["#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.heading--top[_ngcontent-%COMP%]{font-size:20px;margin-top:10px;padding-left:10px;margin-right:20px}.icons[_ngcontent-%COMP%]{text-align:center}.icons-img[_ngcontent-%COMP%]{width:150px;height:auto;margin-top:20px}ion-col[_ngcontent-%COMP%]{background:#fff!important;margin:19px;border-radius:10px}#la-liga[_ngcontent-%COMP%]{position:relative}.ion-col[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{padding-top:40px}.sub-heading[_ngcontent-%COMP%]{font-size:1em;color:grey;font-weight:500;padding:0 20px;margin-top:20px}.icons[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:500;margin-bottom:20px}.league-news[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.league-news[_ngcontent-%COMP%]{padding:0!important}.design-img[_ngcontent-%COMP%]{width:100%}.first--heading[_ngcontent-%COMP%]{font-size:2em;text-align:center;font-weight:600}.icon-top[_ngcontent-%COMP%]{width:40px}.cover-top[_ngcontent-%COMP%]{background:url(top-picture.0968bcffea7ba22aa7ce.jpg);background-size:cover;height:220px;background-position:50%,50%;position:relative}.cover-top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:4em;margin-top:0;margin-bottom:0;color:#fff;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}#heading--top[_ngcontent-%COMP%]{margin-top:50px;font-size:1.7em;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#fff}#card-first[_ngcontent-%COMP%]{position:relative;top:-60px;background:rgba(45,45,45,.25);box-shadow:0 8px 32px 0 rgba(31,38,135,.37);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);border-radius:10px}#card-first[_ngcontent-%COMP%]   #heading--top[_ngcontent-%COMP%]{color:#000;color:#fff}ion-title[_ngcontent-%COMP%]{color:#fff!important}@media (prefers-color-scheme:dark){#card-first[_ngcontent-%COMP%]   #heading--top[_ngcontent-%COMP%]{color:#fff}.ion-content[_ngcontent-%COMP%]{--background:#222!important}ion-col[_ngcontent-%COMP%]{background-image:linear-gradient(46deg,#1d1c1c,#020202)!important}.icons[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#c5c4c4;font-size:.85em;color:rgba(236,238,233,.788235294117647)}}ion-grid[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .shadow-md[_ngcontent-%COMP%]{box-shadow:0 16px 16px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)!important}.dark[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]{--background:#000!important}.sub-heading[_ngcontent-%COMP%]{font-size:.9em;letter-spacing:1px;font-weight:700;text-transform:uppercase}"]}),n})()}];let d=(()=>{class n{}return n.\u0275mod=g.Hb({type:n}),n.\u0275inj=g.Gb({factory:function(t){return new(t||n)},imports:[[r.i.forChild(p)],r.i]}),n})(),b=(()=>{class n{}return n.\u0275mod=g.Hb({type:n}),n.\u0275inj=g.Gb({factory:function(t){return new(t||n)},imports:[[o.c,c.a,i.u,d]]}),n})()}}]);