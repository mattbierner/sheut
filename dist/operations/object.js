/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/operations/object.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "atum/compute", "atum/builtin/object", "atum/operations/error", "atum/operations/func",
    "atum/operations/object", "atum/operations/value_reference", "atum/value/value", "atum/value/type", "sheut/fun",
    "sheut/operations/reference"
], (function(require, exports, __o, __o0, __o1, __o2, object, value_reference, __o3, type, __o4, __o5) {
    "use strict";
    var getOwnPropertyNames, getOwnProperties, getPrototype, get, displayName, bind = __o["bind"],
        just = __o["just"],
        enumerationa = __o["enumerationa"],
        ObjectPrototypeToString = __o0["ObjectPrototypeToString"],
        typeError = __o1["typeError"],
        functionApply = __o2["functionApply"],
        isObject = __o3["isObject"],
        foldl = __o4["foldl"],
        map = __o4["map"];
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
                    return bind(functionApply(ObjectPrototypeToString, ref, []), displayName);
                default:
                    return just((t + ""));
            }
        }));
    }));
    (exports["getOwnPropertyNames"] = getOwnPropertyNames);
    (exports["getOwnProperties"] = getOwnProperties);
    (exports["getPrototype"] = getPrototype);
    (exports["get"] = get);
    (exports["displayName"] = displayName);
}));