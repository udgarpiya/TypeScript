//// [tests/cases/conformance/statements/VariableStatements/usingDeclarations/usingDeclarationsWithESClassDecorators.6.ts] ////

//// [usingDeclarationsWithESClassDecorators.6.ts]
export {};

declare var dec: any;

using before = null;

@dec
class C {
}

export { C as D };

//// [usingDeclarationsWithESClassDecorators.6.js]
export { C as D };
var before, C;
const env_1 = { stack: [], error: void 0, hasError: false };
try {
    before = __addDisposableResource(env_1, null, false);
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
}
catch (e_1) {
    env_1.error = e_1;
    env_1.hasError = true;
}
finally {
    __disposeResources(env_1);
}
