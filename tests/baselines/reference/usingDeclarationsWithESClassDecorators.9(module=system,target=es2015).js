//// [tests/cases/conformance/statements/VariableStatements/usingDeclarations/usingDeclarationsWithESClassDecorators.9.ts] ////

//// [usingDeclarationsWithESClassDecorators.9.ts]
export {};

declare var dec: any;

@dec
export default class C {
}

void C;

using after = null;



//// [usingDeclarationsWithESClassDecorators.9.js]
System.register([], function (exports_1, context_1) {
    "use strict";
    var C, after, env_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            C = (() => {
                let _classDecorators = [dec];
                let _classDescriptor;
                let _classExtraInitializers = [];
                let _classThis;
                var C = _classThis = class {
                };
                __setFunctionName(_classThis, "C");
                (() => {
                    __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
                    C = _classThis = _classDescriptor.value;
                    __runInitializers(_classThis, _classExtraInitializers);
                })();
                return C = _classThis;
            })();
            exports_1("default", C);
            void C;
            env_1 = { stack: [], error: void 0, hasError: false };
            try {
                after = __addDisposableResource(env_1, null, false);
            }
            catch (e_1) {
                env_1.error = e_1;
                env_1.hasError = true;
            }
            finally {
                __disposeResources(env_1);
            }
        }
    };
});
