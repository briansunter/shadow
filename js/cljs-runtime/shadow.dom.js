goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if(((!((this$ == null))) && (!((this$.shadow$dom$IElement$_to_dom$arity$1 == null))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (shadow.dom._to_dom["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if(((!((this$ == null))) && (!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (shadow.dom._to_svg["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33815 = coll;
var G__33816 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33815,G__33816) : shadow.dom.lazy_native_coll_seq.call(null,G__33815,G__33816));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__3949__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)].join(''));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33827 = arguments.length;
switch (G__33827) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33830 = arguments.length;
switch (G__33830) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33833 = arguments.length;
switch (G__33833) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33836 = arguments.length;
switch (G__33836) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33839 = arguments.length;
switch (G__33839) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__33840 = document;
var G__33841 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33840,G__33841);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__33842 = shadow.dom.dom_node(parent);
var G__33843 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33842,G__33843);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__33845 = shadow.dom.dom_node(el);
var G__33846 = cls;
return goog.dom.classlist.add(G__33845,G__33846);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__33847 = shadow.dom.dom_node(el);
var G__33848 = cls;
return goog.dom.classlist.remove(G__33847,G__33848);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33850 = arguments.length;
switch (G__33850) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__33851 = shadow.dom.dom_node(el);
var G__33852 = cls;
return goog.dom.classlist.toggle(G__33851,G__33852);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__3949__auto__ = !((typeof document !== 'undefined'));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33854){if((e33854 instanceof Object)){
var e = e33854;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33854;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__3949__auto__ = !((typeof document !== 'undefined'));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33855 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33856 = null;
var count__33857 = (0);
var i__33858 = (0);
while(true){
if((i__33858 < count__33857)){
var el = chunk__33856.cljs$core$IIndexed$_nth$arity$2(null,i__33858);
var handler_33865__$1 = ((function (seq__33855,chunk__33856,count__33857,i__33858,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33855,chunk__33856,count__33857,i__33858,el))
;
var G__33859_33866 = el;
var G__33860_33867 = cljs.core.name(ev);
var G__33861_33868 = handler_33865__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33859_33866,G__33860_33867,G__33861_33868) : shadow.dom.dom_listen.call(null,G__33859_33866,G__33860_33867,G__33861_33868));


var G__33869 = seq__33855;
var G__33870 = chunk__33856;
var G__33871 = count__33857;
var G__33872 = (i__33858 + (1));
seq__33855 = G__33869;
chunk__33856 = G__33870;
count__33857 = G__33871;
i__33858 = G__33872;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__33855);
if(temp__5457__auto__){
var seq__33855__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33855__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__33855__$1);
var G__33873 = cljs.core.chunk_rest(seq__33855__$1);
var G__33874 = c__4351__auto__;
var G__33875 = cljs.core.count(c__4351__auto__);
var G__33876 = (0);
seq__33855 = G__33873;
chunk__33856 = G__33874;
count__33857 = G__33875;
i__33858 = G__33876;
continue;
} else {
var el = cljs.core.first(seq__33855__$1);
var handler_33877__$1 = ((function (seq__33855,chunk__33856,count__33857,i__33858,el,seq__33855__$1,temp__5457__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33855,chunk__33856,count__33857,i__33858,el,seq__33855__$1,temp__5457__auto__))
;
var G__33862_33878 = el;
var G__33863_33879 = cljs.core.name(ev);
var G__33864_33880 = handler_33877__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33862_33878,G__33863_33879,G__33864_33880) : shadow.dom.dom_listen.call(null,G__33862_33878,G__33863_33879,G__33864_33880));


var G__33881 = cljs.core.next(seq__33855__$1);
var G__33882 = null;
var G__33883 = (0);
var G__33884 = (0);
seq__33855 = G__33881;
chunk__33856 = G__33882;
count__33857 = G__33883;
i__33858 = G__33884;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33886 = arguments.length;
switch (G__33886) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__33887 = shadow.dom.dom_node(el);
var G__33888 = cljs.core.name(ev);
var G__33889 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33887,G__33888,G__33889) : shadow.dom.dom_listen.call(null,G__33887,G__33888,G__33889));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__33891 = shadow.dom.dom_node(el);
var G__33892 = cljs.core.name(ev);
var G__33893 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__33891,G__33892,G__33893) : shadow.dom.dom_listen_remove.call(null,G__33891,G__33892,G__33893));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33894 = cljs.core.seq(events);
var chunk__33895 = null;
var count__33896 = (0);
var i__33897 = (0);
while(true){
if((i__33897 < count__33896)){
var vec__33898 = chunk__33895.cljs$core$IIndexed$_nth$arity$2(null,i__33897);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33898,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33898,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33904 = seq__33894;
var G__33905 = chunk__33895;
var G__33906 = count__33896;
var G__33907 = (i__33897 + (1));
seq__33894 = G__33904;
chunk__33895 = G__33905;
count__33896 = G__33906;
i__33897 = G__33907;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__33894);
if(temp__5457__auto__){
var seq__33894__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33894__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__33894__$1);
var G__33908 = cljs.core.chunk_rest(seq__33894__$1);
var G__33909 = c__4351__auto__;
var G__33910 = cljs.core.count(c__4351__auto__);
var G__33911 = (0);
seq__33894 = G__33908;
chunk__33895 = G__33909;
count__33896 = G__33910;
i__33897 = G__33911;
continue;
} else {
var vec__33901 = cljs.core.first(seq__33894__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33901,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33901,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33912 = cljs.core.next(seq__33894__$1);
var G__33913 = null;
var G__33914 = (0);
var G__33915 = (0);
seq__33894 = G__33912;
chunk__33895 = G__33913;
count__33896 = G__33914;
i__33897 = G__33915;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33916 = cljs.core.seq(styles);
var chunk__33917 = null;
var count__33918 = (0);
var i__33919 = (0);
while(true){
if((i__33919 < count__33918)){
var vec__33920 = chunk__33917.cljs$core$IIndexed$_nth$arity$2(null,i__33919);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33920,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33920,(1),null);
var G__33923_33932 = dom;
var G__33924_33933 = cljs.core.name(k);
var G__33925_33934 = (((v == null))?"":v);
goog.style.setStyle(G__33923_33932,G__33924_33933,G__33925_33934);


var G__33935 = seq__33916;
var G__33936 = chunk__33917;
var G__33937 = count__33918;
var G__33938 = (i__33919 + (1));
seq__33916 = G__33935;
chunk__33917 = G__33936;
count__33918 = G__33937;
i__33919 = G__33938;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__33916);
if(temp__5457__auto__){
var seq__33916__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33916__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__33916__$1);
var G__33939 = cljs.core.chunk_rest(seq__33916__$1);
var G__33940 = c__4351__auto__;
var G__33941 = cljs.core.count(c__4351__auto__);
var G__33942 = (0);
seq__33916 = G__33939;
chunk__33917 = G__33940;
count__33918 = G__33941;
i__33919 = G__33942;
continue;
} else {
var vec__33926 = cljs.core.first(seq__33916__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33926,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33926,(1),null);
var G__33929_33943 = dom;
var G__33930_33944 = cljs.core.name(k);
var G__33931_33945 = (((v == null))?"":v);
goog.style.setStyle(G__33929_33943,G__33930_33944,G__33931_33945);


var G__33946 = cljs.core.next(seq__33916__$1);
var G__33947 = null;
var G__33948 = (0);
var G__33949 = (0);
seq__33916 = G__33946;
chunk__33917 = G__33947;
count__33918 = G__33948;
i__33919 = G__33949;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33950_33951 = key;
var G__33950_33952__$1 = (((G__33950_33951 instanceof cljs.core.Keyword))?G__33950_33951.fqn:null);
switch (G__33950_33952__$1) {
case "id":
el.id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "class":
el.className = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33954 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__3949__auto__ = goog.string.startsWith(ks_33954,"data-");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.string.startsWith(ks_33954,"aria-");
}
})())){
el.setAttribute(ks_33954,value);
} else {
(el[ks_33954] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__33955 = shadow.dom.dom_node(el);
var G__33956 = cls;
return goog.dom.classlist.contains(G__33955,G__33956);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1)].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33957){
var map__33958 = p__33957;
var map__33958__$1 = ((((!((map__33958 == null)))?(((((map__33958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33958):map__33958);
var props = map__33958__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33958__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33960 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33960,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33960,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33960,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33963 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33963,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33963;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33965 = arguments.length;
switch (G__33965) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33967){
var vec__33968 = p__33967;
var seq__33969 = cljs.core.seq(vec__33968);
var first__33970 = cljs.core.first(seq__33969);
var seq__33969__$1 = cljs.core.next(seq__33969);
var nn = first__33970;
var first__33970__$1 = cljs.core.first(seq__33969__$1);
var seq__33969__$2 = cljs.core.next(seq__33969__$1);
var np = first__33970__$1;
var nc = seq__33969__$2;
var node = vec__33968;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33971 = nn;
var G__33972 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33971,G__33972) : create_fn.call(null,G__33971,G__33972));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33973 = nn;
var G__33974 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33973,G__33974) : create_fn.call(null,G__33973,G__33974));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33975 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33975,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33975,(1),null);
var seq__33978_33994 = cljs.core.seq(node_children);
var chunk__33979_33995 = null;
var count__33980_33996 = (0);
var i__33981_33997 = (0);
while(true){
if((i__33981_33997 < count__33980_33996)){
var child_struct_33998 = chunk__33979_33995.cljs$core$IIndexed$_nth$arity$2(null,i__33981_33997);
var children_33999 = shadow.dom.dom_node(child_struct_33998);
if(cljs.core.seq_QMARK_(children_33999)){
var seq__33982_34000 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33999));
var chunk__33984_34001 = null;
var count__33985_34002 = (0);
var i__33986_34003 = (0);
while(true){
if((i__33986_34003 < count__33985_34002)){
var child_34004 = chunk__33984_34001.cljs$core$IIndexed$_nth$arity$2(null,i__33986_34003);
if(cljs.core.truth_(child_34004)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34004);


var G__34005 = seq__33982_34000;
var G__34006 = chunk__33984_34001;
var G__34007 = count__33985_34002;
var G__34008 = (i__33986_34003 + (1));
seq__33982_34000 = G__34005;
chunk__33984_34001 = G__34006;
count__33985_34002 = G__34007;
i__33986_34003 = G__34008;
continue;
} else {
var G__34009 = seq__33982_34000;
var G__34010 = chunk__33984_34001;
var G__34011 = count__33985_34002;
var G__34012 = (i__33986_34003 + (1));
seq__33982_34000 = G__34009;
chunk__33984_34001 = G__34010;
count__33985_34002 = G__34011;
i__33986_34003 = G__34012;
continue;
}
} else {
var temp__5457__auto___34013 = cljs.core.seq(seq__33982_34000);
if(temp__5457__auto___34013){
var seq__33982_34014__$1 = temp__5457__auto___34013;
if(cljs.core.chunked_seq_QMARK_(seq__33982_34014__$1)){
var c__4351__auto___34015 = cljs.core.chunk_first(seq__33982_34014__$1);
var G__34016 = cljs.core.chunk_rest(seq__33982_34014__$1);
var G__34017 = c__4351__auto___34015;
var G__34018 = cljs.core.count(c__4351__auto___34015);
var G__34019 = (0);
seq__33982_34000 = G__34016;
chunk__33984_34001 = G__34017;
count__33985_34002 = G__34018;
i__33986_34003 = G__34019;
continue;
} else {
var child_34020 = cljs.core.first(seq__33982_34014__$1);
if(cljs.core.truth_(child_34020)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34020);


var G__34021 = cljs.core.next(seq__33982_34014__$1);
var G__34022 = null;
var G__34023 = (0);
var G__34024 = (0);
seq__33982_34000 = G__34021;
chunk__33984_34001 = G__34022;
count__33985_34002 = G__34023;
i__33986_34003 = G__34024;
continue;
} else {
var G__34025 = cljs.core.next(seq__33982_34014__$1);
var G__34026 = null;
var G__34027 = (0);
var G__34028 = (0);
seq__33982_34000 = G__34025;
chunk__33984_34001 = G__34026;
count__33985_34002 = G__34027;
i__33986_34003 = G__34028;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33999);
}


var G__34029 = seq__33978_33994;
var G__34030 = chunk__33979_33995;
var G__34031 = count__33980_33996;
var G__34032 = (i__33981_33997 + (1));
seq__33978_33994 = G__34029;
chunk__33979_33995 = G__34030;
count__33980_33996 = G__34031;
i__33981_33997 = G__34032;
continue;
} else {
var temp__5457__auto___34033 = cljs.core.seq(seq__33978_33994);
if(temp__5457__auto___34033){
var seq__33978_34034__$1 = temp__5457__auto___34033;
if(cljs.core.chunked_seq_QMARK_(seq__33978_34034__$1)){
var c__4351__auto___34035 = cljs.core.chunk_first(seq__33978_34034__$1);
var G__34036 = cljs.core.chunk_rest(seq__33978_34034__$1);
var G__34037 = c__4351__auto___34035;
var G__34038 = cljs.core.count(c__4351__auto___34035);
var G__34039 = (0);
seq__33978_33994 = G__34036;
chunk__33979_33995 = G__34037;
count__33980_33996 = G__34038;
i__33981_33997 = G__34039;
continue;
} else {
var child_struct_34040 = cljs.core.first(seq__33978_34034__$1);
var children_34041 = shadow.dom.dom_node(child_struct_34040);
if(cljs.core.seq_QMARK_(children_34041)){
var seq__33988_34042 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34041));
var chunk__33990_34043 = null;
var count__33991_34044 = (0);
var i__33992_34045 = (0);
while(true){
if((i__33992_34045 < count__33991_34044)){
var child_34046 = chunk__33990_34043.cljs$core$IIndexed$_nth$arity$2(null,i__33992_34045);
if(cljs.core.truth_(child_34046)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34046);


var G__34047 = seq__33988_34042;
var G__34048 = chunk__33990_34043;
var G__34049 = count__33991_34044;
var G__34050 = (i__33992_34045 + (1));
seq__33988_34042 = G__34047;
chunk__33990_34043 = G__34048;
count__33991_34044 = G__34049;
i__33992_34045 = G__34050;
continue;
} else {
var G__34051 = seq__33988_34042;
var G__34052 = chunk__33990_34043;
var G__34053 = count__33991_34044;
var G__34054 = (i__33992_34045 + (1));
seq__33988_34042 = G__34051;
chunk__33990_34043 = G__34052;
count__33991_34044 = G__34053;
i__33992_34045 = G__34054;
continue;
}
} else {
var temp__5457__auto___34055__$1 = cljs.core.seq(seq__33988_34042);
if(temp__5457__auto___34055__$1){
var seq__33988_34056__$1 = temp__5457__auto___34055__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33988_34056__$1)){
var c__4351__auto___34057 = cljs.core.chunk_first(seq__33988_34056__$1);
var G__34058 = cljs.core.chunk_rest(seq__33988_34056__$1);
var G__34059 = c__4351__auto___34057;
var G__34060 = cljs.core.count(c__4351__auto___34057);
var G__34061 = (0);
seq__33988_34042 = G__34058;
chunk__33990_34043 = G__34059;
count__33991_34044 = G__34060;
i__33992_34045 = G__34061;
continue;
} else {
var child_34062 = cljs.core.first(seq__33988_34056__$1);
if(cljs.core.truth_(child_34062)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34062);


var G__34063 = cljs.core.next(seq__33988_34056__$1);
var G__34064 = null;
var G__34065 = (0);
var G__34066 = (0);
seq__33988_34042 = G__34063;
chunk__33990_34043 = G__34064;
count__33991_34044 = G__34065;
i__33992_34045 = G__34066;
continue;
} else {
var G__34067 = cljs.core.next(seq__33988_34056__$1);
var G__34068 = null;
var G__34069 = (0);
var G__34070 = (0);
seq__33988_34042 = G__34067;
chunk__33990_34043 = G__34068;
count__33991_34044 = G__34069;
i__33992_34045 = G__34070;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34041);
}


var G__34071 = cljs.core.next(seq__33978_34034__$1);
var G__34072 = null;
var G__34073 = (0);
var G__34074 = (0);
seq__33978_33994 = G__34071;
chunk__33979_33995 = G__34072;
count__33980_33996 = G__34073;
i__33981_33997 = G__34074;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__34075 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__34075);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if(((!((node == null)))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__34077 = cljs.core.seq(node);
var chunk__34078 = null;
var count__34079 = (0);
var i__34080 = (0);
while(true){
if((i__34080 < count__34079)){
var n = chunk__34078.cljs$core$IIndexed$_nth$arity$2(null,i__34080);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34081 = seq__34077;
var G__34082 = chunk__34078;
var G__34083 = count__34079;
var G__34084 = (i__34080 + (1));
seq__34077 = G__34081;
chunk__34078 = G__34082;
count__34079 = G__34083;
i__34080 = G__34084;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__34077);
if(temp__5457__auto__){
var seq__34077__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34077__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__34077__$1);
var G__34085 = cljs.core.chunk_rest(seq__34077__$1);
var G__34086 = c__4351__auto__;
var G__34087 = cljs.core.count(c__4351__auto__);
var G__34088 = (0);
seq__34077 = G__34085;
chunk__34078 = G__34086;
count__34079 = G__34087;
i__34080 = G__34088;
continue;
} else {
var n = cljs.core.first(seq__34077__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34089 = cljs.core.next(seq__34077__$1);
var G__34090 = null;
var G__34091 = (0);
var G__34092 = (0);
seq__34077 = G__34089;
chunk__34078 = G__34090;
count__34079 = G__34091;
i__34080 = G__34092;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__34093 = shadow.dom.dom_node(new$);
var G__34094 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__34093,G__34094);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__34096 = arguments.length;
switch (G__34096) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__34099 = arguments.length;
switch (G__34099) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__34102 = arguments.length;
switch (G__34102) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__3949__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4534__auto__ = [];
var len__4531__auto___34109 = arguments.length;
var i__4532__auto___34110 = (0);
while(true){
if((i__4532__auto___34110 < len__4531__auto___34109)){
args__4534__auto__.push((arguments[i__4532__auto___34110]));

var G__34111 = (i__4532__auto___34110 + (1));
i__4532__auto___34110 = G__34111;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34105_34112 = cljs.core.seq(nodes);
var chunk__34106_34113 = null;
var count__34107_34114 = (0);
var i__34108_34115 = (0);
while(true){
if((i__34108_34115 < count__34107_34114)){
var node_34116 = chunk__34106_34113.cljs$core$IIndexed$_nth$arity$2(null,i__34108_34115);
fragment.appendChild(shadow.dom._to_dom(node_34116));


var G__34117 = seq__34105_34112;
var G__34118 = chunk__34106_34113;
var G__34119 = count__34107_34114;
var G__34120 = (i__34108_34115 + (1));
seq__34105_34112 = G__34117;
chunk__34106_34113 = G__34118;
count__34107_34114 = G__34119;
i__34108_34115 = G__34120;
continue;
} else {
var temp__5457__auto___34121 = cljs.core.seq(seq__34105_34112);
if(temp__5457__auto___34121){
var seq__34105_34122__$1 = temp__5457__auto___34121;
if(cljs.core.chunked_seq_QMARK_(seq__34105_34122__$1)){
var c__4351__auto___34123 = cljs.core.chunk_first(seq__34105_34122__$1);
var G__34124 = cljs.core.chunk_rest(seq__34105_34122__$1);
var G__34125 = c__4351__auto___34123;
var G__34126 = cljs.core.count(c__4351__auto___34123);
var G__34127 = (0);
seq__34105_34112 = G__34124;
chunk__34106_34113 = G__34125;
count__34107_34114 = G__34126;
i__34108_34115 = G__34127;
continue;
} else {
var node_34128 = cljs.core.first(seq__34105_34122__$1);
fragment.appendChild(shadow.dom._to_dom(node_34128));


var G__34129 = cljs.core.next(seq__34105_34122__$1);
var G__34130 = null;
var G__34131 = (0);
var G__34132 = (0);
seq__34105_34112 = G__34129;
chunk__34106_34113 = G__34130;
count__34107_34114 = G__34131;
i__34108_34115 = G__34132;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq34104){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34104));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34133_34147 = cljs.core.seq(scripts);
var chunk__34134_34148 = null;
var count__34135_34149 = (0);
var i__34136_34150 = (0);
while(true){
if((i__34136_34150 < count__34135_34149)){
var vec__34137_34151 = chunk__34134_34148.cljs$core$IIndexed$_nth$arity$2(null,i__34136_34150);
var script_tag_34152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34137_34151,(0),null);
var script_body_34153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34137_34151,(1),null);
eval(script_body_34153);


var G__34154 = seq__34133_34147;
var G__34155 = chunk__34134_34148;
var G__34156 = count__34135_34149;
var G__34157 = (i__34136_34150 + (1));
seq__34133_34147 = G__34154;
chunk__34134_34148 = G__34155;
count__34135_34149 = G__34156;
i__34136_34150 = G__34157;
continue;
} else {
var temp__5457__auto___34158 = cljs.core.seq(seq__34133_34147);
if(temp__5457__auto___34158){
var seq__34133_34159__$1 = temp__5457__auto___34158;
if(cljs.core.chunked_seq_QMARK_(seq__34133_34159__$1)){
var c__4351__auto___34160 = cljs.core.chunk_first(seq__34133_34159__$1);
var G__34161 = cljs.core.chunk_rest(seq__34133_34159__$1);
var G__34162 = c__4351__auto___34160;
var G__34163 = cljs.core.count(c__4351__auto___34160);
var G__34164 = (0);
seq__34133_34147 = G__34161;
chunk__34134_34148 = G__34162;
count__34135_34149 = G__34163;
i__34136_34150 = G__34164;
continue;
} else {
var vec__34140_34165 = cljs.core.first(seq__34133_34159__$1);
var script_tag_34166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34140_34165,(0),null);
var script_body_34167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34140_34165,(1),null);
eval(script_body_34167);


var G__34168 = cljs.core.next(seq__34133_34159__$1);
var G__34169 = null;
var G__34170 = (0);
var G__34171 = (0);
seq__34133_34147 = G__34168;
chunk__34134_34148 = G__34169;
count__34135_34149 = G__34170;
i__34136_34150 = G__34171;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__34143){
var vec__34144 = p__34143;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34144,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34144,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__34172 = shadow.dom.dom_node(el);
var G__34173 = cls;
return goog.dom.getAncestorByClass(G__34172,G__34173);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34175 = arguments.length;
switch (G__34175) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__34176 = shadow.dom.dom_node(el);
var G__34177 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__34176,G__34177);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__34178 = shadow.dom.dom_node(el);
var G__34179 = cljs.core.name(tag);
var G__34180 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__34178,G__34179,G__34180);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__34182 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__34182);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__34183 = shadow.dom.dom_node(dom);
var G__34184 = value;
return goog.dom.forms.setValue(G__34183,G__34184);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34185 = cljs.core.seq(style_keys);
var chunk__34186 = null;
var count__34187 = (0);
var i__34188 = (0);
while(true){
if((i__34188 < count__34187)){
var it = chunk__34186.cljs$core$IIndexed$_nth$arity$2(null,i__34188);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34189 = seq__34185;
var G__34190 = chunk__34186;
var G__34191 = count__34187;
var G__34192 = (i__34188 + (1));
seq__34185 = G__34189;
chunk__34186 = G__34190;
count__34187 = G__34191;
i__34188 = G__34192;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__34185);
if(temp__5457__auto__){
var seq__34185__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34185__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__34185__$1);
var G__34193 = cljs.core.chunk_rest(seq__34185__$1);
var G__34194 = c__4351__auto__;
var G__34195 = cljs.core.count(c__4351__auto__);
var G__34196 = (0);
seq__34185 = G__34193;
chunk__34186 = G__34194;
count__34187 = G__34195;
i__34188 = G__34196;
continue;
} else {
var it = cljs.core.first(seq__34185__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34197 = cljs.core.next(seq__34185__$1);
var G__34198 = null;
var G__34199 = (0);
var G__34200 = (0);
seq__34185 = G__34197;
chunk__34186 = G__34198;
count__34187 = G__34199;
i__34188 = G__34200;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4203__auto____$1,k__4204__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k34202,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__34206 = k34202;
var G__34206__$1 = (((G__34206 instanceof cljs.core.Keyword))?G__34206.fqn:null);
switch (G__34206__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34202,else__4206__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34201){
var self__ = this;
var G__34201__$1 = this;
return (new cljs.core.RecordIter((0),G__34201__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__34207 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__34207(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34203,other34204){
var self__ = this;
var this34203__$1 = this;
return ((!((other34204 == null))) && ((this34203__$1.constructor === other34204.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34203__$1.x,other34204.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34203__$1.y,other34204.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34203__$1.__extmap,other34204.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__34201){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__34208 = cljs.core.keyword_identical_QMARK_;
var expr__34209 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__34211 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__34212 = expr__34209;
return (pred__34208.cljs$core$IFn$_invoke$arity$2 ? pred__34208.cljs$core$IFn$_invoke$arity$2(G__34211,G__34212) : pred__34208.call(null,G__34211,G__34212));
})())){
return (new shadow.dom.Coordinate(G__34201,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34213 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__34214 = expr__34209;
return (pred__34208.cljs$core$IFn$_invoke$arity$2 ? pred__34208.cljs$core$IFn$_invoke$arity$2(G__34213,G__34214) : pred__34208.call(null,G__34213,G__34214));
})())){
return (new shadow.dom.Coordinate(self__.x,G__34201,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__34201),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__34201){
var self__ = this;
var this__4202__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34201,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return cljs.core._assoc(this__4208__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34205){
var extmap__4236__auto__ = (function (){var G__34215 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34205,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34205)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34215);
} else {
return G__34215;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34205),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34205),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__34217 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__34217);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__34218 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__34218);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__34219 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__34219);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4203__auto____$1,k__4204__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k34221,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__34225 = k34221;
var G__34225__$1 = (((G__34225 instanceof cljs.core.Keyword))?G__34225.fqn:null);
switch (G__34225__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34221,else__4206__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#shadow.dom.Size{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34220){
var self__ = this;
var G__34220__$1 = this;
return (new cljs.core.RecordIter((0),G__34220__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__34226 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__34226(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34222,other34223){
var self__ = this;
var this34222__$1 = this;
return ((!((other34223 == null))) && ((this34222__$1.constructor === other34223.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34222__$1.w,other34223.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34222__$1.h,other34223.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34222__$1.__extmap,other34223.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__34220){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__34227 = cljs.core.keyword_identical_QMARK_;
var expr__34228 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__34230 = new cljs.core.Keyword(null,"w","w",354169001);
var G__34231 = expr__34228;
return (pred__34227.cljs$core$IFn$_invoke$arity$2 ? pred__34227.cljs$core$IFn$_invoke$arity$2(G__34230,G__34231) : pred__34227.call(null,G__34230,G__34231));
})())){
return (new shadow.dom.Size(G__34220,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34232 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__34233 = expr__34228;
return (pred__34227.cljs$core$IFn$_invoke$arity$2 ? pred__34227.cljs$core$IFn$_invoke$arity$2(G__34232,G__34233) : pred__34227.call(null,G__34232,G__34233));
})())){
return (new shadow.dom.Size(self__.w,G__34220,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__34220),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__34220){
var self__ = this;
var this__4202__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34220,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return cljs.core._assoc(this__4208__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34224){
var extmap__4236__auto__ = (function (){var G__34234 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34224,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34224)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34234);
} else {
return G__34234;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34224),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34224),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__34236 = shadow.dom.dom_node(el);
return goog.style.getSize(G__34236);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4405__auto__ = opts;
var l__4406__auto__ = a__4405__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4406__auto__)){
var G__34237 = (i + (1));
var G__34238 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34237;
ret = G__34238;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34239){
var vec__34240 = p__34239;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34240,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34240,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34244 = arguments.length;
switch (G__34244) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__34246_34248 = new_node;
var G__34247_34249 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__34246_34248,G__34247_34249);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__34250_34252 = new_node;
var G__34251_34253 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__34250_34252,G__34251_34253);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5455__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5455__auto__)){
var child = temp__5455__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34254 = ps;
var G__34255 = (i + (1));
el__$1 = G__34254;
i = G__34255;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__34256 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__34256);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__34257 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__34257);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__34258 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__34258);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34259 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34259,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34259,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34259,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34262_34272 = cljs.core.seq(props);
var chunk__34263_34273 = null;
var count__34264_34274 = (0);
var i__34265_34275 = (0);
while(true){
if((i__34265_34275 < count__34264_34274)){
var vec__34266_34276 = chunk__34263_34273.cljs$core$IIndexed$_nth$arity$2(null,i__34265_34275);
var k_34277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34266_34276,(0),null);
var v_34278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34266_34276,(1),null);
el.setAttributeNS((function (){var temp__5457__auto__ = cljs.core.namespace(k_34277);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34277),v_34278);


var G__34279 = seq__34262_34272;
var G__34280 = chunk__34263_34273;
var G__34281 = count__34264_34274;
var G__34282 = (i__34265_34275 + (1));
seq__34262_34272 = G__34279;
chunk__34263_34273 = G__34280;
count__34264_34274 = G__34281;
i__34265_34275 = G__34282;
continue;
} else {
var temp__5457__auto___34283 = cljs.core.seq(seq__34262_34272);
if(temp__5457__auto___34283){
var seq__34262_34284__$1 = temp__5457__auto___34283;
if(cljs.core.chunked_seq_QMARK_(seq__34262_34284__$1)){
var c__4351__auto___34285 = cljs.core.chunk_first(seq__34262_34284__$1);
var G__34286 = cljs.core.chunk_rest(seq__34262_34284__$1);
var G__34287 = c__4351__auto___34285;
var G__34288 = cljs.core.count(c__4351__auto___34285);
var G__34289 = (0);
seq__34262_34272 = G__34286;
chunk__34263_34273 = G__34287;
count__34264_34274 = G__34288;
i__34265_34275 = G__34289;
continue;
} else {
var vec__34269_34290 = cljs.core.first(seq__34262_34284__$1);
var k_34291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34269_34290,(0),null);
var v_34292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34269_34290,(1),null);
el.setAttributeNS((function (){var temp__5457__auto____$1 = cljs.core.namespace(k_34291);
if(cljs.core.truth_(temp__5457__auto____$1)){
var ns = temp__5457__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34291),v_34292);


var G__34293 = cljs.core.next(seq__34262_34284__$1);
var G__34294 = null;
var G__34295 = (0);
var G__34296 = (0);
seq__34262_34272 = G__34293;
chunk__34263_34273 = G__34294;
count__34264_34274 = G__34295;
i__34265_34275 = G__34296;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34298 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34298,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34298,(1),null);
var seq__34301_34319 = cljs.core.seq(node_children);
var chunk__34303_34320 = null;
var count__34304_34321 = (0);
var i__34305_34322 = (0);
while(true){
if((i__34305_34322 < count__34304_34321)){
var child_struct_34323 = chunk__34303_34320.cljs$core$IIndexed$_nth$arity$2(null,i__34305_34322);
if(!((child_struct_34323 == null))){
if(typeof child_struct_34323 === 'string'){
var text_34324 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34324),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_34323)].join(''));
} else {
var children_34325 = shadow.dom.svg_node(child_struct_34323);
if(cljs.core.seq_QMARK_(children_34325)){
var seq__34307_34326 = cljs.core.seq(children_34325);
var chunk__34309_34327 = null;
var count__34310_34328 = (0);
var i__34311_34329 = (0);
while(true){
if((i__34311_34329 < count__34310_34328)){
var child_34330 = chunk__34309_34327.cljs$core$IIndexed$_nth$arity$2(null,i__34311_34329);
if(cljs.core.truth_(child_34330)){
node.appendChild(child_34330);


var G__34331 = seq__34307_34326;
var G__34332 = chunk__34309_34327;
var G__34333 = count__34310_34328;
var G__34334 = (i__34311_34329 + (1));
seq__34307_34326 = G__34331;
chunk__34309_34327 = G__34332;
count__34310_34328 = G__34333;
i__34311_34329 = G__34334;
continue;
} else {
var G__34335 = seq__34307_34326;
var G__34336 = chunk__34309_34327;
var G__34337 = count__34310_34328;
var G__34338 = (i__34311_34329 + (1));
seq__34307_34326 = G__34335;
chunk__34309_34327 = G__34336;
count__34310_34328 = G__34337;
i__34311_34329 = G__34338;
continue;
}
} else {
var temp__5457__auto___34339 = cljs.core.seq(seq__34307_34326);
if(temp__5457__auto___34339){
var seq__34307_34340__$1 = temp__5457__auto___34339;
if(cljs.core.chunked_seq_QMARK_(seq__34307_34340__$1)){
var c__4351__auto___34341 = cljs.core.chunk_first(seq__34307_34340__$1);
var G__34342 = cljs.core.chunk_rest(seq__34307_34340__$1);
var G__34343 = c__4351__auto___34341;
var G__34344 = cljs.core.count(c__4351__auto___34341);
var G__34345 = (0);
seq__34307_34326 = G__34342;
chunk__34309_34327 = G__34343;
count__34310_34328 = G__34344;
i__34311_34329 = G__34345;
continue;
} else {
var child_34346 = cljs.core.first(seq__34307_34340__$1);
if(cljs.core.truth_(child_34346)){
node.appendChild(child_34346);


var G__34347 = cljs.core.next(seq__34307_34340__$1);
var G__34348 = null;
var G__34349 = (0);
var G__34350 = (0);
seq__34307_34326 = G__34347;
chunk__34309_34327 = G__34348;
count__34310_34328 = G__34349;
i__34311_34329 = G__34350;
continue;
} else {
var G__34351 = cljs.core.next(seq__34307_34340__$1);
var G__34352 = null;
var G__34353 = (0);
var G__34354 = (0);
seq__34307_34326 = G__34351;
chunk__34309_34327 = G__34352;
count__34310_34328 = G__34353;
i__34311_34329 = G__34354;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34325);
}
}


var G__34355 = seq__34301_34319;
var G__34356 = chunk__34303_34320;
var G__34357 = count__34304_34321;
var G__34358 = (i__34305_34322 + (1));
seq__34301_34319 = G__34355;
chunk__34303_34320 = G__34356;
count__34304_34321 = G__34357;
i__34305_34322 = G__34358;
continue;
} else {
var G__34359 = seq__34301_34319;
var G__34360 = chunk__34303_34320;
var G__34361 = count__34304_34321;
var G__34362 = (i__34305_34322 + (1));
seq__34301_34319 = G__34359;
chunk__34303_34320 = G__34360;
count__34304_34321 = G__34361;
i__34305_34322 = G__34362;
continue;
}
} else {
var temp__5457__auto___34363 = cljs.core.seq(seq__34301_34319);
if(temp__5457__auto___34363){
var seq__34301_34364__$1 = temp__5457__auto___34363;
if(cljs.core.chunked_seq_QMARK_(seq__34301_34364__$1)){
var c__4351__auto___34365 = cljs.core.chunk_first(seq__34301_34364__$1);
var G__34366 = cljs.core.chunk_rest(seq__34301_34364__$1);
var G__34367 = c__4351__auto___34365;
var G__34368 = cljs.core.count(c__4351__auto___34365);
var G__34369 = (0);
seq__34301_34319 = G__34366;
chunk__34303_34320 = G__34367;
count__34304_34321 = G__34368;
i__34305_34322 = G__34369;
continue;
} else {
var child_struct_34370 = cljs.core.first(seq__34301_34364__$1);
if(!((child_struct_34370 == null))){
if(typeof child_struct_34370 === 'string'){
var text_34371 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34371),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_34370)].join(''));
} else {
var children_34372 = shadow.dom.svg_node(child_struct_34370);
if(cljs.core.seq_QMARK_(children_34372)){
var seq__34313_34373 = cljs.core.seq(children_34372);
var chunk__34315_34374 = null;
var count__34316_34375 = (0);
var i__34317_34376 = (0);
while(true){
if((i__34317_34376 < count__34316_34375)){
var child_34377 = chunk__34315_34374.cljs$core$IIndexed$_nth$arity$2(null,i__34317_34376);
if(cljs.core.truth_(child_34377)){
node.appendChild(child_34377);


var G__34378 = seq__34313_34373;
var G__34379 = chunk__34315_34374;
var G__34380 = count__34316_34375;
var G__34381 = (i__34317_34376 + (1));
seq__34313_34373 = G__34378;
chunk__34315_34374 = G__34379;
count__34316_34375 = G__34380;
i__34317_34376 = G__34381;
continue;
} else {
var G__34382 = seq__34313_34373;
var G__34383 = chunk__34315_34374;
var G__34384 = count__34316_34375;
var G__34385 = (i__34317_34376 + (1));
seq__34313_34373 = G__34382;
chunk__34315_34374 = G__34383;
count__34316_34375 = G__34384;
i__34317_34376 = G__34385;
continue;
}
} else {
var temp__5457__auto___34386__$1 = cljs.core.seq(seq__34313_34373);
if(temp__5457__auto___34386__$1){
var seq__34313_34387__$1 = temp__5457__auto___34386__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34313_34387__$1)){
var c__4351__auto___34388 = cljs.core.chunk_first(seq__34313_34387__$1);
var G__34389 = cljs.core.chunk_rest(seq__34313_34387__$1);
var G__34390 = c__4351__auto___34388;
var G__34391 = cljs.core.count(c__4351__auto___34388);
var G__34392 = (0);
seq__34313_34373 = G__34389;
chunk__34315_34374 = G__34390;
count__34316_34375 = G__34391;
i__34317_34376 = G__34392;
continue;
} else {
var child_34393 = cljs.core.first(seq__34313_34387__$1);
if(cljs.core.truth_(child_34393)){
node.appendChild(child_34393);


var G__34394 = cljs.core.next(seq__34313_34387__$1);
var G__34395 = null;
var G__34396 = (0);
var G__34397 = (0);
seq__34313_34373 = G__34394;
chunk__34315_34374 = G__34395;
count__34316_34375 = G__34396;
i__34317_34376 = G__34397;
continue;
} else {
var G__34398 = cljs.core.next(seq__34313_34387__$1);
var G__34399 = null;
var G__34400 = (0);
var G__34401 = (0);
seq__34313_34373 = G__34398;
chunk__34315_34374 = G__34399;
count__34316_34375 = G__34400;
i__34317_34376 = G__34401;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34372);
}
}


var G__34402 = cljs.core.next(seq__34301_34364__$1);
var G__34403 = null;
var G__34404 = (0);
var G__34405 = (0);
seq__34301_34319 = G__34402;
chunk__34303_34320 = G__34403;
count__34304_34321 = G__34404;
i__34305_34322 = G__34405;
continue;
} else {
var G__34406 = cljs.core.next(seq__34301_34364__$1);
var G__34407 = null;
var G__34408 = (0);
var G__34409 = (0);
seq__34301_34319 = G__34406;
chunk__34303_34320 = G__34407;
count__34304_34321 = G__34408;
i__34305_34322 = G__34409;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__34410_34416 = shadow.dom._to_svg;
var G__34411_34417 = "string";
var G__34412_34418 = ((function (G__34410_34416,G__34411_34417){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__34410_34416,G__34411_34417))
;
goog.object.set(G__34410_34416,G__34411_34417,G__34412_34418);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__34413_34419 = shadow.dom._to_svg;
var G__34414_34420 = "null";
var G__34415_34421 = ((function (G__34413_34419,G__34414_34420){
return (function (_){
return null;
});})(G__34413_34419,G__34414_34420))
;
goog.object.set(G__34413_34419,G__34414_34420,G__34415_34421);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4534__auto__ = [];
var len__4531__auto___34424 = arguments.length;
var i__4532__auto___34425 = (0);
while(true){
if((i__4532__auto___34425 < len__4531__auto___34424)){
args__4534__auto__.push((arguments[i__4532__auto___34425]));

var G__34426 = (i__4532__auto___34425 + (1));
i__4532__auto___34425 = G__34426;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq34422){
var G__34423 = cljs.core.first(seq34422);
var seq34422__$1 = cljs.core.next(seq34422);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34423,seq34422__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34428 = arguments.length;
switch (G__34428) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__34429_34444 = shadow.dom.dom_node(el);
var G__34430_34445 = cljs.core.name(event);
var G__34431_34446 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__34429_34444,G__34430_34445,G__34431_34446) : shadow.dom.dom_listen.call(null,G__34429_34444,G__34430_34445,G__34431_34446));

if(cljs.core.truth_((function (){var and__3938__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__3938__auto__)){
return !(once_or_cleanup === true);
} else {
return and__3938__auto__;
}
})())){
var c__30923__auto___34447 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30923__auto___34447,buf,chan,event_fn){
return (function (){
var f__30924__auto__ = (function (){var switch__30754__auto__ = ((function (c__30923__auto___34447,buf,chan,event_fn){
return (function (state_34436){
var state_val_34437 = (state_34436[(1)]);
if((state_val_34437 === (1))){
var state_34436__$1 = state_34436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34436__$1,(2),once_or_cleanup);
} else {
if((state_val_34437 === (2))){
var inst_34433 = (state_34436[(2)]);
var inst_34434 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34436__$1 = (function (){var statearr_34438 = state_34436;
(statearr_34438[(7)] = inst_34433);

return statearr_34438;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34436__$1,inst_34434);
} else {
return null;
}
}
});})(c__30923__auto___34447,buf,chan,event_fn))
;
return ((function (switch__30754__auto__,c__30923__auto___34447,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__30755__auto__ = null;
var shadow$dom$state_machine__30755__auto____0 = (function (){
var statearr_34439 = [null,null,null,null,null,null,null,null];
(statearr_34439[(0)] = shadow$dom$state_machine__30755__auto__);

(statearr_34439[(1)] = (1));

return statearr_34439;
});
var shadow$dom$state_machine__30755__auto____1 = (function (state_34436){
while(true){
var ret_value__30756__auto__ = (function (){try{while(true){
var result__30757__auto__ = switch__30754__auto__(state_34436);
if(cljs.core.keyword_identical_QMARK_(result__30757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30757__auto__;
}
break;
}
}catch (e34440){if((e34440 instanceof Object)){
var ex__30758__auto__ = e34440;
var statearr_34441_34448 = state_34436;
(statearr_34441_34448[(5)] = ex__30758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34440;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34449 = state_34436;
state_34436 = G__34449;
continue;
} else {
return ret_value__30756__auto__;
}
break;
}
});
shadow$dom$state_machine__30755__auto__ = function(state_34436){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30755__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30755__auto____1.call(this,state_34436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30755__auto____0;
shadow$dom$state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30755__auto____1;
return shadow$dom$state_machine__30755__auto__;
})()
;})(switch__30754__auto__,c__30923__auto___34447,buf,chan,event_fn))
})();
var state__30925__auto__ = (function (){var statearr_34442 = (f__30924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30924__auto__.cljs$core$IFn$_invoke$arity$0() : f__30924__auto__.call(null));
(statearr_34442[(6)] = c__30923__auto___34447);

return statearr_34442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30925__auto__);
});})(c__30923__auto___34447,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
