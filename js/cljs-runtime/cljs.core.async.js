goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30996 = arguments.length;
switch (G__30996) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30997 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30997 = (function (f,blockable,meta30998){
this.f = f;
this.blockable = blockable;
this.meta30998 = meta30998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30999,meta30998__$1){
var self__ = this;
var _30999__$1 = this;
return (new cljs.core.async.t_cljs$core$async30997(self__.f,self__.blockable,meta30998__$1));
});

cljs.core.async.t_cljs$core$async30997.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30999){
var self__ = this;
var _30999__$1 = this;
return self__.meta30998;
});

cljs.core.async.t_cljs$core$async30997.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30997.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30997.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30997.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30997.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30998","meta30998",982302157,null)], null);
});

cljs.core.async.t_cljs$core$async30997.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30997.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30997";

cljs.core.async.t_cljs$core$async30997.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async30997");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30997.
 */
cljs.core.async.__GT_t_cljs$core$async30997 = (function cljs$core$async$__GT_t_cljs$core$async30997(f__$1,blockable__$1,meta30998){
return (new cljs.core.async.t_cljs$core$async30997(f__$1,blockable__$1,meta30998));
});

}

return (new cljs.core.async.t_cljs$core$async30997(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31008 = arguments.length;
switch (G__31008) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31027 = arguments.length;
switch (G__31027) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31058 = arguments.length;
switch (G__31058) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_31065 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31065) : fn1.call(null,val_31065));
} else {
cljs.core.async.impl.dispatch.run(((function (val_31065,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31065) : fn1.call(null,val_31065));
});})(val_31065,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31068 = arguments.length;
switch (G__31068) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___31085 = n;
var x_31086 = (0);
while(true){
if((x_31086 < n__4408__auto___31085)){
(a[x_31086] = (0));

var G__31087 = (x_31086 + (1));
x_31086 = G__31087;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__31088 = (i + (1));
i = G__31088;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31089 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31089 = (function (flag,meta31090){
this.flag = flag;
this.meta31090 = meta31090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31091,meta31090__$1){
var self__ = this;
var _31091__$1 = this;
return (new cljs.core.async.t_cljs$core$async31089(self__.flag,meta31090__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31091){
var self__ = this;
var _31091__$1 = this;
return self__.meta31090;
});})(flag))
;

cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31089.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31090","meta31090",578862395,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31089.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31089.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31089";

cljs.core.async.t_cljs$core$async31089.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async31089");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31089.
 */
cljs.core.async.__GT_t_cljs$core$async31089 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31089(flag__$1,meta31090){
return (new cljs.core.async.t_cljs$core$async31089(flag__$1,meta31090));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31089(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31095 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31095 = (function (flag,cb,meta31096){
this.flag = flag;
this.cb = cb;
this.meta31096 = meta31096;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31097,meta31096__$1){
var self__ = this;
var _31097__$1 = this;
return (new cljs.core.async.t_cljs$core$async31095(self__.flag,self__.cb,meta31096__$1));
});

cljs.core.async.t_cljs$core$async31095.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31097){
var self__ = this;
var _31097__$1 = this;
return self__.meta31096;
});

cljs.core.async.t_cljs$core$async31095.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31095.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async31095.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31095.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31095.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31096","meta31096",-1791090408,null)], null);
});

cljs.core.async.t_cljs$core$async31095.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31095.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31095";

cljs.core.async.t_cljs$core$async31095.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async31095");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31095.
 */
cljs.core.async.__GT_t_cljs$core$async31095 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31095(flag__$1,cb__$1,meta31096){
return (new cljs.core.async.t_cljs$core$async31095(flag__$1,cb__$1,meta31096));
});

}

