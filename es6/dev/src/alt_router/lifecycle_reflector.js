import { Type } from 'angular2/src/facade/lang';
export function hasLifecycleHook(name, obj) {
    let type = obj.constructor;
    if (!(type instanceof Type))
        return false;
    return name in type.prototype;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlmZWN5Y2xlX3JlZmxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtUzNOaHdHTGkudG1wL2FuZ3VsYXIyL3NyYy9hbHRfcm91dGVyL2xpZmVjeWNsZV9yZWZsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSwwQkFBMEI7QUFFN0MsaUNBQWlDLElBQVksRUFBRSxHQUFXO0lBQ3hELElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUM7SUFDM0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksWUFBWSxJQUFJLENBQUMsQ0FBQztRQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDMUMsTUFBTSxDQUFDLElBQUksSUFBUyxJQUFLLENBQUMsU0FBUyxDQUFDO0FBQ3RDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1R5cGV9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNMaWZlY3ljbGVIb29rKG5hbWU6IHN0cmluZywgb2JqOiBPYmplY3QpOiBib29sZWFuIHtcbiAgbGV0IHR5cGUgPSBvYmouY29uc3RydWN0b3I7XG4gIGlmICghKHR5cGUgaW5zdGFuY2VvZiBUeXBlKSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gbmFtZSBpbig8YW55PnR5cGUpLnByb3RvdHlwZTtcbn1cbiJdfQ==