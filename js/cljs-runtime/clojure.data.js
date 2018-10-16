goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__33193){
var vec__33194 = p__33193;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33194,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33194,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__33198 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33198,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33198,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33198,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__33202 = arguments.length;
switch (G__33202) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4037__auto__ = cljs.core.count(a);
var y__4038__auto__ = cljs.core.count(b);
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if(((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4243__auto__ = (((x == null))?null:x);
var m__4244__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4244__auto__.call(null,x));
} else {
var m__4244__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4244__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if(((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4243__auto__ = (((a == null))?null:a);
var m__4244__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4244__auto__.call(null,a,b));
} else {
var m__4244__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4244__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__33207_33234 = clojure.data.equality_partition;
var G__33208_33235 = "null";
var G__33209_33236 = ((function (G__33207_33234,G__33208_33235){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__33207_33234,G__33208_33235))
;
goog.object.set(G__33207_33234,G__33208_33235,G__33209_33236);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__33213_33237 = clojure.data.equality_partition;
var G__33214_33238 = "string";
var G__33215_33239 = ((function (G__33213_33237,G__33214_33238){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__33213_33237,G__33214_33238))
;
goog.object.set(G__33213_33237,G__33214_33238,G__33215_33239);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__33216_33240 = clojure.data.equality_partition;
var G__33217_33241 = "number";
var G__33218_33242 = ((function (G__33216_33240,G__33217_33241){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__33216_33240,G__33217_33241))
;
goog.object.set(G__33216_33240,G__33217_33241,G__33218_33242);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__33219_33243 = clojure.data.equality_partition;
var G__33220_33244 = "array";
var G__33221_33245 = ((function (G__33219_33243,G__33220_33244){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__33219_33243,G__33220_33244))
;
goog.object.set(G__33219_33243,G__33220_33244,G__33221_33245);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__33222_33246 = clojure.data.equality_partition;
var G__33223_33247 = "function";
var G__33224_33248 = ((function (G__33222_33246,G__33223_33247){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__33222_33246,G__33223_33247))
;
goog.object.set(G__33222_33246,G__33223_33247,G__33224_33248);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__33225_33249 = clojure.data.equality_partition;
var G__33226_33250 = "boolean";
var G__33227_33251 = ((function (G__33225_33249,G__33226_33250){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__33225_33249,G__33226_33250))
;
goog.object.set(G__33225_33249,G__33226_33250,G__33227_33251);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__33228_33252 = clojure.data.equality_partition;
var G__33229_33253 = "_";
var G__33230_33254 = ((function (G__33228_33252,G__33229_33253){
return (function (x){
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__33228_33252,G__33229_33253))
;
goog.object.set(G__33228_33252,G__33229_33253,G__33230_33254);
goog.object.set(clojure.data.Diff,"null",true);

var G__33255_33279 = clojure.data.diff_similar;
var G__33256_33280 = "null";
var G__33257_33281 = ((function (G__33255_33279,G__33256_33280){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__33255_33279,G__33256_33280))
;
goog.object.set(G__33255_33279,G__33256_33280,G__33257_33281);

goog.object.set(clojure.data.Diff,"string",true);

var G__33258_33282 = clojure.data.diff_similar;
var G__33259_33283 = "string";
var G__33260_33284 = ((function (G__33258_33282,G__33259_33283){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__33258_33282,G__33259_33283))
;
goog.object.set(G__33258_33282,G__33259_33283,G__33260_33284);

goog.object.set(clojure.data.Diff,"number",true);

var G__33261_33285 = clojure.data.diff_similar;
var G__33262_33286 = "number";
var G__33263_33287 = ((function (G__33261_33285,G__33262_33286){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__33261_33285,G__33262_33286))
;
goog.object.set(G__33261_33285,G__33262_33286,G__33263_33287);

goog.object.set(clojure.data.Diff,"array",true);

var G__33264_33288 = clojure.data.diff_similar;
var G__33265_33289 = "array";
var G__33266_33290 = ((function (G__33264_33288,G__33265_33289){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__33264_33288,G__33265_33289))
;
goog.object.set(G__33264_33288,G__33265_33289,G__33266_33290);

goog.object.set(clojure.data.Diff,"function",true);

var G__33267_33291 = clojure.data.diff_similar;
var G__33268_33292 = "function";
var G__33269_33293 = ((function (G__33267_33291,G__33268_33292){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__33267_33291,G__33268_33292))
;
goog.object.set(G__33267_33291,G__33268_33292,G__33269_33293);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__33270_33294 = clojure.data.diff_similar;
var G__33271_33295 = "boolean";
var G__33272_33296 = ((function (G__33270_33294,G__33271_33295){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__33270_33294,G__33271_33295))
;
goog.object.set(G__33270_33294,G__33271_33295,G__33272_33296);

goog.object.set(clojure.data.Diff,"_",true);

var G__33273_33297 = clojure.data.diff_similar;
var G__33274_33298 = "_";
var G__33275_33299 = ((function (G__33273_33297,G__33274_33298){
return (function (a,b){
var fexpr__33277 = (function (){var G__33278 = clojure.data.equality_partition(a);
var G__33278__$1 = (((G__33278 instanceof cljs.core.Keyword))?G__33278.fqn:null);
switch (G__33278__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33278__$1)].join('')));

}
})();
return (fexpr__33277.cljs$core$IFn$_invoke$arity$2 ? fexpr__33277.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__33277.call(null,a,b));
});})(G__33273_33297,G__33274_33298))
;
goog.object.set(G__33273_33297,G__33274_33298,G__33275_33299);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
