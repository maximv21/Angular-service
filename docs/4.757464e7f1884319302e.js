(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{O7t3:function(e,t,n){"use strict";n.r(t),n.d(t,"AlbumsModule",(function(){return Z}));var r=n("ofXK"),i=n("3Pt+"),o=n("tyNb"),a=n("FtGj"),c=n("fXoL"),l=n("lJxs"),b=n("I/3d");let m=(()=>{class e{constructor(e){this.firestore=e}get(){return this.firestore.collection("albums").snapshotChanges().pipe(Object(l.a)(e=>e.map(e=>{const t=e.payload.doc.data();return Object.assign({id:e.payload.doc.id},{data:t})})))}update(e,t){console.log(e),this.firestore.collection("albums").doc(e).set(t)}create(e){return new Promise((t,n)=>{this.firestore.collection("albums").add(e).then(e=>{},e=>n(e))})}delete(e){this.firestore.collection("albums").doc(e).delete()}}return e.\u0275fac=function(t){return new(t||e)(c.Vb(b.a))},e.\u0275prov=c.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var s=n("/t3+"),d=n("+0xr"),u=n("kmnG"),p=n("qFsG"),f=n("A5z7"),h=n("bTqV"),g=n("NFeN");function C(e,t){1&e&&(c.Rb(0,"th",36),c.mc(1," Name "),c.Qb())}function v(e,t){if(1&e&&(c.Rb(0,"td",37),c.mc(1),c.Qb()),2&e){const e=t.$implicit;c.Bb(1),c.oc(" ",e.data.name," ")}}function y(e,t){1&e&&(c.Rb(0,"th",36),c.mc(1," Band "),c.Qb())}function R(e,t){if(1&e&&(c.Rb(0,"td",37),c.mc(1),c.Qb()),2&e){const e=t.$implicit;c.Bb(1),c.oc(" ",e.data.band," ")}}function Q(e,t){1&e&&(c.Rb(0,"th",36),c.mc(1," Label "),c.Qb())}function w(e,t){if(1&e&&(c.Rb(0,"td",37),c.mc(1),c.Qb()),2&e){const e=t.$implicit;c.Bb(1),c.oc(" ",e.data.label," ")}}function O(e,t){1&e&&(c.Rb(0,"th",36),c.mc(1," Genre "),c.Qb())}function F(e,t){if(1&e&&(c.Rb(0,"td",37),c.mc(1),c.Qb()),2&e){const e=t.$implicit;c.Bb(1),c.oc(" ",e.data.genre," ")}}function B(e,t){1&e&&(c.Rb(0,"th",36),c.mc(1," Producer "),c.Qb())}function I(e,t){if(1&e&&(c.Rb(0,"td",37),c.mc(1),c.Qb()),2&e){const e=t.$implicit;c.Bb(1),c.oc(" ",e.data.producer," ")}}function P(e,t){1&e&&(c.Rb(0,"th",36),c.mc(1," Edit "),c.Qb())}function D(e,t){if(1&e){const e=c.Sb();c.Rb(0,"td",37),c.Rb(1,"span",0),c.Xb("click",(function(){c.fc(e);const n=t.$implicit;return c.Zb().fill(n)})),c.mc(2," create"),c.Qb(),c.Qb()}}function k(e,t){1&e&&(c.Rb(0,"th",36),c.mc(1," Delete "),c.Qb())}function x(e,t){if(1&e){const e=c.Sb();c.Rb(0,"td",37),c.Rb(1,"span",0),c.Xb("click",(function(){c.fc(e);const n=t.$implicit;return c.Zb().deleteWarn(n.id)})),c.mc(2," delete"),c.Qb(),c.Qb()}}function M(e,t){1&e&&c.Mb(0,"tr",38)}function A(e,t){1&e&&c.Mb(0,"tr",39)}function _(e,t){1&e&&(c.Rb(0,"mat-icon",42),c.mc(1,"cancel"),c.Qb())}function S(e,t){if(1&e){const e=c.Sb();c.Rb(0,"mat-chip",40),c.Xb("removed",(function(){c.fc(e);const n=t.index,r=c.Zb();return r.remove(r.labelsFormArray,n)})),c.mc(1),c.lc(2,_,2,0,"mat-icon",41),c.Qb()}if(2&e){const e=t.$implicit,n=c.Zb();c.cc("selectable",n.selectable)("removable",n.removable),c.Bb(1),c.oc(" ",e.value," "),c.Bb(1),c.cc("ngIf",n.removable)}}function q(e,t){1&e&&(c.Rb(0,"mat-icon",42),c.mc(1,"cancel"),c.Qb())}function X(e,t){if(1&e){const e=c.Sb();c.Rb(0,"mat-chip",40),c.Xb("removed",(function(){c.fc(e);const n=t.index,r=c.Zb();return r.remove(r.genresFormArray,n)})),c.mc(1),c.lc(2,q,2,0,"mat-icon",41),c.Qb()}if(2&e){const e=t.$implicit,n=c.Zb();c.cc("selectable",n.selectable)("removable",n.removable),c.Bb(1),c.oc(" ",e.value," "),c.Bb(1),c.cc("ngIf",n.removable)}}function j(e,t){1&e&&(c.Rb(0,"mat-icon",42),c.mc(1,"cancel"),c.Qb())}function E(e,t){if(1&e){const e=c.Sb();c.Rb(0,"mat-chip",40),c.Xb("removed",(function(){c.fc(e);const n=t.index,r=c.Zb();return r.remove(r.producersFormArray,n)})),c.mc(1),c.lc(2,j,2,0,"mat-icon",41),c.Qb()}if(2&e){const e=t.$implicit,n=c.Zb();c.cc("selectable",n.selectable)("removable",n.removable),c.Bb(1),c.oc(" ",e.value," "),c.Bb(1),c.cc("ngIf",n.removable)}}function K(e,t){1&e&&(c.Rb(0,"mat-error",43),c.mc(1,"Please input the data "),c.Qb())}const $=[{path:"",component:(()=>{class e{constructor(e,t){this.fb=e,this.albumService=t,this.spin=!1,this.visible=!0,this.visibleDel=!0,this.selectable=!0,this.removable=!0,this.addOnBlur=!0,this.separatorKeysCodes=[a.g,a.c],this.displayedColumns=["name","band","genre","label","producer","edit","del"],this.myForm=this.fb.group({name:new i.e(null,[i.n.required]),band:new i.e(null,[i.n.required]),genre:new i.b([],[i.n.required]),label:new i.b([],[i.n.required]),producer:new i.b([],[i.n.required])})}ngOnInit(){this.get()}get(){this.albumService.get().subscribe(e=>{this.itemsList=e,this.spin=!0})}fill(e){this.id=e.id,this.visible=!this.visible;let t=e?e.data.name:"",n=e?e.data.band:"",r=e?e.data.genre:[],o=e?e.data.label:[],a=e?e.data.producer:[];this.refreshForm(),this.myForm.get("name").setValue(t),this.myForm.get("band").setValue(n),r.forEach((e,t)=>this.myForm.get("genre").push(new i.e(e,[i.n.required]))),o.forEach((e,t)=>this.myForm.get("label").push(new i.e(e,[i.n.required]))),a.forEach((e,t)=>this.myForm.get("producer").push(new i.e(e,[i.n.required])))}get labelsFormArray(){return this.myForm.get("label")}get genresFormArray(){return this.myForm.get("genre")}get producersFormArray(){return this.myForm.get("producer")}add(e,t){const n=t.input,r=t.value;(r||"").trim()&&(e.push(new i.e(null,[i.n.required])),e.controls[e.controls.length-1].setValue(r)),n&&(n.value="")}deleteWarn(e){this.idDel=e,this.visibleDel=!this.visibleDel}delete(){this.albumService.delete(this.idDel),this.visibleDel=!this.visibleDel}subm(){this.visible=!0;let e={};Object.keys(this.myForm.controls).forEach(t=>e[t]=this.myForm.controls[t].value),this.id?this.albumService.update(this.id,e):this.albumService.create(e)}create(){this.visible=!this.visible}cancel(){this.visible=!this.visible,this.refreshForm()}refreshForm(){this.myForm=this.fb.group({name:new i.e(null,[i.n.required]),band:new i.e(null,[i.n.required]),genre:new i.b([],[i.n.required]),label:new i.b([],[i.n.required]),producer:new i.b([],[i.n.required])})}cancelDel(){this.visibleDel=!this.visibleDel}remove(e,t){e.removeAt(t)}}return e.\u0275fac=function(t){return new(t||e)(c.Lb(i.d),c.Lb(m))},e.\u0275cmp=c.Fb({type:e,selectors:[["app-albums"]],decls:71,vars:24,consts:[[1,"material-icons",3,"click"],[1,"loader"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","band"],["matColumnDef","label"],["matColumnDef","genre"],["matColumnDef","producer"],["matColumnDef","edit"],["matColumnDef","del"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["id","form-wrapper"],["novalidate","",3,"formGroup","ngSubmit"],[1,"form-group"],["matInput","","name","name","formControlName","name",1,"form-control"],["matInput","","name","name","formControlName","band",1,"form-control"],["formArrayName","label",1,"form-group"],["aria-label","label"],["label",""],[3,"selectable","removable","removed",4,"ngFor","ngForOf"],["placeholder","Labels",3,"matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","matChipInputTokenEnd"],["aria-label","genre"],["genre",""],["placeholder","Genres",3,"matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","matChipInputTokenEnd"],["aria-label","producer"],["producer",""],["placeholder","Producers",3,"matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","matChipInputTokenEnd"],["class","red",4,"ngIf"],[1,"ok-del"],["mat-raised-button","","type","button",3,"click"],["mat-raised-button","",1,"submit",3,"disabled"],[1,"del-wrap"],["mat-raised-button","",3,"click"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""],[3,"selectable","removable","removed"],["matChipRemove","",4,"ngIf"],["matChipRemove",""],[1,"red"]],template:function(e,t){if(1&e&&(c.Rb(0,"mat-toolbar"),c.Rb(1,"span"),c.mc(2,"Albums"),c.Qb(),c.Rb(3,"span",0),c.Xb("click",(function(){return t.create()})),c.mc(4,"\nadd "),c.Qb(),c.Qb(),c.Mb(5,"div",1),c.Rb(6,"table",2),c.Pb(7,3),c.lc(8,C,2,0,"th",4),c.lc(9,v,2,1,"td",5),c.Ob(),c.Pb(10,6),c.lc(11,y,2,0,"th",4),c.lc(12,R,2,1,"td",5),c.Ob(),c.Pb(13,7),c.lc(14,Q,2,0,"th",4),c.lc(15,w,2,1,"td",5),c.Ob(),c.Pb(16,8),c.lc(17,O,2,0,"th",4),c.lc(18,F,2,1,"td",5),c.Ob(),c.Pb(19,9),c.lc(20,B,2,0,"th",4),c.lc(21,I,2,1,"td",5),c.Ob(),c.Pb(22,10),c.lc(23,P,2,0,"th",4),c.lc(24,D,3,0,"td",5),c.Ob(),c.Pb(25,11),c.lc(26,k,2,0,"th",4),c.lc(27,x,3,0,"td",5),c.Ob(),c.lc(28,M,1,0,"tr",12),c.lc(29,A,1,0,"tr",13),c.Qb(),c.Rb(30,"div",14),c.Rb(31,"form",15),c.Xb("ngSubmit",(function(){return t.subm()})),c.Rb(32,"h2"),c.mc(33,"Add Album"),c.Qb(),c.Rb(34,"mat-form-field",16),c.Rb(35,"mat-label"),c.mc(36,"Name"),c.Qb(),c.Mb(37,"input",17),c.Qb(),c.Rb(38,"mat-form-field",16),c.Rb(39,"mat-label"),c.mc(40,"Band"),c.Qb(),c.Mb(41,"input",18),c.Qb(),c.Rb(42,"mat-form-field",19),c.Rb(43,"mat-chip-list",20,21),c.lc(45,S,3,4,"mat-chip",22),c.Rb(46,"input",23),c.Xb("matChipInputTokenEnd",(function(e){return t.add(t.labelsFormArray,e)})),c.Qb(),c.Qb(),c.Qb(),c.Rb(47,"mat-form-field",16),c.Rb(48,"mat-chip-list",24,25),c.lc(50,X,3,4,"mat-chip",22),c.Rb(51,"input",26),c.Xb("matChipInputTokenEnd",(function(e){return t.add(t.genresFormArray,e)})),c.Qb(),c.Qb(),c.Qb(),c.Rb(52,"mat-form-field",16),c.Rb(53,"mat-chip-list",27,28),c.lc(55,E,3,4,"mat-chip",22),c.Rb(56,"input",29),c.Xb("matChipInputTokenEnd",(function(e){return t.add(t.producersFormArray,e)})),c.Qb(),c.Qb(),c.Qb(),c.lc(57,K,2,0,"mat-error",30),c.Rb(58,"div",31),c.Rb(59,"button",32),c.Xb("click",(function(){return t.cancel()})),c.mc(60,"Cancel "),c.Qb(),c.Rb(61,"button",33),c.mc(62,"Ok "),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(63,"div",34),c.Rb(64,"div"),c.mc(65," Do Yoy really want to delete the data? "),c.Rb(66,"div"),c.Rb(67,"button",32),c.Xb("click",(function(){return t.cancelDel()})),c.mc(68,"Cancel"),c.Qb(),c.Rb(69,"button",35),c.Xb("click",(function(){return t.delete()})),c.mc(70,"Ok"),c.Qb(),c.Qb(),c.Qb(),c.Qb()),2&e){const e=c.ec(44),n=c.ec(49),r=c.ec(54);c.Bb(5),c.Db("spin",t.spin),c.Bb(1),c.cc("dataSource",t.itemsList),c.Bb(22),c.cc("matHeaderRowDef",t.displayedColumns),c.Bb(1),c.cc("matRowDefColumns",t.displayedColumns),c.Bb(1),c.Db("visible",t.visible),c.Bb(1),c.cc("formGroup",t.myForm),c.Bb(14),c.cc("ngForOf",t.labelsFormArray.controls),c.Bb(1),c.cc("matChipInputFor",e)("matChipInputSeparatorKeyCodes",t.separatorKeysCodes)("matChipInputAddOnBlur",t.addOnBlur),c.Bb(4),c.cc("ngForOf",t.genresFormArray.controls),c.Bb(1),c.cc("matChipInputFor",n)("matChipInputSeparatorKeyCodes",t.separatorKeysCodes)("matChipInputAddOnBlur",t.addOnBlur),c.Bb(4),c.cc("ngForOf",t.producersFormArray.controls),c.Bb(1),c.cc("matChipInputFor",r)("matChipInputSeparatorKeyCodes",t.separatorKeysCodes)("matChipInputAddOnBlur",t.addOnBlur),c.Bb(1),c.cc("ngIf",(t.myForm.touched||t.myForm.dirty)&&t.myForm.invalid),c.Bb(4),c.cc("disabled",t.myForm.invalid),c.Bb(2),c.Db("visibleDel",t.visibleDel)}},directives:[s.a,d.j,d.c,d.e,d.b,d.g,d.i,i.o,i.k,i.g,u.c,u.f,p.a,i.a,i.j,i.f,i.c,f.c,r.h,f.b,r.i,h.a,d.d,d.a,d.f,d.h,f.a,g.a,f.d,u.b],styles:["table[_ngcontent-%COMP%]{position:relative;left:50%;width:100%;transform:translate(-50%)}th[_ngcontent-%COMP%]{font-size:18px;text-align:left}td[_ngcontent-%COMP%]{font-size:14px}mat-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between}#form-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);width:100%;height:100%;z-index:999}form[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:50%;height:auto;padding:10px;background-color:grey;text-align:center}.ok-del[_ngcontent-%COMP%]{display:flex;justify-content:flex-start}.ok-del[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:20px}.visible[_ngcontent-%COMP%], .visibleDel[_ngcontent-%COMP%]{visibility:hidden}.del-wrap[_ngcontent-%COMP%]{z-index:998;position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);width:100%;height:100%}.del-wrap[_ngcontent-%COMP%], .del-wrap[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.del-wrap[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{flex-direction:column;width:30%;height:150px;background-color:grey}.del-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:20px}.red[_ngcontent-%COMP%]{color:red}.loader[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);border-radius:50%;border:16px solid #f3f3f3;border-top-color:#3498db;width:120px;height:120px;animation:spin 2s linear infinite}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.spin[_ngcontent-%COMP%]{visibility:hidden}"]}),e})()}];let N=(()=>{class e{}return e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({factory:function(t){return new(t||e)},imports:[[o.b.forChild($)],o.b]}),e})(),Z=(()=>{class e{}return e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({factory:function(t){return new(t||e)},imports:[[r.b,N,i.m,i.h,s.b,g.b,h.b,d.k,p.b,u.e,f.e]]}),e})()}}]);