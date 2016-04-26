/**
 * @module
 * @description
 * Alternative implementation of the router. Experimental.
 */
export { Router, RouterOutletMap } from './src/alt_router/router';
export { RouteSegment } from './src/alt_router/segments';
export { Routes } from './src/alt_router/metadata/decorators';
export { Route } from './src/alt_router/metadata/metadata';
export { RouterUrlParser, DefaultRouterUrlParser } from './src/alt_router/router_url_parser';
import { RouterOutlet } from './src/alt_router/directives/router_outlet';
import { CONST_EXPR } from './src/facade/lang';
export const ROUTER_DIRECTIVES = CONST_EXPR([RouterOutlet]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx0X3JvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtUzNOaHdHTGkudG1wL2FuZ3VsYXIyL2FsdF9yb3V0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILFNBQVEsTUFBTSxFQUFFLGVBQWUsUUFBTyx5QkFBeUIsQ0FBQztBQUNoRSxTQUFRLFlBQVksUUFBTywyQkFBMkIsQ0FBQztBQUN2RCxTQUFRLE1BQU0sUUFBTyxzQ0FBc0MsQ0FBQztBQUM1RCxTQUFRLEtBQUssUUFBTyxvQ0FBb0MsQ0FBQztBQUN6RCxTQUFRLGVBQWUsRUFBRSxzQkFBc0IsUUFBTyxvQ0FBb0MsQ0FBQztBQUNwQyxPQUVoRCxFQUFDLFlBQVksRUFBQyxNQUFNLDJDQUEyQztPQUMvRCxFQUFDLFVBQVUsRUFBQyxNQUFNLG1CQUFtQjtBQUU1QyxPQUFPLE1BQU0saUJBQWlCLEdBQVUsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG1vZHVsZVxuICogQGRlc2NyaXB0aW9uXG4gKiBBbHRlcm5hdGl2ZSBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgcm91dGVyLiBFeHBlcmltZW50YWwuXG4gKi9cblxuZXhwb3J0IHtSb3V0ZXIsIFJvdXRlck91dGxldE1hcH0gZnJvbSAnLi9zcmMvYWx0X3JvdXRlci9yb3V0ZXInO1xuZXhwb3J0IHtSb3V0ZVNlZ21lbnR9IGZyb20gJy4vc3JjL2FsdF9yb3V0ZXIvc2VnbWVudHMnO1xuZXhwb3J0IHtSb3V0ZXN9IGZyb20gJy4vc3JjL2FsdF9yb3V0ZXIvbWV0YWRhdGEvZGVjb3JhdG9ycyc7XG5leHBvcnQge1JvdXRlfSBmcm9tICcuL3NyYy9hbHRfcm91dGVyL21ldGFkYXRhL21ldGFkYXRhJztcbmV4cG9ydCB7Um91dGVyVXJsUGFyc2VyLCBEZWZhdWx0Um91dGVyVXJsUGFyc2VyfSBmcm9tICcuL3NyYy9hbHRfcm91dGVyL3JvdXRlcl91cmxfcGFyc2VyJztcbmV4cG9ydCB7T25BY3RpdmF0ZX0gZnJvbSAnLi9zcmMvYWx0X3JvdXRlci9pbnRlcmZhY2VzJztcblxuaW1wb3J0IHtSb3V0ZXJPdXRsZXR9IGZyb20gJy4vc3JjL2FsdF9yb3V0ZXIvZGlyZWN0aXZlcy9yb3V0ZXJfb3V0bGV0JztcbmltcG9ydCB7Q09OU1RfRVhQUn0gZnJvbSAnLi9zcmMvZmFjYWRlL2xhbmcnO1xuXG5leHBvcnQgY29uc3QgUk9VVEVSX0RJUkVDVElWRVM6IGFueVtdID0gQ09OU1RfRVhQUihbUm91dGVyT3V0bGV0XSk7XG4iXX0=