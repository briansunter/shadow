goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28972){
var map__28973 = p__28972;
var map__28973__$1 = ((((!((map__28973 == null)))?(((((map__28973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28973):map__28973);
var m = map__28973__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28973__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28973__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28975_29003 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28976_29004 = null;
var count__28977_29005 = (0);
var i__28978_29006 = (0);
while(true){
if((i__28978_29006 < count__28977_29005)){
var f_29007 = chunk__28976_29004.cljs$core$IIndexed$_nth$arity$2(null,i__28978_29006);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_29007], 0));


var G__29008 = seq__28975_29003;
var G__29009 = chunk__28976_29004;
var G__29010 = count__28977_29005;
var G__29011 = (i__28978_29006 + (1));
seq__28975_29003 = G__29008;
chunk__28976_29004 = G__29009;
count__28977_29005 = G__29010;
i__28978_29006 = G__29011;
continue;
} else {
var temp__5457__auto___29012 = cljs.core.seq(seq__28975_29003);
if(temp__5457__auto___29012){
var seq__28975_29013__$1 = temp__5457__auto___29012;
if(cljs.core.chunked_seq_QMARK_(seq__28975_29013__$1)){
var c__4351__auto___29014 = cljs.core.chunk_first(seq__28975_29013__$1);
var G__29015 = cljs.core.chunk_rest(seq__28975_29013__$1);
var G__29016 = c__4351__auto___29014;
var G__29017 = cljs.core.count(c__4351__auto___29014);
var G__29018 = (0);
seq__28975_29003 = G__29015;
chunk__28976_29004 = G__29016;
count__28977_29005 = G__29017;
i__28978_29006 = G__29018;
continue;
} else {
var f_29022 = cljs.core.first(seq__28975_29013__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_29022], 0));


var G__29023 = cljs.core.next(seq__28975_29013__$1);
var G__29024 = null;
var G__29025 = (0);
var G__29026 = (0);
seq__28975_29003 = G__29023;
chunk__28976_29004 = G__29024;
count__28977_29005 = G__29025;
i__28978_29006 = G__29026;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29027 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_29027], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_29027)))?cljs.core.second(arglists_29027):arglists_29027)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28979_29029 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28980_29030 = null;
var count__28981_29031 = (0);
var i__28982_29032 = (0);
while(true){
if((i__28982_29032 < count__28981_29031)){
var vec__28983_29033 = chunk__28980_29030.cljs$core$IIndexed$_nth$arity$2(null,i__28982_29032);
var name_29034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28983_29033,(0),null);
var map__28986_29035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28983_29033,(1),null);
var map__28986_29036__$1 = ((((!((map__28986_29035 == null)))?(((((map__28986_29035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28986_29035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28986_29035):map__28986_29035);
var doc_29037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28986_29036__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28986_29036__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_29034], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_29038], 0));

if(cljs.core.truth_(doc_29037)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_29037], 0));
} else {
}


var G__29039 = seq__28979_29029;
var G__29040 = chunk__28980_29030;
var G__29041 = count__28981_29031;
var G__29042 = (i__28982_29032 + (1));
seq__28979_29029 = G__29039;
chunk__28980_29030 = G__29040;
count__28981_29031 = G__29041;
i__28982_29032 = G__29042;
continue;
} else {
var temp__5457__auto___29043 = cljs.core.seq(seq__28979_29029);
if(temp__5457__auto___29043){
var seq__28979_29044__$1 = temp__5457__auto___29043;
if(cljs.core.chunked_seq_QMARK_(seq__28979_29044__$1)){
var c__4351__auto___29045 = cljs.core.chunk_first(seq__28979_29044__$1);
var G__29046 = cljs.core.chunk_rest(seq__28979_29044__$1);
var G__29047 = c__4351__auto___29045;
var G__29048 = cljs.core.count(c__4351__auto___29045);
var G__29049 = (0);
seq__28979_29029 = G__29046;
chunk__28980_29030 = G__29047;
count__28981_29031 = G__29048;
i__28982_29032 = G__29049;
continue;
} else {
var vec__28988_29050 = cljs.core.first(seq__28979_29044__$1);
var name_29051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28988_29050,(0),null);
var map__28991_29052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28988_29050,(1),null);
var map__28991_29053__$1 = ((((!((map__28991_29052 == null)))?(((((map__28991_29052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28991_29052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28991_29052):map__28991_29052);
var doc_29054 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28991_29053__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29055 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28991_29053__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_29051], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_29055], 0));

if(cljs.core.truth_(doc_29054)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_29054], 0));
} else {
}


var G__29056 = cljs.core.next(seq__28979_29044__$1);
var G__29057 = null;
var G__29058 = (0);
var G__29059 = (0);
seq__28979_29029 = G__29056;
chunk__28980_29030 = G__29057;
count__28981_29031 = G__29058;
i__28982_29032 = G__29059;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__28993 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28994 = null;
var count__28995 = (0);
var i__28996 = (0);
while(true){
if((i__28996 < count__28995)){
var role = chunk__28994.cljs$core$IIndexed$_nth$arity$2(null,i__28996);
var temp__5457__auto___29060__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___29060__$1)){
var spec_29061 = temp__5457__auto___29060__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_29061)], 0));
} else {
}


var G__29062 = seq__28993;
var G__29063 = chunk__28994;
var G__29064 = count__28995;
var G__29065 = (i__28996 + (1));
seq__28993 = G__29062;
chunk__28994 = G__29063;
count__28995 = G__29064;
i__28996 = G__29065;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__28993);
if(temp__5457__auto____$1){
var seq__28993__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__28993__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__28993__$1);
var G__29066 = cljs.core.chunk_rest(seq__28993__$1);
var G__29067 = c__4351__auto__;
var G__29068 = cljs.core.count(c__4351__auto__);
var G__29069 = (0);
seq__28993 = G__29066;
chunk__28994 = G__29067;
count__28995 = G__29068;
i__28996 = G__29069;
continue;
} else {
var role = cljs.core.first(seq__28993__$1);
var temp__5457__auto___29074__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___29074__$2)){
var spec_29075 = temp__5457__auto___29074__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_29075)], 0));
} else {
}


var G__29077 = cljs.core.next(seq__28993__$1);
var G__29078 = null;
var G__29079 = (0);
var G__29080 = (0);
seq__28993 = G__29077;
chunk__28994 = G__29078;
count__28995 = G__29079;
i__28996 = G__29080;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=cljs.repl.js.map
