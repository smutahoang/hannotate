(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{rbdL:function(t,c,e){"use strict";e.r(c),e.d(c,"TaskManagerModule",function(){return rc});var n=e("ofXK"),i=e("tyNb"),a=e("0EQZ"),o=e("M9IT"),s=e("Dh3D"),l=e("+0xr"),r=e("XNiG"),d=e("1G5W"),u=e("5Lk8"),m=e("LvDl"),h=e("fXoL"),g=e("3Pt+"),p=e("1kSV"),f=e("dxD2"),b=e("bTqV"),D=e("bSwM"),C=e("NFeN"),k=e("sYmb");function S(t,c){if(1&t){const t=h.Ec();h.Dc(0,"th",20),h.Dc(1,"mat-checkbox",21),h.Nc("change",function(c){h.id(t);const e=h.Rc();return c?e.masterToggle():null}),h.Cc(),h.Cc()}if(2&t){const t=h.Rc();h.kc(1),h.Yc("checked",t.selection.hasValue()&&t.isAllSelected())("indeterminate",t.selection.hasValue()&&!t.isAllSelected())("aria-label",t.checkboxLabel())}}function v(t,c){if(1&t){const t=h.Ec();h.Dc(0,"td",22),h.Dc(1,"mat-checkbox",23),h.Nc("click",function(t){return t.stopPropagation()})("change",function(e){h.id(t);const n=c.$implicit,i=h.Rc();return e?i.selection.toggle(n):null}),h.Cc(),h.Cc()}if(2&t){const t=c.$implicit,e=h.Rc();h.kc(1),h.Yc("checked",e.selection.isSelected(t))("aria-label",e.checkboxLabel(t))}}function y(t,c){1&t&&(h.Dc(0,"th",20),h.td(1),h.Sc(2,"translate"),h.Cc()),2&t&&(h.kc(1),h.vd(" ",h.Tc(2,1,"common.no")," "))}function w(t,c){if(1&t&&(h.Dc(0,"td",22),h.td(1),h.Cc()),2&t){const t=c.index;h.kc(1),h.vd(" ",t+1," ")}}function A(t,c){1&t&&(h.Dc(0,"th",20),h.td(1),h.Sc(2,"translate"),h.Cc()),2&t&&(h.kc(1),h.vd(" ",h.Tc(2,1,"common.userName")," "))}function x(t,c){if(1&t&&(h.Dc(0,"td",22),h.td(1),h.Cc()),2&t){const t=c.$implicit;h.kc(1),h.vd(" ",t.username," ")}}function j(t,c){1&t&&(h.Dc(0,"th",20),h.td(1),h.Sc(2,"translate"),h.Cc()),2&t&&(h.kc(1),h.vd(" ",h.Tc(2,1,"common.phone")," "))}function T(t,c){if(1&t&&(h.Dc(0,"td",22),h.td(1),h.Cc()),2&t){const t=c.$implicit;h.kc(1),h.vd(" ",t.phone," ")}}function $(t,c){1&t&&(h.Dc(0,"th",20),h.td(1),h.Sc(2,"translate"),h.Cc()),2&t&&(h.kc(1),h.vd(" ",h.Tc(2,1,"common.email")," "))}function O(t,c){if(1&t&&(h.Dc(0,"td",22),h.td(1),h.Cc()),2&t){const t=c.$implicit;h.kc(1),h.vd(" ",t.email," ")}}function R(t,c){1&t&&(h.Dc(0,"th",20),h.td(1," Role "),h.Cc())}function P(t,c){if(1&t&&(h.Dc(0,"td",22),h.td(1),h.Cc()),2&t){const t=c.$implicit;h.kc(1),h.vd(" ",null==t?null:t.role," ")}}function N(t,c){1&t&&(h.Dc(0,"th",20),h.td(1),h.Sc(2,"translate"),h.Cc()),2&t&&(h.kc(1),h.vd(" ",h.Tc(2,1,"common.status")," "))}function B(t,c){1&t&&(h.Dc(0,"td",22),h.Dc(1,"span",24),h.td(2),h.Sc(3,"translate"),h.Cc(),h.Cc()),2&t&&(h.kc(2),h.ud(h.Tc(3,1,"common.active")))}function L(t,c){1&t&&(h.Dc(0,"th",20),h.td(1),h.Sc(2,"translate"),h.Cc()),2&t&&(h.kc(1),h.vd(" ",h.Tc(2,1,"common.Actions")," "))}function z(t,c){if(1&t){const t=h.Ec();h.Dc(0,"td",22),h.Dc(1,"button",25),h.Nc("click",function(){h.id(t);const e=c.$implicit;return h.Rc().openDialogEditUser(e)}),h.Dc(2,"mat-icon"),h.td(3,"edit"),h.Cc(),h.Cc(),h.Dc(4,"button",26),h.Nc("click",function(){h.id(t);const e=c.$implicit;return h.Rc().delete(e)}),h.Dc(5,"mat-icon"),h.td(6,"delete"),h.Cc(),h.Cc(),h.Dc(7,"button",27),h.Nc("click",function(){h.id(t);const e=c.$implicit;return h.Rc().openAuditLog(e)}),h.Dc(8,"mat-icon"),h.td(9,"list_alt"),h.Cc(),h.Cc(),h.Cc()}}function Y(t,c){1&t&&h.yc(0,"tr",28)}function M(t,c){1&t&&h.yc(0,"tr",29)}function _(t,c){1&t&&(h.Bc(0),h.Dc(1,"div",30),h.yc(2,"div",31),h.Cc(),h.Ac())}let E=(()=>{class t{constructor(t,c,e,n){this.fb=t,this.modalService=c,this.userService=e,this.injector=n,this.displayedColumns=["select","position","username","phone","email","role","status","actions"],this.dataSource=new l.k,this.subscriptions=[],this.selection=new a.c(!0,[]),this.length=null,this.pageSize=10,this.pageSizeOptions=[10,20,30,40],this.searchParams=new I}ngOnInit(){this.initData()}ngOnDestroy(){this.subscriptions.forEach(t=>t.unsubscribe())}initData(){this.getUsers()}getUsers(){this.userService.getUsers(this.searchParams).subscribe(t=>{t&&(console.log(m.get(t,"items")),this.dataSource.data=m.get(t,"items"),this.length=m.get(t,"total"))})}isAllSelected(){return this.selection.selected.length===this.dataSource.data.length}masterToggle(){this.isAllSelected()?this.selection.clear():this.dataSource.data.forEach(t=>this.selection.select(t))}checkboxLabel(t){return t?`${this.selection.isSelected(t)?"deselect":"select"} row ${t.position+1}`:(this.isAllSelected()?"select":"deselect")+" all"}delete(t){t&&this.injector.get(u.a).openDialogConfirm("Are you sure?").subscribe(c=>{c&&this.doDelete(t)})}doDelete(t){this.userService.deleteUser(m.get(t,"id")).subscribe(t=>{this.initData()})}openDialogEditUser(t){this.injector.get(u.a).openEditUserDialog(t).subscribe(t=>{t&&this.initData()})}ngAfterViewInit(){this.dataSource.sort=this.sort}pageChange(t){const c=m.get(t,"pageIndex");this.searchParams.pageNumber=c||0===c?c+1:c,this.searchParams.perPage=m.get(t,"pageSize",10),this.getUsers()}openAuditLog(t){t&&this.injector.get(u.a).openAuditLog(t).subscribe()}}return t.\u0275fac=function(c){return new(c||t)(h.xc(g.f),h.xc(p.g),h.xc(f.a),h.xc(h.x))},t.\u0275cmp=h.rc({type:t,selectors:[["app-register"]],viewQuery:function(t,c){if(1&t&&(h.xd(o.a,!0),h.xd(s.a,!0)),2&t){let t;h.fd(t=h.Oc())&&(c.paginator=t.first),h.fd(t=h.Oc())&&(c.sort=t.first)}},decls:36,vars:10,consts:[[1,"card","card-custom","users-container"],[1,"card-header","header","d-flex","align-items-center"],[1,"ml-auto"],["mat-raised-button","","color","primary",3,"click"],[1,"card-body","content"],["mat-table","","matSort","",1,"w-100",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","position"],["matColumnDef","username"],["matColumnDef","phone"],["matColumnDef","email"],["matColumnDef","role"],["matColumnDef","status"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"length","pageSize","pageSizeOptions","page"],[4,"ngIf"],["mat-header-cell",""],["color","primary",3,"checked","indeterminate","aria-label","change"],["mat-cell",""],["color","primary",3,"checked","aria-label","click","change"],[1,"label","label-lg","label-inline","label-light-success"],["mat-icon-button","","color","primary",3,"click"],["mat-icon-button","","color","warn",3,"click"],["mat-icon-button","","color","infor",3,"click"],["mat-header-row",""],["mat-row",""],[1,"overlay-layer"],[1,"spinner","spinner-lg","spinner-primary"]],template:function(t,c){1&t&&(h.Dc(0,"section",0),h.Dc(1,"div",1),h.Dc(2,"div",2),h.Dc(3,"button",3),h.Nc("click",function(){return c.openDialogEditUser()}),h.td(4),h.Sc(5,"translate"),h.Cc(),h.Cc(),h.Cc(),h.Dc(6,"div",4),h.Dc(7,"table",5),h.Bc(8,6),h.rd(9,S,2,3,"th",7),h.rd(10,v,2,2,"td",8),h.Ac(),h.Bc(11,9),h.rd(12,y,3,3,"th",7),h.rd(13,w,2,1,"td",8),h.Ac(),h.Bc(14,10),h.rd(15,A,3,3,"th",7),h.rd(16,x,2,1,"td",8),h.Ac(),h.Bc(17,11),h.rd(18,j,3,3,"th",7),h.rd(19,T,2,1,"td",8),h.Ac(),h.Bc(20,12),h.rd(21,$,3,3,"th",7),h.rd(22,O,2,1,"td",8),h.Ac(),h.Bc(23,13),h.rd(24,R,2,0,"th",7),h.rd(25,P,2,1,"td",8),h.Ac(),h.Bc(26,14),h.rd(27,N,3,3,"th",7),h.rd(28,B,4,3,"td",8),h.Ac(),h.Bc(29,15),h.rd(30,L,3,3,"th",7),h.rd(31,z,10,0,"td",8),h.Ac(),h.rd(32,Y,1,0,"tr",16),h.rd(33,M,1,0,"tr",17),h.Cc(),h.Dc(34,"mat-paginator",18),h.Nc("page",function(t){return c.pageChange(t)}),h.Cc(),h.Cc(),h.Cc(),h.rd(35,_,3,0,"ng-container",19)),2&t&&(h.kc(4),h.ud(h.Tc(5,8,"tasKmanager.addNewUser")),h.kc(3),h.Yc("dataSource",c.dataSource),h.kc(25),h.Yc("matHeaderRowDef",c.displayedColumns),h.kc(1),h.Yc("matRowDefColumns",c.displayedColumns),h.kc(1),h.Yc("length",c.length)("pageSize",c.pageSize)("pageSizeOptions",c.pageSizeOptions),h.kc(1),h.Yc("ngIf",c.isLoading))},directives:[b.a,l.j,l.c,l.e,l.b,l.g,l.i,o.a,n.n,l.d,D.a,l.a,C.a,l.f,l.h],pipes:[k.d],styles:[""]}),t})();class I{constructor(){this.pageNumber=1,this.perPage=10}}var J=e("hy6k");function H(t,c){if(1&t){const t=h.Ec();h.Dc(0,"th",30),h.Dc(1,"mat-checkbox",31),h.Nc("change",function(c){h.id(t);const e=h.Rc();return c?e.masterToggle():null}),h.Cc(),h.Cc()}if(2&t){const t=h.Rc();h.kc(1),h.Yc("checked",t.selection.hasValue()&&t.isAllSelected())("indeterminate",t.selection.hasValue()&&!t.isAllSelected())("aria-label",t.checkboxLabel())}}function U(t,c){if(1&t){const t=h.Ec();h.Dc(0,"td",32),h.Dc(1,"mat-checkbox",33),h.Nc("click",function(t){return t.stopPropagation()})("change",function(e){h.id(t);const n=c.$implicit,i=h.Rc();return e?i.selection.toggle(n):null}),h.Cc(),h.Cc()}if(2&t){const t=c.$implicit,e=h.Rc();h.kc(1),h.Yc("checked",e.selection.isSelected(t))("aria-label",e.checkboxLabel(t))}}function V(t,c){1&t&&(h.Dc(0,"th",30),h.td(1),h.Sc(2,"translate"),h.Cc()),2&t&&(h.kc(1),h.vd(" ",h.Tc(2,1,"common.no")," "))}function F(t,c){if(1&t&&(h.Dc(0,"td",32),h.td(1),h.Cc()),2&t){const t=c.index;h.kc(1),h.vd(" ",t+1," ")}}function Q(t,c){1&t&&(h.Dc(0,"th",30),h.td(1),h.Sc(2,"translate"),h.Cc()),2&t&&(h.kc(1),h.vd(" ",h.Tc(2,1,"common.userName")," "))}function X(t,c){if(1&t&&(h.Dc(0,"td",32),h.td(1),h.Cc()),2&t){const t=c.$implicit;h.kc(1),h.vd(" ",null==t||null==t.user?null:t.user.username," ")}}function q(t,c){1&t&&(h.Dc(0,"th",30),h.td(1),h.Sc(2,"translate"),h.Cc()),2&t&&(h.kc(1),h.vd(" ",h.Tc(2,1,"common.name")," "))}function G(t,c){if(1&t&&(h.Dc(0,"td",32),h.td(1),h.Cc()),2&t){const t=c.$implicit;h.kc(1),h.vd(" ",null==t||null==t.job?null:t.job.name," ")}}function K(t,c){1&t&&(h.Dc(0,"th",30),h.td(1),h.Sc(2,"translate"),h.Cc()),2&t&&(h.kc(1),h.vd(" ",h.Tc(2,1,"common.status")," "))}function W(t,c){if(1&t&&(h.Bc(0),h.Dc(1,"span",34),h.td(2),h.Cc(),h.Ac()),2&t){const t=h.Rc().$implicit;h.kc(2),h.ud(null==t?null:t.status)}}function Z(t,c){if(1&t&&(h.Bc(0),h.Dc(1,"span",35),h.td(2),h.Cc(),h.Ac()),2&t){const t=h.Rc().$implicit;h.kc(2),h.ud(null==t?null:t.status)}}function tt(t,c){if(1&t&&(h.Dc(0,"td",32),h.rd(1,W,3,1,"ng-container",29),h.rd(2,Z,3,1,"ng-container",29),h.Cc()),2&t){const t=c.$implicit;h.kc(1),h.Yc("ngIf","Accepted"===(null==t?null:t.status)),h.kc(1),h.Yc("ngIf","Rejected"===(null==t?null:t.status))}}function ct(t,c){1&t&&(h.Dc(0,"th",30),h.td(1),h.Sc(2,"translate"),h.Cc()),2&t&&(h.kc(1),h.vd(" ",h.Tc(2,1,"common.Actions")," "))}function et(t,c){if(1&t){const t=h.Ec();h.Dc(0,"td",32),h.Dc(1,"button",36),h.Nc("click",function(){h.id(t);const e=c.$implicit;return h.Rc().openDialogConfirm(!0,e)}),h.Dc(2,"mat-icon"),h.td(3,"done"),h.Cc(),h.Cc(),h.Dc(4,"button",37),h.Nc("click",function(){h.id(t);const e=c.$implicit;return h.Rc().openDialogConfirm(!1,e)}),h.Dc(5,"mat-icon"),h.td(6,"close"),h.Cc(),h.Cc(),h.Cc()}}function nt(t,c){1&t&&h.yc(0,"tr",38)}function it(t,c){1&t&&h.yc(0,"tr",39)}function at(t,c){1&t&&(h.Bc(0),h.Dc(1,"div",40),h.yc(2,"div",41),h.Cc(),h.Ac())}let ot=(()=>{class t{constructor(t,c){this.jobService=t,this.injector=c,this.jobs=[],this.destroy$=new r.a,this.isLoading=!1,this.categories=[],this.displayedColumns=["select","position","category","name","status","actions"],this.dataSource=new l.k,this.selection=new a.c(!0,[]),this.length=null,this.pageSize=10,this.pageSizeOptions=[10,20,30,40],this.searchParams=new I,this.status="all"}ngOnInit(){this.initData()}initData(){this.getCustomerRegister()}getCustomerRegister(){this.isLoading=!0,this.searchParams.status=this.status,this.jobService.getBidList(this.searchParams).subscribe(t=>{if(!t)return;const c=m.get(t,"items");this.dataSource.data=c,this.length=m.get(t,"total")},()=>{},()=>{this.isLoading=!1})}isAllSelected(){return this.selection.selected.length===this.dataSource.data.length}masterToggle(){this.isAllSelected()?this.selection.clear():this.dataSource.data.forEach(t=>this.selection.select(t))}checkboxLabel(t){return t?`${this.selection.isSelected(t)?"deselect":"select"} row ${t.position+1}`:(this.isAllSelected()?"select":"deselect")+" all"}openDialogConfirm(t,c){this.injector.get(u.a).openDialogConfirm("Are you sure?").pipe(Object(d.a)(this.destroy$)).subscribe(e=>{if(!e)return;const n=m.get(c,"id");this.setStatus({bid_id:n,accept:t})})}setStatus(t){this.jobService.managerApproveBid(t).pipe(Object(d.a)(this.destroy$)).subscribe(t=>{this.initData()})}ngAfterViewInit(){this.dataSource.sort=this.sort}pageChange(t){const c=m.get(t,"pageIndex");this.searchParams.pageNumber=c||0===c?c+1:c,this.searchParams.perPage=m.get(t,"pageSize",10),this.getCustomerRegister()}}return t.\u0275fac=function(c){return new(c||t)(h.xc(J.a),h.xc(h.x))},t.\u0275cmp=h.rc({type:t,selectors:[["app-customer-register-job"]],viewQuery:function(t,c){if(1&t&&(h.xd(o.a,!0),h.xd(s.a,!0)),2&t){let t;h.fd(t=h.Oc())&&(c.paginator=t.first),h.fd(t=h.Oc())&&(c.sort=t.first)}},features:[h.jc([u.a])],decls:55,vars:29,consts:[[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label"],[1,"card-toolbar"],[1,"card-body"],[1,"form","form-label-right"],[1,"form-group","row"],[1,"col-lg-4"],[1,"row"],[1,"col-lg-6"],["name","status","placeholder","Filter by Status",1,"form-control",3,"ngModel","ngModelChange","change"],["value","all"],["value","accepted"],["value","rejected"],["value","waiting"],[1,"form-text","text-muted"],["mat-table","","matSort","",1,"w-100",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","position"],["matColumnDef","category"],["matColumnDef","name"],["matColumnDef","status"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"length","pageSize","pageSizeOptions","page"],[4,"ngIf"],["mat-header-cell",""],["color","primary",3,"checked","indeterminate","aria-label","change"],["mat-cell",""],["color","primary",3,"checked","aria-label","click","change"],[1,"label","label-lg","label-inline","label-light-success"],[1,"label","label-lg","label-inline","label-light-danger"],["mat-icon-button","","color","primary",3,"click"],["mat-icon-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""],[1,"overlay-layer"],[1,"spinner","spinner-lg","spinner-primary"]],template:function(t,c){1&t&&(h.Dc(0,"div",0),h.Dc(1,"div",1),h.Dc(2,"div",2),h.Dc(3,"h3",3),h.td(4),h.Sc(5,"translate"),h.Cc(),h.Cc(),h.yc(6,"div",4),h.Cc(),h.Dc(7,"div",5),h.Dc(8,"div",6),h.Dc(9,"div",7),h.Dc(10,"div",8),h.Dc(11,"div",9),h.Dc(12,"div",10),h.Dc(13,"select",11),h.Nc("ngModelChange",function(t){return c.status=t})("change",function(){return c.getCustomerRegister()}),h.Dc(14,"option",12),h.td(15),h.Sc(16,"translate"),h.Cc(),h.Dc(17,"option",13),h.td(18),h.Sc(19,"translate"),h.Cc(),h.Dc(20,"option",14),h.td(21),h.Sc(22,"translate"),h.Cc(),h.Dc(23,"option",15),h.td(24),h.Sc(25,"translate"),h.Cc(),h.Cc(),h.Dc(26,"small",16),h.Dc(27,"b"),h.td(28),h.Sc(29,"translate"),h.Cc(),h.td(30),h.Sc(31,"translate"),h.Cc(),h.Cc(),h.Cc(),h.Cc(),h.Cc(),h.Cc(),h.Dc(32,"table",17),h.Bc(33,18),h.rd(34,H,2,3,"th",19),h.rd(35,U,2,2,"td",20),h.Ac(),h.Bc(36,21),h.rd(37,V,3,3,"th",19),h.rd(38,F,2,1,"td",20),h.Ac(),h.Bc(39,22),h.rd(40,Q,3,3,"th",19),h.rd(41,X,2,1,"td",20),h.Ac(),h.Bc(42,23),h.rd(43,q,3,3,"th",19),h.rd(44,G,2,1,"td",20),h.Ac(),h.Bc(45,24),h.rd(46,K,3,3,"th",19),h.rd(47,tt,3,2,"td",20),h.Ac(),h.Bc(48,25),h.rd(49,ct,3,3,"th",19),h.rd(50,et,7,0,"td",20),h.Ac(),h.rd(51,nt,1,0,"tr",26),h.rd(52,it,1,0,"tr",27),h.Cc(),h.Dc(53,"mat-paginator",28),h.Nc("page",function(t){return c.pageChange(t)}),h.Cc(),h.Cc(),h.Cc(),h.rd(54,at,3,0,"ng-container",29)),2&t&&(h.kc(4),h.ud(h.Tc(5,15,"common.job")),h.kc(9),h.Yc("ngModel",c.status),h.kc(2),h.ud(h.Tc(16,17,"common.all")),h.kc(3),h.ud(h.Tc(19,19,"common.accepted")),h.kc(3),h.ud(h.Tc(22,21,"common.rejected")),h.kc(3),h.ud(h.Tc(25,23,"common.waiting")),h.kc(4),h.ud(h.Tc(29,25,"common.filter")),h.kc(2),h.vd(" ",h.Tc(31,27,"common.byStatus"),""),h.kc(2),h.Yc("dataSource",c.dataSource),h.kc(19),h.Yc("matHeaderRowDef",c.displayedColumns),h.kc(1),h.Yc("matRowDefColumns",c.displayedColumns),h.kc(1),h.Yc("length",c.length)("pageSize",c.pageSize)("pageSizeOptions",c.pageSizeOptions),h.kc(1),h.Yc("ngIf",c.isLoading))},directives:[g.w,g.q,g.t,g.u,g.y,l.j,l.c,l.e,l.b,l.g,l.i,o.a,n.n,l.d,D.a,l.a,b.a,C.a,l.f,l.h],pipes:[k.d],styles:[""]}),t})();var st=e("7o2P"),lt=e("STbY");function rt(t,c){if(1&t){const t=h.Ec();h.Dc(0,"th",25),h.Dc(1,"mat-checkbox",26),h.Nc("change",function(c){h.id(t);const e=h.Rc();return c?e.masterToggle():null}),h.Cc(),h.Cc()}if(2&t){const t=h.Rc();h.kc(1),h.Yc("checked",t.selection.hasValue()&&t.isAllSelected())("indeterminate",t.selection.hasValue()&&!t.isAllSelected())("aria-label",t.checkboxLabel())}}function dt(t,c){if(1&t){const t=h.Ec();h.Dc(0,"td",27),h.Dc(1,"mat-checkbox",28),h.Nc("click",function(t){return t.stopPropagation()})("change",function(e){h.id(t);const n=c.$implicit,i=h.Rc();return e?i.selection.toggle(n):null}),h.Cc(),h.Cc()}if(2&t){const t=c.$implicit,e=h.Rc();h.kc(1),h.Yc("checked",e.selection.isSelected(t))("aria-label",e.checkboxLabel(t))}}function ut(t,c){1&t&&(h.Dc(0,"th",25),h.td(1),h.Sc(2,"translate"),h.Cc()),2&t&&(h.kc(1),h.vd(" ",h.Tc(2,1,"common.no")," "))}function mt(t,c){if(1&t&&(h.Dc(0,"td",27),h.td(1),h.Cc()),2&t){const t=c.index;h.kc(1),h.vd(" ",t+1," ")}}function ht(t,c){1&t&&(h.Dc(0,"th",25),h.td(1),h.Sc(2,"translate"),h.Cc()),2&t&&(h.kc(1),h.vd(" ",h.Tc(2,1,"common.category")," "))}function gt(t,c){if(1&t&&(h.Dc(0,"td",27),h.Dc(1,"a",29),h.td(2),h.Cc(),h.Cc()),2&t){const t=c.$implicit;h.kc(2),h.ud(null==t?null:t.category)}}function pt(t,c){1&t&&(h.Dc(0,"th",25),h.td(1),h.Sc(2,"translate"),h.Cc()),2&t&&(h.kc(1),h.vd(" ",h.Tc(2,1,"common.name")," "))}function ft(t,c){if(1&t&&(h.Dc(0,"td",27),h.td(1),h.Cc()),2&t){const t=c.$implicit;h.kc(1),h.vd(" ",null==t?null:t.name," ")}}function bt(t,c){1&t&&(h.Dc(0,"th",25),h.td(1),h.Sc(2,"translate"),h.Cc()),2&t&&(h.kc(1),h.vd(" ",h.Tc(2,1,"common.name")," "))}function Dt(t,c){if(1&t&&(h.Dc(0,"td",27),h.td(1),h.Cc()),2&t){const t=c.$implicit;h.kc(1),h.vd(" ",null==t?null:t.description," ")}}function Ct(t,c){1&t&&(h.Dc(0,"th",25),h.td(1),h.Sc(2,"translate"),h.Cc()),2&t&&(h.kc(1),h.vd(" ",h.Tc(2,1,"common.status")," "))}function kt(t,c){if(1&t&&(h.Dc(0,"td",27),h.Dc(1,"span",30),h.td(2),h.Cc(),h.Cc()),2&t){const t=c.$implicit;h.kc(1),h.pc("label-light-success","Active"===(null==t?null:t.status))("label-light-danger","Active"!==(null==t?null:t.status)),h.kc(1),h.ud(null==t?null:t.status)}}function St(t,c){1&t&&(h.Dc(0,"th",25),h.td(1),h.Sc(2,"translate"),h.Cc()),2&t&&(h.kc(1),h.vd(" ",h.Tc(2,1,"common.Actions")," "))}const vt=function(t){return{item:t}};function yt(t,c){if(1&t){const t=h.Ec();h.Dc(0,"td",27),h.Dc(1,"button",31),h.Nc("click",function(t){return t.stopPropagation()}),h.Dc(2,"mat-icon"),h.td(3,"cloud_download"),h.Cc(),h.Cc(),h.Dc(4,"button",32),h.Nc("click",function(e){h.id(t);const n=c.$implicit,i=h.Rc();return e.stopPropagation(),i.openDialogEdit(n)}),h.Dc(5,"mat-icon"),h.td(6,"edit"),h.Cc(),h.Cc(),h.Dc(7,"button",33),h.Nc("click",function(e){h.id(t);const n=c.$implicit,i=h.Rc();return e.stopPropagation(),i.delete(n)}),h.Dc(8,"mat-icon"),h.td(9,"delete"),h.Cc(),h.Cc(),h.Cc()}if(2&t){const t=c.$implicit;h.Rc();const e=h.gd(40);h.kc(1),h.Yc("matMenuTriggerFor",e)("matMenuTriggerData",h.cd(2,vt,t))}}function wt(t,c){1&t&&h.yc(0,"tr",34)}const At=function(t){return["/task-manager/task-assignment",t]};function xt(t,c){if(1&t&&h.yc(0,"tr",35),2&t){const t=c.$implicit;h.Yc("routerLink",h.cd(1,At,null==t?null:t.id))}}function jt(t,c){1&t&&(h.Bc(0),h.Dc(1,"div",36),h.yc(2,"div",37),h.Cc(),h.Ac())}function Tt(t,c){if(1&t){const t=h.Ec();h.Dc(0,"button",38),h.Nc("click",function(){h.id(t);const e=c.item;return h.Rc().download(null==e?null:e.id,!0,!1)}),h.td(1,"Export all job"),h.Cc(),h.Dc(2,"button",38),h.Nc("click",function(){h.id(t);const e=c.item;return h.Rc().download(null==e?null:e.id,!1,!0)}),h.td(3,"Export only accepted job"),h.Cc()}}let $t=(()=>{class t{constructor(t,c,e){this.jobService=t,this.commonService=c,this.injector=e,this.jobs=[],this.destroy$=new r.a,this.isLoading=!1,this.categories=[],this.displayedColumns=["select","position","category","name","description","status","actions"],this.dataSource=new l.k,this.selection=new a.c(!0,[]),this.length=null,this.pageSize=10,this.pageSizeOptions=[10,20,30,40],this.searchParams=new I}ngOnInit(){this.initData()}initData(){this.getJobs()}getJobs(){this.isLoading=!0,this.jobService.getJobs(this.searchParams).subscribe(t=>{if(!t)return;const c=m.get(t,"items");this.dataSource.data=c,this.length=m.get(t,"total")},()=>{},()=>{this.isLoading=!1})}isAllSelected(){return this.selection.selected.length===this.dataSource.data.length}masterToggle(){this.isAllSelected()?this.selection.clear():this.dataSource.data.forEach(t=>this.selection.select(t))}checkboxLabel(t){return t?`${this.selection.isSelected(t)?"deselect":"select"} row ${t.position+1}`:(this.isAllSelected()?"select":"deselect")+" all"}delete(t){t&&this.injector.get(u.a).openDialogConfirm(`Are you sure to delete ${m.get(t,"name")}?`).subscribe(c=>{c&&this.doDelete(t)})}doDelete(t){this.jobService.deleteJob(m.get(t,"id")).subscribe(t=>{this.initData()})}openDialogEdit(t){this.injector.get(u.a).openEditJobDialog(t).pipe(Object(d.a)(this.destroy$)).subscribe(t=>{t&&this.initData()})}ngAfterViewInit(){this.dataSource.sort=this.sort}pageChange(t){const c=m.get(t,"pageIndex");this.searchParams.pageNumber=c||0===c?c+1:c,this.searchParams.perPage=m.get(t,"pageSize",10),this.getJobs()}download(t,c,e){this.jobService.exportFile(t,{all_job:c,only_accepted_job:e}).pipe(Object(d.a)(this.destroy$)).subscribe(c=>{this.commonService.downLoadFile(c,"txt",t)})}}return t.\u0275fac=function(c){return new(c||t)(h.xc(J.a),h.xc(st.a),h.xc(h.x))},t.\u0275cmp=h.rc({type:t,selectors:[["app-job-management"]],viewQuery:function(t,c){if(1&t&&(h.xd(o.a,!0),h.xd(s.a,!0)),2&t){let t;h.fd(t=h.Oc())&&(c.paginator=t.first),h.fd(t=h.Oc())&&(c.sort=t.first)}},features:[h.jc([u.a])],decls:42,vars:13,consts:[[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label"],[1,"card-toolbar"],["type","button",1,"btn","btn-primary",3,"click"],[1,"card-body"],[1,"form","form-label-right"],[1,"form-group","row"],["mat-table","","matSort","",1,"w-100",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","position"],["matColumnDef","category"],["matColumnDef","name"],["matColumnDef","description"],["matColumnDef","status"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"routerLink",4,"matRowDef","matRowDefColumns"],[3,"length","pageSize","pageSizeOptions","page"],[4,"ngIf"],["matMenuContent",""],["menu","matMenu"],["mat-header-cell",""],["color","primary",3,"checked","indeterminate","aria-label","change"],["mat-cell",""],["color","primary",3,"checked","aria-label","click","change"],[1,"text-link"],[1,"label","label-lg","label-inline"],["mat-icon-button","","color","success",1,"text-success",3,"matMenuTriggerFor","matMenuTriggerData","click"],["mat-icon-button","","color","primary",3,"click"],["mat-icon-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row","",3,"routerLink"],[1,"overlay-layer"],[1,"spinner","spinner-lg","spinner-primary"],["mat-menu-item","",3,"click"]],template:function(t,c){1&t&&(h.Dc(0,"div",0),h.Dc(1,"div",1),h.Dc(2,"div",2),h.Dc(3,"h3",3),h.td(4),h.Sc(5,"translate"),h.Cc(),h.Cc(),h.Dc(6,"div",4),h.Dc(7,"button",5),h.Nc("click",function(){return c.openDialogEdit()}),h.td(8),h.Sc(9,"translate"),h.Cc(),h.Cc(),h.Cc(),h.Dc(10,"div",6),h.Dc(11,"div",7),h.yc(12,"div",8),h.Cc(),h.Dc(13,"table",9),h.Bc(14,10),h.rd(15,rt,2,3,"th",11),h.rd(16,dt,2,2,"td",12),h.Ac(),h.Bc(17,13),h.rd(18,ut,3,3,"th",11),h.rd(19,mt,2,1,"td",12),h.Ac(),h.Bc(20,14),h.rd(21,ht,3,3,"th",11),h.rd(22,gt,3,1,"td",12),h.Ac(),h.Bc(23,15),h.rd(24,pt,3,3,"th",11),h.rd(25,ft,2,1,"td",12),h.Ac(),h.Bc(26,16),h.rd(27,bt,3,3,"th",11),h.rd(28,Dt,2,1,"td",12),h.Ac(),h.Bc(29,17),h.rd(30,Ct,3,3,"th",11),h.rd(31,kt,3,5,"td",12),h.Ac(),h.Bc(32,18),h.rd(33,St,3,3,"th",11),h.rd(34,yt,10,4,"td",12),h.Ac(),h.rd(35,wt,1,0,"tr",19),h.rd(36,xt,1,3,"tr",20),h.Cc(),h.Dc(37,"mat-paginator",21),h.Nc("page",function(t){return c.pageChange(t)}),h.Cc(),h.Cc(),h.Cc(),h.rd(38,jt,3,0,"ng-container",22),h.Dc(39,"mat-menu",23,24),h.rd(41,Tt,4,0,"ng-template",23),h.Cc()),2&t&&(h.kc(4),h.ud(h.Tc(5,9,"common.job")),h.kc(4),h.ud(h.Tc(9,11,"common.newJob")),h.kc(5),h.Yc("dataSource",c.dataSource),h.kc(22),h.Yc("matHeaderRowDef",c.displayedColumns),h.kc(1),h.Yc("matRowDefColumns",c.displayedColumns),h.kc(1),h.Yc("length",c.length)("pageSize",c.pageSize)("pageSizeOptions",c.pageSizeOptions),h.kc(1),h.Yc("ngIf",c.isLoading))},directives:[l.j,l.c,l.e,l.b,l.g,l.i,o.a,n.n,lt.a,lt.b,l.d,D.a,l.a,b.a,lt.e,C.a,l.f,l.h,i.i,lt.c],pipes:[k.d],styles:["table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{cursor:pointer}th.mat-column-actions[_ngcontent-%COMP%]{padding-left:10px}  .dialog-edit-job mat-dialog-container{height:90vh}"]}),t})(),Ot=(()=>{class t{constructor(t){this.location=t}onClick(){this.location.back()}}return t.\u0275fac=function(c){return new(c||t)(h.xc(n.j))},t.\u0275dir=h.sc({type:t,selectors:[["","appBack",""]],hostBindings:function(t,c){1&t&&h.Nc("click",function(){return c.onClick()})}}),t})();function Rt(t,c){if(1&t){const t=h.Ec();h.Dc(0,"th",33),h.Dc(1,"mat-checkbox",34),h.Nc("change",function(c){h.id(t);const e=h.Rc();return c?e.masterToggle():null}),h.Cc(),h.Cc()}if(2&t){const t=h.Rc();h.kc(1),h.Yc("checked",t.selection.hasValue()&&t.isAllSelected())("indeterminate",t.selection.hasValue()&&!t.isAllSelected())("aria-label",t.checkboxLabel())}}function Pt(t,c){if(1&t){const t=h.Ec();h.Dc(0,"td",35),h.Dc(1,"mat-checkbox",36),h.Nc("click",function(t){return t.stopPropagation()})("change",function(e){h.id(t);const n=c.$implicit,i=h.Rc();return e?i.selection.toggle(n):null}),h.Cc(),h.Cc()}if(2&t){const t=c.$implicit,e=h.Rc();h.kc(1),h.Yc("checked",e.selection.isSelected(t))("aria-label",e.checkboxLabel(t))}}function Nt(t,c){1&t&&(h.Dc(0,"th",33),h.td(1," ID "),h.Cc())}function Bt(t,c){if(1&t&&(h.Dc(0,"td",35),h.td(1),h.Cc()),2&t){const t=c.$implicit;h.kc(1),h.vd(" ",null==t?null:t.id," ")}}function Lt(t,c){1&t&&(h.Dc(0,"th",33),h.td(1),h.Sc(2,"translate"),h.Cc()),2&t&&(h.kc(1),h.vd(" ",h.Tc(2,1,"taskmanager.jobName")," "))}function zt(t,c){if(1&t&&(h.Dc(0,"td",35),h.td(1),h.Cc()),2&t){const t=h.Rc();h.kc(1),h.ud(null==t.currentJob?null:t.currentJob.name)}}function Yt(t,c){1&t&&(h.Dc(0,"th",33),h.td(1),h.Sc(2,"translate"),h.Cc()),2&t&&(h.kc(1),h.vd(" ",h.Tc(2,1,"common.userName")," "))}function Mt(t,c){if(1&t&&(h.Dc(0,"td",35),h.td(1),h.Cc()),2&t){const t=c.$implicit;h.kc(1),h.vd(" ",null==t?null:t.user_name," ")}}function _t(t,c){1&t&&(h.Dc(0,"th",33),h.td(1),h.Sc(2,"translate"),h.Cc()),2&t&&(h.kc(1),h.vd(" ",h.Tc(2,1,"taskmanager.numberTask")," "))}function Et(t,c){if(1&t&&(h.Dc(0,"td",35),h.td(1),h.Cc()),2&t){const t=c.$implicit;h.kc(1),h.vd(" ",null==t?null:t.num_task," ")}}function It(t,c){1&t&&(h.Dc(0,"th",33),h.td(1),h.Sc(2,"translate"),h.Cc()),2&t&&(h.kc(1),h.vd(" ",h.Tc(2,1,"common.progress")," "))}const Jt=function(t){return{"width.%":t}};function Ht(t,c){if(1&t&&(h.Dc(0,"td",35),h.Dc(1,"div",37),h.Dc(2,"div",38),h.td(3),h.Sc(4,"number"),h.Cc(),h.Cc(),h.Cc()),2&t){const t=c.$implicit;h.kc(2),h.Yc("ngStyle",h.cd(6,Jt,100*(null==t?null:t.progress))),h.lc("aria-valuenow",100*(null==t?null:t.progress)),h.kc(1),h.vd("",h.Uc(4,3,100*(null==t?null:t.progress),"1.1-1"),"%")}}function Ut(t,c){1&t&&(h.Dc(0,"th",33),h.td(1),h.Sc(2,"translate"),h.Cc()),2&t&&(h.kc(1),h.vd(" ",h.Tc(2,1,"common.status")," "))}function Vt(t,c){if(1&t&&(h.Dc(0,"td",35),h.Dc(1,"span",39),h.td(2),h.Cc(),h.Cc()),2&t){const t=c.$implicit;h.kc(1),h.pc("label-light-warning","Reviewing"===(null==t?null:t.status))("label-light-success","Accepted"===(null==t?null:t.status))("label-light-danger","Rejected"===(null==t?null:t.status))("label-light-light","Doing"===(null==t?null:t.status))("text-dark","Doing"===(null==t?null:t.status)),h.kc(1),h.ud(null==t?null:t.status)}}function Ft(t,c){1&t&&(h.Dc(0,"th",33),h.td(1),h.Sc(2,"translate"),h.Cc()),2&t&&(h.kc(1),h.vd(" ",h.Tc(2,1,"common.Actions")," "))}function Qt(t,c){if(1&t){const t=h.Ec();h.Dc(0,"td",35),h.Dc(1,"button",40),h.Nc("click",function(e){h.id(t);const n=c.$implicit;return h.Rc().delete(n),e.stopPropagation()}),h.Dc(2,"mat-icon"),h.td(3,"delete"),h.Cc(),h.Cc(),h.Cc()}}function Xt(t,c){1&t&&h.yc(0,"tr",41)}function qt(t,c){if(1&t){const t=h.Ec();h.Dc(0,"tr",42),h.Nc("click",function(){h.id(t);const e=c.$implicit;return h.Rc().openTaskSubmissionDialog(e)}),h.Cc()}}function Gt(t,c){1&t&&(h.Bc(0),h.Dc(1,"div",43),h.yc(2,"div",44),h.Cc(),h.Ac())}const Kt=[{path:"job-management",component:$t},{path:"register-management",component:E},{path:"customer-register-job",component:ot},{path:"task-assignment/:id",component:(()=>{class t{constructor(t,c,e,n){this.jobService=t,this.route=c,this.injector=e,this.router=n,this.jobs=[],this.destroy$=new r.a,this.isLoading=!1,this.categories=[],this.displayedColumns=["select","position","job_name","user_name","num_task","progress","status","actions"],this.displayedChildTable=["name","content","result","actions"],this.dataSource=new l.k,this.selection=new a.c(!0,[]),this.length=null,this.pageSize=10,this.pageSizeOptions=[10,20,30,40],this.searchParams=new I,this.dialogService=this.injector.get(u.a)}ngOnInit(){this.route.params.subscribe(t=>{this.idJob=m.get(t,"id"),this.idJob&&this.initData()})}initData(){this.getTask(),this.getCurrentJob()}getCurrentJob(){this.jobService.getOneJob(this.idJob).pipe(Object(d.a)(this.destroy$)).subscribe(t=>{t&&(this.currentJob=t)})}getTask(){this.isLoading=!0,this.jobService.getTaskAssignment(this.idJob,this.searchParams).pipe(Object(d.a)(this.destroy$)).subscribe(t=>{if(!t)return;const c=m.get(t,"items");this.dataSource.data=c,this.length=m.get(t,"total")},()=>{},()=>{this.isLoading=!1})}isAllSelected(){return this.selection.selected.length===this.dataSource.data.length}masterToggle(){this.isAllSelected()?this.selection.clear():this.dataSource.data.forEach(t=>this.selection.select(t))}checkboxLabel(t){return t?`${this.selection.isSelected(t)?"deselect":"select"} row ${t.position+1}`:(this.isAllSelected()?"select":"deselect")+" all"}ngAfterViewInit(){this.dataSource.sort=this.sort}pageChange(t){const c=m.get(t,"pageIndex");this.searchParams.pageNumber=c||0===c?c+1:c,this.searchParams.perPage=m.get(t,"pageSize",10),this.getTask()}openAnnotatorListDialog(){this.dialogService.openAnnotatorListDialog({id:this.idJob}).pipe(Object(d.a)(this.destroy$)).subscribe(t=>{t&&this.initData()})}openTaskSubmissionDialog(t){this.dialogService.openTaskSubmissionDialog({job:this.currentJob,task:t}).pipe(Object(d.a)(this.destroy$)).subscribe(t=>{t&&this.initData()})}delete(t){const c=m.get(t,"id");this.dialogService.openDialogConfirm(`Are you sure delete <strong>assignment ${m.get(this.currentJob,"name")}</strong>?`).pipe(Object(d.a)(this.destroy$)).subscribe(t=>{t&&this.jobService.deleteAssignTask(this.idJob,c).pipe(Object(d.a)(this.destroy$)).subscribe(t=>{t&&this.initData()})})}}return t.\u0275fac=function(c){return new(c||t)(h.xc(J.a),h.xc(i.a),h.xc(h.x),h.xc(i.h))},t.\u0275cmp=h.rc({type:t,selectors:[["app-task-assignment"]],viewQuery:function(t,c){if(1&t&&(h.xd(o.a,!0),h.xd(s.a,!0)),2&t){let t;h.fd(t=h.Oc())&&(c.paginator=t.first),h.fd(t=h.Oc())&&(c.sort=t.first)}},features:[h.jc([u.a])],decls:67,vars:28,consts:[[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title","d-flex","align-items-center"],["appBack","",1,"mr-3","d-flex","align-items-center"],[1,"card-label"],[1,"card-toolbar"],["type","button",1,"btn","btn-primary",3,"click"],[1,"card-body"],[1,"form","form-label-right"],[1,"form-group","row"],[1,"col-lg-4"],[1,"row"],[1,"col-lg-6"],["name","status","placeholder","Filter by Status",1,"form-control"],["value",""],["value","1"],[1,"form-text","text-muted"],["type","text","name","searchText","placeholder","Search","value","",1,"form-control"],["mat-table","","matSort","",1,"w-100",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","position"],["matColumnDef","job_name"],["matColumnDef","user_name"],["matColumnDef","num_task"],["matColumnDef","progress"],["matColumnDef","status"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],[3,"length","pageSize","pageSizeOptions","page"],[4,"ngIf"],["mat-header-cell",""],["color","primary",3,"checked","indeterminate","aria-label","change"],["mat-cell",""],["color","primary",3,"checked","aria-label","click","change"],[1,"progress"],["role","progressbar","aria-valuemin","0","aria-valuemax","1",1,"progress-bar",3,"ngStyle"],[1,"label","label-lg","label-inline"],["mat-icon-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row","",3,"click"],[1,"overlay-layer"],[1,"spinner","spinner-lg","spinner-primary"]],template:function(t,c){1&t&&(h.Dc(0,"div",0),h.Dc(1,"div",1),h.Dc(2,"div",2),h.Dc(3,"mat-icon",3),h.td(4,"keyboard_backspace"),h.Cc(),h.Dc(5,"h3",4),h.td(6),h.Sc(7,"translate"),h.Cc(),h.Cc(),h.Dc(8,"div",5),h.Dc(9,"button",6),h.Nc("click",function(){return c.openAnnotatorListDialog()}),h.td(10),h.Sc(11,"translate"),h.Cc(),h.Cc(),h.Cc(),h.Dc(12,"div",7),h.Dc(13,"div",8),h.Dc(14,"div",9),h.Dc(15,"div",10),h.Dc(16,"div",11),h.Dc(17,"div",12),h.Dc(18,"select",13),h.Dc(19,"option",14),h.td(20),h.Sc(21,"translate"),h.Cc(),h.Dc(22,"option",15),h.td(23,"Translation"),h.Cc(),h.Cc(),h.Dc(24,"small",16),h.Dc(25,"b"),h.td(26),h.Sc(27,"translate"),h.Cc(),h.td(28),h.Sc(29,"translate"),h.Cc(),h.Cc(),h.Dc(30,"div",12),h.yc(31,"input",17),h.Dc(32,"small",16),h.Dc(33,"b"),h.td(34),h.Sc(35,"translate"),h.Cc(),h.td(36),h.Sc(37,"translate"),h.Cc(),h.Cc(),h.Cc(),h.Cc(),h.Cc(),h.Cc(),h.Dc(38,"table",18),h.Bc(39,19),h.rd(40,Rt,2,3,"th",20),h.rd(41,Pt,2,2,"td",21),h.Ac(),h.Bc(42,22),h.rd(43,Nt,2,0,"th",20),h.rd(44,Bt,2,1,"td",21),h.Ac(),h.Bc(45,23),h.rd(46,Lt,3,3,"th",20),h.rd(47,zt,2,1,"td",21),h.Ac(),h.Bc(48,24),h.rd(49,Yt,3,3,"th",20),h.rd(50,Mt,2,1,"td",21),h.Ac(),h.Bc(51,25),h.rd(52,_t,3,3,"th",20),h.rd(53,Et,2,1,"td",21),h.Ac(),h.Bc(54,26),h.rd(55,It,3,3,"th",20),h.rd(56,Ht,5,8,"td",21),h.Ac(),h.Bc(57,27),h.rd(58,Ut,3,3,"th",20),h.rd(59,Vt,3,11,"td",21),h.Ac(),h.Bc(60,28),h.rd(61,Ft,3,3,"th",20),h.rd(62,Qt,4,0,"td",21),h.Ac(),h.rd(63,Xt,1,0,"tr",29),h.rd(64,qt,1,0,"tr",30),h.Cc(),h.Dc(65,"mat-paginator",31),h.Nc("page",function(t){return c.pageChange(t)}),h.Cc(),h.Cc(),h.Cc(),h.rd(66,Gt,3,0,"ng-container",32)),2&t&&(h.kc(6),h.ud(h.Tc(7,14,"taskmanager.taskAssignment")),h.kc(4),h.ud(h.Tc(11,16,"taskmanager.assignTask")),h.kc(10),h.ud(h.Tc(21,18,"common.all")),h.kc(6),h.ud(h.Tc(27,20,"common.filter")),h.kc(2),h.vd(" ",h.Tc(29,22,"common.byCategory"),""),h.kc(6),h.ud(h.Tc(35,24,"common.search")),h.kc(2),h.vd(" ",h.Tc(37,26,"common.inAllFields"),""),h.kc(2),h.Yc("dataSource",c.dataSource),h.kc(25),h.Yc("matHeaderRowDef",c.displayedColumns),h.kc(1),h.Yc("matRowDefColumns",c.displayedColumns),h.kc(1),h.Yc("length",c.length)("pageSize",c.pageSize)("pageSizeOptions",c.pageSizeOptions),h.kc(1),h.Yc("ngIf",c.isLoading))},directives:[C.a,Ot,g.u,g.y,l.j,l.c,l.e,l.b,l.g,l.i,o.a,n.n,l.d,D.a,l.a,n.o,b.a,l.f,l.h],pipes:[k.d,n.f],styles:["[_nghost-%COMP%]   .job-detail[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding-top:8px;padding-bottom:8px}[_nghost-%COMP%]   .job-detail[_ngcontent-%COMP%]   .job-name[_ngcontent-%COMP%]{font-size:1.275rem}[_nghost-%COMP%]   .job-detail[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:8px;color:#7b7b7b}[_nghost-%COMP%]   .job-detail[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;color:#434343}.card-title[_ngcontent-%COMP%]{cursor:pointer}.cdk-column-status[_ngcontent-%COMP%]{text-align:center}.label[_ngcontent-%COMP%]{min-width:72px}"]}),t})()}];let Wt=(()=>{class t{}return t.\u0275mod=h.vc({type:t}),t.\u0275inj=h.uc({factory:function(c){return new(c||t)},imports:[[i.l.forChild(Kt)],i.l]}),t})();var Zt=e("e8Ap"),tc=e("bv9b"),cc=e("H+Ub"),ec=e("A5z7"),nc=e("/1cH"),ic=e("TU8p"),ac=e("9Xeq"),oc=e("yGOH"),sc=e("1jcm"),lc=e("d3UM");let rc=(()=>{class t{}return t.\u0275mod=h.vc({type:t}),t.\u0275inj=h.uc({factory:function(c){return new(c||t)},providers:[u.a],imports:[[n.c,Wt,Zt.b,g.v,g.m,tc.a,l.l,D.b,b.b,C.b,o.c,cc.a,ec.e,nc.b,lt.d,ic.b,ac.a,oc.a,sc.b,k.c,lc.b]]}),t})()}}]);