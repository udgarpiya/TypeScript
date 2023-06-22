//// [tests/cases/conformance/esDecorators/classExpression/namedEvaluation/esDecorators-classExpression-namedEvaluation.10.ts] ////

//// [esDecorators-classExpression-namedEvaluation.10.ts]
declare let dec: any, f: any;

// 10.2.1.3 RS: EvaluateBody
//   Initializer : `=` AssignmentExpression

{ class C { static x = @dec class {}; } }
{ class C { static "x" = @dec class {}; } }
{ class C { static 0 = @dec class {}; } }
{ class C { static ["x"] = @dec class {}; } }
{ class C { static [0] = @dec class {}; } }
// @ts-ignore
{ class C { static [f()] = @dec class {}; } }

// __proto__ is not special in a class field
{ class C { static __proto__ = @dec class {}; } }
{ class C { static "__proto__" = @dec class {}; } }

{ class C { static x = class { @dec y: any }; } }
{ class C { static "x" = class { @dec y: any }; } }
{ class C { static 0 = class { @dec y: any }; } }
{ class C { static ["x"] = class { @dec y: any }; } }
{ class C { static [0] = class { @dec y: any }; } }
// @ts-ignore
{ class C { static [f()] = @dec class {}; } }

// __proto__ is not special in a class field
{ class C { static __proto__ = class { @dec y: any }; } }
{ class C { static "__proto__" = class { @dec y: any }; } }

// ensure nested named evaluation happens when field is also transformed
{ class C { @dec static x = @dec class {}; } }


