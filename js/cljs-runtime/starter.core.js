goog.provide('starter.core');
goog.require('cljs.core');
goog.require('reagent.core');
var module$node_modules$react_desktop$macOs=shadow.js.require("module$node_modules$react_desktop$macOs", {});
starter.core.window = reagent.core.adapt_react_class(module$node_modules$react_desktop$macOs.Window);
starter.core.title_bar = reagent.core.adapt_react_class(module$node_modules$react_desktop$macOs.TitleBar);
starter.core.search_field = reagent.core.adapt_react_class(module$node_modules$react_desktop$macOs.SearchField);
starter.core.tool_bar = reagent.core.adapt_react_class(module$node_modules$react_desktop$macOs.Toolbar);
starter.core.progress_circle = reagent.core.adapt_react_class(module$node_modules$react_desktop$macOs.ProgressCircle);
starter.core.text = reagent.core.adapt_react_class(module$node_modules$react_desktop$macOs.Text);
starter.core.app = (function starter$core$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.core.window,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.core.title_bar,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"controls","controls",1340701452),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.core.tool_bar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(43),new cljs.core.Keyword(null,"horizontal-alignment","horizontal-alignment",-280310931),"right"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.core.search_field,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),""], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.core.progress_circle], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.core.text,"This is in Clojurescript"], null)], null);
});
starter.core.stop = (function starter$core$stop(){
return console.log("Stopping...");
});
starter.core.start = (function starter$core$start(){
console.log("Starting...");

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.core.app], null),document.getElementById("app"));
});
starter.core.init = (function starter$core$init(){
return starter.core.start();
});
goog.exportSymbol('starter.core.init', starter.core.init);

//# sourceMappingURL=starter.core.js.map