return (new cljs.core.async.t_cljs$core$async31095(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31104_SHARP_){
var G__31112 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31104_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31112) : fret.call(null,G__31112));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31105_SHARP_){
var G__31113 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31105_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31113) : fret.call(null,G__31113));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31114 = (i + (1));
i = G__31114;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31129 = arguments.length;
var i__4532__auto___31130 = (0);
while(true){
if((i__4532__auto___31130 < len__4531__auto___31129)){
args__4534__auto__.push((arguments[i__4532__auto___31130]));

var G__31131 = (i__4532__auto___31130 + (1));
i__4532__auto___31130 = G__31131;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31120){
var map__31127 = p__31120;
var map__31127__$1 = ((((!((map__31127 == null)))?(((((map__31127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31127):map__31127);
var opts = map__31127__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31118){
var G__31119 = cljs.core.first(seq31118);
var seq31118__$1 = cljs.core.next(seq31118);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31119,seq31118__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31138 = arguments.length;
switch (G__31138) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30923__auto___31214 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30923__auto___31214){
return (function (){
var f__30924__auto__ = (function (){var switch__30754__auto__ = ((function (c__30923__auto___31214){
return (function (state_31168){
var state_val_31172 = (state_31168[(1)]);
if((state_val_31172 === (7))){
var inst_31161 = (state_31168[(2)]);
var state_31168__$1 = state_31168;
var statearr_31173_31215 = state_31168__$1;
(statearr_31173_31215[(2)] = inst_31161);

(statearr_31173_31215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (1))){
var state_31168__$1 = state_31168;
var statearr_31174_31216 = state_31168__$1;
(statearr_31174_31216[(2)] = null);

(statearr_31174_31216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (4))){
var inst_31141 = (state_31168[(7)]);
var inst_31141__$1 = (state_31168[(2)]);
var inst_31142 = (inst_31141__$1 == null);
var state_31168__$1 = (function (){var statearr_31177 = state_31168;
(statearr_31177[(7)] = inst_31141__$1);

return statearr_31177;
})();
if(cljs.core.truth_(inst_31142)){
var statearr_31178_31217 = state_31168__$1;
(statearr_31178_31217[(1)] = (5));

} else {
var statearr_31179_31218 = state_31168__$1;
(statearr_31179_31218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (13))){
var state_31168__$1 = state_31168;
var statearr_31180_31219 = state_31168__$1;
(statearr_31180_31219[(2)] = null);

(statearr_31180_31219[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (6))){
var inst_31141 = (state_31168[(7)]);
var state_31168__$1 = state_31168;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31168__$1,(11),to,inst_31141);
} else {
if((state_val_31172 === (3))){
var inst_31166 = (state_31168[(2)]);
var state_31168__$1 = state_31168;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31168__$1,inst_31166);
} else {
if((state_val_31172 === (12))){
var state_31168__$1 = state_31168;
var statearr_31181_31220 = state_31168__$1;
(statearr_31181_31220[(2)] = null);

(statearr_31181_31220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (2))){
var state_31168__$1 = state_31168;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31168__$1,(4),from);
} else {
if((state_val_31172 === (11))){
var inst_31154 = (state_31168[(2)]);
var state_31168__$1 = state_31168;
if(cljs.core.truth_(inst_31154)){
var statearr_31186_31221 = state_31168__$1;
(statearr_31186_31221[(1)] = (12));

} else {
var statearr_31187_31222 = state_31168__$1;
(statearr_31187_31222[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (9))){
var state_31168__$1 = state_31168;
var statearr_31188_31223 = state_31168__$1;
(statearr_31188_31223[(2)] = null);

(statearr_31188_31223[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (5))){
var state_31168__$1 = state_31168;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31189_31224 = state_31168__$1;
(statearr_31189_31224[(1)] = (8));

} else {
var statearr_31190_31225 = state_31168__$1;
(statearr_31190_31225[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (14))){
var inst_31159 = (state_31168[(2)]);
var state_31168__$1 = state_31168;
var statearr_31191_31226 = state_31168__$1;
(statearr_31191_31226[(2)] = inst_31159);

(statearr_31191_31226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (10))){
var inst_31151 = (state_31168[(2)]);
var state_31168__$1 = state_31168;
var statearr_31192_31227 = state_31168__$1;
(statearr_31192_31227[(2)] = inst_31151);

(statearr_31192_31227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (8))){
var inst_31145 = cljs.core.async.close_BANG_(to);
var state_31168__$1 = state_31168;
var statearr_31193_31228 = state_31168__$1;
(statearr_31193_31228[(2)] = inst_31145);

(statearr_31193_31228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30923__auto___31214))
;
return ((function (switch__30754__auto__,c__30923__auto___31214){
return (function() {
var cljs$core$async$state_machine__30755__auto__ = null;
var cljs$core$async$state_machine__30755__auto____0 = (function (){
var statearr_31197 = [null,null,null,null,null,null,null,null];
(statearr_31197[(0)] = cljs$core$async$state_machine__30755__auto__);

(statearr_31197[(1)] = (1));

return statearr_31197;
});
var cljs$core$async$state_machine__30755__auto____1 = (function (state_31168){
while(true){
var ret_value__30756__auto__ = (function (){try{while(true){
var result__30757__auto__ = switch__30754__auto__(state_31168);
if(cljs.core.keyword_identical_QMARK_(result__30757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30757__auto__;
}
break;
}
}catch (e31198){if((e31198 instanceof Object)){
var ex__30758__auto__ = e31198;
var statearr_31199_31229 = state_31168;
(statearr_31199_31229[(5)] = ex__30758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31198;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31230 = state_31168;
state_31168 = G__31230;
continue;
} else {
return ret_value__30756__auto__;
}
break;
}
});
cljs$core$async$state_machine__30755__auto__ = function(state_31168){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30755__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30755__auto____1.call(this,state_31168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30755__auto____0;
cljs$core$async$state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30755__auto____1;
return cljs$core$async$state_machine__30755__auto__;
})()
;})(switch__30754__auto__,c__30923__auto___31214))
})();
var state__30925__auto__ = (function (){var statearr_31200 = (f__30924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30924__auto__.cljs$core$IFn$_invoke$arity$0() : f__30924__auto__.call(null));
(statearr_31200[(6)] = c__30923__auto___31214);

return statearr_31200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30925__auto__);
});})(c__30923__auto___31214))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__31235){
var vec__31236 = p__31235;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31236,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31236,(1),null);
var job = vec__31236;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30923__auto___31436 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30923__auto___31436,res,vec__31236,v,p,job,jobs,results){
return (function (){
var f__30924__auto__ = (function (){var switch__30754__auto__ = ((function (c__30923__auto___31436,res,vec__31236,v,p,job,jobs,results){
return (function (state_31243){
var state_val_31244 = (state_31243[(1)]);
if((state_val_31244 === (1))){
var state_31243__$1 = state_31243;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31243__$1,(2),res,v);
} else {
if((state_val_31244 === (2))){
var inst_31240 = (state_31243[(2)]);
var inst_31241 = cljs.core.async.close_BANG_(res);
var state_31243__$1 = (function (){var statearr_31249 = state_31243;
(statearr_31249[(7)] = inst_31240);

return statearr_31249;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31243__$1,inst_31241);
} else {
return null;
}
}
});})(c__30923__auto___31436,res,vec__31236,v,p,job,jobs,results))
;
return ((function (switch__30754__auto__,c__30923__auto___31436,res,vec__31236,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30755__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30755__auto____0 = (function (){
var statearr_31250 = [null,null,null,null,null,null,null,null];
(statearr_31250[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30755__auto__);

(statearr_31250[(1)] = (1));

return statearr_31250;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30755__auto____1 = (function (state_31243){
while(true){
var ret_value__30756__auto__ = (function (){try{while(true){
var result__30757__auto__ = switch__30754__auto__(state_31243);
if(cljs.core.keyword_identical_QMARK_(result__30757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30757__auto__;
}
break;
}
}catch (e31254){if((e31254 instanceof Object)){
var ex__30758__auto__ = e31254;
var statearr_31255_31437 = state_31243;
(statearr_31255_31437[(5)] = ex__30758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31254;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31438 = state_31243;
state_31243 = G__31438;
continue;
} else {
return ret_value__30756__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30755__auto__ = function(state_31243){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30755__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30755__auto____1.call(this,state_31243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30755__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30755__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30755__auto__;
})()
;})(switch__30754__auto__,c__30923__auto___31436,res,vec__31236,v,p,job,jobs,results))
})();
var state__30925__auto__ = (function (){var statearr_31256 = (f__30924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30924__auto__.cljs$core$IFn$_invoke$arity$0() : f__30924__auto__.call(null));
(statearr_31256[(6)] = c__30923__auto___31436);

return statearr_31256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30925__auto__);
});})(c__30923__auto___31436,res,vec__31236,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31257){
var vec__31258 = p__31257;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31258,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31258,(1),null);
var job = vec__31258;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___31439 = n;
var __31440 = (0);
while(true){
if((__31440 < n__4408__auto___31439)){
var G__31264_31441 = type;
var G__31264_31442__$1 = (((G__31264_31441 instanceof cljs.core.Keyword))?G__31264_31441.fqn:null);
switch (G__31264_31442__$1) {
case "compute":
var c__30923__auto___31444 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31440,c__30923__auto___31444,G__31264_31441,G__31264_31442__$1,n__4408__auto___31439,jobs,results,process,async){
return (function (){
var f__30924__auto__ = (function (){var switch__30754__auto__ = ((function (__31440,c__30923__auto___31444,G__31264_31441,G__31264_31442__$1,n__4408__auto___31439,jobs,results,process,async){
return (function (state_31277){
var state_val_31278 = (state_31277[(1)]);
if((state_val_31278 === (1))){
var state_31277__$1 = state_31277;
var statearr_31279_31446 = state_31277__$1;
(statearr_31279_31446[(2)] = null);

(statearr_31279_31446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (2))){
var state_31277__$1 = state_31277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31277__$1,(4),jobs);
} else {
if((state_val_31278 === (3))){
var inst_31275 = (state_31277[(2)]);
var state_31277__$1 = state_31277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31277__$1,inst_31275);
} else {
if((state_val_31278 === (4))){
var inst_31267 = (state_31277[(2)]);
var inst_31268 = process(inst_31267);
var state_31277__$1 = state_31277;
if(cljs.core.truth_(inst_31268)){
var statearr_31280_31447 = state_31277__$1;
(statearr_31280_31447[(1)] = (5));

} else {
var statearr_31281_31448 = state_31277__$1;
(statearr_31281_31448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (5))){
var state_31277__$1 = state_31277;
var statearr_31282_31449 = state_31277__$1;
(statearr_31282_31449[(2)] = null);

(statearr_31282_31449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (6))){
var state_31277__$1 = state_31277;
var statearr_31283_31450 = state_31277__$1;
(statearr_31283_31450[(2)] = null);

(statearr_31283_31450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (7))){
var inst_31273 = (state_31277[(2)]);
var state_31277__$1 = state_31277;
var statearr_31284_31451 = state_31277__$1;
(statearr_31284_31451[(2)] = inst_31273);

(statearr_31284_31451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31440,c__30923__auto___31444,G__31264_31441,G__31264_31442__$1,n__4408__auto___31439,jobs,results,process,async))
;
return ((function (__31440,switch__30754__auto__,c__30923__auto___31444,G__31264_31441,G__31264_31442__$1,n__4408__auto___31439,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30755__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30755__auto____0 = (function (){
var statearr_31285 = [null,null,null,null,null,null,null];
(statearr_31285[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30755__auto__);

(statearr_31285[(1)] = (1));

return statearr_31285;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30755__auto____1 = (function (state_31277){
while(true){
var ret_value__30756__auto__ = (function (){try{while(true){
var result__30757__auto__ = switch__30754__auto__(state_31277);
if(cljs.core.keyword_identical_QMARK_(result__30757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30757__auto__;
}
break;
}
}catch (e31286){if((e31286 instanceof Object)){
var ex__30758__auto__ = e31286;
var statearr_31287_31452 = state_31277;
(statearr_31287_31452[(5)] = ex__30758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31286;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31454 = state_31277;
state_31277 = G__31454;
continue;
} else {
return ret_value__30756__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30755__auto__ = function(state_31277){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30755__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30755__auto____1.call(this,state_31277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30755__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30755__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30755__auto__;
})()
;})(__31440,switch__30754__auto__,c__30923__auto___31444,G__31264_31441,G__31264_31442__$1,n__4408__auto___31439,jobs,results,process,async))
})();
var state__30925__auto__ = (function (){var statearr_31291 = (f__30924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30924__auto__.cljs$core$IFn$_invoke$arity$0() : f__30924__auto__.call(null));
(statearr_31291[(6)] = c__30923__auto___31444);

return statearr_31291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30925__auto__);
});})(__31440,c__30923__auto___31444,G__31264_31441,G__31264_31442__$1,n__4408__auto___31439,jobs,results,process,async))
);


break;
case "async":
var c__30923__auto___31455 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31440,c__30923__auto___31455,G__31264_31441,G__31264_31442__$1,n__4408__auto___31439,jobs,results,process,async){
return (function (){
var f__30924__auto__ = (function (){var switch__30754__auto__ = ((function (__31440,c__30923__auto___31455,G__31264_31441,G__31264_31442__$1,n__4408__auto___31439,jobs,results,process,async){
return (function (state_31304){
var state_val_31305 = (state_31304[(1)]);
if((state_val_31305 === (1))){
var state_31304__$1 = state_31304;
var statearr_31309_31456 = state_31304__$1;
(statearr_31309_31456[(2)] = null);

(statearr_31309_31456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31305 === (2))){
var state_31304__$1 = state_31304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31304__$1,(4),jobs);
} else {
if((state_val_31305 === (3))){
var inst_31302 = (state_31304[(2)]);
var state_31304__$1 = state_31304;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31304__$1,inst_31302);
} else {
if((state_val_31305 === (4))){
var inst_31294 = (state_31304[(2)]);
var inst_31295 = async(inst_31294);
var state_31304__$1 = state_31304;
if(cljs.core.truth_(inst_31295)){
var statearr_31310_31457 = state_31304__$1;
(statearr_31310_31457[(1)] = (5));

} else {
var statearr_31311_31458 = state_31304__$1;
(statearr_31311_31458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31305 === (5))){
var state_31304__$1 = state_31304;
var statearr_31312_31459 = state_31304__$1;
(statearr_31312_31459[(2)] = null);

(statearr_31312_31459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31305 === (6))){
var state_31304__$1 = state_31304;
var statearr_31313_31460 = state_31304__$1;
(statearr_31313_31460[(2)] = null);

(statearr_31313_31460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31305 === (7))){
var inst_31300 = (state_31304[(2)]);
var state_31304__$1 = state_31304;
var statearr_31314_31461 = state_31304__$1;
(statearr_31314_31461[(2)] = inst_31300);

(statearr_31314_31461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31440,c__30923__auto___31455,G__31264_31441,G__31264_31442__$1,n__4408__auto___31439,jobs,results,process,async))
;
return ((function (__31440,switch__30754__auto__,c__30923__auto___31455,G__31264_31441,G__31264_31442__$1,n__4408__auto___31439,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30755__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30755__auto____0 = (function (){
var statearr_31315 = [null,null,null,null,null,null,null];
(statearr_31315[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30755__auto__);

(statearr_31315[(1)] = (1));

return statearr_31315;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30755__auto____1 = (function (state_31304){
while(true){
var ret_value__30756__auto__ = (function (){try{while(true){
var result__30757__auto__ = switch__30754__auto__(state_31304);
if(cljs.core.keyword_identical_QMARK_(result__30757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30757__auto__;
}
break;
}
}catch (e31316){if((e31316 instanceof Object)){
var ex__30758__auto__ = e31316;
var statearr_31317_31462 = state_31304;
(statearr_31317_31462[(5)] = ex__30758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31316;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31467 = state_31304;
state_31304 = G__31467;
continue;
} else {
return ret_value__30756__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30755__auto__ = function(state_31304){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30755__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30755__auto____1.call(this,state_31304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30755__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30755__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30755__auto__;
})()
;})(__31440,switch__30754__auto__,c__30923__auto___31455,G__31264_31441,G__31264_31442__$1,n__4408__auto___31439,jobs,results,process,async))
})();
var state__30925__auto__ = (function (){var statearr_31318 = (f__30924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30924__auto__.cljs$core$IFn$_invoke$arity$0() : f__30924__auto__.call(null));
(statearr_31318[(6)] = c__30923__auto___31455);

return statearr_31318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30925__auto__);
});})(__31440,c__30923__auto___31455,G__31264_31441,G__31264_31442__$1,n__4408__auto___31439,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31264_31442__$1)].join('')));

}

var G__31468 = (__31440 + (1));
__31440 = G__31468;
continue;
} else {
}
break;
}

var c__30923__auto___31469 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30923__auto___31469,jobs,results,process,async){
return (function (){
var f__30924__auto__ = (function (){var switch__30754__auto__ = ((function (c__30923__auto___31469,jobs,results,process,async){
return (function (state_31340){
var state_val_31341 = (state_31340[(1)]);
if((state_val_31341 === (1))){
var state_31340__$1 = state_31340;
var statearr_31342_31470 = state_31340__$1;
(statearr_31342_31470[(2)] = null);

(statearr_31342_31470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31341 === (2))){
var state_31340__$1 = state_31340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31340__$1,(4),from);
} else {
if((state_val_31341 === (3))){
var inst_31338 = (state_31340[(2)]);
var state_31340__$1 = state_31340;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31340__$1,inst_31338);
} else {
if((state_val_31341 === (4))){
var inst_31321 = (state_31340[(7)]);
var inst_31321__$1 = (state_31340[(2)]);
var inst_31322 = (inst_31321__$1 == null);
var state_31340__$1 = (function (){var statearr_31343 = state_31340;
(statearr_31343[(7)] = inst_31321__$1);

return statearr_31343;
})();
if(cljs.core.truth_(inst_31322)){
var statearr_31344_31471 = state_31340__$1;
(statearr_31344_31471[(1)] = (5));

} else {
var statearr_31345_31472 = state_31340__$1;
(statearr_31345_31472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31341 === (5))){
var inst_31324 = cljs.core.async.close_BANG_(jobs);
var state_31340__$1 = state_31340;
var statearr_31346_31473 = state_31340__$1;
(statearr_31346_31473[(2)] = inst_31324);

(statearr_31346_31473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31341 === (6))){
var inst_31326 = (state_31340[(8)]);
var inst_31321 = (state_31340[(7)]);
var inst_31326__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31327 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31328 = [inst_31321,inst_31326__$1];
var inst_31329 = (new cljs.core.PersistentVector(null,2,(5),inst_31327,inst_31328,null));
var state_31340__$1 = (function (){var statearr_31347 = state_31340;
(statearr_31347[(8)] = inst_31326__$1);

return statearr_31347;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31340__$1,(8),jobs,inst_31329);
} else {
if((state_val_31341 === (7))){
var inst_31336 = (state_31340[(2)]);
var state_31340__$1 = state_31340;
var statearr_31348_31479 = state_31340__$1;
(statearr_31348_31479[(2)] = inst_31336);

(statearr_31348_31479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31341 === (8))){
var inst_31326 = (state_31340[(8)]);
var inst_31331 = (state_31340[(2)]);
var state_31340__$1 = (function (){var statearr_31349 = state_31340;
(statearr_31349[(9)] = inst_31331);

return statearr_31349;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31340__$1,(9),results,inst_31326);
} else {
if((state_val_31341 === (9))){
var inst_31333 = (state_31340[(2)]);
var state_31340__$1 = (function (){var statearr_31350 = state_31340;
(statearr_31350[(10)] = inst_31333);

return statearr_31350;
})();
var statearr_31351_31480 = state_31340__$1;
(statearr_31351_31480[(2)] = null);

(statearr_31351_31480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__30923__auto___31469,jobs,results,process,async))
;
return ((function (switch__30754__auto__,c__30923__auto___31469,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30755__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30755__auto____0 = (function (){
var statearr_31355 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31355[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30755__auto__);

(statearr_31355[(1)] = (1));

return statearr_31355;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30755__auto____1 = (function (state_31340){
while(true){
var ret_value__30756__auto__ = (function (){try{while(true){
var result__30757__auto__ = switch__30754__auto__(state_31340);
if(cljs.core.keyword_identical_QMARK_(result__30757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30757__auto__;
}
break;
}
}catch (e31356){if((e31356 instanceof Object)){
var ex__30758__auto__ = e31356;
var statearr_31357_31484 = state_31340;
(statearr_31357_31484[(5)] = ex__30758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31356;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31485 = state_31340;
state_31340 = G__31485;
continue;
} else {
return ret_value__30756__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30755__auto__ = function(state_31340){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30755__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30755__auto____1.call(this,state_31340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30755__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30755__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30755__auto__;
})()
;})(switch__30754__auto__,c__30923__auto___31469,jobs,results,process,async))
})();
var state__30925__auto__ = (function (){var statearr_31358 = (f__30924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30924__auto__.cljs$core$IFn$_invoke$arity$0() : f__30924__auto__.call(null));
(statearr_31358[(6)] = c__30923__auto___31469);

return statearr_31358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30925__auto__);
});})(c__30923__auto___31469,jobs,results,process,async))
);


var c__30923__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30923__auto__,jobs,results,process,async){
return (function (){
var f__30924__auto__ = (function (){var switch__30754__auto__ = ((function (c__30923__auto__,jobs,results,process,async){
return (function (state_31400){
var state_val_31401 = (state_31400[(1)]);
if((state_val_31401 === (7))){
var inst_31392 = (state_31400[(2)]);
var state_31400__$1 = state_31400;
var statearr_31402_31488 = state_31400__$1;
(statearr_31402_31488[(2)] = inst_31392);

(statearr_31402_31488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (20))){
var state_31400__$1 = state_31400;
var statearr_31403_31489 = state_31400__$1;
(statearr_31403_31489[(2)] = null);

(statearr_31403_31489[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (1))){
var state_31400__$1 = state_31400;
var statearr_31404_31490 = state_31400__$1;
(statearr_31404_31490[(2)] = null);

(statearr_31404_31490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (4))){
var inst_31361 = (state_31400[(7)]);
var inst_31361__$1 = (state_31400[(2)]);
var inst_31362 = (inst_31361__$1 == null);
var state_31400__$1 = (function (){var statearr_31405 = state_31400;
(statearr_31405[(7)] = inst_31361__$1);

return statearr_31405;
})();
if(cljs.core.truth_(inst_31362)){
var statearr_31406_31491 = state_31400__$1;
(statearr_31406_31491[(1)] = (5));

} else {
var statearr_31407_31492 = state_31400__$1;
(statearr_31407_31492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (15))){
var inst_31374 = (state_31400[(8)]);
var state_31400__$1 = state_31400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31400__$1,(18),to,inst_31374);
} else {
if((state_val_31401 === (21))){
var inst_31387 = (state_31400[(2)]);
var state_31400__$1 = state_31400;
var statearr_31408_31493 = state_31400__$1;
(statearr_31408_31493[(2)] = inst_31387);

(statearr_31408_31493[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (13))){
var inst_31389 = (state_31400[(2)]);
var state_31400__$1 = (function (){var statearr_31409 = state_31400;
(statearr_31409[(9)] = inst_31389);

return statearr_31409;
})();
var statearr_31410_31494 = state_31400__$1;
(statearr_31410_31494[(2)] = null);

(statearr_31410_31494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (6))){
var inst_31361 = (state_31400[(7)]);
var state_31400__$1 = state_31400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31400__$1,(11),inst_31361);
} else {
if((state_val_31401 === (17))){
var inst_31382 = (state_31400[(2)]);
var state_31400__$1 = state_31400;
if(cljs.core.truth_(inst_31382)){
var statearr_31411_31495 = state_31400__$1;
(statearr_31411_31495[(1)] = (19));

} else {
var statearr_31412_31496 = state_31400__$1;
(statearr_31412_31496[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (3))){
var inst_31394 = (state_31400[(2)]);
var state_31400__$1 = state_31400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31400__$1,inst_31394);
} else {
if((state_val_31401 === (12))){
var inst_31371 = (state_31400[(10)]);
var state_31400__$1 = state_31400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31400__$1,(14),inst_31371);
} else {
if((state_val_31401 === (2))){
var state_31400__$1 = state_31400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31400__$1,(4),results);
} else {
if((state_val_31401 === (19))){
var state_31400__$1 = state_31400;
var statearr_31413_31499 = state_31400__$1;
(statearr_31413_31499[(2)] = null);

(statearr_31413_31499[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (11))){
var inst_31371 = (state_31400[(2)]);
var state_31400__$1 = (function (){var statearr_31414 = state_31400;
(statearr_31414[(10)] = inst_31371);

return statearr_31414;
})();
var statearr_31415_31500 = state_31400__$1;
(statearr_31415_31500[(2)] = null);

(statearr_31415_31500[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (9))){
var state_31400__$1 = state_31400;
var statearr_31419_31501 = state_31400__$1;
(statearr_31419_31501[(2)] = null);

(statearr_31419_31501[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (5))){
var state_31400__$1 = state_31400;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31420_31502 = state_31400__$1;
(statearr_31420_31502[(1)] = (8));

} else {
var statearr_31421_31503 = state_31400__$1;
(statearr_31421_31503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (14))){
var inst_31376 = (state_31400[(11)]);
var inst_31374 = (state_31400[(8)]);
var inst_31374__$1 = (state_31400[(2)]);
var inst_31375 = (inst_31374__$1 == null);
var inst_31376__$1 = cljs.core.not(inst_31375);
var state_31400__$1 = (function (){var statearr_31422 = state_31400;
(statearr_31422[(11)] = inst_31376__$1);

(statearr_31422[(8)] = inst_31374__$1);

return statearr_31422;
})();
if(inst_31376__$1){
var statearr_31423_31504 = state_31400__$1;
(statearr_31423_31504[(1)] = (15));

} else {
var statearr_31424_31505 = state_31400__$1;
(statearr_31424_31505[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (16))){
var inst_31376 = (state_31400[(11)]);
var state_31400__$1 = state_31400;
var statearr_31428_31506 = state_31400__$1;
(statearr_31428_31506[(2)] = inst_31376);

(statearr_31428_31506[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (10))){
var inst_31368 = (state_31400[(2)]);
var state_31400__$1 = state_31400;
var statearr_31429_31507 = state_31400__$1;
(statearr_31429_31507[(2)] = inst_31368);

(statearr_31429_31507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (18))){
var inst_31379 = (state_31400[(2)]);
var state_31400__$1 = state_31400;
var statearr_31430_31508 = state_31400__$1;
(statearr_31430_31508[(2)] = inst_31379);

(statearr_31430_31508[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (8))){
var inst_31365 = cljs.core.async.close_BANG_(to);
var state_31400__$1 = state_31400;
var statearr_31431_31509 = state_31400__$1;
(statearr_31431_31509[(2)] = inst_31365);

(statearr_31431_31509[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30923__auto__,jobs,results,process,async))
;
return ((function (switch__30754__auto__,c__30923__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30755__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30755__auto____0 = (function (){
var statearr_31432 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31432[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30755__auto__);

(statearr_31432[(1)] = (1));

return statearr_31432;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30755__auto____1 = (function (state_31400){
while(true){
var ret_value__30756__auto__ = (function (){try{while(true){
var result__30757__auto__ = switch__30754__auto__(state_31400);
if(cljs.core.keyword_identical_QMARK_(result__30757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30757__auto__;
}
break;
}
}catch (e31433){if((e31433 instanceof Object)){
var ex__30758__auto__ = e31433;
var statearr_31434_31510 = state_31400;
(statearr_31434_31510[(5)] = ex__30758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31433;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31511 = state_31400;
state_31400 = G__31511;
continue;
} else {
return ret_value__30756__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30755__auto__ = function(state_31400){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30755__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30755__auto____1.call(this,state_31400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30755__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30755__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30755__auto__;
})()
;})(switch__30754__auto__,c__30923__auto__,jobs,results,process,async))
})();
var state__30925__auto__ = (function (){var statearr_31435 = (f__30924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30924__auto__.cljs$core$IFn$_invoke$arity$0() : f__30924__auto__.call(null));
(statearr_31435[(6)] = c__30923__auto__);

return statearr_31435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30925__auto__);
});})(c__30923__auto__,jobs,results,process,async))
);

return c__30923__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31544 = arguments.length;
switch (G__31544) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31558 = arguments.length;
switch (G__31558) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31564 = arguments.length;
switch (G__31564) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30923__auto___31622 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30923__auto___31622,tc,fc){
return (function (){
var f__30924__auto__ = (function (){var switch__30754__auto__ = ((function (c__30923__auto___31622,tc,fc){
return (function (state_31590){
var state_val_31591 = (state_31590[(1)]);
if((state_val_31591 === (7))){
var inst_31586 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
var statearr_31592_31623 = state_31590__$1;
(statearr_31592_31623[(2)] = inst_31586);

(statearr_31592_31623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (1))){
var state_31590__$1 = state_31590;
var statearr_31593_31624 = state_31590__$1;
(statearr_31593_31624[(2)] = null);

(statearr_31593_31624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (4))){
var inst_31567 = (state_31590[(7)]);
var inst_31567__$1 = (state_31590[(2)]);
var inst_31568 = (inst_31567__$1 == null);
var state_31590__$1 = (function (){var statearr_31594 = state_31590;
(statearr_31594[(7)] = inst_31567__$1);

return statearr_31594;
})();
if(cljs.core.truth_(inst_31568)){
var statearr_31595_31625 = state_31590__$1;
(statearr_31595_31625[(1)] = (5));

} else {
var statearr_31596_31626 = state_31590__$1;
(statearr_31596_31626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (13))){
var state_31590__$1 = state_31590;
var statearr_31597_31627 = state_31590__$1;
(statearr_31597_31627[(2)] = null);

(statearr_31597_31627[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (6))){
var inst_31567 = (state_31590[(7)]);
var inst_31573 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31567) : p.call(null,inst_31567));
var state_31590__$1 = state_31590;
if(cljs.core.truth_(inst_31573)){
var statearr_31598_31628 = state_31590__$1;
(statearr_31598_31628[(1)] = (9));

} else {
var statearr_31599_31629 = state_31590__$1;
(statearr_31599_31629[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (3))){
var inst_31588 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31590__$1,inst_31588);
} else {
if((state_val_31591 === (12))){
var state_31590__$1 = state_31590;
var statearr_31600_31630 = state_31590__$1;
(statearr_31600_31630[(2)] = null);

(statearr_31600_31630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (2))){
var state_31590__$1 = state_31590;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31590__$1,(4),ch);
} else {
if((state_val_31591 === (11))){
var inst_31567 = (state_31590[(7)]);
var inst_31577 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31590__$1,(8),inst_31577,inst_31567);
} else {
if((state_val_31591 === (9))){
var state_31590__$1 = state_31590;
var statearr_31601_31631 = state_31590__$1;
(statearr_31601_31631[(2)] = tc);

(statearr_31601_31631[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (5))){
var inst_31570 = cljs.core.async.close_BANG_(tc);
var inst_31571 = cljs.core.async.close_BANG_(fc);
var state_31590__$1 = (function (){var statearr_31602 = state_31590;
(statearr_31602[(8)] = inst_31570);

return statearr_31602;
})();
var statearr_31603_31632 = state_31590__$1;
(statearr_31603_31632[(2)] = inst_31571);

(statearr_31603_31632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (14))){
var inst_31584 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
var statearr_31604_31633 = state_31590__$1;
(statearr_31604_31633[(2)] = inst_31584);

(statearr_31604_31633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (10))){
var state_31590__$1 = state_31590;
var statearr_31605_31634 = state_31590__$1;
(statearr_31605_31634[(2)] = fc);

(statearr_31605_31634[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (8))){
var inst_31579 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
if(cljs.core.truth_(inst_31579)){
var statearr_31606_31635 = state_31590__$1;
(statearr_31606_31635[(1)] = (12));

} else {
var statearr_31607_31636 = state_31590__$1;
(statearr_31607_31636[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30923__auto___31622,tc,fc))
;
return ((function (switch__30754__auto__,c__30923__auto___31622,tc,fc){
return (function() {
var cljs$core$async$state_machine__30755__auto__ = null;
var cljs$core$async$state_machine__30755__auto____0 = (function (){
var statearr_31608 = [null,null,null,null,null,null,null,null,null];
(statearr_31608[(0)] = cljs$core$async$state_machine__30755__auto__);

(statearr_31608[(1)] = (1));

return statearr_31608;
});
var cljs$core$async$state_machine__30755__auto____1 = (function (state_31590){
while(true){
var ret_value__30756__auto__ = (function (){try{while(true){
var result__30757__auto__ = switch__30754__auto__(state_31590);
if(cljs.core.keyword_identical_QMARK_(result__30757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30757__auto__;
}
break;
}
}catch (e31612){if((e31612 instanceof Object)){
var ex__30758__auto__ = e31612;
var statearr_31613_31640 = state_31590;
(statearr_31613_31640[(5)] = ex__30758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31612;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31644 = state_31590;
state_31590 = G__31644;
continue;
} else {
return ret_value__30756__auto__;
}
break;
}
});
cljs$core$async$state_machine__30755__auto__ = function(state_31590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30755__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30755__auto____1.call(this,state_31590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30755__auto____0;
cljs$core$async$state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30755__auto____1;
return cljs$core$async$state_machine__30755__auto__;
})()
;})(switch__30754__auto__,c__30923__auto___31622,tc,fc))
})();
var state__30925__auto__ = (function (){var statearr_31620 = (f__30924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30924__auto__.cljs$core$IFn$_invoke$arity$0() : f__30924__auto__.call(null));
(statearr_31620[(6)] = c__30923__auto___31622);

return statearr_31620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30925__auto__);
});})(c__30923__auto___31622,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30923__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30923__auto__){
return (function (){
var f__30924__auto__ = (function (){var switch__30754__auto__ = ((function (c__30923__auto__){
return (function (state_31665){
var state_val_31666 = (state_31665[(1)]);
if((state_val_31666 === (7))){
var inst_31661 = (state_31665[(2)]);
var state_31665__$1 = state_31665;
var statearr_31667_31685 = state_31665__$1;
(statearr_31667_31685[(2)] = inst_31661);

(statearr_31667_31685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (1))){
var inst_31645 = init;
var state_31665__$1 = (function (){var statearr_31668 = state_31665;
(statearr_31668[(7)] = inst_31645);

return statearr_31668;
})();
var statearr_31669_31686 = state_31665__$1;
(statearr_31669_31686[(2)] = null);

(statearr_31669_31686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (4))){
var inst_31648 = (state_31665[(8)]);
var inst_31648__$1 = (state_31665[(2)]);
var inst_31649 = (inst_31648__$1 == null);
var state_31665__$1 = (function (){var statearr_31670 = state_31665;
(statearr_31670[(8)] = inst_31648__$1);

return statearr_31670;
})();
if(cljs.core.truth_(inst_31649)){
var statearr_31671_31687 = state_31665__$1;
(statearr_31671_31687[(1)] = (5));

} else {
var statearr_31672_31688 = state_31665__$1;
(statearr_31672_31688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (6))){
var inst_31645 = (state_31665[(7)]);
var inst_31652 = (state_31665[(9)]);
var inst_31648 = (state_31665[(8)]);
var inst_31652__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31645,inst_31648) : f.call(null,inst_31645,inst_31648));
var inst_31653 = cljs.core.reduced_QMARK_(inst_31652__$1);
var state_31665__$1 = (function (){var statearr_31673 = state_31665;
(statearr_31673[(9)] = inst_31652__$1);

return statearr_31673;
})();
if(inst_31653){
var statearr_31674_31689 = state_31665__$1;
(statearr_31674_31689[(1)] = (8));

} else {
var statearr_31675_31690 = state_31665__$1;
(statearr_31675_31690[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (3))){
var inst_31663 = (state_31665[(2)]);
var state_31665__$1 = state_31665;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31665__$1,inst_31663);
} else {
if((state_val_31666 === (2))){
var state_31665__$1 = state_31665;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31665__$1,(4),ch);
} else {
if((state_val_31666 === (9))){
var inst_31652 = (state_31665[(9)]);
var inst_31645 = inst_31652;
var state_31665__$1 = (function (){var statearr_31676 = state_31665;
(statearr_31676[(7)] = inst_31645);

return statearr_31676;
})();
var statearr_31677_31691 = state_31665__$1;
(statearr_31677_31691[(2)] = null);

(statearr_31677_31691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (5))){
var inst_31645 = (state_31665[(7)]);
var state_31665__$1 = state_31665;
var statearr_31678_31692 = state_31665__$1;
(statearr_31678_31692[(2)] = inst_31645);

(statearr_31678_31692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (10))){
var inst_31659 = (state_31665[(2)]);
var state_31665__$1 = state_31665;
var statearr_31679_31693 = state_31665__$1;
(statearr_31679_31693[(2)] = inst_31659);

(statearr_31679_31693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (8))){
var inst_31652 = (state_31665[(9)]);
var inst_31655 = cljs.core.deref(inst_31652);
var state_31665__$1 = state_31665;
var statearr_31680_31695 = state_31665__$1;
(statearr_31680_31695[(2)] = inst_31655);

(statearr_31680_31695[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__30923__auto__))
;
return ((function (switch__30754__auto__,c__30923__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30755__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30755__auto____0 = (function (){
var statearr_31681 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31681[(0)] = cljs$core$async$reduce_$_state_machine__30755__auto__);

(statearr_31681[(1)] = (1));

return statearr_31681;
});
var cljs$core$async$reduce_$_state_machine__30755__auto____1 = (function (state_31665){
while(true){
var ret_value__30756__auto__ = (function (){try{while(true){
var result__30757__auto__ = switch__30754__auto__(state_31665);
if(cljs.core.keyword_identical_QMARK_(result__30757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30757__auto__;
}
break;
}
}catch (e31682){if((e31682 instanceof Object)){
var ex__30758__auto__ = e31682;
var statearr_31683_31699 = state_31665;
(statearr_31683_31699[(5)] = ex__30758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31682;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31703 = state_31665;
state_31665 = G__31703;
continue;
} else {
return ret_value__30756__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30755__auto__ = function(state_31665){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30755__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30755__auto____1.call(this,state_31665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30755__auto____0;
cljs$core$async$reduce_$_state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30755__auto____1;
return cljs$core$async$reduce_$_state_machine__30755__auto__;
})()
;})(switch__30754__auto__,c__30923__auto__))
})();
var state__30925__auto__ = (function (){var statearr_31684 = (f__30924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30924__auto__.cljs$core$IFn$_invoke$arity$0() : f__30924__auto__.call(null));
(statearr_31684[(6)] = c__30923__auto__);

return statearr_31684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30925__auto__);
});})(c__30923__auto__))
);

return c__30923__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30923__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30923__auto__,f__$1){
return (function (){
var f__30924__auto__ = (function (){var switch__30754__auto__ = ((function (c__30923__auto__,f__$1){
return (function (state_31712){
var state_val_31713 = (state_31712[(1)]);
if((state_val_31713 === (1))){
var inst_31707 = cljs.core.async.reduce(f__$1,init,ch);
var state_31712__$1 = state_31712;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31712__$1,(2),inst_31707);
} else {
if((state_val_31713 === (2))){
var inst_31709 = (state_31712[(2)]);
var inst_31710 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31709) : f__$1.call(null,inst_31709));
var state_31712__$1 = state_31712;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31712__$1,inst_31710);
} else {
return null;
}
}
});})(c__30923__auto__,f__$1))
;
return ((function (switch__30754__auto__,c__30923__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30755__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30755__auto____0 = (function (){
var statearr_31714 = [null,null,null,null,null,null,null];
(statearr_31714[(0)] = cljs$core$async$transduce_$_state_machine__30755__auto__);

(statearr_31714[(1)] = (1));

return statearr_31714;
});
var cljs$core$async$transduce_$_state_machine__30755__auto____1 = (function (state_31712){
while(true){
var ret_value__30756__auto__ = (function (){try{while(true){
var result__30757__auto__ = switch__30754__auto__(state_31712);
if(cljs.core.keyword_identical_QMARK_(result__30757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30757__auto__;
}
break;
}
}catch (e31715){if((e31715 instanceof Object)){
var ex__30758__auto__ = e31715;
var statearr_31716_31718 = state_31712;
(statearr_31716_31718[(5)] = ex__30758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31715;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31719 = state_31712;
state_31712 = G__31719;
continue;
} else {
return ret_value__30756__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30755__auto__ = function(state_31712){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30755__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30755__auto____1.call(this,state_31712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30755__auto____0;
cljs$core$async$transduce_$_state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30755__auto____1;
return cljs$core$async$transduce_$_state_machine__30755__auto__;
})()
;})(switch__30754__auto__,c__30923__auto__,f__$1))
})();
var state__30925__auto__ = (function (){var statearr_31717 = (f__30924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30924__auto__.cljs$core$IFn$_invoke$arity$0() : f__30924__auto__.call(null));
(statearr_31717[(6)] = c__30923__auto__);

return statearr_31717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30925__auto__);
});})(c__30923__auto__,f__$1))
);

return c__30923__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31721 = arguments.length;
switch (G__31721) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30923__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30923__auto__){
return (function (){
var f__30924__auto__ = (function (){var switch__30754__auto__ = ((function (c__30923__auto__){
return (function (state_31746){
var state_val_31747 = (state_31746[(1)]);
if((state_val_31747 === (7))){
var inst_31728 = (state_31746[(2)]);
var state_31746__$1 = state_31746;
var statearr_31748_31769 = state_31746__$1;
(statearr_31748_31769[(2)] = inst_31728);

(statearr_31748_31769[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (1))){
var inst_31722 = cljs.core.seq(coll);
var inst_31723 = inst_31722;
var state_31746__$1 = (function (){var statearr_31749 = state_31746;
(statearr_31749[(7)] = inst_31723);

return statearr_31749;
})();
var statearr_31750_31770 = state_31746__$1;
(statearr_31750_31770[(2)] = null);

(statearr_31750_31770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (4))){
var inst_31723 = (state_31746[(7)]);
var inst_31726 = cljs.core.first(inst_31723);
var state_31746__$1 = state_31746;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31746__$1,(7),ch,inst_31726);
} else {
if((state_val_31747 === (13))){
var inst_31740 = (state_31746[(2)]);
var state_31746__$1 = state_31746;
var statearr_31751_31771 = state_31746__$1;
(statearr_31751_31771[(2)] = inst_31740);

(statearr_31751_31771[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (6))){
var inst_31731 = (state_31746[(2)]);
var state_31746__$1 = state_31746;
if(cljs.core.truth_(inst_31731)){
var statearr_31752_31772 = state_31746__$1;
(statearr_31752_31772[(1)] = (8));

} else {
var statearr_31753_31773 = state_31746__$1;
(statearr_31753_31773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (3))){
var inst_31744 = (state_31746[(2)]);
var state_31746__$1 = state_31746;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31746__$1,inst_31744);
} else {
if((state_val_31747 === (12))){
var state_31746__$1 = state_31746;
var statearr_31754_31774 = state_31746__$1;
(statearr_31754_31774[(2)] = null);

(statearr_31754_31774[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (2))){
var inst_31723 = (state_31746[(7)]);
var state_31746__$1 = state_31746;
if(cljs.core.truth_(inst_31723)){
var statearr_31755_31775 = state_31746__$1;
(statearr_31755_31775[(1)] = (4));

} else {
var statearr_31756_31776 = state_31746__$1;
(statearr_31756_31776[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (11))){
var inst_31737 = cljs.core.async.close_BANG_(ch);
var state_31746__$1 = state_31746;
var statearr_31757_31777 = state_31746__$1;
(statearr_31757_31777[(2)] = inst_31737);

(statearr_31757_31777[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (9))){
var state_31746__$1 = state_31746;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31758_31778 = state_31746__$1;
(statearr_31758_31778[(1)] = (11));

} else {
var statearr_31759_31779 = state_31746__$1;
(statearr_31759_31779[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (5))){
var inst_31723 = (state_31746[(7)]);
var state_31746__$1 = state_31746;
var statearr_31760_31780 = state_31746__$1;
(statearr_31760_31780[(2)] = inst_31723);

(statearr_31760_31780[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (10))){
var inst_31742 = (state_31746[(2)]);
var state_31746__$1 = state_31746;
var statearr_31761_31781 = state_31746__$1;
(statearr_31761_31781[(2)] = inst_31742);

(statearr_31761_31781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (8))){
var inst_31723 = (state_31746[(7)]);
var inst_31733 = cljs.core.next(inst_31723);
var inst_31723__$1 = inst_31733;
var state_31746__$1 = (function (){var statearr_31762 = state_31746;
(statearr_31762[(7)] = inst_31723__$1);

return statearr_31762;
})();
var statearr_31763_31782 = state_31746__$1;
(statearr_31763_31782[(2)] = null);

(statearr_31763_31782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30923__auto__))
;
return ((function (switch__30754__auto__,c__30923__auto__){
return (function() {
var cljs$core$async$state_machine__30755__auto__ = null;
var cljs$core$async$state_machine__30755__auto____0 = (function (){
var statearr_31764 = [null,null,null,null,null,null,null,null];
(statearr_31764[(0)] = cljs$core$async$state_machine__30755__auto__);

(statearr_31764[(1)] = (1));

return statearr_31764;
});
var cljs$core$async$state_machine__30755__auto____1 = (function (state_31746){
while(true){
var ret_value__30756__auto__ = (function (){try{while(true){
var result__30757__auto__ = switch__30754__auto__(state_31746);
if(cljs.core.keyword_identical_QMARK_(result__30757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30757__auto__;
}
break;
}
}catch (e31765){if((e31765 instanceof Object)){
var ex__30758__auto__ = e31765;
var statearr_31766_31783 = state_31746;
(statearr_31766_31783[(5)] = ex__30758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31765;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31784 = state_31746;
state_31746 = G__31784;
continue;
} else {
return ret_value__30756__auto__;
}
break;
}
});
cljs$core$async$state_machine__30755__auto__ = function(state_31746){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30755__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30755__auto____1.call(this,state_31746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30755__auto____0;
cljs$core$async$state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30755__auto____1;
return cljs$core$async$state_machine__30755__auto__;
})()
;})(switch__30754__auto__,c__30923__auto__))
})();
var state__30925__auto__ = (function (){var statearr_31767 = (f__30924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30924__auto__.cljs$core$IFn$_invoke$arity$0() : f__30924__auto__.call(null));
(statearr_31767[(6)] = c__30923__auto__);

return statearr_31767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30925__auto__);
});})(c__30923__auto__))
);

return c__30923__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto__.call(null,_));
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31797 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31797 = (function (ch,cs,meta31798){
this.ch = ch;
this.cs = cs;
this.meta31798 = meta31798;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31799,meta31798__$1){
var self__ = this;
var _31799__$1 = this;
return (new cljs.core.async.t_cljs$core$async31797(self__.ch,self__.cs,meta31798__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31797.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31799){
var self__ = this;
var _31799__$1 = this;
return self__.meta31798;
});})(cs))
;

cljs.core.async.t_cljs$core$async31797.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31797.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31797.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31797.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31797.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31797.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31797.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31798","meta31798",1622235422,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31797.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31797.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31797";

cljs.core.async.t_cljs$core$async31797.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async31797");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31797.
 */
cljs.core.async.__GT_t_cljs$core$async31797 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31797(ch__$1,cs__$1,meta31798){
return (new cljs.core.async.t_cljs$core$async31797(ch__$1,cs__$1,meta31798));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31797(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30923__auto___32067 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30923__auto___32067,cs,m,dchan,dctr,done){
return (function (){
var f__30924__auto__ = (function (){var switch__30754__auto__ = ((function (c__30923__auto___32067,cs,m,dchan,dctr,done){
return (function (state_31939){
var state_val_31940 = (state_31939[(1)]);
if((state_val_31940 === (7))){
var inst_31935 = (state_31939[(2)]);
var state_31939__$1 = state_31939;
var statearr_31945_32068 = state_31939__$1;
(statearr_31945_32068[(2)] = inst_31935);

(statearr_31945_32068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (20))){
var inst_31833 = (state_31939[(7)]);
var inst_31845 = cljs.core.first(inst_31833);
var inst_31846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31845,(0),null);
var inst_31847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31845,(1),null);
var state_31939__$1 = (function (){var statearr_31946 = state_31939;
(statearr_31946[(8)] = inst_31846);

return statearr_31946;
})();
if(cljs.core.truth_(inst_31847)){
var statearr_31947_32069 = state_31939__$1;
(statearr_31947_32069[(1)] = (22));

} else {
var statearr_31948_32070 = state_31939__$1;
(statearr_31948_32070[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (27))){
var inst_31802 = (state_31939[(9)]);
var inst_31875 = (state_31939[(10)]);
var inst_31877 = (state_31939[(11)]);
var inst_31882 = (state_31939[(12)]);
var inst_31882__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31875,inst_31877);
var inst_31883 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31882__$1,inst_31802,done);
var state_31939__$1 = (function (){var statearr_31955 = state_31939;
(statearr_31955[(12)] = inst_31882__$1);

return statearr_31955;
})();
if(cljs.core.truth_(inst_31883)){
var statearr_31962_32071 = state_31939__$1;
(statearr_31962_32071[(1)] = (30));

} else {
var statearr_31963_32072 = state_31939__$1;
(statearr_31963_32072[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (1))){
var state_31939__$1 = state_31939;
var statearr_31964_32073 = state_31939__$1;
(statearr_31964_32073[(2)] = null);

(statearr_31964_32073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (24))){
var inst_31833 = (state_31939[(7)]);
var inst_31852 = (state_31939[(2)]);
var inst_31853 = cljs.core.next(inst_31833);
var inst_31811 = inst_31853;
var inst_31812 = null;
var inst_31813 = (0);
var inst_31814 = (0);
var state_31939__$1 = (function (){var statearr_31965 = state_31939;
(statearr_31965[(13)] = inst_31813);

(statearr_31965[(14)] = inst_31811);

(statearr_31965[(15)] = inst_31814);

(statearr_31965[(16)] = inst_31852);

(statearr_31965[(17)] = inst_31812);

return statearr_31965;
})();
var statearr_31966_32074 = state_31939__$1;
(statearr_31966_32074[(2)] = null);

(statearr_31966_32074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (39))){
var state_31939__$1 = state_31939;
var statearr_31970_32075 = state_31939__$1;
(statearr_31970_32075[(2)] = null);

(statearr_31970_32075[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (4))){
var inst_31802 = (state_31939[(9)]);
var inst_31802__$1 = (state_31939[(2)]);
var inst_31803 = (inst_31802__$1 == null);
var state_31939__$1 = (function (){var statearr_31971 = state_31939;
(statearr_31971[(9)] = inst_31802__$1);

return statearr_31971;
})();
if(cljs.core.truth_(inst_31803)){
var statearr_31972_32076 = state_31939__$1;
(statearr_31972_32076[(1)] = (5));

} else {
var statearr_31973_32077 = state_31939__$1;
(statearr_31973_32077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (15))){
var inst_31813 = (state_31939[(13)]);
var inst_31811 = (state_31939[(14)]);
var inst_31814 = (state_31939[(15)]);
var inst_31812 = (state_31939[(17)]);
var inst_31829 = (state_31939[(2)]);
var inst_31830 = (inst_31814 + (1));
var tmp31967 = inst_31813;
var tmp31968 = inst_31811;
var tmp31969 = inst_31812;
var inst_31811__$1 = tmp31968;
var inst_31812__$1 = tmp31969;
var inst_31813__$1 = tmp31967;
var inst_31814__$1 = inst_31830;
var state_31939__$1 = (function (){var statearr_31974 = state_31939;
(statearr_31974[(13)] = inst_31813__$1);

(statearr_31974[(18)] = inst_31829);

(statearr_31974[(14)] = inst_31811__$1);

(statearr_31974[(15)] = inst_31814__$1);

(statearr_31974[(17)] = inst_31812__$1);

return statearr_31974;
})();
var statearr_31975_32078 = state_31939__$1;
(statearr_31975_32078[(2)] = null);

(statearr_31975_32078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (21))){
var inst_31856 = (state_31939[(2)]);
var state_31939__$1 = state_31939;
var statearr_31980_32079 = state_31939__$1;
(statearr_31980_32079[(2)] = inst_31856);

(statearr_31980_32079[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (31))){
var inst_31882 = (state_31939[(12)]);
var inst_31886 = done(null);
var inst_31887 = cljs.core.async.untap_STAR_(m,inst_31882);
var state_31939__$1 = (function (){var statearr_31981 = state_31939;
(statearr_31981[(19)] = inst_31886);

return statearr_31981;
})();
var statearr_31982_32080 = state_31939__$1;
(statearr_31982_32080[(2)] = inst_31887);

(statearr_31982_32080[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (32))){
var inst_31875 = (state_31939[(10)]);
var inst_31877 = (state_31939[(11)]);
var inst_31874 = (state_31939[(20)]);
var inst_31876 = (state_31939[(21)]);
var inst_31889 = (state_31939[(2)]);
var inst_31890 = (inst_31877 + (1));
var tmp31977 = inst_31875;
var tmp31978 = inst_31874;
var tmp31979 = inst_31876;
var inst_31874__$1 = tmp31978;
var inst_31875__$1 = tmp31977;
var inst_31876__$1 = tmp31979;
var inst_31877__$1 = inst_31890;
var state_31939__$1 = (function (){var statearr_31983 = state_31939;
(statearr_31983[(22)] = inst_31889);

(statearr_31983[(10)] = inst_31875__$1);

(statearr_31983[(11)] = inst_31877__$1);

(statearr_31983[(20)] = inst_31874__$1);

(statearr_31983[(21)] = inst_31876__$1);

return statearr_31983;
})();
var statearr_31984_32081 = state_31939__$1;
(statearr_31984_32081[(2)] = null);

(statearr_31984_32081[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (40))){
var inst_31907 = (state_31939[(23)]);
var inst_31911 = done(null);
var inst_31912 = cljs.core.async.untap_STAR_(m,inst_31907);
var state_31939__$1 = (function (){var statearr_31985 = state_31939;
(statearr_31985[(24)] = inst_31911);

return statearr_31985;
})();
var statearr_31986_32082 = state_31939__$1;
(statearr_31986_32082[(2)] = inst_31912);

(statearr_31986_32082[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (33))){
var inst_31895 = (state_31939[(25)]);
var inst_31900 = cljs.core.chunked_seq_QMARK_(inst_31895);
var state_31939__$1 = state_31939;
if(inst_31900){
var statearr_31999_32083 = state_31939__$1;
(statearr_31999_32083[(1)] = (36));

} else {
var statearr_32000_32084 = state_31939__$1;
(statearr_32000_32084[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (13))){
var inst_31823 = (state_31939[(26)]);
var inst_31826 = cljs.core.async.close_BANG_(inst_31823);
var state_31939__$1 = state_31939;
var statearr_32002_32086 = state_31939__$1;
(statearr_32002_32086[(2)] = inst_31826);

(statearr_32002_32086[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (22))){
var inst_31846 = (state_31939[(8)]);
var inst_31849 = cljs.core.async.close_BANG_(inst_31846);
var state_31939__$1 = state_31939;
var statearr_32003_32088 = state_31939__$1;
(statearr_32003_32088[(2)] = inst_31849);

(statearr_32003_32088[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (36))){
var inst_31895 = (state_31939[(25)]);
var inst_31902 = cljs.core.chunk_first(inst_31895);
var inst_31903 = cljs.core.chunk_rest(inst_31895);
var inst_31904 = cljs.core.count(inst_31902);
var inst_31874 = inst_31903;
var inst_31875 = inst_31902;
var inst_31876 = inst_31904;
var inst_31877 = (0);
var state_31939__$1 = (function (){var statearr_32004 = state_31939;
(statearr_32004[(10)] = inst_31875);

(statearr_32004[(11)] = inst_31877);

(statearr_32004[(20)] = inst_31874);

(statearr_32004[(21)] = inst_31876);

return statearr_32004;
})();
var statearr_32005_32092 = state_31939__$1;
(statearr_32005_32092[(2)] = null);

(statearr_32005_32092[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (41))){
var inst_31895 = (state_31939[(25)]);
var inst_31914 = (state_31939[(2)]);
var inst_31915 = cljs.core.next(inst_31895);
var inst_31874 = inst_31915;
var inst_31875 = null;
var inst_31876 = (0);
var inst_31877 = (0);
var state_31939__$1 = (function (){var statearr_32006 = state_31939;
(statearr_32006[(10)] = inst_31875);

(statearr_32006[(11)] = inst_31877);

(statearr_32006[(20)] = inst_31874);

(statearr_32006[(21)] = inst_31876);

(statearr_32006[(27)] = inst_31914);

return statearr_32006;
})();
var statearr_32007_32093 = state_31939__$1;
(statearr_32007_32093[(2)] = null);

(statearr_32007_32093[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (43))){
var state_31939__$1 = state_31939;
var statearr_32008_32094 = state_31939__$1;
(statearr_32008_32094[(2)] = null);

(statearr_32008_32094[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (29))){
var inst_31923 = (state_31939[(2)]);
var state_31939__$1 = state_31939;
var statearr_32009_32095 = state_31939__$1;
(statearr_32009_32095[(2)] = inst_31923);

(statearr_32009_32095[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (44))){
var inst_31932 = (state_31939[(2)]);
var state_31939__$1 = (function (){var statearr_32010 = state_31939;
(statearr_32010[(28)] = inst_31932);

return statearr_32010;
})();
var statearr_32011_32096 = state_31939__$1;
(statearr_32011_32096[(2)] = null);

(statearr_32011_32096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (6))){
var inst_31866 = (state_31939[(29)]);
var inst_31865 = cljs.core.deref(cs);
var inst_31866__$1 = cljs.core.keys(inst_31865);
var inst_31867 = cljs.core.count(inst_31866__$1);
var inst_31868 = cljs.core.reset_BANG_(dctr,inst_31867);
var inst_31873 = cljs.core.seq(inst_31866__$1);
var inst_31874 = inst_31873;
var inst_31875 = null;
var inst_31876 = (0);
var inst_31877 = (0);
var state_31939__$1 = (function (){var statearr_32012 = state_31939;
(statearr_32012[(10)] = inst_31875);

(statearr_32012[(29)] = inst_31866__$1);

(statearr_32012[(11)] = inst_31877);

(statearr_32012[(20)] = inst_31874);

(statearr_32012[(21)] = inst_31876);

(statearr_32012[(30)] = inst_31868);

return statearr_32012;
})();
var statearr_32013_32097 = state_31939__$1;
(statearr_32013_32097[(2)] = null);

(statearr_32013_32097[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (28))){
var inst_31874 = (state_31939[(20)]);
var inst_31895 = (state_31939[(25)]);
var inst_31895__$1 = cljs.core.seq(inst_31874);
var state_31939__$1 = (function (){var statearr_32014 = state_31939;
(statearr_32014[(25)] = inst_31895__$1);

return statearr_32014;
})();
if(inst_31895__$1){
var statearr_32015_32098 = state_31939__$1;
(statearr_32015_32098[(1)] = (33));

} else {
var statearr_32016_32099 = state_31939__$1;
(statearr_32016_32099[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (25))){
var inst_31877 = (state_31939[(11)]);
var inst_31876 = (state_31939[(21)]);
var inst_31879 = (inst_31877 < inst_31876);
var inst_31880 = inst_31879;
var state_31939__$1 = state_31939;
if(cljs.core.truth_(inst_31880)){
var statearr_32017_32100 = state_31939__$1;
(statearr_32017_32100[(1)] = (27));

} else {
var statearr_32018_32101 = state_31939__$1;
(statearr_32018_32101[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (34))){
var state_31939__$1 = state_31939;
var statearr_32019_32102 = state_31939__$1;
(statearr_32019_32102[(2)] = null);

(statearr_32019_32102[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (17))){
var state_31939__$1 = state_31939;
var statearr_32020_32103 = state_31939__$1;
(statearr_32020_32103[(2)] = null);

(statearr_32020_32103[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (3))){
var inst_31937 = (state_31939[(2)]);
var state_31939__$1 = state_31939;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31939__$1,inst_31937);
} else {
if((state_val_31940 === (12))){
var inst_31861 = (state_31939[(2)]);
var state_31939__$1 = state_31939;
var statearr_32021_32104 = state_31939__$1;
(statearr_32021_32104[(2)] = inst_31861);

(statearr_32021_32104[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (2))){
var state_31939__$1 = state_31939;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31939__$1,(4),ch);
} else {
if((state_val_31940 === (23))){
var state_31939__$1 = state_31939;
var statearr_32022_32105 = state_31939__$1;
(statearr_32022_32105[(2)] = null);

(statearr_32022_32105[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (35))){
var inst_31921 = (state_31939[(2)]);
var state_31939__$1 = state_31939;
var statearr_32023_32106 = state_31939__$1;
(statearr_32023_32106[(2)] = inst_31921);

(statearr_32023_32106[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (19))){
var inst_31833 = (state_31939[(7)]);
var inst_31837 = cljs.core.chunk_first(inst_31833);
var inst_31838 = cljs.core.chunk_rest(inst_31833);
var inst_31839 = cljs.core.count(inst_31837);
var inst_31811 = inst_31838;
var inst_31812 = inst_31837;
var inst_31813 = inst_31839;
var inst_31814 = (0);
var state_31939__$1 = (function (){var statearr_32024 = state_31939;
(statearr_32024[(13)] = inst_31813);

(statearr_32024[(14)] = inst_31811);

(statearr_32024[(15)] = inst_31814);

(statearr_32024[(17)] = inst_31812);

return statearr_32024;
})();
var statearr_32025_32107 = state_31939__$1;
(statearr_32025_32107[(2)] = null);

(statearr_32025_32107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (11))){
var inst_31811 = (state_31939[(14)]);
var inst_31833 = (state_31939[(7)]);
var inst_31833__$1 = cljs.core.seq(inst_31811);
var state_31939__$1 = (function (){var statearr_32026 = state_31939;
(statearr_32026[(7)] = inst_31833__$1);

return statearr_32026;
})();
if(inst_31833__$1){
var statearr_32027_32108 = state_31939__$1;
(statearr_32027_32108[(1)] = (16));

} else {
var statearr_32028_32109 = state_31939__$1;
(statearr_32028_32109[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (9))){
var inst_31863 = (state_31939[(2)]);
var state_31939__$1 = state_31939;
var statearr_32029_32110 = state_31939__$1;
(statearr_32029_32110[(2)] = inst_31863);

(statearr_32029_32110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (5))){
var inst_31809 = cljs.core.deref(cs);
var inst_31810 = cljs.core.seq(inst_31809);
var inst_31811 = inst_31810;
var inst_31812 = null;
var inst_31813 = (0);
var inst_31814 = (0);
var state_31939__$1 = (function (){var statearr_32030 = state_31939;
(statearr_32030[(13)] = inst_31813);

(statearr_32030[(14)] = inst_31811);

(statearr_32030[(15)] = inst_31814);

(statearr_32030[(17)] = inst_31812);

return statearr_32030;
})();
var statearr_32031_32114 = state_31939__$1;
(statearr_32031_32114[(2)] = null);

(statearr_32031_32114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (14))){
var state_31939__$1 = state_31939;
var statearr_32032_32115 = state_31939__$1;
(statearr_32032_32115[(2)] = null);

(statearr_32032_32115[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (45))){
var inst_31929 = (state_31939[(2)]);
var state_31939__$1 = state_31939;
var statearr_32033_32116 = state_31939__$1;
(statearr_32033_32116[(2)] = inst_31929);

(statearr_32033_32116[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (26))){
var inst_31866 = (state_31939[(29)]);
var inst_31925 = (state_31939[(2)]);
var inst_31926 = cljs.core.seq(inst_31866);
var state_31939__$1 = (function (){var statearr_32034 = state_31939;
(statearr_32034[(31)] = inst_31925);

return statearr_32034;
})();
if(inst_31926){
var statearr_32035_32117 = state_31939__$1;
(statearr_32035_32117[(1)] = (42));

} else {
var statearr_32036_32118 = state_31939__$1;
(statearr_32036_32118[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (16))){
var inst_31833 = (state_31939[(7)]);
var inst_31835 = cljs.core.chunked_seq_QMARK_(inst_31833);
var state_31939__$1 = state_31939;
if(inst_31835){
var statearr_32040_32119 = state_31939__$1;
(statearr_32040_32119[(1)] = (19));

} else {
var statearr_32041_32120 = state_31939__$1;
(statearr_32041_32120[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (38))){
var inst_31918 = (state_31939[(2)]);
var state_31939__$1 = state_31939;
var statearr_32042_32121 = state_31939__$1;
(statearr_32042_32121[(2)] = inst_31918);

(statearr_32042_32121[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (30))){
var state_31939__$1 = state_31939;
var statearr_32043_32122 = state_31939__$1;
(statearr_32043_32122[(2)] = null);

(statearr_32043_32122[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (10))){
var inst_31814 = (state_31939[(15)]);
var inst_31812 = (state_31939[(17)]);
var inst_31822 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31812,inst_31814);
var inst_31823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31822,(0),null);
var inst_31824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31822,(1),null);
var state_31939__$1 = (function (){var statearr_32044 = state_31939;
(statearr_32044[(26)] = inst_31823);

return statearr_32044;
})();
if(cljs.core.truth_(inst_31824)){
var statearr_32045_32123 = state_31939__$1;
(statearr_32045_32123[(1)] = (13));

} else {
var statearr_32046_32124 = state_31939__$1;
(statearr_32046_32124[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (18))){
var inst_31859 = (state_31939[(2)]);
var state_31939__$1 = state_31939;
var statearr_32047_32125 = state_31939__$1;
(statearr_32047_32125[(2)] = inst_31859);

(statearr_32047_32125[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (42))){
var state_31939__$1 = state_31939;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31939__$1,(45),dchan);
} else {
if((state_val_31940 === (37))){
var inst_31802 = (state_31939[(9)]);
var inst_31907 = (state_31939[(23)]);
var inst_31895 = (state_31939[(25)]);
var inst_31907__$1 = cljs.core.first(inst_31895);
var inst_31908 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31907__$1,inst_31802,done);
var state_31939__$1 = (function (){var statearr_32048 = state_31939;
(statearr_32048[(23)] = inst_31907__$1);

return statearr_32048;
})();
if(cljs.core.truth_(inst_31908)){
var statearr_32049_32134 = state_31939__$1;
(statearr_32049_32134[(1)] = (39));

} else {
var statearr_32050_32135 = state_31939__$1;
(statearr_32050_32135[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (8))){
var inst_31813 = (state_31939[(13)]);
var inst_31814 = (state_31939[(15)]);
var inst_31816 = (inst_31814 < inst_31813);
var inst_31817 = inst_31816;
var state_31939__$1 = state_31939;
if(cljs.core.truth_(inst_31817)){
var statearr_32051_32136 = state_31939__$1;
(statearr_32051_32136[(1)] = (10));

} else {
var statearr_32052_32137 = state_31939__$1;
(statearr_32052_32137[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30923__auto___32067,cs,m,dchan,dctr,done))
;
return ((function (switch__30754__auto__,c__30923__auto___32067,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30755__auto__ = null;
var cljs$core$async$mult_$_state_machine__30755__auto____0 = (function (){
var statearr_32053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32053[(0)] = cljs$core$async$mult_$_state_machine__30755__auto__);

(statearr_32053[(1)] = (1));

return statearr_32053;
});
var cljs$core$async$mult_$_state_machine__30755__auto____1 = (function (state_31939){
while(true){
var ret_value__30756__auto__ = (function (){try{while(true){
var result__30757__auto__ = switch__30754__auto__(state_31939);
if(cljs.core.keyword_identical_QMARK_(result__30757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30757__auto__;
}
break;
}
}catch (e32054){if((e32054 instanceof Object)){
var ex__30758__auto__ = e32054;
var statearr_32055_32138 = state_31939;
(statearr_32055_32138[(5)] = ex__30758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32054;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32139 = state_31939;
state_31939 = G__32139;
continue;
} else {
return ret_value__30756__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30755__auto__ = function(state_31939){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30755__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30755__auto____1.call(this,state_31939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30755__auto____0;
cljs$core$async$mult_$_state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30755__auto____1;
return cljs$core$async$mult_$_state_machine__30755__auto__;
})()
;})(switch__30754__auto__,c__30923__auto___32067,cs,m,dchan,dctr,done))
})();
var state__30925__auto__ = (function (){var statearr_32056 = (f__30924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30924__auto__.cljs$core$IFn$_invoke$arity$0() : f__30924__auto__.call(null));
(statearr_32056[(6)] = c__30923__auto___32067);

return statearr_32056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30925__auto__);
});})(c__30923__auto___32067,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32141 = arguments.length;
switch (G__32141) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto__.call(null,m,state_map));
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto__.call(null,m,mode));
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___32182 = arguments.length;
var i__4532__auto___32183 = (0);
while(true){
if((i__4532__auto___32183 < len__4531__auto___32182)){
args__4534__auto__.push((arguments[i__4532__auto___32183]));

var G__32184 = (i__4532__auto___32183 + (1));
i__4532__auto___32183 = G__32184;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32167){
var map__32168 = p__32167;
var map__32168__$1 = ((((!((map__32168 == null)))?(((((map__32168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32168):map__32168);
var opts = map__32168__$1;
var statearr_32172_32185 = state;
(statearr_32172_32185[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__32168,map__32168__$1,opts){
return (function (val){
var statearr_32173_32186 = state;
(statearr_32173_32186[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__32168,map__32168__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_32174_32187 = state;
(statearr_32174_32187[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32162){
var G__32163 = cljs.core.first(seq32162);
var seq32162__$1 = cljs.core.next(seq32162);
var G__32164 = cljs.core.first(seq32162__$1);
var seq32162__$2 = cljs.core.next(seq32162__$1);
var G__32165 = cljs.core.first(seq32162__$2);
var seq32162__$3 = cljs.core.next(seq32162__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32163,G__32164,G__32165,seq32162__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32190 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32190 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta32191){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta32191 = meta32191;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32192,meta32191__$1){
var self__ = this;
var _32192__$1 = this;
return (new cljs.core.async.t_cljs$core$async32190(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta32191__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32190.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32192){
var self__ = this;
var _32192__$1 = this;
return self__.meta32191;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32190.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32190.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32190.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32190.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32190.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32190.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32190.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32190.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32190.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta32191","meta32191",801371115,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32190.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32190.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32190";

cljs.core.async.t_cljs$core$async32190.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async32190");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32190.
 */
cljs.core.async.__GT_t_cljs$core$async32190 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32190(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32191){
return (new cljs.core.async.t_cljs$core$async32190(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32191));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32190(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30923__auto___32430 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30923__auto___32430,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30924__auto__ = (function (){var switch__30754__auto__ = ((function (c__30923__auto___32430,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32305){
var state_val_32306 = (state_32305[(1)]);
if((state_val_32306 === (7))){
var inst_32217 = (state_32305[(2)]);
var state_32305__$1 = state_32305;
var statearr_32310_32434 = state_32305__$1;
(statearr_32310_32434[(2)] = inst_32217);

(statearr_32310_32434[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (20))){
var inst_32230 = (state_32305[(7)]);
var state_32305__$1 = state_32305;
var statearr_32312_32436 = state_32305__$1;
(statearr_32312_32436[(2)] = inst_32230);

(statearr_32312_32436[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (27))){
var state_32305__$1 = state_32305;
var statearr_32313_32438 = state_32305__$1;
(statearr_32313_32438[(2)] = null);

(statearr_32313_32438[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (1))){
var inst_32204 = (state_32305[(8)]);
var inst_32204__$1 = calc_state();
var inst_32206 = (inst_32204__$1 == null);
var inst_32207 = cljs.core.not(inst_32206);
var state_32305__$1 = (function (){var statearr_32314 = state_32305;
(statearr_32314[(8)] = inst_32204__$1);

return statearr_32314;
})();
if(inst_32207){
var statearr_32315_32442 = state_32305__$1;
(statearr_32315_32442[(1)] = (2));

} else {
var statearr_32316_32443 = state_32305__$1;
(statearr_32316_32443[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (24))){
var inst_32265 = (state_32305[(9)]);
var inst_32256 = (state_32305[(10)]);
var inst_32279 = (state_32305[(11)]);
var inst_32279__$1 = (inst_32256.cljs$core$IFn$_invoke$arity$1 ? inst_32256.cljs$core$IFn$_invoke$arity$1(inst_32265) : inst_32256.call(null,inst_32265));
var state_32305__$1 = (function (){var statearr_32319 = state_32305;
(statearr_32319[(11)] = inst_32279__$1);

return statearr_32319;
})();
if(cljs.core.truth_(inst_32279__$1)){
var statearr_32320_32444 = state_32305__$1;
(statearr_32320_32444[(1)] = (29));

} else {
var statearr_32321_32445 = state_32305__$1;
(statearr_32321_32445[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (4))){
var inst_32220 = (state_32305[(2)]);
var state_32305__$1 = state_32305;
if(cljs.core.truth_(inst_32220)){
var statearr_32322_32446 = state_32305__$1;
(statearr_32322_32446[(1)] = (8));

} else {
var statearr_32323_32456 = state_32305__$1;
(statearr_32323_32456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (15))){
var inst_32250 = (state_32305[(2)]);
var state_32305__$1 = state_32305;
if(cljs.core.truth_(inst_32250)){
var statearr_32324_32459 = state_32305__$1;
(statearr_32324_32459[(1)] = (19));

} else {
var statearr_32325_32460 = state_32305__$1;
(statearr_32325_32460[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (21))){
var inst_32255 = (state_32305[(12)]);
var inst_32255__$1 = (state_32305[(2)]);
var inst_32256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32255__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32255__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32258 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32255__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32305__$1 = (function (){var statearr_32326 = state_32305;
(statearr_32326[(12)] = inst_32255__$1);

(statearr_32326[(10)] = inst_32256);

(statearr_32326[(13)] = inst_32257);

return statearr_32326;
})();
return cljs.core.async.ioc_alts_BANG_(state_32305__$1,(22),inst_32258);
} else {
if((state_val_32306 === (31))){
var inst_32287 = (state_32305[(2)]);
var state_32305__$1 = state_32305;
if(cljs.core.truth_(inst_32287)){
var statearr_32328_32461 = state_32305__$1;
(statearr_32328_32461[(1)] = (32));

} else {
var statearr_32330_32462 = state_32305__$1;
(statearr_32330_32462[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (32))){
var inst_32264 = (state_32305[(14)]);
var state_32305__$1 = state_32305;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32305__$1,(35),out,inst_32264);
} else {
if((state_val_32306 === (33))){
var inst_32255 = (state_32305[(12)]);
var inst_32230 = inst_32255;
var state_32305__$1 = (function (){var statearr_32332 = state_32305;
(statearr_32332[(7)] = inst_32230);

return statearr_32332;
})();
var statearr_32333_32463 = state_32305__$1;
(statearr_32333_32463[(2)] = null);

(statearr_32333_32463[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (13))){
var inst_32230 = (state_32305[(7)]);
var inst_32239 = inst_32230.cljs$lang$protocol_mask$partition0$;
var inst_32240 = (inst_32239 & (64));
var inst_32241 = inst_32230.cljs$core$ISeq$;
var inst_32242 = (cljs.core.PROTOCOL_SENTINEL === inst_32241);
var inst_32243 = ((inst_32240) || (inst_32242));
var state_32305__$1 = state_32305;
if(cljs.core.truth_(inst_32243)){
var statearr_32335_32464 = state_32305__$1;
(statearr_32335_32464[(1)] = (16));

} else {
var statearr_32336_32465 = state_32305__$1;
(statearr_32336_32465[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (22))){
var inst_32265 = (state_32305[(9)]);
var inst_32264 = (state_32305[(14)]);
var inst_32263 = (state_32305[(2)]);
var inst_32264__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32263,(0),null);
var inst_32265__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32263,(1),null);
var inst_32266 = (inst_32264__$1 == null);
var inst_32267 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32265__$1,change);
var inst_32268 = ((inst_32266) || (inst_32267));
var state_32305__$1 = (function (){var statearr_32337 = state_32305;
(statearr_32337[(9)] = inst_32265__$1);

(statearr_32337[(14)] = inst_32264__$1);

return statearr_32337;
})();
if(cljs.core.truth_(inst_32268)){
var statearr_32338_32466 = state_32305__$1;
(statearr_32338_32466[(1)] = (23));

} else {
var statearr_32339_32467 = state_32305__$1;
(statearr_32339_32467[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (36))){
var inst_32255 = (state_32305[(12)]);
var inst_32230 = inst_32255;
var state_32305__$1 = (function (){var statearr_32340 = state_32305;
(statearr_32340[(7)] = inst_32230);

return statearr_32340;
})();
var statearr_32341_32468 = state_32305__$1;
(statearr_32341_32468[(2)] = null);

(statearr_32341_32468[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (29))){
var inst_32279 = (state_32305[(11)]);
var state_32305__$1 = state_32305;
var statearr_32342_32469 = state_32305__$1;
(statearr_32342_32469[(2)] = inst_32279);

(statearr_32342_32469[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (6))){
var state_32305__$1 = state_32305;
var statearr_32343_32470 = state_32305__$1;
(statearr_32343_32470[(2)] = false);

(statearr_32343_32470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (28))){
var inst_32275 = (state_32305[(2)]);
var inst_32276 = calc_state();
var inst_32230 = inst_32276;
var state_32305__$1 = (function (){var statearr_32344 = state_32305;
(statearr_32344[(15)] = inst_32275);

(statearr_32344[(7)] = inst_32230);

return statearr_32344;
})();
var statearr_32345_32471 = state_32305__$1;
(statearr_32345_32471[(2)] = null);

(statearr_32345_32471[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (25))){
var inst_32301 = (state_32305[(2)]);
var state_32305__$1 = state_32305;
var statearr_32346_32473 = state_32305__$1;
(statearr_32346_32473[(2)] = inst_32301);

(statearr_32346_32473[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (34))){
var inst_32299 = (state_32305[(2)]);
var state_32305__$1 = state_32305;
var statearr_32347_32474 = state_32305__$1;
(statearr_32347_32474[(2)] = inst_32299);

(statearr_32347_32474[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (17))){
var state_32305__$1 = state_32305;
var statearr_32348_32475 = state_32305__$1;
(statearr_32348_32475[(2)] = false);

(statearr_32348_32475[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (3))){
var state_32305__$1 = state_32305;
var statearr_32349_32476 = state_32305__$1;
(statearr_32349_32476[(2)] = false);

(statearr_32349_32476[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (12))){
var inst_32303 = (state_32305[(2)]);
var state_32305__$1 = state_32305;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32305__$1,inst_32303);
} else {
if((state_val_32306 === (2))){
var inst_32204 = (state_32305[(8)]);
var inst_32209 = inst_32204.cljs$lang$protocol_mask$partition0$;
var inst_32210 = (inst_32209 & (64));
var inst_32211 = inst_32204.cljs$core$ISeq$;
var inst_32212 = (cljs.core.PROTOCOL_SENTINEL === inst_32211);
var inst_32213 = ((inst_32210) || (inst_32212));
var state_32305__$1 = state_32305;
if(cljs.core.truth_(inst_32213)){
var statearr_32350_32478 = state_32305__$1;
(statearr_32350_32478[(1)] = (5));

} else {
var statearr_32351_32479 = state_32305__$1;
(statearr_32351_32479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (23))){
var inst_32264 = (state_32305[(14)]);
var inst_32270 = (inst_32264 == null);
var state_32305__$1 = state_32305;
if(cljs.core.truth_(inst_32270)){
var statearr_32352_32480 = state_32305__$1;
(statearr_32352_32480[(1)] = (26));

} else {
var statearr_32353_32481 = state_32305__$1;
(statearr_32353_32481[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (35))){
var inst_32290 = (state_32305[(2)]);
var state_32305__$1 = state_32305;
if(cljs.core.truth_(inst_32290)){
var statearr_32354_32482 = state_32305__$1;
(statearr_32354_32482[(1)] = (36));

} else {
var statearr_32355_32486 = state_32305__$1;
(statearr_32355_32486[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (19))){
var inst_32230 = (state_32305[(7)]);
var inst_32252 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32230);
var state_32305__$1 = state_32305;
var statearr_32356_32487 = state_32305__$1;
(statearr_32356_32487[(2)] = inst_32252);

(statearr_32356_32487[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (11))){
var inst_32230 = (state_32305[(7)]);
var inst_32236 = (inst_32230 == null);
var inst_32237 = cljs.core.not(inst_32236);
var state_32305__$1 = state_32305;
if(inst_32237){
var statearr_32363_32488 = state_32305__$1;
(statearr_32363_32488[(1)] = (13));

} else {
var statearr_32364_32489 = state_32305__$1;
(statearr_32364_32489[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (9))){
var inst_32204 = (state_32305[(8)]);
var state_32305__$1 = state_32305;
var statearr_32367_32490 = state_32305__$1;
(statearr_32367_32490[(2)] = inst_32204);

(statearr_32367_32490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (5))){
var state_32305__$1 = state_32305;
var statearr_32369_32491 = state_32305__$1;
(statearr_32369_32491[(2)] = true);

(statearr_32369_32491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (14))){
var state_32305__$1 = state_32305;
var statearr_32370_32492 = state_32305__$1;
(statearr_32370_32492[(2)] = false);

(statearr_32370_32492[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (26))){
var inst_32265 = (state_32305[(9)]);
var inst_32272 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32265);
var state_32305__$1 = state_32305;
var statearr_32371_32493 = state_32305__$1;
(statearr_32371_32493[(2)] = inst_32272);

(statearr_32371_32493[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (16))){
var state_32305__$1 = state_32305;
var statearr_32372_32494 = state_32305__$1;
(statearr_32372_32494[(2)] = true);

(statearr_32372_32494[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (38))){
var inst_32295 = (state_32305[(2)]);
var state_32305__$1 = state_32305;
var statearr_32373_32495 = state_32305__$1;
(statearr_32373_32495[(2)] = inst_32295);

(statearr_32373_32495[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (30))){
var inst_32265 = (state_32305[(9)]);
var inst_32256 = (state_32305[(10)]);
var inst_32257 = (state_32305[(13)]);
var inst_32282 = cljs.core.empty_QMARK_(inst_32256);
var inst_32283 = (inst_32257.cljs$core$IFn$_invoke$arity$1 ? inst_32257.cljs$core$IFn$_invoke$arity$1(inst_32265) : inst_32257.call(null,inst_32265));
var inst_32284 = cljs.core.not(inst_32283);
var inst_32285 = ((inst_32282) && (inst_32284));
var state_32305__$1 = state_32305;
var statearr_32374_32498 = state_32305__$1;
(statearr_32374_32498[(2)] = inst_32285);

(statearr_32374_32498[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (10))){
var inst_32204 = (state_32305[(8)]);
var inst_32226 = (state_32305[(2)]);
var inst_32227 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32226,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32226,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32226,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32230 = inst_32204;
var state_32305__$1 = (function (){var statearr_32375 = state_32305;
(statearr_32375[(16)] = inst_32229);

(statearr_32375[(17)] = inst_32228);

(statearr_32375[(18)] = inst_32227);

(statearr_32375[(7)] = inst_32230);

return statearr_32375;
})();
var statearr_32376_32503 = state_32305__$1;
(statearr_32376_32503[(2)] = null);

(statearr_32376_32503[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (18))){
var inst_32247 = (state_32305[(2)]);
var state_32305__$1 = state_32305;
var statearr_32377_32505 = state_32305__$1;
(statearr_32377_32505[(2)] = inst_32247);

(statearr_32377_32505[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (37))){
var state_32305__$1 = state_32305;
var statearr_32378_32507 = state_32305__$1;
(statearr_32378_32507[(2)] = null);

(statearr_32378_32507[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (8))){
var inst_32204 = (state_32305[(8)]);
var inst_32223 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32204);
var state_32305__$1 = state_32305;
var statearr_32380_32509 = state_32305__$1;
(statearr_32380_32509[(2)] = inst_32223);

(statearr_32380_32509[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30923__auto___32430,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30754__auto__,c__30923__auto___32430,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30755__auto__ = null;
var cljs$core$async$mix_$_state_machine__30755__auto____0 = (function (){
var statearr_32381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32381[(0)] = cljs$core$async$mix_$_state_machine__30755__auto__);

(statearr_32381[(1)] = (1));

return statearr_32381;
});
var cljs$core$async$mix_$_state_machine__30755__auto____1 = (function (state_32305){
while(true){
var ret_value__30756__auto__ = (function (){try{while(true){
var result__30757__auto__ = switch__30754__auto__(state_32305);
if(cljs.core.keyword_identical_QMARK_(result__30757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30757__auto__;
}
break;
}
}catch (e32387){if((e32387 instanceof Object)){
var ex__30758__auto__ = e32387;
var statearr_32391_32514 = state_32305;
(statearr_32391_32514[(5)] = ex__30758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32387;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32516 = state_32305;
state_32305 = G__32516;
continue;
} else {
return ret_value__30756__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30755__auto__ = function(state_32305){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30755__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30755__auto____1.call(this,state_32305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30755__auto____0;
cljs$core$async$mix_$_state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30755__auto____1;
return cljs$core$async$mix_$_state_machine__30755__auto__;
})()
;})(switch__30754__auto__,c__30923__auto___32430,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30925__auto__ = (function (){var statearr_32393 = (f__30924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30924__auto__.cljs$core$IFn$_invoke$arity$0() : f__30924__auto__.call(null));
(statearr_32393[(6)] = c__30923__auto___32430);

return statearr_32393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30925__auto__);
});})(c__30923__auto___32430,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto__.call(null,p,v,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32531 = arguments.length;
switch (G__32531) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto__.call(null,p));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto__.call(null,p,v));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32562 = arguments.length;
switch (G__32562) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3949__auto__,mults){
return (function (p1__32559_SHARP_){
if(cljs.core.truth_((p1__32559_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32559_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32559_SHARP_.call(null,topic)))){
return p1__32559_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32559_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32564 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32564 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32565){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32565 = meta32565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32566,meta32565__$1){
var self__ = this;
var _32566__$1 = this;
return (new cljs.core.async.t_cljs$core$async32564(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32565__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32564.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32566){
var self__ = this;
var _32566__$1 = this;
return self__.meta32565;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32564.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32564.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32564.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32564.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32564.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32564.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32564.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32564.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32565","meta32565",1553930184,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32564.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32564";

cljs.core.async.t_cljs$core$async32564.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async32564");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32564.
 */
cljs.core.async.__GT_t_cljs$core$async32564 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32564(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32565){
return (new cljs.core.async.t_cljs$core$async32564(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32565));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32564(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30923__auto___32745 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30923__auto___32745,mults,ensure_mult,p){
return (function (){
var f__30924__auto__ = (function (){var switch__30754__auto__ = ((function (c__30923__auto___32745,mults,ensure_mult,p){
return (function (state_32665){
var state_val_32666 = (state_32665[(1)]);
if((state_val_32666 === (7))){
var inst_32661 = (state_32665[(2)]);
var state_32665__$1 = state_32665;
var statearr_32669_32747 = state_32665__$1;
(statearr_32669_32747[(2)] = inst_32661);

(statearr_32669_32747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (20))){
var state_32665__$1 = state_32665;
var statearr_32670_32750 = state_32665__$1;
(statearr_32670_32750[(2)] = null);

(statearr_32670_32750[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (1))){
var state_32665__$1 = state_32665;
var statearr_32671_32751 = state_32665__$1;
(statearr_32671_32751[(2)] = null);

(statearr_32671_32751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (24))){
var inst_32644 = (state_32665[(7)]);
var inst_32653 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32644);
var state_32665__$1 = state_32665;
var statearr_32672_32752 = state_32665__$1;
(statearr_32672_32752[(2)] = inst_32653);

(statearr_32672_32752[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (4))){
var inst_32588 = (state_32665[(8)]);
var inst_32588__$1 = (state_32665[(2)]);
var inst_32589 = (inst_32588__$1 == null);
var state_32665__$1 = (function (){var statearr_32673 = state_32665;
(statearr_32673[(8)] = inst_32588__$1);

return statearr_32673;
})();
if(cljs.core.truth_(inst_32589)){
var statearr_32674_32753 = state_32665__$1;
(statearr_32674_32753[(1)] = (5));

} else {
var statearr_32675_32754 = state_32665__$1;
(statearr_32675_32754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (15))){
var inst_32638 = (state_32665[(2)]);
var state_32665__$1 = state_32665;
var statearr_32676_32755 = state_32665__$1;
(statearr_32676_32755[(2)] = inst_32638);

(statearr_32676_32755[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (21))){
var inst_32658 = (state_32665[(2)]);
var state_32665__$1 = (function (){var statearr_32677 = state_32665;
(statearr_32677[(9)] = inst_32658);

return statearr_32677;
})();
var statearr_32678_32758 = state_32665__$1;
(statearr_32678_32758[(2)] = null);

(statearr_32678_32758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (13))){
var inst_32618 = (state_32665[(10)]);
var inst_32620 = cljs.core.chunked_seq_QMARK_(inst_32618);
var state_32665__$1 = state_32665;
if(inst_32620){
var statearr_32679_32759 = state_32665__$1;
(statearr_32679_32759[(1)] = (16));

} else {
var statearr_32680_32761 = state_32665__$1;
(statearr_32680_32761[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (22))){
var inst_32650 = (state_32665[(2)]);
var state_32665__$1 = state_32665;
if(cljs.core.truth_(inst_32650)){
var statearr_32682_32763 = state_32665__$1;
(statearr_32682_32763[(1)] = (23));

} else {
var statearr_32683_32765 = state_32665__$1;
(statearr_32683_32765[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (6))){
var inst_32644 = (state_32665[(7)]);
var inst_32646 = (state_32665[(11)]);
var inst_32588 = (state_32665[(8)]);
var inst_32644__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32588) : topic_fn.call(null,inst_32588));
var inst_32645 = cljs.core.deref(mults);
var inst_32646__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32645,inst_32644__$1);
var state_32665__$1 = (function (){var statearr_32684 = state_32665;
(statearr_32684[(7)] = inst_32644__$1);

(statearr_32684[(11)] = inst_32646__$1);

return statearr_32684;
})();
if(cljs.core.truth_(inst_32646__$1)){
var statearr_32685_32770 = state_32665__$1;
(statearr_32685_32770[(1)] = (19));

} else {
var statearr_32686_32771 = state_32665__$1;
(statearr_32686_32771[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (25))){
var inst_32655 = (state_32665[(2)]);
var state_32665__$1 = state_32665;
var statearr_32687_32772 = state_32665__$1;
(statearr_32687_32772[(2)] = inst_32655);

(statearr_32687_32772[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (17))){
var inst_32618 = (state_32665[(10)]);
var inst_32627 = cljs.core.first(inst_32618);
var inst_32628 = cljs.core.async.muxch_STAR_(inst_32627);
var inst_32629 = cljs.core.async.close_BANG_(inst_32628);
var inst_32632 = cljs.core.next(inst_32618);
var inst_32598 = inst_32632;
var inst_32599 = null;
var inst_32600 = (0);
var inst_32601 = (0);
var state_32665__$1 = (function (){var statearr_32688 = state_32665;
(statearr_32688[(12)] = inst_32598);

(statearr_32688[(13)] = inst_32599);

(statearr_32688[(14)] = inst_32601);

(statearr_32688[(15)] = inst_32629);

(statearr_32688[(16)] = inst_32600);

return statearr_32688;
})();
var statearr_32689_32775 = state_32665__$1;
(statearr_32689_32775[(2)] = null);

(statearr_32689_32775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (3))){
var inst_32663 = (state_32665[(2)]);
var state_32665__$1 = state_32665;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32665__$1,inst_32663);
} else {
if((state_val_32666 === (12))){
var inst_32640 = (state_32665[(2)]);
var state_32665__$1 = state_32665;
var statearr_32690_32776 = state_32665__$1;
(statearr_32690_32776[(2)] = inst_32640);

(statearr_32690_32776[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (2))){
var state_32665__$1 = state_32665;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32665__$1,(4),ch);
} else {
if((state_val_32666 === (23))){
var state_32665__$1 = state_32665;
var statearr_32691_32777 = state_32665__$1;
(statearr_32691_32777[(2)] = null);

(statearr_32691_32777[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (19))){
var inst_32646 = (state_32665[(11)]);
var inst_32588 = (state_32665[(8)]);
var inst_32648 = cljs.core.async.muxch_STAR_(inst_32646);
var state_32665__$1 = state_32665;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32665__$1,(22),inst_32648,inst_32588);
} else {
if((state_val_32666 === (11))){
var inst_32598 = (state_32665[(12)]);
var inst_32618 = (state_32665[(10)]);
var inst_32618__$1 = cljs.core.seq(inst_32598);
var state_32665__$1 = (function (){var statearr_32692 = state_32665;
(statearr_32692[(10)] = inst_32618__$1);

return statearr_32692;
})();
if(inst_32618__$1){
var statearr_32693_32778 = state_32665__$1;
(statearr_32693_32778[(1)] = (13));

} else {
var statearr_32694_32779 = state_32665__$1;
(statearr_32694_32779[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (9))){
var inst_32642 = (state_32665[(2)]);
var state_32665__$1 = state_32665;
var statearr_32695_32782 = state_32665__$1;
(statearr_32695_32782[(2)] = inst_32642);

(statearr_32695_32782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (5))){
var inst_32595 = cljs.core.deref(mults);
var inst_32596 = cljs.core.vals(inst_32595);
var inst_32597 = cljs.core.seq(inst_32596);
var inst_32598 = inst_32597;
var inst_32599 = null;
var inst_32600 = (0);
var inst_32601 = (0);
var state_32665__$1 = (function (){var statearr_32698 = state_32665;
(statearr_32698[(12)] = inst_32598);

(statearr_32698[(13)] = inst_32599);

(statearr_32698[(14)] = inst_32601);

(statearr_32698[(16)] = inst_32600);

return statearr_32698;
})();
var statearr_32699_32784 = state_32665__$1;
(statearr_32699_32784[(2)] = null);

(statearr_32699_32784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (14))){
var state_32665__$1 = state_32665;
var statearr_32703_32785 = state_32665__$1;
(statearr_32703_32785[(2)] = null);

(statearr_32703_32785[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (16))){
var inst_32618 = (state_32665[(10)]);
var inst_32622 = cljs.core.chunk_first(inst_32618);
var inst_32623 = cljs.core.chunk_rest(inst_32618);
var inst_32624 = cljs.core.count(inst_32622);
var inst_32598 = inst_32623;
var inst_32599 = inst_32622;
var inst_32600 = inst_32624;
var inst_32601 = (0);
var state_32665__$1 = (function (){var statearr_32706 = state_32665;
(statearr_32706[(12)] = inst_32598);

(statearr_32706[(13)] = inst_32599);

(statearr_32706[(14)] = inst_32601);

(statearr_32706[(16)] = inst_32600);

return statearr_32706;
})();
var statearr_32707_32787 = state_32665__$1;
(statearr_32707_32787[(2)] = null);

(statearr_32707_32787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (10))){
var inst_32598 = (state_32665[(12)]);
var inst_32599 = (state_32665[(13)]);
var inst_32601 = (state_32665[(14)]);
var inst_32600 = (state_32665[(16)]);
var inst_32610 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32599,inst_32601);
var inst_32611 = cljs.core.async.muxch_STAR_(inst_32610);
var inst_32614 = cljs.core.async.close_BANG_(inst_32611);
var inst_32615 = (inst_32601 + (1));
var tmp32700 = inst_32598;
var tmp32701 = inst_32599;
var tmp32702 = inst_32600;
var inst_32598__$1 = tmp32700;
var inst_32599__$1 = tmp32701;
var inst_32600__$1 = tmp32702;
var inst_32601__$1 = inst_32615;
var state_32665__$1 = (function (){var statearr_32717 = state_32665;
(statearr_32717[(12)] = inst_32598__$1);

(statearr_32717[(13)] = inst_32599__$1);

(statearr_32717[(14)] = inst_32601__$1);

(statearr_32717[(17)] = inst_32614);

(statearr_32717[(16)] = inst_32600__$1);

return statearr_32717;
})();
var statearr_32720_32788 = state_32665__$1;
(statearr_32720_32788[(2)] = null);

(statearr_32720_32788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (18))){
var inst_32635 = (state_32665[(2)]);
var state_32665__$1 = state_32665;
var statearr_32722_32789 = state_32665__$1;
(statearr_32722_32789[(2)] = inst_32635);

(statearr_32722_32789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (8))){
var inst_32601 = (state_32665[(14)]);
var inst_32600 = (state_32665[(16)]);
var inst_32607 = (inst_32601 < inst_32600);
var inst_32608 = inst_32607;
var state_32665__$1 = state_32665;
if(cljs.core.truth_(inst_32608)){
var statearr_32723_32790 = state_32665__$1;
(statearr_32723_32790[(1)] = (10));

} else {
var statearr_32724_32791 = state_32665__$1;
(statearr_32724_32791[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30923__auto___32745,mults,ensure_mult,p))
;
return ((function (switch__30754__auto__,c__30923__auto___32745,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30755__auto__ = null;
var cljs$core$async$state_machine__30755__auto____0 = (function (){
var statearr_32727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32727[(0)] = cljs$core$async$state_machine__30755__auto__);

(statearr_32727[(1)] = (1));

return statearr_32727;
});
var cljs$core$async$state_machine__30755__auto____1 = (function (state_32665){
while(true){
var ret_value__30756__auto__ = (function (){try{while(true){
var result__30757__auto__ = switch__30754__auto__(state_32665);
if(cljs.core.keyword_identical_QMARK_(result__30757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30757__auto__;
}
break;
}
}catch (e32731){if((e32731 instanceof Object)){
var ex__30758__auto__ = e32731;
var statearr_32732_32795 = state_32665;
(statearr_32732_32795[(5)] = ex__30758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32731;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32796 = state_32665;
state_32665 = G__32796;
continue;
} else {
return ret_value__30756__auto__;
}
break;
}
});
cljs$core$async$state_machine__30755__auto__ = function(state_32665){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30755__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30755__auto____1.call(this,state_32665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30755__auto____0;
cljs$core$async$state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30755__auto____1;
return cljs$core$async$state_machine__30755__auto__;
})()
;})(switch__30754__auto__,c__30923__auto___32745,mults,ensure_mult,p))
})();
var state__30925__auto__ = (function (){var statearr_32733 = (f__30924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30924__auto__.cljs$core$IFn$_invoke$arity$0() : f__30924__auto__.call(null));
(statearr_32733[(6)] = c__30923__auto___32745);

return statearr_32733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30925__auto__);
});})(c__30923__auto___32745,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32800 = arguments.length;
switch (G__32800) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32814 = arguments.length;
switch (G__32814) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32817 = arguments.length;
switch (G__32817) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30923__auto___32890 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30923__auto___32890,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30924__auto__ = (function (){var switch__30754__auto__ = ((function (c__30923__auto___32890,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32861){
var state_val_32862 = (state_32861[(1)]);
if((state_val_32862 === (7))){
var state_32861__$1 = state_32861;
var statearr_32863_32891 = state_32861__$1;
(statearr_32863_32891[(2)] = null);

(statearr_32863_32891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (1))){
var state_32861__$1 = state_32861;
var statearr_32864_32892 = state_32861__$1;
(statearr_32864_32892[(2)] = null);

(statearr_32864_32892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (4))){
var inst_32822 = (state_32861[(7)]);
var inst_32824 = (inst_32822 < cnt);
var state_32861__$1 = state_32861;
if(cljs.core.truth_(inst_32824)){
var statearr_32866_32893 = state_32861__$1;
(statearr_32866_32893[(1)] = (6));

} else {
var statearr_32867_32894 = state_32861__$1;
(statearr_32867_32894[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (15))){
var inst_32857 = (state_32861[(2)]);
var state_32861__$1 = state_32861;
var statearr_32868_32895 = state_32861__$1;
(statearr_32868_32895[(2)] = inst_32857);

(statearr_32868_32895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (13))){
var inst_32850 = cljs.core.async.close_BANG_(out);
var state_32861__$1 = state_32861;
var statearr_32869_32896 = state_32861__$1;
(statearr_32869_32896[(2)] = inst_32850);

(statearr_32869_32896[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (6))){
var state_32861__$1 = state_32861;
var statearr_32870_32897 = state_32861__$1;
(statearr_32870_32897[(2)] = null);

(statearr_32870_32897[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (3))){
var inst_32859 = (state_32861[(2)]);
var state_32861__$1 = state_32861;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32861__$1,inst_32859);
} else {
if((state_val_32862 === (12))){
var inst_32847 = (state_32861[(8)]);
var inst_32847__$1 = (state_32861[(2)]);
var inst_32848 = cljs.core.some(cljs.core.nil_QMARK_,inst_32847__$1);
var state_32861__$1 = (function (){var statearr_32871 = state_32861;
(statearr_32871[(8)] = inst_32847__$1);

return statearr_32871;
})();
if(cljs.core.truth_(inst_32848)){
var statearr_32872_32898 = state_32861__$1;
(statearr_32872_32898[(1)] = (13));

} else {
var statearr_32873_32899 = state_32861__$1;
(statearr_32873_32899[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (2))){
var inst_32821 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32822 = (0);
var state_32861__$1 = (function (){var statearr_32874 = state_32861;
(statearr_32874[(9)] = inst_32821);

(statearr_32874[(7)] = inst_32822);

return statearr_32874;
})();
var statearr_32875_32900 = state_32861__$1;
(statearr_32875_32900[(2)] = null);

(statearr_32875_32900[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (11))){
var inst_32822 = (state_32861[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32861,(10),Object,null,(9));
var inst_32834 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32822) : chs__$1.call(null,inst_32822));
var inst_32835 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32822) : done.call(null,inst_32822));
var inst_32836 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32834,inst_32835);
var state_32861__$1 = state_32861;
var statearr_32876_32904 = state_32861__$1;
(statearr_32876_32904[(2)] = inst_32836);


cljs.core.async.impl.ioc_helpers.process_exception(state_32861__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (9))){
var inst_32822 = (state_32861[(7)]);
var inst_32838 = (state_32861[(2)]);
var inst_32839 = (inst_32822 + (1));
var inst_32822__$1 = inst_32839;
var state_32861__$1 = (function (){var statearr_32877 = state_32861;
(statearr_32877[(10)] = inst_32838);

(statearr_32877[(7)] = inst_32822__$1);

return statearr_32877;
})();
var statearr_32878_32908 = state_32861__$1;
(statearr_32878_32908[(2)] = null);

(statearr_32878_32908[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (5))){
var inst_32845 = (state_32861[(2)]);
var state_32861__$1 = (function (){var statearr_32879 = state_32861;
(statearr_32879[(11)] = inst_32845);

return statearr_32879;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32861__$1,(12),dchan);
} else {
if((state_val_32862 === (14))){
var inst_32847 = (state_32861[(8)]);
var inst_32852 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32847);
var state_32861__$1 = state_32861;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32861__$1,(16),out,inst_32852);
} else {
if((state_val_32862 === (16))){
var inst_32854 = (state_32861[(2)]);
var state_32861__$1 = (function (){var statearr_32880 = state_32861;
(statearr_32880[(12)] = inst_32854);

return statearr_32880;
})();
var statearr_32881_32913 = state_32861__$1;
(statearr_32881_32913[(2)] = null);

(statearr_32881_32913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (10))){
var inst_32829 = (state_32861[(2)]);
var inst_32830 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32861__$1 = (function (){var statearr_32882 = state_32861;
(statearr_32882[(13)] = inst_32829);

return statearr_32882;
})();
var statearr_32883_32917 = state_32861__$1;
(statearr_32883_32917[(2)] = inst_32830);


cljs.core.async.impl.ioc_helpers.process_exception(state_32861__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (8))){
var inst_32843 = (state_32861[(2)]);
var state_32861__$1 = state_32861;
var statearr_32884_32921 = state_32861__$1;
(statearr_32884_32921[(2)] = inst_32843);

(statearr_32884_32921[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30923__auto___32890,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30754__auto__,c__30923__auto___32890,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30755__auto__ = null;
var cljs$core$async$state_machine__30755__auto____0 = (function (){
var statearr_32885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32885[(0)] = cljs$core$async$state_machine__30755__auto__);

(statearr_32885[(1)] = (1));

return statearr_32885;
});
var cljs$core$async$state_machine__30755__auto____1 = (function (state_32861){
while(true){
var ret_value__30756__auto__ = (function (){try{while(true){
var result__30757__auto__ = switch__30754__auto__(state_32861);
if(cljs.core.keyword_identical_QMARK_(result__30757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30757__auto__;
}
break;
}
}catch (e32886){if((e32886 instanceof Object)){
var ex__30758__auto__ = e32886;
var statearr_32887_32922 = state_32861;
(statearr_32887_32922[(5)] = ex__30758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32886;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32928 = state_32861;
state_32861 = G__32928;
continue;
} else {
return ret_value__30756__auto__;
}
break;
}
});
cljs$core$async$state_machine__30755__auto__ = function(state_32861){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30755__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30755__auto____1.call(this,state_32861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30755__auto____0;
cljs$core$async$state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30755__auto____1;
return cljs$core$async$state_machine__30755__auto__;
})()
;})(switch__30754__auto__,c__30923__auto___32890,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30925__auto__ = (function (){var statearr_32888 = (f__30924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30924__auto__.cljs$core$IFn$_invoke$arity$0() : f__30924__auto__.call(null));
(statearr_32888[(6)] = c__30923__auto___32890);

return statearr_32888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30925__auto__);
});})(c__30923__auto___32890,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32931 = arguments.length;
switch (G__32931) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30923__auto___33014 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30923__auto___33014,out){
return (function (){
var f__30924__auto__ = (function (){var switch__30754__auto__ = ((function (c__30923__auto___33014,out){
return (function (state_32976){
var state_val_32977 = (state_32976[(1)]);
if((state_val_32977 === (7))){
var inst_32943 = (state_32976[(7)]);
var inst_32944 = (state_32976[(8)]);
var inst_32943__$1 = (state_32976[(2)]);
var inst_32944__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32943__$1,(0),null);
var inst_32945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32943__$1,(1),null);
var inst_32946 = (inst_32944__$1 == null);
var state_32976__$1 = (function (){var statearr_32979 = state_32976;
(statearr_32979[(7)] = inst_32943__$1);

(statearr_32979[(8)] = inst_32944__$1);

(statearr_32979[(9)] = inst_32945);

return statearr_32979;
})();
if(cljs.core.truth_(inst_32946)){
var statearr_32980_33019 = state_32976__$1;
(statearr_32980_33019[(1)] = (8));

} else {
var statearr_32986_33020 = state_32976__$1;
(statearr_32986_33020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32977 === (1))){
var inst_32933 = cljs.core.vec(chs);
var inst_32934 = inst_32933;
var state_32976__$1 = (function (){var statearr_32987 = state_32976;
(statearr_32987[(10)] = inst_32934);

return statearr_32987;
})();
var statearr_32988_33022 = state_32976__$1;
(statearr_32988_33022[(2)] = null);

(statearr_32988_33022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32977 === (4))){
var inst_32934 = (state_32976[(10)]);
var state_32976__$1 = state_32976;
return cljs.core.async.ioc_alts_BANG_(state_32976__$1,(7),inst_32934);
} else {
if((state_val_32977 === (6))){
var inst_32968 = (state_32976[(2)]);
var state_32976__$1 = state_32976;
var statearr_32990_33026 = state_32976__$1;
(statearr_32990_33026[(2)] = inst_32968);

(statearr_32990_33026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32977 === (3))){
var inst_32970 = (state_32976[(2)]);
var state_32976__$1 = state_32976;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32976__$1,inst_32970);
} else {
if((state_val_32977 === (2))){
var inst_32934 = (state_32976[(10)]);
var inst_32936 = cljs.core.count(inst_32934);
var inst_32937 = (inst_32936 > (0));
var state_32976__$1 = state_32976;
if(cljs.core.truth_(inst_32937)){
var statearr_32995_33031 = state_32976__$1;
(statearr_32995_33031[(1)] = (4));

} else {
var statearr_32996_33033 = state_32976__$1;
(statearr_32996_33033[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32977 === (11))){
var inst_32934 = (state_32976[(10)]);
var inst_32961 = (state_32976[(2)]);
var tmp32991 = inst_32934;
var inst_32934__$1 = tmp32991;
var state_32976__$1 = (function (){var statearr_32997 = state_32976;
(statearr_32997[(11)] = inst_32961);

(statearr_32997[(10)] = inst_32934__$1);

return statearr_32997;
})();
var statearr_32998_33034 = state_32976__$1;
(statearr_32998_33034[(2)] = null);

(statearr_32998_33034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32977 === (9))){
var inst_32944 = (state_32976[(8)]);
var state_32976__$1 = state_32976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32976__$1,(11),out,inst_32944);
} else {
if((state_val_32977 === (5))){
var inst_32966 = cljs.core.async.close_BANG_(out);
var state_32976__$1 = state_32976;
var statearr_32999_33035 = state_32976__$1;
(statearr_32999_33035[(2)] = inst_32966);

(statearr_32999_33035[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32977 === (10))){
var inst_32964 = (state_32976[(2)]);
var state_32976__$1 = state_32976;
var statearr_33001_33036 = state_32976__$1;
(statearr_33001_33036[(2)] = inst_32964);

(statearr_33001_33036[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32977 === (8))){
var inst_32943 = (state_32976[(7)]);
var inst_32944 = (state_32976[(8)]);
var inst_32945 = (state_32976[(9)]);
var inst_32934 = (state_32976[(10)]);
var inst_32952 = (function (){var cs = inst_32934;
var vec__32939 = inst_32943;
var v = inst_32944;
var c = inst_32945;
return ((function (cs,vec__32939,v,c,inst_32943,inst_32944,inst_32945,inst_32934,state_val_32977,c__30923__auto___33014,out){
return (function (p1__32929_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32929_SHARP_);
});
;})(cs,vec__32939,v,c,inst_32943,inst_32944,inst_32945,inst_32934,state_val_32977,c__30923__auto___33014,out))
})();
var inst_32953 = cljs.core.filterv(inst_32952,inst_32934);
var inst_32934__$1 = inst_32953;
var state_32976__$1 = (function (){var statearr_33006 = state_32976;
(statearr_33006[(10)] = inst_32934__$1);

return statearr_33006;
})();
var statearr_33008_33042 = state_32976__$1;
(statearr_33008_33042[(2)] = null);

(statearr_33008_33042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30923__auto___33014,out))
;
return ((function (switch__30754__auto__,c__30923__auto___33014,out){
return (function() {
var cljs$core$async$state_machine__30755__auto__ = null;
var cljs$core$async$state_machine__30755__auto____0 = (function (){
var statearr_33009 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33009[(0)] = cljs$core$async$state_machine__30755__auto__);

(statearr_33009[(1)] = (1));

return statearr_33009;
});
var cljs$core$async$state_machine__30755__auto____1 = (function (state_32976){
while(true){
var ret_value__30756__auto__ = (function (){try{while(true){
var result__30757__auto__ = switch__30754__auto__(state_32976);
if(cljs.core.keyword_identical_QMARK_(result__30757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30757__auto__;
}
break;
}
}catch (e33010){if((e33010 instanceof Object)){
var ex__30758__auto__ = e33010;
var statearr_33011_33046 = state_32976;
(statearr_33011_33046[(5)] = ex__30758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33010;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33047 = state_32976;
state_32976 = G__33047;
continue;
} else {
return ret_value__30756__auto__;
}
break;
}
});
cljs$core$async$state_machine__30755__auto__ = function(state_32976){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30755__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30755__auto____1.call(this,state_32976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30755__auto____0;
cljs$core$async$state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30755__auto____1;
return cljs$core$async$state_machine__30755__auto__;
})()
;})(switch__30754__auto__,c__30923__auto___33014,out))
})();
var state__30925__auto__ = (function (){var statearr_33012 = (f__30924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30924__auto__.cljs$core$IFn$_invoke$arity$0() : f__30924__auto__.call(null));
(statearr_33012[(6)] = c__30923__auto___33014);

return statearr_33012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30925__auto__);
});})(c__30923__auto___33014,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33058 = arguments.length;
switch (G__33058) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30923__auto___33138 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30923__auto___33138,out){
return (function (){
var f__30924__auto__ = (function (){var switch__30754__auto__ = ((function (c__30923__auto___33138,out){
return (function (state_33084){
var state_val_33085 = (state_33084[(1)]);
if((state_val_33085 === (7))){
var inst_33066 = (state_33084[(7)]);
var inst_33066__$1 = (state_33084[(2)]);
var inst_33067 = (inst_33066__$1 == null);
var inst_33068 = cljs.core.not(inst_33067);
var state_33084__$1 = (function (){var statearr_33092 = state_33084;
(statearr_33092[(7)] = inst_33066__$1);

return statearr_33092;
})();
if(inst_33068){
var statearr_33093_33145 = state_33084__$1;
(statearr_33093_33145[(1)] = (8));

} else {
var statearr_33094_33146 = state_33084__$1;
(statearr_33094_33146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (1))){
var inst_33061 = (0);
var state_33084__$1 = (function (){var statearr_33096 = state_33084;
(statearr_33096[(8)] = inst_33061);

return statearr_33096;
})();
var statearr_33097_33157 = state_33084__$1;
(statearr_33097_33157[(2)] = null);

(statearr_33097_33157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (4))){
var state_33084__$1 = state_33084;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33084__$1,(7),ch);
} else {
if((state_val_33085 === (6))){
var inst_33079 = (state_33084[(2)]);
var state_33084__$1 = state_33084;
var statearr_33099_33162 = state_33084__$1;
(statearr_33099_33162[(2)] = inst_33079);

(statearr_33099_33162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (3))){
var inst_33081 = (state_33084[(2)]);
var inst_33082 = cljs.core.async.close_BANG_(out);
var state_33084__$1 = (function (){var statearr_33104 = state_33084;
(statearr_33104[(9)] = inst_33081);

return statearr_33104;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33084__$1,inst_33082);
} else {
if((state_val_33085 === (2))){
var inst_33061 = (state_33084[(8)]);
var inst_33063 = (inst_33061 < n);
var state_33084__$1 = state_33084;
if(cljs.core.truth_(inst_33063)){
var statearr_33105_33163 = state_33084__$1;
(statearr_33105_33163[(1)] = (4));

} else {
var statearr_33106_33164 = state_33084__$1;
(statearr_33106_33164[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (11))){
var inst_33061 = (state_33084[(8)]);
var inst_33071 = (state_33084[(2)]);
var inst_33072 = (inst_33061 + (1));
var inst_33061__$1 = inst_33072;
var state_33084__$1 = (function (){var statearr_33108 = state_33084;
(statearr_33108[(10)] = inst_33071);

(statearr_33108[(8)] = inst_33061__$1);

return statearr_33108;
})();
var statearr_33109_33166 = state_33084__$1;
(statearr_33109_33166[(2)] = null);

(statearr_33109_33166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (9))){
var state_33084__$1 = state_33084;
var statearr_33110_33171 = state_33084__$1;
(statearr_33110_33171[(2)] = null);

(statearr_33110_33171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (5))){
var state_33084__$1 = state_33084;
var statearr_33111_33172 = state_33084__$1;
(statearr_33111_33172[(2)] = null);

(statearr_33111_33172[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (10))){
var inst_33076 = (state_33084[(2)]);
var state_33084__$1 = state_33084;
var statearr_33112_33177 = state_33084__$1;
(statearr_33112_33177[(2)] = inst_33076);

(statearr_33112_33177[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (8))){
var inst_33066 = (state_33084[(7)]);
var state_33084__$1 = state_33084;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33084__$1,(11),out,inst_33066);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30923__auto___33138,out))
;
return ((function (switch__30754__auto__,c__30923__auto___33138,out){
return (function() {
var cljs$core$async$state_machine__30755__auto__ = null;
var cljs$core$async$state_machine__30755__auto____0 = (function (){
var statearr_33113 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33113[(0)] = cljs$core$async$state_machine__30755__auto__);

(statearr_33113[(1)] = (1));

return statearr_33113;
});
var cljs$core$async$state_machine__30755__auto____1 = (function (state_33084){
while(true){
var ret_value__30756__auto__ = (function (){try{while(true){
var result__30757__auto__ = switch__30754__auto__(state_33084);
if(cljs.core.keyword_identical_QMARK_(result__30757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30757__auto__;
}
break;
}
}catch (e33114){if((e33114 instanceof Object)){
var ex__30758__auto__ = e33114;
var statearr_33116_33183 = state_33084;
(statearr_33116_33183[(5)] = ex__30758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33114;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33184 = state_33084;
state_33084 = G__33184;
continue;
} else {
return ret_value__30756__auto__;
}
break;
}
});
cljs$core$async$state_machine__30755__auto__ = function(state_33084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30755__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30755__auto____1.call(this,state_33084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30755__auto____0;
cljs$core$async$state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30755__auto____1;
return cljs$core$async$state_machine__30755__auto__;
})()
;})(switch__30754__auto__,c__30923__auto___33138,out))
})();
var state__30925__auto__ = (function (){var statearr_33122 = (f__30924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30924__auto__.cljs$core$IFn$_invoke$arity$0() : f__30924__auto__.call(null));
(statearr_33122[(6)] = c__30923__auto___33138);

return statearr_33122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30925__auto__);
});})(c__30923__auto___33138,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33186 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33186 = (function (f,ch,meta33187){
this.f = f;
this.ch = ch;
this.meta33187 = meta33187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33188,meta33187__$1){
var self__ = this;
var _33188__$1 = this;
return (new cljs.core.async.t_cljs$core$async33186(self__.f,self__.ch,meta33187__$1));
});

cljs.core.async.t_cljs$core$async33186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33188){
var self__ = this;
var _33188__$1 = this;
return self__.meta33187;
});

cljs.core.async.t_cljs$core$async33186.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33186.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async33186.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async33186.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33186.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33189 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33189 = (function (f,ch,meta33187,_,fn1,meta33190){
this.f = f;
this.ch = ch;
this.meta33187 = meta33187;
this._ = _;
this.fn1 = fn1;
this.meta33190 = meta33190;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33191,meta33190__$1){
var self__ = this;
var _33191__$1 = this;
return (new cljs.core.async.t_cljs$core$async33189(self__.f,self__.ch,self__.meta33187,self__._,self__.fn1,meta33190__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33189.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33191){
var self__ = this;
var _33191__$1 = this;
return self__.meta33190;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33189.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33189.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33189.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33189.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33185_SHARP_){
var G__33192 = (((p1__33185_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33185_SHARP_) : self__.f.call(null,p1__33185_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33192) : f1.call(null,G__33192));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33189.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33187","meta33187",1631319030,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33186","cljs.core.async/t_cljs$core$async33186",-1988944718,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33190","meta33190",-825061982,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33189.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33189.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33189";

cljs.core.async.t_cljs$core$async33189.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async33189");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33189.
 */
cljs.core.async.__GT_t_cljs$core$async33189 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33189(f__$1,ch__$1,meta33187__$1,___$2,fn1__$1,meta33190){
return (new cljs.core.async.t_cljs$core$async33189(f__$1,ch__$1,meta33187__$1,___$2,fn1__$1,meta33190));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33189(self__.f,self__.ch,self__.meta33187,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33197 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33197) : self__.f.call(null,G__33197));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async33186.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33186.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33186.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33187","meta33187",1631319030,null)], null);
});

cljs.core.async.t_cljs$core$async33186.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33186.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33186";

cljs.core.async.t_cljs$core$async33186.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async33186");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33186.
 */
cljs.core.async.__GT_t_cljs$core$async33186 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33186(f__$1,ch__$1,meta33187){
return (new cljs.core.async.t_cljs$core$async33186(f__$1,ch__$1,meta33187));
});

}

return (new cljs.core.async.t_cljs$core$async33186(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33204 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33204 = (function (f,ch,meta33205){
this.f = f;
this.ch = ch;
this.meta33205 = meta33205;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33206,meta33205__$1){
var self__ = this;
var _33206__$1 = this;
return (new cljs.core.async.t_cljs$core$async33204(self__.f,self__.ch,meta33205__$1));
});

cljs.core.async.t_cljs$core$async33204.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33206){
var self__ = this;
var _33206__$1 = this;
return self__.meta33205;
});

cljs.core.async.t_cljs$core$async33204.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33204.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async33204.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33204.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33204.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33204.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async33204.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33205","meta33205",2029847129,null)], null);
});

cljs.core.async.t_cljs$core$async33204.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33204.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33204";

cljs.core.async.t_cljs$core$async33204.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async33204");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33204.
 */
cljs.core.async.__GT_t_cljs$core$async33204 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33204(f__$1,ch__$1,meta33205){
return (new cljs.core.async.t_cljs$core$async33204(f__$1,ch__$1,meta33205));
});

}

return (new cljs.core.async.t_cljs$core$async33204(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33210 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33210 = (function (p,ch,meta33211){
this.p = p;
this.ch = ch;
this.meta33211 = meta33211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33212,meta33211__$1){
var self__ = this;
var _33212__$1 = this;
return (new cljs.core.async.t_cljs$core$async33210(self__.p,self__.ch,meta33211__$1));
});

cljs.core.async.t_cljs$core$async33210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33212){
var self__ = this;
var _33212__$1 = this;
return self__.meta33211;
});

cljs.core.async.t_cljs$core$async33210.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33210.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async33210.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async33210.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33210.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33210.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33210.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33211","meta33211",569166767,null)], null);
});

cljs.core.async.t_cljs$core$async33210.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33210.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33210";

cljs.core.async.t_cljs$core$async33210.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async33210");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33210.
 */
cljs.core.async.__GT_t_cljs$core$async33210 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33210(p__$1,ch__$1,meta33211){
return (new cljs.core.async.t_cljs$core$async33210(p__$1,ch__$1,meta33211));
});

}

return (new cljs.core.async.t_cljs$core$async33210(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33302 = arguments.length;
switch (G__33302) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30923__auto___33342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30923__auto___33342,out){
return (function (){
var f__30924__auto__ = (function (){var switch__30754__auto__ = ((function (c__30923__auto___33342,out){
return (function (state_33323){
var state_val_33324 = (state_33323[(1)]);
if((state_val_33324 === (7))){
var inst_33319 = (state_33323[(2)]);
var state_33323__$1 = state_33323;
var statearr_33325_33343 = state_33323__$1;
(statearr_33325_33343[(2)] = inst_33319);

(statearr_33325_33343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (1))){
var state_33323__$1 = state_33323;
var statearr_33326_33344 = state_33323__$1;
(statearr_33326_33344[(2)] = null);

(statearr_33326_33344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (4))){
var inst_33305 = (state_33323[(7)]);
var inst_33305__$1 = (state_33323[(2)]);
var inst_33306 = (inst_33305__$1 == null);
var state_33323__$1 = (function (){var statearr_33327 = state_33323;
(statearr_33327[(7)] = inst_33305__$1);

return statearr_33327;
})();
if(cljs.core.truth_(inst_33306)){
var statearr_33328_33345 = state_33323__$1;
(statearr_33328_33345[(1)] = (5));

} else {
var statearr_33329_33346 = state_33323__$1;
(statearr_33329_33346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (6))){
var inst_33305 = (state_33323[(7)]);
var inst_33310 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33305) : p.call(null,inst_33305));
var state_33323__$1 = state_33323;
if(cljs.core.truth_(inst_33310)){
var statearr_33330_33347 = state_33323__$1;
(statearr_33330_33347[(1)] = (8));

} else {
var statearr_33331_33348 = state_33323__$1;
(statearr_33331_33348[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (3))){
var inst_33321 = (state_33323[(2)]);
var state_33323__$1 = state_33323;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33323__$1,inst_33321);
} else {
if((state_val_33324 === (2))){
var state_33323__$1 = state_33323;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33323__$1,(4),ch);
} else {
if((state_val_33324 === (11))){
var inst_33313 = (state_33323[(2)]);
var state_33323__$1 = state_33323;
var statearr_33332_33349 = state_33323__$1;
(statearr_33332_33349[(2)] = inst_33313);

(statearr_33332_33349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (9))){
var state_33323__$1 = state_33323;
var statearr_33333_33350 = state_33323__$1;
(statearr_33333_33350[(2)] = null);

(statearr_33333_33350[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (5))){
var inst_33308 = cljs.core.async.close_BANG_(out);
var state_33323__$1 = state_33323;
var statearr_33334_33351 = state_33323__$1;
(statearr_33334_33351[(2)] = inst_33308);

(statearr_33334_33351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (10))){
var inst_33316 = (state_33323[(2)]);
var state_33323__$1 = (function (){var statearr_33335 = state_33323;
(statearr_33335[(8)] = inst_33316);

return statearr_33335;
})();
var statearr_33336_33352 = state_33323__$1;
(statearr_33336_33352[(2)] = null);

(statearr_33336_33352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (8))){
var inst_33305 = (state_33323[(7)]);
var state_33323__$1 = state_33323;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33323__$1,(11),out,inst_33305);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30923__auto___33342,out))
;
return ((function (switch__30754__auto__,c__30923__auto___33342,out){
return (function() {
var cljs$core$async$state_machine__30755__auto__ = null;
var cljs$core$async$state_machine__30755__auto____0 = (function (){
var statearr_33337 = [null,null,null,null,null,null,null,null,null];
(statearr_33337[(0)] = cljs$core$async$state_machine__30755__auto__);

(statearr_33337[(1)] = (1));

return statearr_33337;
});
var cljs$core$async$state_machine__30755__auto____1 = (function (state_33323){
while(true){
var ret_value__30756__auto__ = (function (){try{while(true){
var result__30757__auto__ = switch__30754__auto__(state_33323);
if(cljs.core.keyword_identical_QMARK_(result__30757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30757__auto__;
}
break;
}
}catch (e33338){if((e33338 instanceof Object)){
var ex__30758__auto__ = e33338;
var statearr_33339_33353 = state_33323;
(statearr_33339_33353[(5)] = ex__30758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33338;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33354 = state_33323;
state_33323 = G__33354;
continue;
} else {
return ret_value__30756__auto__;
}
break;
}
});
cljs$core$async$state_machine__30755__auto__ = function(state_33323){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30755__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30755__auto____1.call(this,state_33323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30755__auto____0;
cljs$core$async$state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30755__auto____1;
return cljs$core$async$state_machine__30755__auto__;
})()
;})(switch__30754__auto__,c__30923__auto___33342,out))
})();
var state__30925__auto__ = (function (){var statearr_33340 = (f__30924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30924__auto__.cljs$core$IFn$_invoke$arity$0() : f__30924__auto__.call(null));
(statearr_33340[(6)] = c__30923__auto___33342);

return statearr_33340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30925__auto__);
});})(c__30923__auto___33342,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33356 = arguments.length;
switch (G__33356) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30923__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30923__auto__){
return (function (){
var f__30924__auto__ = (function (){var switch__30754__auto__ = ((function (c__30923__auto__){
return (function (state_33419){
var state_val_33420 = (state_33419[(1)]);
if((state_val_33420 === (7))){
var inst_33415 = (state_33419[(2)]);
var state_33419__$1 = state_33419;
var statearr_33421_33459 = state_33419__$1;
(statearr_33421_33459[(2)] = inst_33415);

(statearr_33421_33459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (20))){
var inst_33385 = (state_33419[(7)]);
var inst_33396 = (state_33419[(2)]);
var inst_33397 = cljs.core.next(inst_33385);
var inst_33371 = inst_33397;
var inst_33372 = null;
var inst_33373 = (0);
var inst_33374 = (0);
var state_33419__$1 = (function (){var statearr_33422 = state_33419;
(statearr_33422[(8)] = inst_33396);

(statearr_33422[(9)] = inst_33371);

(statearr_33422[(10)] = inst_33372);

(statearr_33422[(11)] = inst_33373);

(statearr_33422[(12)] = inst_33374);

return statearr_33422;
})();
var statearr_33423_33460 = state_33419__$1;
(statearr_33423_33460[(2)] = null);

(statearr_33423_33460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (1))){
var state_33419__$1 = state_33419;
var statearr_33424_33461 = state_33419__$1;
(statearr_33424_33461[(2)] = null);

(statearr_33424_33461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (4))){
var inst_33360 = (state_33419[(13)]);
var inst_33360__$1 = (state_33419[(2)]);
var inst_33361 = (inst_33360__$1 == null);
var state_33419__$1 = (function (){var statearr_33425 = state_33419;
(statearr_33425[(13)] = inst_33360__$1);

return statearr_33425;
})();
if(cljs.core.truth_(inst_33361)){
var statearr_33426_33462 = state_33419__$1;
(statearr_33426_33462[(1)] = (5));

} else {
var statearr_33427_33463 = state_33419__$1;
(statearr_33427_33463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (15))){
var state_33419__$1 = state_33419;
var statearr_33431_33464 = state_33419__$1;
(statearr_33431_33464[(2)] = null);

(statearr_33431_33464[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (21))){
var state_33419__$1 = state_33419;
var statearr_33432_33465 = state_33419__$1;
(statearr_33432_33465[(2)] = null);

(statearr_33432_33465[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (13))){
var inst_33371 = (state_33419[(9)]);
var inst_33372 = (state_33419[(10)]);
var inst_33373 = (state_33419[(11)]);
var inst_33374 = (state_33419[(12)]);
var inst_33381 = (state_33419[(2)]);
var inst_33382 = (inst_33374 + (1));
var tmp33428 = inst_33371;
var tmp33429 = inst_33372;
var tmp33430 = inst_33373;
var inst_33371__$1 = tmp33428;
var inst_33372__$1 = tmp33429;
var inst_33373__$1 = tmp33430;
var inst_33374__$1 = inst_33382;
var state_33419__$1 = (function (){var statearr_33433 = state_33419;
(statearr_33433[(9)] = inst_33371__$1);

(statearr_33433[(10)] = inst_33372__$1);

(statearr_33433[(11)] = inst_33373__$1);

(statearr_33433[(12)] = inst_33374__$1);

(statearr_33433[(14)] = inst_33381);

return statearr_33433;
})();
var statearr_33434_33466 = state_33419__$1;
(statearr_33434_33466[(2)] = null);

(statearr_33434_33466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (22))){
var state_33419__$1 = state_33419;
var statearr_33435_33467 = state_33419__$1;
(statearr_33435_33467[(2)] = null);

(statearr_33435_33467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (6))){
var inst_33360 = (state_33419[(13)]);
var inst_33369 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33360) : f.call(null,inst_33360));
var inst_33370 = cljs.core.seq(inst_33369);
var inst_33371 = inst_33370;
var inst_33372 = null;
var inst_33373 = (0);
var inst_33374 = (0);
var state_33419__$1 = (function (){var statearr_33436 = state_33419;
(statearr_33436[(9)] = inst_33371);

(statearr_33436[(10)] = inst_33372);

(statearr_33436[(11)] = inst_33373);

(statearr_33436[(12)] = inst_33374);

return statearr_33436;
})();
var statearr_33437_33468 = state_33419__$1;
(statearr_33437_33468[(2)] = null);

(statearr_33437_33468[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (17))){
var inst_33385 = (state_33419[(7)]);
var inst_33389 = cljs.core.chunk_first(inst_33385);
var inst_33390 = cljs.core.chunk_rest(inst_33385);
var inst_33391 = cljs.core.count(inst_33389);
var inst_33371 = inst_33390;
var inst_33372 = inst_33389;
var inst_33373 = inst_33391;
var inst_33374 = (0);
var state_33419__$1 = (function (){var statearr_33438 = state_33419;
(statearr_33438[(9)] = inst_33371);

(statearr_33438[(10)] = inst_33372);

(statearr_33438[(11)] = inst_33373);

(statearr_33438[(12)] = inst_33374);

return statearr_33438;
})();
var statearr_33439_33469 = state_33419__$1;
(statearr_33439_33469[(2)] = null);

(statearr_33439_33469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (3))){
var inst_33417 = (state_33419[(2)]);
var state_33419__$1 = state_33419;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33419__$1,inst_33417);
} else {
if((state_val_33420 === (12))){
var inst_33405 = (state_33419[(2)]);
var state_33419__$1 = state_33419;
var statearr_33440_33470 = state_33419__$1;
(statearr_33440_33470[(2)] = inst_33405);

(statearr_33440_33470[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (2))){
var state_33419__$1 = state_33419;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33419__$1,(4),in$);
} else {
if((state_val_33420 === (23))){
var inst_33413 = (state_33419[(2)]);
var state_33419__$1 = state_33419;
var statearr_33441_33471 = state_33419__$1;
(statearr_33441_33471[(2)] = inst_33413);

(statearr_33441_33471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (19))){
var inst_33400 = (state_33419[(2)]);
var state_33419__$1 = state_33419;
var statearr_33442_33472 = state_33419__$1;
(statearr_33442_33472[(2)] = inst_33400);

(statearr_33442_33472[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (11))){
var inst_33371 = (state_33419[(9)]);
var inst_33385 = (state_33419[(7)]);
var inst_33385__$1 = cljs.core.seq(inst_33371);
var state_33419__$1 = (function (){var statearr_33443 = state_33419;
(statearr_33443[(7)] = inst_33385__$1);

return statearr_33443;
})();
if(inst_33385__$1){
var statearr_33444_33473 = state_33419__$1;
(statearr_33444_33473[(1)] = (14));

} else {
var statearr_33445_33474 = state_33419__$1;
(statearr_33445_33474[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (9))){
var inst_33407 = (state_33419[(2)]);
var inst_33408 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33419__$1 = (function (){var statearr_33446 = state_33419;
(statearr_33446[(15)] = inst_33407);

return statearr_33446;
})();
if(cljs.core.truth_(inst_33408)){
var statearr_33447_33475 = state_33419__$1;
(statearr_33447_33475[(1)] = (21));

} else {
var statearr_33448_33476 = state_33419__$1;
(statearr_33448_33476[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (5))){
var inst_33363 = cljs.core.async.close_BANG_(out);
var state_33419__$1 = state_33419;
var statearr_33449_33477 = state_33419__$1;
(statearr_33449_33477[(2)] = inst_33363);

(statearr_33449_33477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (14))){
var inst_33385 = (state_33419[(7)]);
var inst_33387 = cljs.core.chunked_seq_QMARK_(inst_33385);
var state_33419__$1 = state_33419;
if(inst_33387){
var statearr_33450_33478 = state_33419__$1;
(statearr_33450_33478[(1)] = (17));

} else {
var statearr_33451_33479 = state_33419__$1;
(statearr_33451_33479[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (16))){
var inst_33403 = (state_33419[(2)]);
var state_33419__$1 = state_33419;
var statearr_33452_33480 = state_33419__$1;
(statearr_33452_33480[(2)] = inst_33403);

(statearr_33452_33480[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (10))){
var inst_33372 = (state_33419[(10)]);
var inst_33374 = (state_33419[(12)]);
var inst_33379 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33372,inst_33374);
var state_33419__$1 = state_33419;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33419__$1,(13),out,inst_33379);
} else {
if((state_val_33420 === (18))){
var inst_33385 = (state_33419[(7)]);
var inst_33394 = cljs.core.first(inst_33385);
var state_33419__$1 = state_33419;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33419__$1,(20),out,inst_33394);
} else {
if((state_val_33420 === (8))){
var inst_33373 = (state_33419[(11)]);
var inst_33374 = (state_33419[(12)]);
var inst_33376 = (inst_33374 < inst_33373);
var inst_33377 = inst_33376;
var state_33419__$1 = state_33419;
if(cljs.core.truth_(inst_33377)){
var statearr_33453_33481 = state_33419__$1;
(statearr_33453_33481[(1)] = (10));

} else {
var statearr_33454_33482 = state_33419__$1;
(statearr_33454_33482[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30923__auto__))
;
return ((function (switch__30754__auto__,c__30923__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30755__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30755__auto____0 = (function (){
var statearr_33455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33455[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30755__auto__);

(statearr_33455[(1)] = (1));

return statearr_33455;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30755__auto____1 = (function (state_33419){
while(true){
var ret_value__30756__auto__ = (function (){try{while(true){
var result__30757__auto__ = switch__30754__auto__(state_33419);
if(cljs.core.keyword_identical_QMARK_(result__30757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30757__auto__;
}
break;
}
}catch (e33456){if((e33456 instanceof Object)){
var ex__30758__auto__ = e33456;
var statearr_33457_33483 = state_33419;
(statearr_33457_33483[(5)] = ex__30758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33484 = state_33419;
state_33419 = G__33484;
continue;
} else {
return ret_value__30756__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30755__auto__ = function(state_33419){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30755__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30755__auto____1.call(this,state_33419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30755__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30755__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30755__auto__;
})()
;})(switch__30754__auto__,c__30923__auto__))
})();
var state__30925__auto__ = (function (){var statearr_33458 = (f__30924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30924__auto__.cljs$core$IFn$_invoke$arity$0() : f__30924__auto__.call(null));
(statearr_33458[(6)] = c__30923__auto__);

return statearr_33458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30925__auto__);
});})(c__30923__auto__))
);

return c__30923__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33486 = arguments.length;
switch (G__33486) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33489 = arguments.length;
switch (G__33489) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33492 = arguments.length;
switch (G__33492) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30923__auto___33539 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30923__auto___33539,out){
return (function (){
var f__30924__auto__ = (function (){var switch__30754__auto__ = ((function (c__30923__auto___33539,out){
return (function (state_33516){
var state_val_33517 = (state_33516[(1)]);
if((state_val_33517 === (7))){
var inst_33511 = (state_33516[(2)]);
var state_33516__$1 = state_33516;
var statearr_33518_33540 = state_33516__$1;
(statearr_33518_33540[(2)] = inst_33511);

(statearr_33518_33540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (1))){
var inst_33493 = null;
var state_33516__$1 = (function (){var statearr_33519 = state_33516;
(statearr_33519[(7)] = inst_33493);

return statearr_33519;
})();
var statearr_33520_33541 = state_33516__$1;
(statearr_33520_33541[(2)] = null);

(statearr_33520_33541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (4))){
var inst_33496 = (state_33516[(8)]);
var inst_33496__$1 = (state_33516[(2)]);
var inst_33497 = (inst_33496__$1 == null);
var inst_33498 = cljs.core.not(inst_33497);
var state_33516__$1 = (function (){var statearr_33521 = state_33516;
(statearr_33521[(8)] = inst_33496__$1);

return statearr_33521;
})();
if(inst_33498){
var statearr_33522_33542 = state_33516__$1;
(statearr_33522_33542[(1)] = (5));

} else {
var statearr_33523_33543 = state_33516__$1;
(statearr_33523_33543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (6))){
var state_33516__$1 = state_33516;
var statearr_33524_33544 = state_33516__$1;
(statearr_33524_33544[(2)] = null);

(statearr_33524_33544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (3))){
var inst_33513 = (state_33516[(2)]);
var inst_33514 = cljs.core.async.close_BANG_(out);
var state_33516__$1 = (function (){var statearr_33525 = state_33516;
(statearr_33525[(9)] = inst_33513);

return statearr_33525;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33516__$1,inst_33514);
} else {
if((state_val_33517 === (2))){
var state_33516__$1 = state_33516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33516__$1,(4),ch);
} else {
if((state_val_33517 === (11))){
var inst_33496 = (state_33516[(8)]);
var inst_33505 = (state_33516[(2)]);
var inst_33493 = inst_33496;
var state_33516__$1 = (function (){var statearr_33526 = state_33516;
(statearr_33526[(10)] = inst_33505);

(statearr_33526[(7)] = inst_33493);

return statearr_33526;
})();
var statearr_33527_33545 = state_33516__$1;
(statearr_33527_33545[(2)] = null);

(statearr_33527_33545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (9))){
var inst_33496 = (state_33516[(8)]);
var state_33516__$1 = state_33516;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33516__$1,(11),out,inst_33496);
} else {
if((state_val_33517 === (5))){
var inst_33496 = (state_33516[(8)]);
var inst_33493 = (state_33516[(7)]);
var inst_33500 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33496,inst_33493);
var state_33516__$1 = state_33516;
if(inst_33500){
var statearr_33529_33546 = state_33516__$1;
(statearr_33529_33546[(1)] = (8));

} else {
var statearr_33530_33547 = state_33516__$1;
(statearr_33530_33547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (10))){
var inst_33508 = (state_33516[(2)]);
var state_33516__$1 = state_33516;
var statearr_33531_33548 = state_33516__$1;
(statearr_33531_33548[(2)] = inst_33508);

(statearr_33531_33548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (8))){
var inst_33493 = (state_33516[(7)]);
var tmp33528 = inst_33493;
var inst_33493__$1 = tmp33528;
var state_33516__$1 = (function (){var statearr_33532 = state_33516;
(statearr_33532[(7)] = inst_33493__$1);

return statearr_33532;
})();
var statearr_33533_33549 = state_33516__$1;
(statearr_33533_33549[(2)] = null);

(statearr_33533_33549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30923__auto___33539,out))
;
return ((function (switch__30754__auto__,c__30923__auto___33539,out){
return (function() {
var cljs$core$async$state_machine__30755__auto__ = null;
var cljs$core$async$state_machine__30755__auto____0 = (function (){
var statearr_33534 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33534[(0)] = cljs$core$async$state_machine__30755__auto__);

(statearr_33534[(1)] = (1));

return statearr_33534;
});
var cljs$core$async$state_machine__30755__auto____1 = (function (state_33516){
while(true){
var ret_value__30756__auto__ = (function (){try{while(true){
var result__30757__auto__ = switch__30754__auto__(state_33516);
if(cljs.core.keyword_identical_QMARK_(result__30757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30757__auto__;
}
break;
}
}catch (e33535){if((e33535 instanceof Object)){
var ex__30758__auto__ = e33535;
var statearr_33536_33550 = state_33516;
(statearr_33536_33550[(5)] = ex__30758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33535;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33551 = state_33516;
state_33516 = G__33551;
continue;
} else {
return ret_value__30756__auto__;
}
break;
}
});
cljs$core$async$state_machine__30755__auto__ = function(state_33516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30755__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30755__auto____1.call(this,state_33516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30755__auto____0;
cljs$core$async$state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30755__auto____1;
return cljs$core$async$state_machine__30755__auto__;
})()
;})(switch__30754__auto__,c__30923__auto___33539,out))
})();
var state__30925__auto__ = (function (){var statearr_33537 = (f__30924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30924__auto__.cljs$core$IFn$_invoke$arity$0() : f__30924__auto__.call(null));
(statearr_33537[(6)] = c__30923__auto___33539);

return statearr_33537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30925__auto__);
});})(c__30923__auto___33539,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33553 = arguments.length;
switch (G__33553) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30923__auto___33619 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30923__auto___33619,out){
return (function (){
var f__30924__auto__ = (function (){var switch__30754__auto__ = ((function (c__30923__auto___33619,out){
return (function (state_33591){
var state_val_33592 = (state_33591[(1)]);
if((state_val_33592 === (7))){
var inst_33587 = (state_33591[(2)]);
var state_33591__$1 = state_33591;
var statearr_33593_33620 = state_33591__$1;
(statearr_33593_33620[(2)] = inst_33587);

(statearr_33593_33620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (1))){
var inst_33554 = (new Array(n));
var inst_33555 = inst_33554;
var inst_33556 = (0);
var state_33591__$1 = (function (){var statearr_33594 = state_33591;
(statearr_33594[(7)] = inst_33555);

(statearr_33594[(8)] = inst_33556);

return statearr_33594;
})();
var statearr_33595_33621 = state_33591__$1;
(statearr_33595_33621[(2)] = null);

(statearr_33595_33621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (4))){
var inst_33559 = (state_33591[(9)]);
var inst_33559__$1 = (state_33591[(2)]);
var inst_33560 = (inst_33559__$1 == null);
var inst_33561 = cljs.core.not(inst_33560);
var state_33591__$1 = (function (){var statearr_33596 = state_33591;
(statearr_33596[(9)] = inst_33559__$1);

return statearr_33596;
})();
if(inst_33561){
var statearr_33597_33622 = state_33591__$1;
(statearr_33597_33622[(1)] = (5));

} else {
var statearr_33598_33623 = state_33591__$1;
(statearr_33598_33623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (15))){
var inst_33581 = (state_33591[(2)]);
var state_33591__$1 = state_33591;
var statearr_33599_33624 = state_33591__$1;
(statearr_33599_33624[(2)] = inst_33581);

(statearr_33599_33624[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (13))){
var state_33591__$1 = state_33591;
var statearr_33600_33625 = state_33591__$1;
(statearr_33600_33625[(2)] = null);

(statearr_33600_33625[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (6))){
var inst_33556 = (state_33591[(8)]);
var inst_33577 = (inst_33556 > (0));
var state_33591__$1 = state_33591;
if(cljs.core.truth_(inst_33577)){
var statearr_33601_33626 = state_33591__$1;
(statearr_33601_33626[(1)] = (12));

} else {
var statearr_33602_33627 = state_33591__$1;
(statearr_33602_33627[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (3))){
var inst_33589 = (state_33591[(2)]);
var state_33591__$1 = state_33591;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33591__$1,inst_33589);
} else {
if((state_val_33592 === (12))){
var inst_33555 = (state_33591[(7)]);
var inst_33579 = cljs.core.vec(inst_33555);
var state_33591__$1 = state_33591;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33591__$1,(15),out,inst_33579);
} else {
if((state_val_33592 === (2))){
var state_33591__$1 = state_33591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33591__$1,(4),ch);
} else {
if((state_val_33592 === (11))){
var inst_33571 = (state_33591[(2)]);
var inst_33572 = (new Array(n));
var inst_33555 = inst_33572;
var inst_33556 = (0);
var state_33591__$1 = (function (){var statearr_33603 = state_33591;
(statearr_33603[(10)] = inst_33571);

(statearr_33603[(7)] = inst_33555);

(statearr_33603[(8)] = inst_33556);

return statearr_33603;
})();
var statearr_33604_33628 = state_33591__$1;
(statearr_33604_33628[(2)] = null);

(statearr_33604_33628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (9))){
var inst_33555 = (state_33591[(7)]);
var inst_33569 = cljs.core.vec(inst_33555);
var state_33591__$1 = state_33591;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33591__$1,(11),out,inst_33569);
} else {
if((state_val_33592 === (5))){
var inst_33564 = (state_33591[(11)]);
var inst_33559 = (state_33591[(9)]);
var inst_33555 = (state_33591[(7)]);
var inst_33556 = (state_33591[(8)]);
var inst_33563 = (inst_33555[inst_33556] = inst_33559);
var inst_33564__$1 = (inst_33556 + (1));
var inst_33565 = (inst_33564__$1 < n);
var state_33591__$1 = (function (){var statearr_33605 = state_33591;
(statearr_33605[(12)] = inst_33563);

(statearr_33605[(11)] = inst_33564__$1);

return statearr_33605;
})();
if(cljs.core.truth_(inst_33565)){
var statearr_33606_33629 = state_33591__$1;
(statearr_33606_33629[(1)] = (8));

} else {
var statearr_33607_33630 = state_33591__$1;
(statearr_33607_33630[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (14))){
var inst_33584 = (state_33591[(2)]);
var inst_33585 = cljs.core.async.close_BANG_(out);
var state_33591__$1 = (function (){var statearr_33609 = state_33591;
(statearr_33609[(13)] = inst_33584);

return statearr_33609;
})();
var statearr_33610_33631 = state_33591__$1;
(statearr_33610_33631[(2)] = inst_33585);

(statearr_33610_33631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (10))){
var inst_33575 = (state_33591[(2)]);
var state_33591__$1 = state_33591;
var statearr_33611_33632 = state_33591__$1;
(statearr_33611_33632[(2)] = inst_33575);

(statearr_33611_33632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (8))){
var inst_33564 = (state_33591[(11)]);
var inst_33555 = (state_33591[(7)]);
var tmp33608 = inst_33555;
var inst_33555__$1 = tmp33608;
var inst_33556 = inst_33564;
var state_33591__$1 = (function (){var statearr_33612 = state_33591;
(statearr_33612[(7)] = inst_33555__$1);

(statearr_33612[(8)] = inst_33556);

return statearr_33612;
})();
var statearr_33613_33633 = state_33591__$1;
(statearr_33613_33633[(2)] = null);

(statearr_33613_33633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30923__auto___33619,out))
;
return ((function (switch__30754__auto__,c__30923__auto___33619,out){
return (function() {
var cljs$core$async$state_machine__30755__auto__ = null;
var cljs$core$async$state_machine__30755__auto____0 = (function (){
var statearr_33614 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33614[(0)] = cljs$core$async$state_machine__30755__auto__);

(statearr_33614[(1)] = (1));

return statearr_33614;
});
var cljs$core$async$state_machine__30755__auto____1 = (function (state_33591){
while(true){
var ret_value__30756__auto__ = (function (){try{while(true){
var result__30757__auto__ = switch__30754__auto__(state_33591);
if(cljs.core.keyword_identical_QMARK_(result__30757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30757__auto__;
}
break;
}
}catch (e33615){if((e33615 instanceof Object)){
var ex__30758__auto__ = e33615;
var statearr_33616_33634 = state_33591;
(statearr_33616_33634[(5)] = ex__30758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33615;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33635 = state_33591;
state_33591 = G__33635;
continue;
} else {
return ret_value__30756__auto__;
}
break;
}
});
cljs$core$async$state_machine__30755__auto__ = function(state_33591){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30755__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30755__auto____1.call(this,state_33591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30755__auto____0;
cljs$core$async$state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30755__auto____1;
return cljs$core$async$state_machine__30755__auto__;
})()
;})(switch__30754__auto__,c__30923__auto___33619,out))
})();
var state__30925__auto__ = (function (){var statearr_33617 = (f__30924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30924__auto__.cljs$core$IFn$_invoke$arity$0() : f__30924__auto__.call(null));
(statearr_33617[(6)] = c__30923__auto___33619);

return statearr_33617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30925__auto__);
});})(c__30923__auto___33619,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33637 = arguments.length;
switch (G__33637) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30923__auto___33707 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30923__auto___33707,out){
return (function (){
var f__30924__auto__ = (function (){var switch__30754__auto__ = ((function (c__30923__auto___33707,out){
return (function (state_33679){
var state_val_33680 = (state_33679[(1)]);
if((state_val_33680 === (7))){
var inst_33675 = (state_33679[(2)]);
var state_33679__$1 = state_33679;
var statearr_33681_33708 = state_33679__$1;
(statearr_33681_33708[(2)] = inst_33675);

(statearr_33681_33708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (1))){
var inst_33638 = [];
var inst_33639 = inst_33638;
var inst_33640 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33679__$1 = (function (){var statearr_33682 = state_33679;
(statearr_33682[(7)] = inst_33640);

(statearr_33682[(8)] = inst_33639);

return statearr_33682;
})();
var statearr_33683_33709 = state_33679__$1;
(statearr_33683_33709[(2)] = null);

(statearr_33683_33709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (4))){
var inst_33643 = (state_33679[(9)]);
var inst_33643__$1 = (state_33679[(2)]);
var inst_33644 = (inst_33643__$1 == null);
var inst_33645 = cljs.core.not(inst_33644);
var state_33679__$1 = (function (){var statearr_33684 = state_33679;
(statearr_33684[(9)] = inst_33643__$1);

return statearr_33684;
})();
if(inst_33645){
var statearr_33685_33710 = state_33679__$1;
(statearr_33685_33710[(1)] = (5));

} else {
var statearr_33686_33711 = state_33679__$1;
(statearr_33686_33711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (15))){
var inst_33669 = (state_33679[(2)]);
var state_33679__$1 = state_33679;
var statearr_33687_33712 = state_33679__$1;
(statearr_33687_33712[(2)] = inst_33669);

(statearr_33687_33712[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (13))){
var state_33679__$1 = state_33679;
var statearr_33688_33713 = state_33679__$1;
(statearr_33688_33713[(2)] = null);

(statearr_33688_33713[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (6))){
var inst_33639 = (state_33679[(8)]);
var inst_33664 = inst_33639.length;
var inst_33665 = (inst_33664 > (0));
var state_33679__$1 = state_33679;
if(cljs.core.truth_(inst_33665)){
var statearr_33689_33714 = state_33679__$1;
(statearr_33689_33714[(1)] = (12));

} else {
var statearr_33690_33715 = state_33679__$1;
(statearr_33690_33715[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (3))){
var inst_33677 = (state_33679[(2)]);
var state_33679__$1 = state_33679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33679__$1,inst_33677);
} else {
if((state_val_33680 === (12))){
var inst_33639 = (state_33679[(8)]);
var inst_33667 = cljs.core.vec(inst_33639);
var state_33679__$1 = state_33679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33679__$1,(15),out,inst_33667);
} else {
if((state_val_33680 === (2))){
var state_33679__$1 = state_33679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33679__$1,(4),ch);
} else {
if((state_val_33680 === (11))){
var inst_33647 = (state_33679[(10)]);
var inst_33643 = (state_33679[(9)]);
var inst_33657 = (state_33679[(2)]);
var inst_33658 = [];
var inst_33659 = inst_33658.push(inst_33643);
var inst_33639 = inst_33658;
var inst_33640 = inst_33647;
var state_33679__$1 = (function (){var statearr_33691 = state_33679;
(statearr_33691[(11)] = inst_33659);

(statearr_33691[(12)] = inst_33657);

(statearr_33691[(7)] = inst_33640);

(statearr_33691[(8)] = inst_33639);

return statearr_33691;
})();
var statearr_33692_33716 = state_33679__$1;
(statearr_33692_33716[(2)] = null);

(statearr_33692_33716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (9))){
var inst_33639 = (state_33679[(8)]);
var inst_33655 = cljs.core.vec(inst_33639);
var state_33679__$1 = state_33679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33679__$1,(11),out,inst_33655);
} else {
if((state_val_33680 === (5))){
var inst_33647 = (state_33679[(10)]);
var inst_33643 = (state_33679[(9)]);
var inst_33640 = (state_33679[(7)]);
var inst_33647__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33643) : f.call(null,inst_33643));
var inst_33648 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33647__$1,inst_33640);
var inst_33649 = cljs.core.keyword_identical_QMARK_(inst_33640,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33650 = ((inst_33648) || (inst_33649));
var state_33679__$1 = (function (){var statearr_33693 = state_33679;
(statearr_33693[(10)] = inst_33647__$1);

return statearr_33693;
})();
if(cljs.core.truth_(inst_33650)){
var statearr_33694_33717 = state_33679__$1;
(statearr_33694_33717[(1)] = (8));

} else {
var statearr_33695_33718 = state_33679__$1;
(statearr_33695_33718[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (14))){
var inst_33672 = (state_33679[(2)]);
var inst_33673 = cljs.core.async.close_BANG_(out);
var state_33679__$1 = (function (){var statearr_33697 = state_33679;
(statearr_33697[(13)] = inst_33672);

return statearr_33697;
})();
var statearr_33698_33719 = state_33679__$1;
(statearr_33698_33719[(2)] = inst_33673);

(statearr_33698_33719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (10))){
var inst_33662 = (state_33679[(2)]);
var state_33679__$1 = state_33679;
var statearr_33699_33720 = state_33679__$1;
(statearr_33699_33720[(2)] = inst_33662);

(statearr_33699_33720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (8))){
var inst_33647 = (state_33679[(10)]);
var inst_33643 = (state_33679[(9)]);
var inst_33639 = (state_33679[(8)]);
var inst_33652 = inst_33639.push(inst_33643);
var tmp33696 = inst_33639;
var inst_33639__$1 = tmp33696;
var inst_33640 = inst_33647;
var state_33679__$1 = (function (){var statearr_33700 = state_33679;
(statearr_33700[(14)] = inst_33652);

(statearr_33700[(7)] = inst_33640);

(statearr_33700[(8)] = inst_33639__$1);

return statearr_33700;
})();
var statearr_33701_33721 = state_33679__$1;
(statearr_33701_33721[(2)] = null);

(statearr_33701_33721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30923__auto___33707,out))
;
return ((function (switch__30754__auto__,c__30923__auto___33707,out){
return (function() {
var cljs$core$async$state_machine__30755__auto__ = null;
var cljs$core$async$state_machine__30755__auto____0 = (function (){
var statearr_33702 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33702[(0)] = cljs$core$async$state_machine__30755__auto__);

(statearr_33702[(1)] = (1));

return statearr_33702;
});
var cljs$core$async$state_machine__30755__auto____1 = (function (state_33679){
while(true){
var ret_value__30756__auto__ = (function (){try{while(true){
var result__30757__auto__ = switch__30754__auto__(state_33679);
if(cljs.core.keyword_identical_QMARK_(result__30757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30757__auto__;
}
break;
}
}catch (e33703){if((e33703 instanceof Object)){
var ex__30758__auto__ = e33703;
var statearr_33704_33722 = state_33679;
(statearr_33704_33722[(5)] = ex__30758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33703;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33723 = state_33679;
state_33679 = G__33723;
continue;
} else {
return ret_value__30756__auto__;
}
break;
}
});
cljs$core$async$state_machine__30755__auto__ = function(state_33679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30755__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30755__auto____1.call(this,state_33679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30755__auto____0;
cljs$core$async$state_machine__30755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30755__auto____1;
return cljs$core$async$state_machine__30755__auto__;
})()
;})(switch__30754__auto__,c__30923__auto___33707,out))
})();
var state__30925__auto__ = (function (){var statearr_33705 = (f__30924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30924__auto__.cljs$core$IFn$_invoke$arity$0() : f__30924__auto__.call(null));
(statearr_33705[(6)] = c__30923__auto___33707);

return statearr_33705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30925__auto__);
});})(c__30923__auto___33707,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
