export * from 'angular2/src/core/angular_entrypoint';
export { BROWSER_PROVIDERS, CACHED_TEMPLATE_PROVIDER, ELEMENT_PROBE_PROVIDERS, ELEMENT_PROBE_PROVIDERS_PROD_MODE, inspectNativeElement, BrowserDomAdapter, By, Title, DOCUMENT, enableDebugTools, disableDebugTools } from 'angular2/src/platform/browser_common';
import { isPresent, isBlank, CONST_EXPR } from 'angular2/src/facade/lang';
import { BROWSER_PROVIDERS, BROWSER_APP_COMMON_PROVIDERS, BROWSER_PLATFORM_MARKER } from 'angular2/src/platform/browser_common';
import { COMPILER_PROVIDERS } from 'angular2/compiler';
import { coreLoadAndBootstrap, reflector, ReflectiveInjector, getPlatform, createPlatform, assertPlatform } from 'angular2/core';
import { ReflectionCapabilities } from 'angular2/src/core/reflection/reflection_capabilities';
import { XHRImpl } from "angular2/src/platform/browser/xhr_impl";
import { XHR } from 'angular2/compiler';
import { Provider } from 'angular2/src/core/di';
/**
 * An array of providers that should be passed into `application()` when bootstrapping a component.
 */
export const BROWSER_APP_PROVIDERS = CONST_EXPR([
    BROWSER_APP_COMMON_PROVIDERS,
    COMPILER_PROVIDERS,
    new Provider(XHR, { useClass: XHRImpl }),
]);
export function browserPlatform() {
    if (isBlank(getPlatform())) {
        createPlatform(ReflectiveInjector.resolveAndCreate(BROWSER_PROVIDERS));
    }
    return assertPlatform(BROWSER_PLATFORM_MARKER);
}
/**
 * Bootstrapping for Angular applications.
 *
 * You instantiate an Angular application by explicitly specifying a component to use
 * as the root component for your application via the `bootstrap()` method.
 *
 * ## Simple Example
 *
 * Assuming this `index.html`:
 *
 * ```html
 * <html>
 *   <!-- load Angular script tags here. -->
 *   <body>
 *     <my-app>loading...</my-app>
 *   </body>
 * </html>
 * ```
 *
 * An application is bootstrapped inside an existing browser DOM, typically `index.html`.
 * Unlike Angular 1, Angular 2 does not compile/process providers in `index.html`. This is
 * mainly for security reasons, as well as architectural changes in Angular 2. This means
 * that `index.html` can safely be processed using server-side technologies such as
 * providers. Bindings can thus use double-curly `{{ syntax }}` without collision from
 * Angular 2 component double-curly `{{ syntax }}`.
 *
 * We can use this script code:
 *
 * {@example core/ts/bootstrap/bootstrap.ts region='bootstrap'}
 *
 * When the app developer invokes `bootstrap()` with the root component `MyApp` as its
 * argument, Angular performs the following tasks:
 *
 *  1. It uses the component's `selector` property to locate the DOM element which needs
 *     to be upgraded into the angular component.
 *  2. It creates a new child injector (from the platform injector). Optionally, you can
 *     also override the injector configuration for an app by invoking `bootstrap` with the
 *     `componentInjectableBindings` argument.
 *  3. It creates a new `Zone` and connects it to the angular application's change detection
 *     domain instance.
 *  4. It creates an emulated or shadow DOM on the selected component's host element and loads the
 *     template into it.
 *  5. It instantiates the specified component.
 *  6. Finally, Angular performs change detection to apply the initial data providers for the
 *     application.
 *
 *
 * ## Bootstrapping Multiple Applications
 *
 * When working within a browser window, there are many singleton resources: cookies, title,
 * location, and others. Angular services that represent these resources must likewise be
 * shared across all Angular applications that occupy the same browser window. For this
 * reason, Angular creates exactly one global platform object which stores all shared
 * services, and each angular application injector has the platform injector as its parent.
 *
 * Each application has its own private injector as well. When there are multiple
 * applications on a page, Angular treats each application injector's services as private
 * to that application.
 *
 * ## API
 *
 * - `appComponentType`: The root component which should act as the application. This is
 *   a reference to a `Type` which is annotated with `@Component(...)`.
 * - `customProviders`: An additional set of providers that can be added to the
 *   app injector to override default injection behavior.
 *
 * Returns a `Promise` of {@link ComponentRef}.
 */
