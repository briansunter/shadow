goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return cljs.core._vreset_BANG_(shadow.cljs.devtools.client.browser.active_modules_ref,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(shadow.cljs.devtools.client.browser.active_modules_ref),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4534__auto__ = [];
var len__4531__auto___35439 = arguments.length;
var i__4532__auto___35440 = (0);
while(true){
if((i__4532__auto___35440 < len__4531__auto___35439)){
args__4534__auto__.push((arguments[i__4532__auto___35440]));

var G__35441 = (i__4532__auto___35440 + (1));
i__4532__auto___35440 = G__35441;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35437){
var G__35438 = cljs.core.first(seq35437);
var seq35437__$1 = cljs.core.next(seq35437);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35438,seq35437__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5455__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__35444){
var map__35445 = p__35444;
var map__35445__$1 = ((((!((map__35445 == null)))?(((((map__35445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35445):map__35445);
var src = map__35445__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35445__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35445__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__3949__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35447 = cljs.core.seq(sources);
var chunk__35448 = null;
var count__35449 = (0);
var i__35450 = (0);
while(true){
if((i__35450 < count__35449)){
var map__35451 = chunk__35448.cljs$core$IIndexed$_nth$arity$2(null,i__35450);
var map__35451__$1 = ((((!((map__35451 == null)))?(((((map__35451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35451):map__35451);
var src = map__35451__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35451__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35451__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35451__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35451__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__35458 = seq__35447;
var G__35459 = chunk__35448;
var G__35460 = count__35449;
var G__35461 = (i__35450 + (1));
seq__35447 = G__35458;
chunk__35448 = G__35459;
count__35449 = G__35460;
i__35450 = G__35461;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__35447);
if(temp__5457__auto__){
var seq__35447__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35447__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__35447__$1);
var G__35462 = cljs.core.chunk_rest(seq__35447__$1);
var G__35463 = c__4351__auto__;
var G__35464 = cljs.core.count(c__4351__auto__);
var G__35465 = (0);
seq__35447 = G__35462;
chunk__35448 = G__35463;
count__35449 = G__35464;
i__35450 = G__35465;
continue;
} else {
var map__35453 = cljs.core.first(seq__35447__$1);
var map__35453__$1 = ((((!((map__35453 == null)))?(((((map__35453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35453):map__35453);
var src = map__35453__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35453__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35453__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35453__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35453__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__35466 = cljs.core.next(seq__35447__$1);
var G__35467 = null;
var G__35468 = (0);
var G__35469 = (0);
seq__35447 = G__35466;
chunk__35448 = G__35467;
count__35449 = G__35468;
i__35450 = G__35469;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35474 = cljs.core.seq(js_requires);
var chunk__35475 = null;
var count__35476 = (0);
var i__35477 = (0);
while(true){
if((i__35477 < count__35476)){
var js_ns = chunk__35475.cljs$core$IIndexed$_nth$arity$2(null,i__35477);
var require_str_35479 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35479);


var G__35480 = seq__35474;
var G__35481 = chunk__35475;
var G__35482 = count__35476;
var G__35483 = (i__35477 + (1));
seq__35474 = G__35480;
chunk__35475 = G__35481;
count__35476 = G__35482;
i__35477 = G__35483;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__35474);
if(temp__5457__auto__){
var seq__35474__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35474__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__35474__$1);
var G__35484 = cljs.core.chunk_rest(seq__35474__$1);
var G__35485 = c__4351__auto__;
var G__35486 = cljs.core.count(c__4351__auto__);
var G__35487 = (0);
seq__35474 = G__35484;
chunk__35475 = G__35485;
count__35476 = G__35486;
i__35477 = G__35487;
continue;
} else {
var js_ns = cljs.core.first(seq__35474__$1);
var require_str_35488 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35488);


var G__35489 = cljs.core.next(seq__35474__$1);
var G__35490 = null;
var G__35491 = (0);
var G__35492 = (0);
seq__35474 = G__35489;
chunk__35475 = G__35490;
count__35476 = G__35491;
i__35477 = G__35492;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__35493 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__35493) : callback.call(null,G__35493));
} else {
var G__35494 = shadow.cljs.devtools.client.env.files_url();
var G__35495 = ((function (G__35494){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__35494))
;
var G__35496 = "POST";
var G__35497 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__35498 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35494,G__35495,G__35496,G__35497,G__35498);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__35500){
var map__35501 = p__35500;
var map__35501__$1 = ((((!((map__35501 == null)))?(((((map__35501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35501):map__35501);
var msg = map__35501__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35501__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35501__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__35503 = info;
var map__35503__$1 = ((((!((map__35503 == null)))?(((((map__35503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35503):map__35503);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35503__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35503__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (map__35503,map__35503__$1,sources,compiled,map__35501,map__35501__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35505(s__35506){
return (new cljs.core.LazySeq(null,((function (map__35503,map__35503__$1,sources,compiled,map__35501,map__35501__$1,msg,info,reload_info){
return (function (){
var s__35506__$1 = s__35506;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__35506__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__35511 = cljs.core.first(xs__6012__auto__);
var map__35511__$1 = ((((!((map__35511 == null)))?(((((map__35511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35511):map__35511);
var src = map__35511__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35511__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35511__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4320__auto__ = ((function (s__35506__$1,map__35511,map__35511__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__35503,map__35503__$1,sources,compiled,map__35501,map__35501__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35505_$_iter__35507(s__35508){
return (new cljs.core.LazySeq(null,((function (s__35506__$1,map__35511,map__35511__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__35503,map__35503__$1,sources,compiled,map__35501,map__35501__$1,msg,info,reload_info){
return (function (){
var s__35508__$1 = s__35508;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__35508__$1);
if(temp__5457__auto____$1){
var s__35508__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35508__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__35508__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__35510 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__35509 = (0);
while(true){
if((i__35509 < size__4323__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__35509);
cljs.core.chunk_append(b__35510,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35533 = (i__35509 + (1));
i__35509 = G__35533;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35510),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35505_$_iter__35507(cljs.core.chunk_rest(s__35508__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35510),null);
}
} else {
var warning = cljs.core.first(s__35508__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35505_$_iter__35507(cljs.core.rest(s__35508__$2)));
}
} else {
return null;
}
break;
}
});})(s__35506__$1,map__35511,map__35511__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__35503,map__35503__$1,sources,compiled,map__35501,map__35501__$1,msg,info,reload_info))
,null,null));
});})(s__35506__$1,map__35511,map__35511__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__35503,map__35503__$1,sources,compiled,map__35501,map__35501__$1,msg,info,reload_info))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(warnings));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35505(cljs.core.rest(s__35506__$1)));
} else {
var G__35534 = cljs.core.rest(s__35506__$1);
s__35506__$1 = G__35534;
continue;
}
} else {
var G__35535 = cljs.core.rest(s__35506__$1);
s__35506__$1 = G__35535;
continue;
}
} else {
return null;
}
break;
}
});})(map__35503,map__35503__$1,sources,compiled,map__35501,map__35501__$1,msg,info,reload_info))
,null,null));
});})(map__35503,map__35503__$1,sources,compiled,map__35501,map__35501__$1,msg,info,reload_info))
;
return iter__4324__auto__(sources);
})()));
var seq__35516_35536 = cljs.core.seq(warnings);
var chunk__35517_35537 = null;
var count__35518_35538 = (0);
var i__35519_35539 = (0);
while(true){
if((i__35519_35539 < count__35518_35538)){
var map__35520_35540 = chunk__35517_35537.cljs$core$IIndexed$_nth$arity$2(null,i__35519_35539);
var map__35520_35541__$1 = ((((!((map__35520_35540 == null)))?(((((map__35520_35540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35520_35540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35520_35540):map__35520_35540);
var w_35542 = map__35520_35541__$1;
var msg_35543__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35520_35541__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35520_35541__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35520_35541__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35520_35541__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35546)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35544),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35545),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35543__$1)].join(''));


var G__35547 = seq__35516_35536;
var G__35548 = chunk__35517_35537;
var G__35549 = count__35518_35538;
var G__35550 = (i__35519_35539 + (1));
seq__35516_35536 = G__35547;
chunk__35517_35537 = G__35548;
count__35518_35538 = G__35549;
i__35519_35539 = G__35550;
continue;
} else {
var temp__5457__auto___35551 = cljs.core.seq(seq__35516_35536);
if(temp__5457__auto___35551){
var seq__35516_35552__$1 = temp__5457__auto___35551;
if(cljs.core.chunked_seq_QMARK_(seq__35516_35552__$1)){
var c__4351__auto___35553 = cljs.core.chunk_first(seq__35516_35552__$1);
var G__35554 = cljs.core.chunk_rest(seq__35516_35552__$1);
var G__35555 = c__4351__auto___35553;
var G__35556 = cljs.core.count(c__4351__auto___35553);
var G__35557 = (0);
seq__35516_35536 = G__35554;
chunk__35517_35537 = G__35555;
count__35518_35538 = G__35556;
i__35519_35539 = G__35557;
continue;
} else {
var map__35522_35558 = cljs.core.first(seq__35516_35552__$1);
var map__35522_35559__$1 = ((((!((map__35522_35558 == null)))?(((((map__35522_35558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35522_35558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35522_35558):map__35522_35558);
var w_35560 = map__35522_35559__$1;
var msg_35561__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35522_35559__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35522_35559__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35522_35559__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35522_35559__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35564)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35562),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35563),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35561__$1)].join(''));


var G__35565 = cljs.core.next(seq__35516_35552__$1);
var G__35566 = null;
var G__35567 = (0);
var G__35568 = (0);
seq__35516_35536 = G__35565;
chunk__35517_35537 = G__35566;
count__35518_35538 = G__35567;
i__35519_35539 = G__35568;
continue;
}
} else {
}
}
break;
}

if(!(shadow.cljs.devtools.client.env.autoload)){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35503,map__35503__$1,sources,compiled,warnings,map__35501,map__35501__$1,msg,info,reload_info){
return (function (p__35524){
var map__35525 = p__35524;
var map__35525__$1 = ((((!((map__35525 == null)))?(((((map__35525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35525):map__35525);
var src = map__35525__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35525__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35525__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__35503,map__35503__$1,sources,compiled,warnings,map__35501,map__35501__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35503,map__35503__$1,sources,compiled,warnings,map__35501,map__35501__$1,msg,info,reload_info){
return (function (p__35527){
var map__35528 = p__35527;
var map__35528__$1 = ((((!((map__35528 == null)))?(((((map__35528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35528):map__35528);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35528__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__35503,map__35503__$1,sources,compiled,warnings,map__35501,map__35501__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35503,map__35503__$1,sources,compiled,warnings,map__35501,map__35501__$1,msg,info,reload_info){
return (function (p__35530){
var map__35531 = p__35530;
var map__35531__$1 = ((((!((map__35531 == null)))?(((((map__35531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35531):map__35531);
var rc = map__35531__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35531__$1,new cljs.core.Keyword(null,"module","module",1424618191));
var or__3949__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module);
}
});})(map__35503,map__35503__$1,sources,compiled,warnings,map__35501,map__35501__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__35503,map__35503__$1,sources,compiled,warnings,map__35501,map__35501__$1,msg,info,reload_info){
return (function (p1__35499_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35499_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__35503,map__35503__$1,sources,compiled,warnings,map__35501,map__35501__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__35573){
var map__35574 = p__35573;
var map__35574__$1 = ((((!((map__35574 == null)))?(((((map__35574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35574):map__35574);
var msg = map__35574__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35574__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35576 = cljs.core.seq(updates);
var chunk__35578 = null;
var count__35579 = (0);
var i__35580 = (0);
while(true){
if((i__35580 < count__35579)){
var path = chunk__35578.cljs$core$IIndexed$_nth$arity$2(null,i__35580);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35582_35616 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35585_35617 = null;
var count__35586_35618 = (0);
var i__35587_35619 = (0);
while(true){
if((i__35587_35619 < count__35586_35618)){
var node_35622 = chunk__35585_35617.cljs$core$IIndexed$_nth$arity$2(null,i__35587_35619);
var node_uri_35623 = (function (){var G__35590 = node_35622.getAttribute("href");
return goog.Uri.parse(G__35590);
})();
var node_uri_resolved_35624 = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri_35623);
var node_abs_35625 = node_uri_resolved_35624.getPath();
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri_35623))) || (cljs.core.not(node_uri_35623.hasDomain())))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs_35625,path)))){
var new_link_35626 = (function (){var G__35592 = node_35622.cloneNode(true);
G__35592.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35592;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_35626,node_35622);

goog.dom.removeNode(node_35622);


var G__35627 = seq__35582_35616;
var G__35628 = chunk__35585_35617;
var G__35629 = count__35586_35618;
var G__35630 = (i__35587_35619 + (1));
seq__35582_35616 = G__35627;
chunk__35585_35617 = G__35628;
count__35586_35618 = G__35629;
i__35587_35619 = G__35630;
continue;
} else {
var G__35631 = seq__35582_35616;
var G__35632 = chunk__35585_35617;
var G__35633 = count__35586_35618;
var G__35634 = (i__35587_35619 + (1));
seq__35582_35616 = G__35631;
chunk__35585_35617 = G__35632;
count__35586_35618 = G__35633;
i__35587_35619 = G__35634;
continue;
}
} else {
var temp__5457__auto___35635 = cljs.core.seq(seq__35582_35616);
if(temp__5457__auto___35635){
var seq__35582_35636__$1 = temp__5457__auto___35635;
if(cljs.core.chunked_seq_QMARK_(seq__35582_35636__$1)){
var c__4351__auto___35637 = cljs.core.chunk_first(seq__35582_35636__$1);
var G__35638 = cljs.core.chunk_rest(seq__35582_35636__$1);
var G__35639 = c__4351__auto___35637;
var G__35640 = cljs.core.count(c__4351__auto___35637);
var G__35641 = (0);
seq__35582_35616 = G__35638;
chunk__35585_35617 = G__35639;
count__35586_35618 = G__35640;
i__35587_35619 = G__35641;
continue;
} else {
var node_35642 = cljs.core.first(seq__35582_35636__$1);
var node_uri_35643 = (function (){var G__35595 = node_35642.getAttribute("href");
return goog.Uri.parse(G__35595);
})();
var node_uri_resolved_35644 = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri_35643);
var node_abs_35645 = node_uri_resolved_35644.getPath();
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri_35643))) || (cljs.core.not(node_uri_35643.hasDomain())))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs_35645,path)))){
var new_link_35646 = (function (){var G__35596 = node_35642.cloneNode(true);
G__35596.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35596;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_35646,node_35642);

goog.dom.removeNode(node_35642);


var G__35647 = cljs.core.next(seq__35582_35636__$1);
var G__35648 = null;
var G__35649 = (0);
var G__35650 = (0);
seq__35582_35616 = G__35647;
chunk__35585_35617 = G__35648;
count__35586_35618 = G__35649;
i__35587_35619 = G__35650;
continue;
} else {
var G__35651 = cljs.core.next(seq__35582_35636__$1);
var G__35652 = null;
var G__35653 = (0);
var G__35654 = (0);
seq__35582_35616 = G__35651;
chunk__35585_35617 = G__35652;
count__35586_35618 = G__35653;
i__35587_35619 = G__35654;
continue;
}
}
} else {
}
}
break;
}


var G__35655 = seq__35576;
var G__35656 = chunk__35578;
var G__35657 = count__35579;
var G__35658 = (i__35580 + (1));
seq__35576 = G__35655;
chunk__35578 = G__35656;
count__35579 = G__35657;
i__35580 = G__35658;
continue;
} else {
var G__35659 = seq__35576;
var G__35660 = chunk__35578;
var G__35661 = count__35579;
var G__35662 = (i__35580 + (1));
seq__35576 = G__35659;
chunk__35578 = G__35660;
count__35579 = G__35661;
i__35580 = G__35662;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__35576);
if(temp__5457__auto__){
var seq__35576__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35576__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__35576__$1);
var G__35663 = cljs.core.chunk_rest(seq__35576__$1);
var G__35664 = c__4351__auto__;
var G__35665 = cljs.core.count(c__4351__auto__);
var G__35666 = (0);
seq__35576 = G__35663;
chunk__35578 = G__35664;
count__35579 = G__35665;
i__35580 = G__35666;
continue;
} else {
var path = cljs.core.first(seq__35576__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35601_35667 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35604_35668 = null;
var count__35605_35669 = (0);
var i__35606_35670 = (0);
while(true){
if((i__35606_35670 < count__35605_35669)){
var node_35671 = chunk__35604_35668.cljs$core$IIndexed$_nth$arity$2(null,i__35606_35670);
var node_uri_35672 = (function (){var G__35609 = node_35671.getAttribute("href");
return goog.Uri.parse(G__35609);
})();
var node_uri_resolved_35673 = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri_35672);
var node_abs_35674 = node_uri_resolved_35673.getPath();
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri_35672))) || (cljs.core.not(node_uri_35672.hasDomain())))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs_35674,path)))){
var new_link_35675 = (function (){var G__35610 = node_35671.cloneNode(true);
G__35610.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35610;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_35675,node_35671);

goog.dom.removeNode(node_35671);


var G__35676 = seq__35601_35667;
var G__35677 = chunk__35604_35668;
var G__35678 = count__35605_35669;
var G__35679 = (i__35606_35670 + (1));
seq__35601_35667 = G__35676;
chunk__35604_35668 = G__35677;
count__35605_35669 = G__35678;
i__35606_35670 = G__35679;
continue;
} else {
var G__35680 = seq__35601_35667;
var G__35681 = chunk__35604_35668;
var G__35682 = count__35605_35669;
var G__35683 = (i__35606_35670 + (1));
seq__35601_35667 = G__35680;
chunk__35604_35668 = G__35681;
count__35605_35669 = G__35682;
i__35606_35670 = G__35683;
continue;
}
} else {
var temp__5457__auto___35684__$1 = cljs.core.seq(seq__35601_35667);
if(temp__5457__auto___35684__$1){
var seq__35601_35685__$1 = temp__5457__auto___35684__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35601_35685__$1)){
var c__4351__auto___35686 = cljs.core.chunk_first(seq__35601_35685__$1);
var G__35687 = cljs.core.chunk_rest(seq__35601_35685__$1);
var G__35688 = c__4351__auto___35686;
var G__35689 = cljs.core.count(c__4351__auto___35686);
var G__35690 = (0);
seq__35601_35667 = G__35687;
chunk__35604_35668 = G__35688;
count__35605_35669 = G__35689;
i__35606_35670 = G__35690;
continue;
} else {
var node_35691 = cljs.core.first(seq__35601_35685__$1);
var node_uri_35692 = (function (){var G__35611 = node_35691.getAttribute("href");
return goog.Uri.parse(G__35611);
})();
var node_uri_resolved_35693 = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri_35692);
var node_abs_35694 = node_uri_resolved_35693.getPath();
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri_35692))) || (cljs.core.not(node_uri_35692.hasDomain())))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs_35694,path)))){
var new_link_35695 = (function (){var G__35612 = node_35691.cloneNode(true);
G__35612.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35612;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_35695,node_35691);

goog.dom.removeNode(node_35691);


var G__35696 = cljs.core.next(seq__35601_35685__$1);
var G__35697 = null;
var G__35698 = (0);
var G__35699 = (0);
seq__35601_35667 = G__35696;
chunk__35604_35668 = G__35697;
count__35605_35669 = G__35698;
i__35606_35670 = G__35699;
continue;
} else {
var G__35700 = cljs.core.next(seq__35601_35685__$1);
var G__35701 = null;
var G__35702 = (0);
var G__35703 = (0);
seq__35601_35667 = G__35700;
chunk__35604_35668 = G__35701;
count__35605_35669 = G__35702;
i__35606_35670 = G__35703;
continue;
}
}
} else {
}
}
break;
}


var G__35704 = cljs.core.next(seq__35576__$1);
var G__35705 = null;
var G__35706 = (0);
var G__35707 = (0);
seq__35576 = G__35704;
chunk__35578 = G__35705;
count__35579 = G__35706;
i__35580 = G__35707;
continue;
} else {
var G__35708 = cljs.core.next(seq__35576__$1);
var G__35709 = null;
var G__35710 = (0);
var G__35711 = (0);
seq__35576 = G__35708;
chunk__35578 = G__35709;
count__35579 = G__35710;
i__35580 = G__35711;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__35712){
var map__35713 = p__35712;
var map__35713__$1 = ((((!((map__35713 == null)))?(((((map__35713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35713):map__35713);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35713__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35713__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__35713,map__35713__$1,id,js){
return (function (){
return eval(js);
});})(map__35713,map__35713__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__35718){
var map__35719 = p__35718;
var map__35719__$1 = ((((!((map__35719 == null)))?(((((map__35719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35719):map__35719);
var msg = map__35719__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35719__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35719__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35719__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35719__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35719,map__35719__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__35721){
var map__35724 = p__35721;
var map__35724__$1 = ((((!((map__35724 == null)))?(((((map__35724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35724):map__35724);
var src = map__35724__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35724__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__3938__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__3938__auto__;
}
});})(map__35719,map__35719__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__35719,map__35719__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__35719,map__35719__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__35736){
var map__35737 = p__35736;
var map__35737__$1 = ((((!((map__35737 == null)))?(((((map__35737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35737):map__35737);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35737__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35737__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.repl_ns_ref,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(repl_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"ns","ns",441598760)], null)));

return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__35737,map__35737__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL init successful");
});})(map__35737,map__35737__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__35746){
var map__35747 = p__35746;
var map__35747__$1 = ((((!((map__35747 == null)))?(((((map__35747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35747):map__35747);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35747__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35747__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.repl_ns_ref,ns);

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__35749){
var map__35750 = p__35749;
var map__35750__$1 = ((((!((map__35750 == null)))?(((((map__35750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35750):map__35750);
var msg = map__35750__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35750__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__35752 = type;
var G__35752__$1 = (((G__35752 instanceof cljs.core.Keyword))?G__35752.fqn:null);
switch (G__35752__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"\" not running"].join(''));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__35754 = ["http",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((shadow.cljs.devtools.client.env.ssl)?"s":null)),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/browser"].join('');
var G__35755 = ((function (G__35754){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__35754))
;
var G__35756 = "POST";
var G__35757 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__35758 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35754,G__35755,G__35756,G__35757,G__35758);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__3949__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5457__auto___35761 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto___35761)){
var s_35762 = temp__5457__auto___35761;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_35762.onclose = ((function (s_35762,temp__5457__auto___35761){
return (function (e){
return null;
});})(s_35762,temp__5457__auto___35761))
;

s_35762.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
return s.close();
} else {
return null;
}
}));

shadow.cljs.devtools.client.browser.ws_connect();
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
