//// [tests/cases/conformance/esDecorators/classExpression/namedEvaluation/esDecorators-classExpression-namedEvaluation.2.ts] ////

//// [esDecorators-classExpression-namedEvaluation.2.ts]
declare let dec: any;

let x: any, f: any;

// 13.2.5.5 RS: PropertyDefinitionEvaluation
//  PropertyAssignment : PropertyName `:` AssignmentExpression

({ x: @dec class { } });
({ x: class { @dec y: any; } });

({ "x": @dec class { } });
({ "x": class { @dec y: any; } });

({ 0: @dec class { } });
({ 0: class { @dec y: any; } });

({ ["x"]: @dec class { } });
({ ["x"]: class { @dec y: any; } });

({ [0]: @dec class { } });
({ [0]: class { @dec y: any; } });

({ [f()]: @dec class { } });
({ [f()]: class { @dec y: any; } });

// __proto__ setters do not perform NamedEvaluation
({ __proto__: @dec class { } });
({ "__proto__": @dec class { } });

// "__proto__" in a computed property name *does* perform NamedEvaluation
({ ["__proto__"]: @dec class { } });

//// [esDecorators-classExpression-namedEvaluation.2.js]
var _a, _b;
let x, f;
// 13.2.5.5 RS: PropertyDefinitionEvaluation
//  PropertyAssignment : PropertyName `:` AssignmentExpression
({ x: (() => {
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
    })() });
({ x: (() => {
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
    })() });
({ "x": (() => {
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
    })() });
({ "x": (() => {
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
    })() });
({ 0: (() => {
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
    })() });
({ 0: (() => {
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
    })() });
({ ["x"]: (() => {
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
    })() });
({ ["x"]: (() => {
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
    })() });
({ [0]: (() => {
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
    })() });
({ [0]: (() => {
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
    })() });
({ [_a = __propKey(f())]: (() => {
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
    })() });
({ [_b = __propKey(f())]: (() => {
        let _instanceExtraInitializers = [];
        let _y_decorators;
        let _y_initializers = [];
        return class {
            static { __setFunctionName(this, _b); }
            static {
                _y_decorators = [dec];
                __esDecorate(null, null, _y_decorators, { kind: "field", name: "y", static: false, private: false, access: { has: obj => "y" in obj, get: obj => obj.y, set: (obj, value) => { obj.y = value; } } }, _y_initializers, _instanceExtraInitializers);
            }
            y = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _y_initializers, void 0));
        };
    })() });
// __proto__ setters do not perform NamedEvaluation
({ __proto__: (() => {
        let _classDecorators = [dec];
        let _classDescriptor;
        let _classExtraInitializers = [];
        let _classThis;
        var class_7 = class {
            static { _classThis = this; }
            static { __setFunctionName(_classThis, ""); }
            static {
                __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
                class_7 = _classThis = _classDescriptor.value;
                __runInitializers(_classThis, _classExtraInitializers);
            }
        };
        return class_7 = _classThis;
    })() });
({ "__proto__": (() => {
        let _classDecorators = [dec];
        let _classDescriptor;
        let _classExtraInitializers = [];
        let _classThis;
        var class_8 = class {
            static { _classThis = this; }
            static { __setFunctionName(_classThis, ""); }
            static {
                __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
                class_8 = _classThis = _classDescriptor.value;
                __runInitializers(_classThis, _classExtraInitializers);
            }
        };
        return class_8 = _classThis;
    })() });
// "__proto__" in a computed property name *does* perform NamedEvaluation
({ ["__proto__"]: (() => {
        let _classDecorators = [dec];
        let _classDescriptor;
        let _classExtraInitializers = [];
        let _classThis;
        var class_9 = class {
            static { _classThis = this; }
            static { __setFunctionName(_classThis, "__proto__"); }
            static {
                __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
                class_9 = _classThis = _classDescriptor.value;
                __runInitializers(_classThis, _classExtraInitializers);
            }
        };
        return class_9 = _classThis;
    })() });