export function bootstrap(appComponentType, customProviders) {
    reflector.reflectionCapabilities = new ReflectionCapabilities();
    var appInjector = ReflectiveInjector.resolveAndCreate([BROWSER_APP_PROVIDERS, isPresent(customProviders) ? customProviders : []], browserPlatform().injector);
    return coreLoadAndBootstrap(appInjector, appComponentType);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtUzNOaHdHTGkudG1wL2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxzQ0FBc0MsQ0FBQztBQUNyRCxTQUNFLGlCQUFpQixFQUNqQix3QkFBd0IsRUFDeEIsdUJBQXVCLEVBQ3ZCLGlDQUFpQyxFQUNqQyxvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLEVBQUUsRUFDRixLQUFLLEVBQ0wsUUFBUSxFQUNSLGdCQUFnQixFQUNoQixpQkFBaUIsUUFDWixzQ0FBc0MsQ0FBQztPQUV2QyxFQUFPLFNBQVMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFDLE1BQU0sMEJBQTBCO09BQ3RFLEVBQ0wsaUJBQWlCLEVBQ2pCLDRCQUE0QixFQUM1Qix1QkFBdUIsRUFDeEIsTUFBTSxzQ0FBc0M7T0FDdEMsRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG1CQUFtQjtPQUM3QyxFQUVMLG9CQUFvQixFQUNwQixTQUFTLEVBQ1Qsa0JBQWtCLEVBR2xCLFdBQVcsRUFDWCxjQUFjLEVBQ2QsY0FBYyxFQUNmLE1BQU0sZUFBZTtPQUNmLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxzREFBc0Q7T0FDcEYsRUFBQyxPQUFPLEVBQUMsTUFBTSx3Q0FBd0M7T0FDdkQsRUFBQyxHQUFHLEVBQUMsTUFBTSxtQkFBbUI7T0FDOUIsRUFBQyxRQUFRLEVBQUMsTUFBTSxzQkFBc0I7QUFFN0M7O0dBRUc7QUFDSCxPQUFPLE1BQU0scUJBQXFCLEdBQTJDLFVBQVUsQ0FBQztJQUN0Riw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUMsQ0FBQztDQUN2QyxDQUFDLENBQUM7QUFFSDtJQUNFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixjQUFjLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFDRCxNQUFNLENBQUMsY0FBYyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDakQsQ0FBQztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUVHO0FBQ0gsMEJBQ0ksZ0JBQXNCLEVBQ3RCLGVBQXdEO0lBQzFELFNBQVMsQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLHNCQUFzQixFQUFFLENBQUM7SUFDaEUsSUFBSSxXQUFXLEdBQUcsa0JBQWtCLENBQUMsZ0JBQWdCLENBQ2pELENBQUMscUJBQXFCLEVBQUUsU0FBUyxDQUFDLGVBQWUsQ0FBQyxHQUFHLGVBQWUsR0FBRyxFQUFFLENBQUMsRUFDMUUsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzdELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9hbmd1bGFyX2VudHJ5cG9pbnQnO1xuZXhwb3J0IHtcbiAgQlJPV1NFUl9QUk9WSURFUlMsXG4gIENBQ0hFRF9URU1QTEFURV9QUk9WSURFUixcbiAgRUxFTUVOVF9QUk9CRV9QUk9WSURFUlMsXG4gIEVMRU1FTlRfUFJPQkVfUFJPVklERVJTX1BST0RfTU9ERSxcbiAgaW5zcGVjdE5hdGl2ZUVsZW1lbnQsXG4gIEJyb3dzZXJEb21BZGFwdGVyLFxuICBCeSxcbiAgVGl0bGUsXG4gIERPQ1VNRU5ULFxuICBlbmFibGVEZWJ1Z1Rvb2xzLFxuICBkaXNhYmxlRGVidWdUb29sc1xufSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vYnJvd3Nlcl9jb21tb24nO1xuXG5pbXBvcnQge1R5cGUsIGlzUHJlc2VudCwgaXNCbGFuaywgQ09OU1RfRVhQUn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7XG4gIEJST1dTRVJfUFJPVklERVJTLFxuICBCUk9XU0VSX0FQUF9DT01NT05fUFJPVklERVJTLFxuICBCUk9XU0VSX1BMQVRGT1JNX01BUktFUlxufSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vYnJvd3Nlcl9jb21tb24nO1xuaW1wb3J0IHtDT01QSUxFUl9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL2NvbXBpbGVyJztcbmltcG9ydCB7XG4gIENvbXBvbmVudFJlZixcbiAgY29yZUxvYWRBbmRCb290c3RyYXAsXG4gIHJlZmxlY3RvcixcbiAgUmVmbGVjdGl2ZUluamVjdG9yLFxuICBQbGF0Zm9ybVJlZixcbiAgT3BhcXVlVG9rZW4sXG4gIGdldFBsYXRmb3JtLFxuICBjcmVhdGVQbGF0Zm9ybSxcbiAgYXNzZXJ0UGxhdGZvcm1cbn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JlZmxlY3Rpb25DYXBhYmlsaXRpZXN9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL3JlZmxlY3Rpb24vcmVmbGVjdGlvbl9jYXBhYmlsaXRpZXMnO1xuaW1wb3J0IHtYSFJJbXBsfSBmcm9tIFwiYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2Jyb3dzZXIveGhyX2ltcGxcIjtcbmltcG9ydCB7WEhSfSBmcm9tICdhbmd1bGFyMi9jb21waWxlcic7XG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9kaSc7XG5cbi8qKlxuICogQW4gYXJyYXkgb2YgcHJvdmlkZXJzIHRoYXQgc2hvdWxkIGJlIHBhc3NlZCBpbnRvIGBhcHBsaWNhdGlvbigpYCB3aGVuIGJvb3RzdHJhcHBpbmcgYSBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBjb25zdCBCUk9XU0VSX0FQUF9QUk9WSURFUlM6IEFycmF5PGFueSAvKlR5cGUgfCBQcm92aWRlciB8IGFueVtdKi8+ID0gQ09OU1RfRVhQUihbXG4gIEJST1dTRVJfQVBQX0NPTU1PTl9QUk9WSURFUlMsXG4gIENPTVBJTEVSX1BST1ZJREVSUyxcbiAgbmV3IFByb3ZpZGVyKFhIUiwge3VzZUNsYXNzOiBYSFJJbXBsfSksXG5dKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGJyb3dzZXJQbGF0Zm9ybSgpOiBQbGF0Zm9ybVJlZiB7XG4gIGlmIChpc0JsYW5rKGdldFBsYXRmb3JtKCkpKSB7XG4gICAgY3JlYXRlUGxhdGZvcm0oUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmVBbmRDcmVhdGUoQlJPV1NFUl9QUk9WSURFUlMpKTtcbiAgfVxuICByZXR1cm4gYXNzZXJ0UGxhdGZvcm0oQlJPV1NFUl9QTEFURk9STV9NQVJLRVIpO1xufVxuXG4vKipcbiAqIEJvb3RzdHJhcHBpbmcgZm9yIEFuZ3VsYXIgYXBwbGljYXRpb25zLlxuICpcbiAqIFlvdSBpbnN0YW50aWF0ZSBhbiBBbmd1bGFyIGFwcGxpY2F0aW9uIGJ5IGV4cGxpY2l0bHkgc3BlY2lmeWluZyBhIGNvbXBvbmVudCB0byB1c2VcbiAqIGFzIHRoZSByb290IGNvbXBvbmVudCBmb3IgeW91ciBhcHBsaWNhdGlvbiB2aWEgdGhlIGBib290c3RyYXAoKWAgbWV0aG9kLlxuICpcbiAqICMjIFNpbXBsZSBFeGFtcGxlXG4gKlxuICogQXNzdW1pbmcgdGhpcyBgaW5kZXguaHRtbGA6XG4gKlxuICogYGBgaHRtbFxuICogPGh0bWw+XG4gKiAgIDwhLS0gbG9hZCBBbmd1bGFyIHNjcmlwdCB0YWdzIGhlcmUuIC0tPlxuICogICA8Ym9keT5cbiAqICAgICA8bXktYXBwPmxvYWRpbmcuLi48L215LWFwcD5cbiAqICAgPC9ib2R5PlxuICogPC9odG1sPlxuICogYGBgXG4gKlxuICogQW4gYXBwbGljYXRpb24gaXMgYm9vdHN0cmFwcGVkIGluc2lkZSBhbiBleGlzdGluZyBicm93c2VyIERPTSwgdHlwaWNhbGx5IGBpbmRleC5odG1sYC5cbiAqIFVubGlrZSBBbmd1bGFyIDEsIEFuZ3VsYXIgMiBkb2VzIG5vdCBjb21waWxlL3Byb2Nlc3MgcHJvdmlkZXJzIGluIGBpbmRleC5odG1sYC4gVGhpcyBpc1xuICogbWFpbmx5IGZvciBzZWN1cml0eSByZWFzb25zLCBhcyB3ZWxsIGFzIGFyY2hpdGVjdHVyYWwgY2hhbmdlcyBpbiBBbmd1bGFyIDIuIFRoaXMgbWVhbnNcbiAqIHRoYXQgYGluZGV4Lmh0bWxgIGNhbiBzYWZlbHkgYmUgcHJvY2Vzc2VkIHVzaW5nIHNlcnZlci1zaWRlIHRlY2hub2xvZ2llcyBzdWNoIGFzXG4gKiBwcm92aWRlcnMuIEJpbmRpbmdzIGNhbiB0aHVzIHVzZSBkb3VibGUtY3VybHkgYHt7IHN5bnRheCB9fWAgd2l0aG91dCBjb2xsaXNpb24gZnJvbVxuICogQW5ndWxhciAyIGNvbXBvbmVudCBkb3VibGUtY3VybHkgYHt7IHN5bnRheCB9fWAuXG4gKlxuICogV2UgY2FuIHVzZSB0aGlzIHNjcmlwdCBjb2RlOlxuICpcbiAqIHtAZXhhbXBsZSBjb3JlL3RzL2Jvb3RzdHJhcC9ib290c3RyYXAudHMgcmVnaW9uPSdib290c3RyYXAnfVxuICpcbiAqIFdoZW4gdGhlIGFwcCBkZXZlbG9wZXIgaW52b2tlcyBgYm9vdHN0cmFwKClgIHdpdGggdGhlIHJvb3QgY29tcG9uZW50IGBNeUFwcGAgYXMgaXRzXG4gKiBhcmd1bWVudCwgQW5ndWxhciBwZXJmb3JtcyB0aGUgZm9sbG93aW5nIHRhc2tzOlxuICpcbiAqICAxLiBJdCB1c2VzIHRoZSBjb21wb25lbnQncyBgc2VsZWN0b3JgIHByb3BlcnR5IHRvIGxvY2F0ZSB0aGUgRE9NIGVsZW1lbnQgd2hpY2ggbmVlZHNcbiAqICAgICB0byBiZSB1cGdyYWRlZCBpbnRvIHRoZSBhbmd1bGFyIGNvbXBvbmVudC5cbiAqICAyLiBJdCBjcmVhdGVzIGEgbmV3IGNoaWxkIGluamVjdG9yIChmcm9tIHRoZSBwbGF0Zm9ybSBpbmplY3RvcikuIE9wdGlvbmFsbHksIHlvdSBjYW5cbiAqICAgICBhbHNvIG92ZXJyaWRlIHRoZSBpbmplY3RvciBjb25maWd1cmF0aW9uIGZvciBhbiBhcHAgYnkgaW52b2tpbmcgYGJvb3RzdHJhcGAgd2l0aCB0aGVcbiAqICAgICBgY29tcG9uZW50SW5qZWN0YWJsZUJpbmRpbmdzYCBhcmd1bWVudC5cbiAqICAzLiBJdCBjcmVhdGVzIGEgbmV3IGBab25lYCBhbmQgY29ubmVjdHMgaXQgdG8gdGhlIGFuZ3VsYXIgYXBwbGljYXRpb24ncyBjaGFuZ2UgZGV0ZWN0aW9uXG4gKiAgICAgZG9tYWluIGluc3RhbmNlLlxuICogIDQuIEl0IGNyZWF0ZXMgYW4gZW11bGF0ZWQgb3Igc2hhZG93IERPTSBvbiB0aGUgc2VsZWN0ZWQgY29tcG9uZW50J3MgaG9zdCBlbGVtZW50IGFuZCBsb2FkcyB0aGVcbiAqICAgICB0ZW1wbGF0ZSBpbnRvIGl0LlxuICogIDUuIEl0IGluc3RhbnRpYXRlcyB0aGUgc3BlY2lmaWVkIGNvbXBvbmVudC5cbiAqICA2LiBGaW5hbGx5LCBBbmd1bGFyIHBlcmZvcm1zIGNoYW5nZSBkZXRlY3Rpb24gdG8gYXBwbHkgdGhlIGluaXRpYWwgZGF0YSBwcm92aWRlcnMgZm9yIHRoZVxuICogICAgIGFwcGxpY2F0aW9uLlxuICpcbiAqXG4gKiAjIyBCb290c3RyYXBwaW5nIE11bHRpcGxlIEFwcGxpY2F0aW9uc1xuICpcbiAqIFdoZW4gd29ya2luZyB3aXRoaW4gYSBicm93c2VyIHdpbmRvdywgdGhlcmUgYXJlIG1hbnkgc2luZ2xldG9uIHJlc291cmNlczogY29va2llcywgdGl0bGUsXG4gKiBsb2NhdGlvbiwgYW5kIG90aGVycy4gQW5ndWxhciBzZXJ2aWNlcyB0aGF0IHJlcHJlc2VudCB0aGVzZSByZXNvdXJjZXMgbXVzdCBsaWtld2lzZSBiZVxuICogc2hhcmVkIGFjcm9zcyBhbGwgQW5ndWxhciBhcHBsaWNhdGlvbnMgdGhhdCBvY2N1cHkgdGhlIHNhbWUgYnJvd3NlciB3aW5kb3cuIEZvciB0aGlzXG4gKiByZWFzb24sIEFuZ3VsYXIgY3JlYXRlcyBleGFjdGx5IG9uZSBnbG9iYWwgcGxhdGZvcm0gb2JqZWN0IHdoaWNoIHN0b3JlcyBhbGwgc2hhcmVkXG4gKiBzZXJ2aWNlcywgYW5kIGVhY2ggYW5ndWxhciBhcHBsaWNhdGlvbiBpbmplY3RvciBoYXMgdGhlIHBsYXRmb3JtIGluamVjdG9yIGFzIGl0cyBwYXJlbnQuXG4gKlxuICogRWFjaCBhcHBsaWNhdGlvbiBoYXMgaXRzIG93biBwcml2YXRlIGluamVjdG9yIGFzIHdlbGwuIFdoZW4gdGhlcmUgYXJlIG11bHRpcGxlXG4gKiBhcHBsaWNhdGlvbnMgb24gYSBwYWdlLCBBbmd1bGFyIHRyZWF0cyBlYWNoIGFwcGxpY2F0aW9uIGluamVjdG9yJ3Mgc2VydmljZXMgYXMgcHJpdmF0ZVxuICogdG8gdGhhdCBhcHBsaWNhdGlvbi5cbiAqXG4gKiAjIyBBUElcbiAqXG4gKiAtIGBhcHBDb21wb25lbnRUeXBlYDogVGhlIHJvb3QgY29tcG9uZW50IHdoaWNoIHNob3VsZCBhY3QgYXMgdGhlIGFwcGxpY2F0aW9uLiBUaGlzIGlzXG4gKiAgIGEgcmVmZXJlbmNlIHRvIGEgYFR5cGVgIHdoaWNoIGlzIGFubm90YXRlZCB3aXRoIGBAQ29tcG9uZW50KC4uLilgLlxuICogLSBgY3VzdG9tUHJvdmlkZXJzYDogQW4gYWRkaXRpb25hbCBzZXQgb2YgcHJvdmlkZXJzIHRoYXQgY2FuIGJlIGFkZGVkIHRvIHRoZVxuICogICBhcHAgaW5qZWN0b3IgdG8gb3ZlcnJpZGUgZGVmYXVsdCBpbmplY3Rpb24gYmVoYXZpb3IuXG4gKlxuICogUmV0dXJucyBhIGBQcm9taXNlYCBvZiB7QGxpbmsgQ29tcG9uZW50UmVmfS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJvb3RzdHJhcChcbiAgICBhcHBDb21wb25lbnRUeXBlOiBUeXBlLFxuICAgIGN1c3RvbVByb3ZpZGVycz86IEFycmF5PGFueSAvKlR5cGUgfCBQcm92aWRlciB8IGFueVtdKi8+KTogUHJvbWlzZTxDb21wb25lbnRSZWY+IHtcbiAgcmVmbGVjdG9yLnJlZmxlY3Rpb25DYXBhYmlsaXRpZXMgPSBuZXcgUmVmbGVjdGlvbkNhcGFiaWxpdGllcygpO1xuICB2YXIgYXBwSW5qZWN0b3IgPSBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZUFuZENyZWF0ZShcbiAgICAgIFtCUk9XU0VSX0FQUF9QUk9WSURFUlMsIGlzUHJlc2VudChjdXN0b21Qcm92aWRlcnMpID8gY3VzdG9tUHJvdmlkZXJzIDogW11dLFxuICAgICAgYnJvd3NlclBsYXRmb3JtKCkuaW5qZWN0b3IpO1xuICByZXR1cm4gY29yZUxvYWRBbmRCb290c3RyYXAoYXBwSW5qZWN0b3IsIGFwcENvbXBvbmVudFR5cGUpO1xufVxuIl19