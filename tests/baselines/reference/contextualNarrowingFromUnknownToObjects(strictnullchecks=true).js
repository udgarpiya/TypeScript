//// [contextualNarrowingFromUnknownToObjects.ts]
declare function keysOfEmptyObject(o: {}): string[];
declare function keysOfNonPrimitive(o: object): string[];

namespace explicitConstraints {
    export function keyLengthsEqualUsingEmptyObjectFn<T>(a: T, b: T): [T, T] | undefined {
        if (typeof a !== "object" || typeof b !== "object" || !a || !b) {
            return undefined;
        }
        if (Array.isArray(a) || Array.isArray(b)) {
            return undefined;
        }
        if (keysOfEmptyObject(a).length !== keysOfEmptyObject(b).length) {
            return [a, b];
        }
        return undefined;
    }
    
    export function keyLengthsEqualUsingNonPrimitiveFn<T>(a: T, b: T): [T, T] | undefined {
        if (typeof a !== "object" || typeof b !== "object" || !a || !b) {
            return undefined;
        }
        if (Array.isArray(a) || Array.isArray(b)) {
            return undefined;
        }
        if (keysOfEmptyObject(a).length !== keysOfEmptyObject(b).length) {
            return [a, b];
        }
        return undefined;
    }
}

// Explicit Constraints of 'unknown'
namespace explicitConstraintsOfUnknown {
    export function keyLengthsEqualUsingEmptyObjectFn<T>(a: T, b: T): [T, T] | undefined {
        if (typeof a !== "object" || typeof b !== "object" || !a || !b) {
            return undefined;
        }
        if (Array.isArray(a) || Array.isArray(b)) {
            return undefined;
        }
        if (keysOfEmptyObject(a).length !== keysOfEmptyObject(b).length) {
            return [a, b];
        }
        return undefined;
    }
    
    export function keyLengthsEqualUsingNonPrimitiveFn<T>(a: T, b: T): [T, T] | undefined {
        if (typeof a !== "object" || typeof b !== "object" || !a || !b) {
            return undefined;
        }
        if (Array.isArray(a) || Array.isArray(b)) {
            return undefined;
        }
        if (keysOfEmptyObject(a).length !== keysOfEmptyObject(b).length) {
            return [a, b];
        }
        return undefined;
    }
}


//// [contextualNarrowingFromUnknownToObjects.js]
var explicitConstraints;
(function (explicitConstraints) {
    function keyLengthsEqualUsingEmptyObjectFn(a, b) {
        if (typeof a !== "object" || typeof b !== "object" || !a || !b) {
            return undefined;
        }
        if (Array.isArray(a) || Array.isArray(b)) {
            return undefined;
        }
        if (keysOfEmptyObject(a).length !== keysOfEmptyObject(b).length) {
            return [a, b];
        }
        return undefined;
    }
    explicitConstraints.keyLengthsEqualUsingEmptyObjectFn = keyLengthsEqualUsingEmptyObjectFn;
    function keyLengthsEqualUsingNonPrimitiveFn(a, b) {
        if (typeof a !== "object" || typeof b !== "object" || !a || !b) {
            return undefined;
        }
        if (Array.isArray(a) || Array.isArray(b)) {
            return undefined;
        }
        if (keysOfEmptyObject(a).length !== keysOfEmptyObject(b).length) {
            return [a, b];
        }
        return undefined;
    }
    explicitConstraints.keyLengthsEqualUsingNonPrimitiveFn = keyLengthsEqualUsingNonPrimitiveFn;
})(explicitConstraints || (explicitConstraints = {}));
// Explicit Constraints of 'unknown'
var explicitConstraintsOfUnknown;
(function (explicitConstraintsOfUnknown) {
    function keyLengthsEqualUsingEmptyObjectFn(a, b) {
        if (typeof a !== "object" || typeof b !== "object" || !a || !b) {
            return undefined;
        }
        if (Array.isArray(a) || Array.isArray(b)) {
            return undefined;
        }
        if (keysOfEmptyObject(a).length !== keysOfEmptyObject(b).length) {
            return [a, b];
        }
        return undefined;
    }
    explicitConstraintsOfUnknown.keyLengthsEqualUsingEmptyObjectFn = keyLengthsEqualUsingEmptyObjectFn;
    function keyLengthsEqualUsingNonPrimitiveFn(a, b) {
        if (typeof a !== "object" || typeof b !== "object" || !a || !b) {
            return undefined;
        }
        if (Array.isArray(a) || Array.isArray(b)) {
            return undefined;
        }
        if (keysOfEmptyObject(a).length !== keysOfEmptyObject(b).length) {
            return [a, b];
        }
        return undefined;
    }
    explicitConstraintsOfUnknown.keyLengthsEqualUsingNonPrimitiveFn = keyLengthsEqualUsingNonPrimitiveFn;
})(explicitConstraintsOfUnknown || (explicitConstraintsOfUnknown = {}));