//// [esDecorators-classExpression-namedEvaluation.10.js]
var _a, _b;
// 10.2.1.3 RS: EvaluateBody
//   Initializer : `=` AssignmentExpression
{
    class C {
        static x = (() => {
            let _classDecorators = [dec];
            let _classDescriptor;
            let _classExtraInitializers = [];
            let _classThis;
            var class_1 = class {
                static { _classThis = this; }
                static { __setFunctionName(_classThis, "x"); }
                static {
                    __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
                    class_1 = _classThis = _classDescriptor.value;
                    __runInitializers(_classThis, _classExtraInitializers);
                }
            };
            return class_1 = _classThis;
        })();
    }
}
{
    class C {
        static "x" = (() => {
            let _classDecorators = [dec];
            let _classDescriptor;
            let _classExtraInitializers = [];
            let _classThis;
            var class_2 = class {
                static { _classThis = this; }
                static { __setFunctionName(_classThis, "x"); }
                static {
                    __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
                    class_2 = _classThis = _classDescriptor.value;
                    __runInitializers(_classThis, _classExtraInitializers);
                }
            };
            return class_2 = _classThis;
        })();
    }
}
{
    class C {
        static 0 = (() => {
            let _classDecorators = [dec];
            let _classDescriptor;
            let _classExtraInitializers = [];
            let _classThis;
            var class_3 = class {
                static { _classThis = this; }
                static { __setFunctionName(_classThis, "0"); }
                static {
                    __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
                    class_3 = _classThis = _classDescriptor.value;
                    __runInitializers(_classThis, _classExtraInitializers);
                }
            };
            return class_3 = _classThis;
        })();
    }
}
{
    class C {
        static ["x"] = (() => {
            let _classDecorators = [dec];
            let _classDescriptor;
            let _classExtraInitializers = [];
            let _classThis;
            var class_4 = class {
                static { _classThis = this; }
                static { __setFunctionName(_classThis, "x"); }
                static {
                    __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
                    class_4 = _classThis = _classDescriptor.value;
                    __runInitializers(_classThis, _classExtraInitializers);
                }
            };
            return class_4 = _classThis;
        })();
    }
}
{
    class C {
        static [0] = (() => {
            let _classDecorators = [dec];
            let _classDescriptor;
            let _classExtraInitializers = [];
            let _classThis;
            var class_5 = class {
                static { _classThis = this; }
                static { __setFunctionName(_classThis, "0"); }
                static {
                    __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
                    class_5 = _classThis = _classDescriptor.value;
                    __runInitializers(_classThis, _classExtraInitializers);
                }
            };
            return class_5 = _classThis;
        })();
    }
}
// @ts-ignore
{
    class C {
        static [_a = __propKey(f())] = (() => {
            let _classDecorators = [dec];
            let _classDescriptor;
            let _classExtraInitializers = [];
            let _classThis;
            var class_6 = class {
                static { _classThis = this; }
                static { __setFunctionName(_classThis, _a); }
                static {
                    __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
                    class_6 = _classThis = _classDescriptor.value;
                    __runInitializers(_classThis, _classExtraInitializers);
                }
            };
            return class_6 = _classThis;
        })();
    }
}
// __proto__ is not special in a class field
{
    class C {
        static __proto__ = (() => {
            let _classDecorators = [dec];
            let _classDescriptor;
            let _classExtraInitializers = [];
            let _classThis;
            var class_7 = class {
                static { _classThis = this; }
                static { __setFunctionName(_classThis, "__proto__"); }
                static {
                    __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
                    class_7 = _classThis = _classDescriptor.value;
                    __runInitializers(_classThis, _classExtraInitializers);
                }
            };
            return class_7 = _classThis;
        })();
    }
}
{
    class C {
        static "__proto__" = (() => {
            let _classDecorators = [dec];
            let _classDescriptor;
            let _classExtraInitializers = [];
            let _classThis;
            var class_8 = class {
                static { _classThis = this; }
                static { __setFunctionName(_classThis, "__proto__"); }
                static {
                    __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
                    class_8 = _classThis = _classDescriptor.value;
                    __runInitializers(_classThis, _classExtraInitializers);
                }
            };
            return class_8 = _classThis;
        })();
    }
}
{
    class C {
        static x = (() => {
            let _instanceExtraInitializers = [];
            let _y_decorators;
            let _y_initializers = [];
            return class {
                static { __setFunctionName(this, "x"); }
                static {
                    _y_decorators = [dec];
                    __esDecorate(null, null, _y_decorators, { kind: "field", name: "y", static: false, private: false, access: { has: obj => "y" in obj, get: obj => obj.y, set: (obj, value) => { obj.y = value; } } }, _y_initializers, _instanceExtraInitializers);
                }
                y = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _y_initializers, void 0));
            };
        })();
    }
}
{
    class C {
        static "x" = (() => {
            let _instanceExtraInitializers = [];
            let _y_decorators;
            let _y_initializers = [];
            return class {
                static { __setFunctionName(this, "x"); }
                static {
                    _y_decorators = [dec];
                    __esDecorate(null, null, _y_decorators, { kind: "field", name: "y", static: false, private: false, access: { has: obj => "y" in obj, get: obj => obj.y, set: (obj, value) => { obj.y = value; } } }, _y_initializers, _instanceExtraInitializers);
                }
                y = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _y_initializers, void 0));
            };
        })();
    }
}
{
    class C {
        static 0 = (() => {
            let _instanceExtraInitializers = [];
            let _y_decorators;
            let _y_initializers = [];
            return class {
                static { __setFunctionName(this, "0"); }
                static {
                    _y_decorators = [dec];
                    __esDecorate(null, null, _y_decorators, { kind: "field", name: "y", static: false, private: false, access: { has: obj => "y" in obj, get: obj => obj.y, set: (obj, value) => { obj.y = value; } } }, _y_initializers, _instanceExtraInitializers);
                }
                y = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _y_initializers, void 0));
            };
        })();
    }
}
{
    class C {
        static ["x"] = (() => {
            let _instanceExtraInitializers = [];
            let _y_decorators;
            let _y_initializers = [];
            return class {
                static { __setFunctionName(this, "x"); }
                static {
                    _y_decorators = [dec];
                    __esDecorate(null, null, _y_decorators, { kind: "field", name: "y", static: false, private: false, access: { has: obj => "y" in obj, get: obj => obj.y, set: (obj, value) => { obj.y = value; } } }, _y_initializers, _instanceExtraInitializers);
                }
                y = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _y_initializers, void 0));
            };
        })();
    }
}
{
    class C {
        static [0] = (() => {
            let _instanceExtraInitializers = [];
            let _y_decorators;
            let _y_initializers = [];
            return class {
                static { __setFunctionName(this, "0"); }
                static {
                    _y_decorators = [dec];
                    __esDecorate(null, null, _y_decorators, { kind: "field", name: "y", static: false, private: false, access: { has: obj => "y" in obj, get: obj => obj.y, set: (obj, value) => { obj.y = value; } } }, _y_initializers, _instanceExtraInitializers);
                }
                y = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _y_initializers, void 0));
            };
        })();
    }
}
// @ts-ignore
{
    class C {
        static [_b = __propKey(f())] = (() => {
            let _classDecorators = [dec];
            let _classDescriptor;
            let _classExtraInitializers = [];
            let _classThis;
            var class_9 = class {
                static { _classThis = this; }
                static { __setFunctionName(_classThis, _b); }
                static {
                    __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
                    class_9 = _classThis = _classDescriptor.value;
                    __runInitializers(_classThis, _classExtraInitializers);
                }
            };
            return class_9 = _classThis;
        })();
    }
}
// __proto__ is not special in a class field
{
    class C {
        static __proto__ = (() => {
            let _instanceExtraInitializers = [];
            let _y_decorators;
            let _y_initializers = [];
            return class {
                static { __setFunctionName(this, "__proto__"); }
                static {
                    _y_decorators = [dec];
                    __esDecorate(null, null, _y_decorators, { kind: "field", name: "y", static: false, private: false, access: { has: obj => "y" in obj, get: obj => obj.y, set: (obj, value) => { obj.y = value; } } }, _y_initializers, _instanceExtraInitializers);
                }
                y = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _y_initializers, void 0));
            };
        })();
    }
}
{
    class C {
        static "__proto__" = (() => {
            let _instanceExtraInitializers = [];
            let _y_decorators;
            let _y_initializers = [];
            return class {
                static { __setFunctionName(this, "__proto__"); }
                static {
                    _y_decorators = [dec];
                    __esDecorate(null, null, _y_decorators, { kind: "field", name: "y", static: false, private: false, access: { has: obj => "y" in obj, get: obj => obj.y, set: (obj, value) => { obj.y = value; } } }, _y_initializers, _instanceExtraInitializers);
                }
                y = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _y_initializers, void 0));
            };
        })();
    }
}
// ensure nested named evaluation happens when field is also transformed
{
    let C = (() => {
        let _staticExtraInitializers = [];
        let _static_x_decorators;
        let _static_x_initializers = [];
        return class C {
            static {
                _static_x_decorators = [dec];
                __esDecorate(null, null, _static_x_decorators, { kind: "field", name: "x", static: true, private: false, access: { has: obj => "x" in obj, get: obj => obj.x, set: (obj, value) => { obj.x = value; } } }, _static_x_initializers, _staticExtraInitializers);
                __runInitializers(this, _staticExtraInitializers);
            }
            static x = __runInitializers(this, _static_x_initializers, (() => {
                let _classDecorators = [dec];
                let _classDescriptor;
                let _classExtraInitializers = [];
                let _classThis;
                var class_10 = class {
                    static { _classThis = this; }
                    static { __setFunctionName(_classThis, "x"); }
                    static {
                        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
                        class_10 = _classThis = _classDescriptor.value;
                        __runInitializers(_classThis, _classExtraInitializers);
                    }
                };
                return class_10 = _classThis;
            })());
        };
    })();
}
