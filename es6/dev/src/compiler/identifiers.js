import { CompileIdentifierMetadata, CompileTokenMetadata } from './compile_metadata';
import { AppView } from 'angular2/src/core/linker/view';
import { StaticNodeDebugInfo, DebugContext } from 'angular2/src/core/linker/debug_context';
import { ViewUtils, flattenNestedViewRenderNodes, interpolate, checkBinding, castByValue, pureProxy1, pureProxy2, pureProxy3, pureProxy4, pureProxy5, pureProxy6, pureProxy7, pureProxy8, pureProxy9, pureProxy10 } from 'angular2/src/core/linker/view_utils';
import { uninitialized, devModeEqual, SimpleChange, ValueUnwrapper, ChangeDetectorRef, ChangeDetectorState, ChangeDetectionStrategy } from 'angular2/src/core/change_detection/change_detection';
import { AppElement } from 'angular2/src/core/linker/element';
import { ElementRef } from 'angular2/src/core/linker/element_ref';
import { ViewContainerRef } from 'angular2/src/core/linker/view_container_ref';
import { Renderer, RenderComponentType } from 'angular2/src/core/render/api';
import { ViewEncapsulation } from 'angular2/src/core/metadata/view';
import { ViewType } from 'angular2/src/core/linker/view_type';
import { QueryList } from 'angular2/src/core/linker';
import { Injector } from 'angular2/src/core/di/injector';
import { TemplateRef, TemplateRef_ } from 'angular2/src/core/linker/template_ref';
import { MODULE_SUFFIX } from './util';
var APP_VIEW_MODULE_URL = 'asset:angular2/lib/src/core/linker/view' + MODULE_SUFFIX;
var VIEW_UTILS_MODULE_URL = 'asset:angular2/lib/src/core/linker/view_utils' + MODULE_SUFFIX;
var CD_MODULE_URL = 'asset:angular2/lib/src/core/change_detection/change_detection' + MODULE_SUFFIX;
// Reassign the imports to different variables so we can
// define static variables with the name of the import.
// (only needed for Dart).
var impViewUtils = ViewUtils;
var impAppView = AppView;
var impDebugContext = DebugContext;
var impAppElement = AppElement;
var impElementRef = ElementRef;
var impViewContainerRef = ViewContainerRef;
var impChangeDetectorRef = ChangeDetectorRef;
var impRenderComponentType = RenderComponentType;
var impQueryList = QueryList;
var impTemplateRef = TemplateRef;
var impTemplateRef_ = TemplateRef_;
var impValueUnwrapper = ValueUnwrapper;
var impInjector = Injector;
var impViewEncapsulation = ViewEncapsulation;
var impViewType = ViewType;
var impChangeDetectionStrategy = ChangeDetectionStrategy;
var impStaticNodeDebugInfo = StaticNodeDebugInfo;
var impRenderer = Renderer;
var impSimpleChange = SimpleChange;
var impUninitialized = uninitialized;
var impChangeDetectorState = ChangeDetectorState;
var impFlattenNestedViewRenderNodes = flattenNestedViewRenderNodes;
var impDevModeEqual = devModeEqual;
var impInterpolate = interpolate;
var impCheckBinding = checkBinding;
var impCastByValue = castByValue;
export class Identifiers {
}
Identifiers.ViewUtils = new CompileIdentifierMetadata({
    name: 'ViewUtils',
    moduleUrl: 'asset:angular2/lib/src/core/linker/view_utils' + MODULE_SUFFIX,
    runtime: impViewUtils
});
Identifiers.AppView = new CompileIdentifierMetadata({ name: 'AppView', moduleUrl: APP_VIEW_MODULE_URL, runtime: impAppView });
Identifiers.AppElement = new CompileIdentifierMetadata({
    name: 'AppElement',
    moduleUrl: 'asset:angular2/lib/src/core/linker/element' + MODULE_SUFFIX,
    runtime: impAppElement
});
Identifiers.ElementRef = new CompileIdentifierMetadata({
    name: 'ElementRef',
    moduleUrl: 'asset:angular2/lib/src/core/linker/element_ref' + MODULE_SUFFIX,
    runtime: impElementRef
});
Identifiers.ViewContainerRef = new CompileIdentifierMetadata({
    name: 'ViewContainerRef',
    moduleUrl: 'asset:angular2/lib/src/core/linker/view_container_ref' + MODULE_SUFFIX,
    runtime: impViewContainerRef
});
Identifiers.ChangeDetectorRef = new CompileIdentifierMetadata({
    name: 'ChangeDetectorRef',
    moduleUrl: 'asset:angular2/lib/src/core/change_detection/change_detector_ref' + MODULE_SUFFIX,
    runtime: impChangeDetectorRef
});
Identifiers.RenderComponentType = new CompileIdentifierMetadata({
    name: 'RenderComponentType',
    moduleUrl: 'asset:angular2/lib/src/core/render/api' + MODULE_SUFFIX,
    runtime: impRenderComponentType
});
Identifiers.QueryList = new CompileIdentifierMetadata({
    name: 'QueryList',
    moduleUrl: 'asset:angular2/lib/src/core/linker/query_list' + MODULE_SUFFIX,
    runtime: impQueryList
});
Identifiers.TemplateRef = new CompileIdentifierMetadata({
    name: 'TemplateRef',
    moduleUrl: 'asset:angular2/lib/src/core/linker/template_ref' + MODULE_SUFFIX,
    runtime: impTemplateRef
});
Identifiers.TemplateRef_ = new CompileIdentifierMetadata({
    name: 'TemplateRef_',
    moduleUrl: 'asset:angular2/lib/src/core/linker/template_ref' + MODULE_SUFFIX,
    runtime: impTemplateRef_
});
Identifiers.ValueUnwrapper = new CompileIdentifierMetadata({ name: 'ValueUnwrapper', moduleUrl: CD_MODULE_URL, runtime: impValueUnwrapper });
Identifiers.Injector = new CompileIdentifierMetadata({
    name: 'Injector',
    moduleUrl: `asset:angular2/lib/src/core/di/injector${MODULE_SUFFIX}`,
    runtime: impInjector
});
Identifiers.ViewEncapsulation = new CompileIdentifierMetadata({
    name: 'ViewEncapsulation',
    moduleUrl: 'asset:angular2/lib/src/core/metadata/view' + MODULE_SUFFIX,
    runtime: impViewEncapsulation
});
Identifiers.ViewType = new CompileIdentifierMetadata({
    name: 'ViewType',
    moduleUrl: `asset:angular2/lib/src/core/linker/view_type${MODULE_SUFFIX}`,
    runtime: impViewType
});
Identifiers.ChangeDetectionStrategy = new CompileIdentifierMetadata({
    name: 'ChangeDetectionStrategy',
    moduleUrl: CD_MODULE_URL,
    runtime: impChangeDetectionStrategy
});
Identifiers.StaticNodeDebugInfo = new CompileIdentifierMetadata({
    name: 'StaticNodeDebugInfo',
    moduleUrl: `asset:angular2/lib/src/core/linker/debug_context${MODULE_SUFFIX}`,
    runtime: impStaticNodeDebugInfo
});
Identifiers.DebugContext = new CompileIdentifierMetadata({
    name: 'DebugContext',
    moduleUrl: `asset:angular2/lib/src/core/linker/debug_context${MODULE_SUFFIX}`,
    runtime: impDebugContext
});
Identifiers.Renderer = new CompileIdentifierMetadata({
    name: 'Renderer',
    moduleUrl: 'asset:angular2/lib/src/core/render/api' + MODULE_SUFFIX,
    runtime: impRenderer
});
Identifiers.SimpleChange = new CompileIdentifierMetadata({ name: 'SimpleChange', moduleUrl: CD_MODULE_URL, runtime: impSimpleChange });
Identifiers.uninitialized = new CompileIdentifierMetadata({ name: 'uninitialized', moduleUrl: CD_MODULE_URL, runtime: impUninitialized });
Identifiers.ChangeDetectorState = new CompileIdentifierMetadata({ name: 'ChangeDetectorState', moduleUrl: CD_MODULE_URL, runtime: impChangeDetectorState });
Identifiers.checkBinding = new CompileIdentifierMetadata({ name: 'checkBinding', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: impCheckBinding });
Identifiers.flattenNestedViewRenderNodes = new CompileIdentifierMetadata({
    name: 'flattenNestedViewRenderNodes',
    moduleUrl: VIEW_UTILS_MODULE_URL,
    runtime: impFlattenNestedViewRenderNodes
});
Identifiers.devModeEqual = new CompileIdentifierMetadata({ name: 'devModeEqual', moduleUrl: CD_MODULE_URL, runtime: impDevModeEqual });
Identifiers.interpolate = new CompileIdentifierMetadata({ name: 'interpolate', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: impInterpolate });
Identifiers.castByValue = new CompileIdentifierMetadata({ name: 'castByValue', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: impCastByValue });
Identifiers.pureProxies = [
    null,
    new CompileIdentifierMetadata({ name: 'pureProxy1', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: pureProxy1 }),
    new CompileIdentifierMetadata({ name: 'pureProxy2', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: pureProxy2 }),
    new CompileIdentifierMetadata({ name: 'pureProxy3', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: pureProxy3 }),
    new CompileIdentifierMetadata({ name: 'pureProxy4', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: pureProxy4 }),
    new CompileIdentifierMetadata({ name: 'pureProxy5', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: pureProxy5 }),
    new CompileIdentifierMetadata({ name: 'pureProxy6', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: pureProxy6 }),
    new CompileIdentifierMetadata({ name: 'pureProxy7', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: pureProxy7 }),
    new CompileIdentifierMetadata({ name: 'pureProxy8', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: pureProxy8 }),
    new CompileIdentifierMetadata({ name: 'pureProxy9', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: pureProxy9 }),
    new CompileIdentifierMetadata({ name: 'pureProxy10', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: pureProxy10 }),
];
export function identifierToken(identifier) {
    return new CompileTokenMetadata({ identifier: identifier });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpZmllcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLVMzTmh3R0xpLnRtcC9hbmd1bGFyMi9zcmMvY29tcGlsZXIvaWRlbnRpZmllcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBQyx5QkFBeUIsRUFBRSxvQkFBb0IsRUFBQyxNQUFNLG9CQUFvQjtPQUMzRSxFQUFDLE9BQU8sRUFBQyxNQUFNLCtCQUErQjtPQUM5QyxFQUFDLG1CQUFtQixFQUFFLFlBQVksRUFBQyxNQUFNLHdDQUF3QztPQUNqRixFQUNMLFNBQVMsRUFDVCw0QkFBNEIsRUFDNUIsV0FBVyxFQUNYLFlBQVksRUFDWixXQUFXLEVBQ1gsVUFBVSxFQUNWLFVBQVUsRUFDVixVQUFVLEVBQ1YsVUFBVSxFQUNWLFVBQVUsRUFDVixVQUFVLEVBQ1YsVUFBVSxFQUNWLFVBQVUsRUFDVixVQUFVLEVBQ1YsV0FBVyxFQUNaLE1BQU0scUNBQXFDO09BQ3JDLEVBQ0wsYUFBYSxFQUNiLFlBQVksRUFDWixZQUFZLEVBQ1osY0FBYyxFQUNkLGlCQUFpQixFQUNqQixtQkFBbUIsRUFDbkIsdUJBQXVCLEVBQ3hCLE1BQU0scURBQXFEO09BQ3JELEVBQUMsVUFBVSxFQUFDLE1BQU0sa0NBQWtDO09BQ3BELEVBQUMsVUFBVSxFQUFDLE1BQU0sc0NBQXNDO09BQ3hELEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw2Q0FBNkM7T0FDckUsRUFBQyxRQUFRLEVBQUUsbUJBQW1CLEVBQWtCLE1BQU0sOEJBQThCO09BQ3BGLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxpQ0FBaUM7T0FDMUQsRUFBQyxRQUFRLEVBQUMsTUFBTSxvQ0FBb0M7T0FDcEQsRUFBQyxTQUFTLEVBQUMsTUFBTSwwQkFBMEI7T0FDM0MsRUFBQyxRQUFRLEVBQUMsTUFBTSwrQkFBK0I7T0FDL0MsRUFBQyxXQUFXLEVBQUUsWUFBWSxFQUFDLE1BQU0sdUNBQXVD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QUMsQ0FBQztJQUNoRixJQUFJLHlCQUF5QixDQUN6QixFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUMsQ0FBQztJQUNoRixJQUFJLHlCQUF5QixDQUN6QixFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUMsQ0FBQztJQUNoRixJQUFJLHlCQUF5QixDQUN6QixFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUMsQ0FBQztJQUNoRixJQUFJLHlCQUF5QixDQUN6QixFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUMsQ0FBQztJQUNoRixJQUFJLHlCQUF5QixDQUN6QixFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUMsQ0FBQztJQUNoRixJQUFJLHlCQUF5QixDQUN6QixFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUMsQ0FBQztJQUNoRixJQUFJLHlCQUF5QixDQUN6QixFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUMsQ0FBQztDQUNuRixDQUNGO0FBRUQsZ0NBQWdDLFVBQXFDO0lBQ25FLE1BQU0sQ0FBQyxJQUFJLG9CQUFvQixDQUFDLEVBQUMsVUFBVSxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7QUFDNUQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSwgQ29tcGlsZVRva2VuTWV0YWRhdGF9IGZyb20gJy4vY29tcGlsZV9tZXRhZGF0YSc7XG5pbXBvcnQge0FwcFZpZXd9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci92aWV3JztcbmltcG9ydCB7U3RhdGljTm9kZURlYnVnSW5mbywgRGVidWdDb250ZXh0fSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvZGVidWdfY29udGV4dCc7XG5pbXBvcnQge1xuICBWaWV3VXRpbHMsXG4gIGZsYXR0ZW5OZXN0ZWRWaWV3UmVuZGVyTm9kZXMsXG4gIGludGVycG9sYXRlLFxuICBjaGVja0JpbmRpbmcsXG4gIGNhc3RCeVZhbHVlLFxuICBwdXJlUHJveHkxLFxuICBwdXJlUHJveHkyLFxuICBwdXJlUHJveHkzLFxuICBwdXJlUHJveHk0LFxuICBwdXJlUHJveHk1LFxuICBwdXJlUHJveHk2LFxuICBwdXJlUHJveHk3LFxuICBwdXJlUHJveHk4LFxuICBwdXJlUHJveHk5LFxuICBwdXJlUHJveHkxMFxufSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvdmlld191dGlscyc7XG5pbXBvcnQge1xuICB1bmluaXRpYWxpemVkLFxuICBkZXZNb2RlRXF1YWwsXG4gIFNpbXBsZUNoYW5nZSxcbiAgVmFsdWVVbndyYXBwZXIsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDaGFuZ2VEZXRlY3RvclN0YXRlLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9jaGFuZ2VfZGV0ZWN0aW9uL2NoYW5nZV9kZXRlY3Rpb24nO1xuaW1wb3J0IHtBcHBFbGVtZW50fSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvZWxlbWVudCc7XG5pbXBvcnQge0VsZW1lbnRSZWZ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci9lbGVtZW50X3JlZic7XG5pbXBvcnQge1ZpZXdDb250YWluZXJSZWZ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci92aWV3X2NvbnRhaW5lcl9yZWYnO1xuaW1wb3J0IHtSZW5kZXJlciwgUmVuZGVyQ29tcG9uZW50VHlwZSwgUmVuZGVyRGVidWdJbmZvfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9yZW5kZXIvYXBpJztcbmltcG9ydCB7Vmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL21ldGFkYXRhL3ZpZXcnO1xuaW1wb3J0IHtWaWV3VHlwZX0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL3ZpZXdfdHlwZSc7XG5pbXBvcnQge1F1ZXJ5TGlzdH0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyJztcbmltcG9ydCB7SW5qZWN0b3J9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2RpL2luamVjdG9yJztcbmltcG9ydCB7VGVtcGxhdGVSZWYsIFRlbXBsYXRlUmVmX30gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL3RlbXBsYXRlX3JlZic7XG5pbXBvcnQge01PRFVMRV9TVUZGSVh9IGZyb20gJy4vdXRpbCc7XG5cbnZhciBBUFBfVklFV19NT0RVTEVfVVJMID0gJ2Fzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9saW5rZXIvdmlldycgKyBNT0RVTEVfU1VGRklYO1xudmFyIFZJRVdfVVRJTFNfTU9EVUxFX1VSTCA9ICdhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvbGlua2VyL3ZpZXdfdXRpbHMnICsgTU9EVUxFX1NVRkZJWDtcbnZhciBDRF9NT0RVTEVfVVJMID0gJ2Fzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9jaGFuZ2VfZGV0ZWN0aW9uL2NoYW5nZV9kZXRlY3Rpb24nICsgTU9EVUxFX1NVRkZJWDtcblxuLy8gUmVhc3NpZ24gdGhlIGltcG9ydHMgdG8gZGlmZmVyZW50IHZhcmlhYmxlcyBzbyB3ZSBjYW5cbi8vIGRlZmluZSBzdGF0aWMgdmFyaWFibGVzIHdpdGggdGhlIG5hbWUgb2YgdGhlIGltcG9ydC5cbi8vIChvbmx5IG5lZWRlZCBmb3IgRGFydCkuXG52YXIgaW1wVmlld1V0aWxzID0gVmlld1V0aWxzO1xudmFyIGltcEFwcFZpZXcgPSBBcHBWaWV3O1xudmFyIGltcERlYnVnQ29udGV4dCA9IERlYnVnQ29udGV4dDtcbnZhciBpbXBBcHBFbGVtZW50ID0gQXBwRWxlbWVudDtcbnZhciBpbXBFbGVtZW50UmVmID0gRWxlbWVudFJlZjtcbnZhciBpbXBWaWV3Q29udGFpbmVyUmVmID0gVmlld0NvbnRhaW5lclJlZjtcbnZhciBpbXBDaGFuZ2VEZXRlY3RvclJlZiA9IENoYW5nZURldGVjdG9yUmVmO1xudmFyIGltcFJlbmRlckNvbXBvbmVudFR5cGUgPSBSZW5kZXJDb21wb25lbnRUeXBlO1xudmFyIGltcFF1ZXJ5TGlzdCA9IFF1ZXJ5TGlzdDtcbnZhciBpbXBUZW1wbGF0ZVJlZiA9IFRlbXBsYXRlUmVmO1xudmFyIGltcFRlbXBsYXRlUmVmXyA9IFRlbXBsYXRlUmVmXztcbnZhciBpbXBWYWx1ZVVud3JhcHBlciA9IFZhbHVlVW53cmFwcGVyO1xudmFyIGltcEluamVjdG9yID0gSW5qZWN0b3I7XG52YXIgaW1wVmlld0VuY2Fwc3VsYXRpb24gPSBWaWV3RW5jYXBzdWxhdGlvbjtcbnZhciBpbXBWaWV3VHlwZSA9IFZpZXdUeXBlO1xudmFyIGltcENoYW5nZURldGVjdGlvblN0cmF0ZWd5ID0gQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3k7XG52YXIgaW1wU3RhdGljTm9kZURlYnVnSW5mbyA9IFN0YXRpY05vZGVEZWJ1Z0luZm87XG52YXIgaW1wUmVuZGVyZXIgPSBSZW5kZXJlcjtcbnZhciBpbXBTaW1wbGVDaGFuZ2UgPSBTaW1wbGVDaGFuZ2U7XG52YXIgaW1wVW5pbml0aWFsaXplZCA9IHVuaW5pdGlhbGl6ZWQ7XG52YXIgaW1wQ2hhbmdlRGV0ZWN0b3JTdGF0ZSA9IENoYW5nZURldGVjdG9yU3RhdGU7XG52YXIgaW1wRmxhdHRlbk5lc3RlZFZpZXdSZW5kZXJOb2RlcyA9IGZsYXR0ZW5OZXN0ZWRWaWV3UmVuZGVyTm9kZXM7XG52YXIgaW1wRGV2TW9kZUVxdWFsID0gZGV2TW9kZUVxdWFsO1xudmFyIGltcEludGVycG9sYXRlID0gaW50ZXJwb2xhdGU7XG52YXIgaW1wQ2hlY2tCaW5kaW5nID0gY2hlY2tCaW5kaW5nO1xudmFyIGltcENhc3RCeVZhbHVlID0gY2FzdEJ5VmFsdWU7XG5cbmV4cG9ydCBjbGFzcyBJZGVudGlmaWVycyB7XG4gIHN0YXRpYyBWaWV3VXRpbHMgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ1ZpZXdVdGlscycsXG4gICAgbW9kdWxlVXJsOiAnYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2xpbmtlci92aWV3X3V0aWxzJyArIE1PRFVMRV9TVUZGSVgsXG4gICAgcnVudGltZTogaW1wVmlld1V0aWxzXG4gIH0pO1xuICBzdGF0aWMgQXBwVmlldyA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKFxuICAgICAge25hbWU6ICdBcHBWaWV3JywgbW9kdWxlVXJsOiBBUFBfVklFV19NT0RVTEVfVVJMLCBydW50aW1lOiBpbXBBcHBWaWV3fSk7XG4gIHN0YXRpYyBBcHBFbGVtZW50ID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdBcHBFbGVtZW50JyxcbiAgICBtb2R1bGVVcmw6ICdhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvbGlua2VyL2VsZW1lbnQnICsgTU9EVUxFX1NVRkZJWCxcbiAgICBydW50aW1lOiBpbXBBcHBFbGVtZW50XG4gIH0pO1xuICBzdGF0aWMgRWxlbWVudFJlZiA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnRWxlbWVudFJlZicsXG4gICAgbW9kdWxlVXJsOiAnYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2xpbmtlci9lbGVtZW50X3JlZicgKyBNT0RVTEVfU1VGRklYLFxuICAgIHJ1bnRpbWU6IGltcEVsZW1lbnRSZWZcbiAgfSk7XG4gIHN0YXRpYyBWaWV3Q29udGFpbmVyUmVmID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdWaWV3Q29udGFpbmVyUmVmJyxcbiAgICBtb2R1bGVVcmw6ICdhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvbGlua2VyL3ZpZXdfY29udGFpbmVyX3JlZicgKyBNT0RVTEVfU1VGRklYLFxuICAgIHJ1bnRpbWU6IGltcFZpZXdDb250YWluZXJSZWZcbiAgfSk7XG4gIHN0YXRpYyBDaGFuZ2VEZXRlY3RvclJlZiA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnQ2hhbmdlRGV0ZWN0b3JSZWYnLFxuICAgIG1vZHVsZVVybDogJ2Fzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9jaGFuZ2VfZGV0ZWN0aW9uL2NoYW5nZV9kZXRlY3Rvcl9yZWYnICsgTU9EVUxFX1NVRkZJWCxcbiAgICBydW50aW1lOiBpbXBDaGFuZ2VEZXRlY3RvclJlZlxuICB9KTtcbiAgc3RhdGljIFJlbmRlckNvbXBvbmVudFR5cGUgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ1JlbmRlckNvbXBvbmVudFR5cGUnLFxuICAgIG1vZHVsZVVybDogJ2Fzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9yZW5kZXIvYXBpJyArIE1PRFVMRV9TVUZGSVgsXG4gICAgcnVudGltZTogaW1wUmVuZGVyQ29tcG9uZW50VHlwZVxuICB9KTtcbiAgc3RhdGljIFF1ZXJ5TGlzdCA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnUXVlcnlMaXN0JyxcbiAgICBtb2R1bGVVcmw6ICdhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvbGlua2VyL3F1ZXJ5X2xpc3QnICsgTU9EVUxFX1NVRkZJWCxcbiAgICBydW50aW1lOiBpbXBRdWVyeUxpc3RcbiAgfSk7XG4gIHN0YXRpYyBUZW1wbGF0ZVJlZiA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnVGVtcGxhdGVSZWYnLFxuICAgIG1vZHVsZVVybDogJ2Fzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9saW5rZXIvdGVtcGxhdGVfcmVmJyArIE1PRFVMRV9TVUZGSVgsXG4gICAgcnVudGltZTogaW1wVGVtcGxhdGVSZWZcbiAgfSk7XG4gIHN0YXRpYyBUZW1wbGF0ZVJlZl8gPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ1RlbXBsYXRlUmVmXycsXG4gICAgbW9kdWxlVXJsOiAnYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2xpbmtlci90ZW1wbGF0ZV9yZWYnICsgTU9EVUxFX1NVRkZJWCxcbiAgICBydW50aW1lOiBpbXBUZW1wbGF0ZVJlZl9cbiAgfSk7XG4gIHN0YXRpYyBWYWx1ZVVud3JhcHBlciA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKFxuICAgICAge25hbWU6ICdWYWx1ZVVud3JhcHBlcicsIG1vZHVsZVVybDogQ0RfTU9EVUxFX1VSTCwgcnVudGltZTogaW1wVmFsdWVVbndyYXBwZXJ9KTtcbiAgc3RhdGljIEluamVjdG9yID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdJbmplY3RvcicsXG4gICAgbW9kdWxlVXJsOiBgYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2RpL2luamVjdG9yJHtNT0RVTEVfU1VGRklYfWAsXG4gICAgcnVudGltZTogaW1wSW5qZWN0b3JcbiAgfSk7XG4gIHN0YXRpYyBWaWV3RW5jYXBzdWxhdGlvbiA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnVmlld0VuY2Fwc3VsYXRpb24nLFxuICAgIG1vZHVsZVVybDogJ2Fzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9tZXRhZGF0YS92aWV3JyArIE1PRFVMRV9TVUZGSVgsXG4gICAgcnVudGltZTogaW1wVmlld0VuY2Fwc3VsYXRpb25cbiAgfSk7XG4gIHN0YXRpYyBWaWV3VHlwZSA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnVmlld1R5cGUnLFxuICAgIG1vZHVsZVVybDogYGFzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9saW5rZXIvdmlld190eXBlJHtNT0RVTEVfU1VGRklYfWAsXG4gICAgcnVudGltZTogaW1wVmlld1R5cGVcbiAgfSk7XG4gIHN0YXRpYyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3knLFxuICAgIG1vZHVsZVVybDogQ0RfTU9EVUxFX1VSTCxcbiAgICBydW50aW1lOiBpbXBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxuICB9KTtcbiAgc3RhdGljIFN0YXRpY05vZGVEZWJ1Z0luZm8gPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ1N0YXRpY05vZGVEZWJ1Z0luZm8nLFxuICAgIG1vZHVsZVVybDogYGFzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9saW5rZXIvZGVidWdfY29udGV4dCR7TU9EVUxFX1NVRkZJWH1gLFxuICAgIHJ1bnRpbWU6IGltcFN0YXRpY05vZGVEZWJ1Z0luZm9cbiAgfSk7XG4gIHN0YXRpYyBEZWJ1Z0NvbnRleHQgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ0RlYnVnQ29udGV4dCcsXG4gICAgbW9kdWxlVXJsOiBgYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2xpbmtlci9kZWJ1Z19jb250ZXh0JHtNT0RVTEVfU1VGRklYfWAsXG4gICAgcnVudGltZTogaW1wRGVidWdDb250ZXh0XG4gIH0pO1xuICBzdGF0aWMgUmVuZGVyZXIgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ1JlbmRlcmVyJyxcbiAgICBtb2R1bGVVcmw6ICdhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvcmVuZGVyL2FwaScgKyBNT0RVTEVfU1VGRklYLFxuICAgIHJ1bnRpbWU6IGltcFJlbmRlcmVyXG4gIH0pO1xuICBzdGF0aWMgU2ltcGxlQ2hhbmdlID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoXG4gICAgICB7bmFtZTogJ1NpbXBsZUNoYW5nZScsIG1vZHVsZVVybDogQ0RfTU9EVUxFX1VSTCwgcnVudGltZTogaW1wU2ltcGxlQ2hhbmdlfSk7XG4gIHN0YXRpYyB1bmluaXRpYWxpemVkID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoXG4gICAgICB7bmFtZTogJ3VuaW5pdGlhbGl6ZWQnLCBtb2R1bGVVcmw6IENEX01PRFVMRV9VUkwsIHJ1bnRpbWU6IGltcFVuaW5pdGlhbGl6ZWR9KTtcbiAgc3RhdGljIENoYW5nZURldGVjdG9yU3RhdGUgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgIHtuYW1lOiAnQ2hhbmdlRGV0ZWN0b3JTdGF0ZScsIG1vZHVsZVVybDogQ0RfTU9EVUxFX1VSTCwgcnVudGltZTogaW1wQ2hhbmdlRGV0ZWN0b3JTdGF0ZX0pO1xuICBzdGF0aWMgY2hlY2tCaW5kaW5nID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoXG4gICAgICB7bmFtZTogJ2NoZWNrQmluZGluZycsIG1vZHVsZVVybDogVklFV19VVElMU19NT0RVTEVfVVJMLCBydW50aW1lOiBpbXBDaGVja0JpbmRpbmd9KTtcbiAgc3RhdGljIGZsYXR0ZW5OZXN0ZWRWaWV3UmVuZGVyTm9kZXMgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ2ZsYXR0ZW5OZXN0ZWRWaWV3UmVuZGVyTm9kZXMnLFxuICAgIG1vZHVsZVVybDogVklFV19VVElMU19NT0RVTEVfVVJMLFxuICAgIHJ1bnRpbWU6IGltcEZsYXR0ZW5OZXN0ZWRWaWV3UmVuZGVyTm9kZXNcbiAgfSk7XG4gIHN0YXRpYyBkZXZNb2RlRXF1YWwgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgIHtuYW1lOiAnZGV2TW9kZUVxdWFsJywgbW9kdWxlVXJsOiBDRF9NT0RVTEVfVVJMLCBydW50aW1lOiBpbXBEZXZNb2RlRXF1YWx9KTtcbiAgc3RhdGljIGludGVycG9sYXRlID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoXG4gICAgICB7bmFtZTogJ2ludGVycG9sYXRlJywgbW9kdWxlVXJsOiBWSUVXX1VUSUxTX01PRFVMRV9VUkwsIHJ1bnRpbWU6IGltcEludGVycG9sYXRlfSk7XG4gIHN0YXRpYyBjYXN0QnlWYWx1ZSA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKFxuICAgICAge25hbWU6ICdjYXN0QnlWYWx1ZScsIG1vZHVsZVVybDogVklFV19VVElMU19NT0RVTEVfVVJMLCBydW50aW1lOiBpbXBDYXN0QnlWYWx1ZX0pO1xuICBzdGF0aWMgcHVyZVByb3hpZXMgPSBbXG4gICAgbnVsbCxcbiAgICBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgICAge25hbWU6ICdwdXJlUHJveHkxJywgbW9kdWxlVXJsOiBWSUVXX1VUSUxTX01PRFVMRV9VUkwsIHJ1bnRpbWU6IHB1cmVQcm94eTF9KSxcbiAgICBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgICAge25hbWU6ICdwdXJlUHJveHkyJywgbW9kdWxlVXJsOiBWSUVXX1VUSUxTX01PRFVMRV9VUkwsIHJ1bnRpbWU6IHB1cmVQcm94eTJ9KSxcbiAgICBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgICAge25hbWU6ICdwdXJlUHJveHkzJywgbW9kdWxlVXJsOiBWSUVXX1VUSUxTX01PRFVMRV9VUkwsIHJ1bnRpbWU6IHB1cmVQcm94eTN9KSxcbiAgICBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgICAge25hbWU6ICdwdXJlUHJveHk0JywgbW9kdWxlVXJsOiBWSUVXX1VUSUxTX01PRFVMRV9VUkwsIHJ1bnRpbWU6IHB1cmVQcm94eTR9KSxcbiAgICBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgICAge25hbWU6ICdwdXJlUHJveHk1JywgbW9kdWxlVXJsOiBWSUVXX1VUSUxTX01PRFVMRV9VUkwsIHJ1bnRpbWU6IHB1cmVQcm94eTV9KSxcbiAgICBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgICAge25hbWU6ICdwdXJlUHJveHk2JywgbW9kdWxlVXJsOiBWSUVXX1VUSUxTX01PRFVMRV9VUkwsIHJ1bnRpbWU6IHB1cmVQcm94eTZ9KSxcbiAgICBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgICAge25hbWU6ICdwdXJlUHJveHk3JywgbW9kdWxlVXJsOiBWSUVXX1VUSUxTX01PRFVMRV9VUkwsIHJ1bnRpbWU6IHB1cmVQcm94eTd9KSxcbiAgICBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgICAge25hbWU6ICdwdXJlUHJveHk4JywgbW9kdWxlVXJsOiBWSUVXX1VUSUxTX01PRFVMRV9VUkwsIHJ1bnRpbWU6IHB1cmVQcm94eTh9KSxcbiAgICBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgICAge25hbWU6ICdwdXJlUHJveHk5JywgbW9kdWxlVXJsOiBWSUVXX1VUSUxTX01PRFVMRV9VUkwsIHJ1bnRpbWU6IHB1cmVQcm94eTl9KSxcbiAgICBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgICAge25hbWU6ICdwdXJlUHJveHkxMCcsIG1vZHVsZVVybDogVklFV19VVElMU19NT0RVTEVfVVJMLCBydW50aW1lOiBwdXJlUHJveHkxMH0pLFxuICBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpZmllclRva2VuKGlkZW50aWZpZXI6IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEpOiBDb21waWxlVG9rZW5NZXRhZGF0YSB7XG4gIHJldHVybiBuZXcgQ29tcGlsZVRva2VuTWV0YWRhdGEoe2lkZW50aWZpZXI6IGlkZW50aWZpZXJ9KTtcbn1cbiJdfQ==