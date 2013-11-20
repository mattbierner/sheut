/*
 * THIS FILE IS AUTO GENERATED from 'lib/operations/object.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "atum/compute", "atum/builtin/object", "atum/operations/error", "atum/operations/func", "atum/operations/object", "atum/operations/value_reference", "atum/value/value", "atum/value/type", "sheut/fun", "sheut/operations/reference"], (function(require, exports, __o, __o0, __o1, __o2, object, value_reference, __o3, type, __o4, __o5) {
    "use strict";
    var getOwnPropertyNames, getOwnProperties, getPrototype, get, displayName;
    var __o = __o,
        bind = __o["bind"],
        just = __o["just"],
        enumeration = __o["enumeration"],
        enumerationa = __o["enumerationa"],
        __o0 = __o0,
        ObjectPrototypeToString = __o0["ObjectPrototypeToString"],
        __o1 = __o1,
        typeError = __o1["typeError"],
        __o2 = __o2,
        functionCall = __o2["functionCall"],
        object = object,
        value_reference = value_reference,
        __o3 = __o3,
        isObject = __o3["isObject"],
        type = type,
        __o4 = __o4,
        foldl = __o4["foldl"],
        map = __o4["map"],
        __o5 = __o5,
        getFrom = __o5["getFrom"],
        getValue = __o5["getValue"];
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
            return (isObject(t) ? just(t.proto) : typeError());
        }));
    }));
    (get = object.get);
    (displayName = (function(val) {
        return value_reference.dereference(val, (function(t, ref) {
            switch (t.type) {
                case type.STRING:
                case type.NUMBER:
                case type.BOOLEAN:
                    return just((t.value + ""));
                case type.NULL:
                    return just("null");
                case type.UNDEFINED:
                    return just("undefined");
                case type.OBJECT:
                    return bind(functionCall(ObjectPrototypeToString, just(ref), enumeration(), displayName));
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