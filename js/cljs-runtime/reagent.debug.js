goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__35155__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35155 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35160__i = 0, G__35160__a = new Array(arguments.length -  0);
while (G__35160__i < G__35160__a.length) {G__35160__a[G__35160__i] = arguments[G__35160__i + 0]; ++G__35160__i;}
  args = new cljs.core.IndexedSeq(G__35160__a,0,null);
} 
return G__35155__delegate.call(this,args);};
G__35155.cljs$lang$maxFixedArity = 0;
G__35155.cljs$lang$applyTo = (function (arglist__35161){
var args = cljs.core.seq(arglist__35161);
return G__35155__delegate(args);
});
G__35155.cljs$core$IFn$_invoke$arity$variadic = G__35155__delegate;
return G__35155;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__35162__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35162 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35163__i = 0, G__35163__a = new Array(arguments.length -  0);
while (G__35163__i < G__35163__a.length) {G__35163__a[G__35163__i] = arguments[G__35163__i + 0]; ++G__35163__i;}
  args = new cljs.core.IndexedSeq(G__35163__a,0,null);
} 
return G__35162__delegate.call(this,args);};
G__35162.cljs$lang$maxFixedArity = 0;
G__35162.cljs$lang$applyTo = (function (arglist__35164){
var args = cljs.core.seq(arglist__35164);
return G__35162__delegate(args);
});
G__35162.cljs$core$IFn$_invoke$arity$variadic = G__35162__delegate;
return G__35162;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
