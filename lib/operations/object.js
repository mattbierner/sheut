/*
 * THIS FILE IS AUTO GENERATED from 'lib/operations/object.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "atum/compute", "atum/operations/error", "atum/operations/object", "atum/operations/value_reference", "atum/value/value", "sheut/fun", "sheut/operations/reference"], (function(require, exports, __o, error, object, value_reference, __o0, __o1, __o2) {
    "use strict";
    var getOwnPropertyNames, getOwnProperties, getPrototype, get;
    var __o = __o,
        bind = __o["bind"],
        just = __o["just"],
        enumerationa = __o["enumerationa"],
        error = error,
        object = object,
        value_reference = value_reference,
        __o0 = __o0,
        isObject = __o0["isObject"],
        __o1 = __o1,
        foldl = __o1["foldl"],
        map = __o1["map"],
        __o2 = __o2,
        getFrom = __o2["getFrom"],
        getValue = __o2["getValue"];
    (getOwnPropertyNames = (function(obj) {
        return object.getOwnPropertyNames(obj);
    }));
    (getOwnProperties = (function(obj) {
        return bind(getOwnPropertyNames(obj), (function(names) {
            return bind(enumerationa(map(get.bind(null, obj), names)), (function(values) {
                return just(foldl((function(p, name, i) {
                    (p[name] = values[i]);
                    return p;
                }), ({}), names));
            }));
        }));
    }));
    (getPrototype = (function(obj) {
        return value_reference.dereference(obj, (function(t) {
            return (isObject(t) ? just(t.proto) : error.typeError());
        }));
    }));
    (get = object.get);
    (exports.getOwnPropertyNames = getOwnPropertyNames);
    (exports.getOwnProperties = getOwnProperties);
    (exports.getPrototype = getPrototype);
    (exports.get = get);
}))