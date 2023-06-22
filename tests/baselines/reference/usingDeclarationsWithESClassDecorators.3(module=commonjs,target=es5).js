//// [tests/cases/conformance/statements/VariableStatements/usingDeclarations/usingDeclarationsWithESClassDecorators.3.ts] ////

//// [usingDeclarationsWithESClassDecorators.3.ts]
export {};

declare var dec: any;

using before = null;

@dec
export default class C {
}

void C;

//// [usingDeclarationsWithESClassDecorators.3.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
var before, C, _default;
var env_1 = { stack: [], error: void 0, hasError: false };
try {
    before = __addDisposableResource(env_1, null, false);
    C = function () {
        var _classDecorators = [dec];
        var _classDescriptor;
        var _classExtraInitializers = [];
        var _classThis;
        var C = _classThis = /** @class */ (function () {
            function C_1() {
            }
            return C_1;
        }());
        __setFunctionName(_classThis, "C");
        (function () {
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
            C = _classThis = _classDescriptor.value;
            __runInitializers(_classThis, _classExtraInitializers);
        })();
        return C = _classThis;
    }();
    exports.default = _default = C;
    void C;
}
catch (e_1) {
    env_1.error = e_1;
    env_1.hasError = true;
}
finally {
    __disposeResources(env_1);
}
