/*
 * THIS FILE IS AUTO GENERATED from 'lib/operations/object.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "atum/compute", "atum/operations/error", "atum/operations/object", "atum/operations/value_reference", "atum/value/value", "atum/value/type", "sheut/fun", "sheut/operations/reference"], (function(require, exports, __o, error, object, value_reference, __o0, type, __o1, __o2) {
    "use strict";
    var getOwnPropertyNames, getOwnProperties, getPrototype, get, displayName;
    var __o = __o,
        bind = __o["bind"],
        just = __o["just"],
        enumerationa = __o["enumerationa"],
        error = error,
        object = object,
        value_reference = value_reference,
        __o0 = __o0,
        isObject = __o0["isObject"],
        type = type,
        __o1 = __o1,
        foldl = __o1["foldl"],
        map = __o1["map"],
        __o2 = __o2,
        getFrom = __o2["getFrom"],
        getValue = __o2["getValue"];
    (getOwnPropertyNames = object.getOwnPropertyNames);
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
    (displayName = (function(val) {
        return value_reference.dereference(val, (function(t) {
            switch (t.type) {
                case type.STRING:
                case type.NUMBER:
                case type.BOOLEAN:
                    return just((t.value + ""));
                case type.NULL:
                case type.UNDEFINED:
                    return just((t.value + ""));
                default:
                    return just((t + ""));
            }
        }));
    }));
    (exports.getOwnPropertyNames = getOwnPropertyNames);
    (exports.getOwnProperties = getOwnProperties);
    (exports.getPrototype = getPrototype);
    (exports.get = get);
    (exports.displayName = displayName);
}))