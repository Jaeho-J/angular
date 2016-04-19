import { CompileIdentifierMetadata, CompileTokenMetadata } from './compile_metadata';
import { AppView } from 'angular2/src/core/linker/view';
import { StaticNodeDebugInfo, DebugContext } from 'angular2/src/core/linker/debug_context';
import { flattenNestedViewRenderNodes, interpolate, checkBinding } from 'angular2/src/core/linker/view_utils';
import { uninitialized, devModeEqual, SimpleChange, ValueUnwrapper, ChangeDetectorRef, ChangeDetectorState, ChangeDetectionStrategy } from 'angular2/src/core/change_detection/change_detection';
import { AppViewManager_ } from 'angular2/src/core/linker/view_manager';
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
var impAppViewManager_ = AppViewManager_;
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
export class Identifiers {
}
Identifiers.AppViewManager_ = new CompileIdentifierMetadata({
    name: 'AppViewManager_',
    moduleUrl: 'asset:angular2/lib/src/core/linker/view_manager' + MODULE_SUFFIX,
    runtime: impAppViewManager_
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
export function identifierToken(identifier) {
    return new CompileTokenMetadata({ identifier: identifier });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpZmllcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLVVJYTNId0dHLnRtcC9hbmd1bGFyMi9zcmMvY29tcGlsZXIvaWRlbnRpZmllcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBQyx5QkFBeUIsRUFBRSxvQkFBb0IsRUFBQyxNQUFNLG9CQUFvQjtPQUMzRSxFQUFDLE9BQU8sRUFBQyxNQUFNLCtCQUErQjtPQUM5QyxFQUFDLG1CQUFtQixFQUFFLFlBQVksRUFBQyxNQUFNLHdDQUF3QztPQUNqRixFQUNMLDRCQUE0QixFQUM1QixXQUFXLEVBQ1gsWUFBWSxFQUNiLE1BQU0scUNBQXFDO09BQ3JDLEVBQ0wsYUFBYSxFQUNiLFlBQVksRUFDWixZQUFZLEVBQ1osY0FBYyxFQUNkLGlCQUFpQixFQUNqQixtQkFBbUIsRUFDbkIsdUJBQXVCLEVBQ3hCLE1BQU0scURBQXFEO09BQ3JELEVBQUMsZUFBZSxFQUFDLE1BQU0sdUNBQXVDO09BQzlELEVBQUMsVUFBVSxFQUFDLE1BQU0sa0NBQWtDO09BQ3BELEVBQUMsVUFBVSxFQUFDLE1BQU0sc0NBQXNDO09BQ3hELEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw2Q0FBNkM7T0FDckUsRUFBQyxRQUFRLEVBQUUsbUJBQW1CLEVBQWtCLE1BQU0sOEJBQThCO09BQ3BGLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxpQ0FBaUM7T0FDMUQsRUFBQyxRQUFRLEVBQUMsTUFBTSxvQ0FBb0M7T0FDcEQsRUFBQyxTQUFTLEVBQUMsTUFBTSwwQkFBMEI7T0FDM0MsRUFBQyxRQUFRLEVBQUMsTUFBTSwrQkFBK0I7T0FDL0MsRUFBQyxXQUFXLEVBQUUsWUFBWSxFQUFDLE1BQU0sdUNBQXVDO09BQ3hFLEVBQUMsYUFBYSxFQUFDLE1BQU0sUUFBUTtBQUVwQyxJQUFJLG1CQUFtQixHQUFHLHlDQUF5QyxHQUFHLGFBQWEsQ0FBQztBQUNwRixJQUFJ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QU8sRUFBRSxlQUFlLEVBQUMsQ0FBQyxDQUFDO0FBQ2pGLHdDQUE0QixHQUFHLElBQUkseUJBQXlCLENBQUM7SUFDbEUsSUFBSSxFQUFFLDhCQUE4QjtJQUNwQyxTQUFTLEVBQUUscUJBQXFCO0lBQ2hDLE9BQU8sRUFBRSwrQkFBK0I7Q0FDekMsQ0FBQyxDQUFDO0FBQ0ksd0JBQVksR0FBRyxJQUFJLHlCQUF5QixDQUMvQyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFDLENBQUMsQ0FBQztBQUN6RSx1QkFBVyxHQUFHLElBQUkseUJBQXlCLENBQzlDLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUscUJBQXFCLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBQyxDQUFDLENBQ3RGO0FBRUQsZ0NBQWdDLFVBQXFDO0lBQ25FLE1BQU0sQ0FBQyxJQUFJLG9CQUFvQixDQUFDLEVBQUMsVUFBVSxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7QUFDNUQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSwgQ29tcGlsZVRva2VuTWV0YWRhdGF9IGZyb20gJy4vY29tcGlsZV9tZXRhZGF0YSc7XG5pbXBvcnQge0FwcFZpZXd9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci92aWV3JztcbmltcG9ydCB7U3RhdGljTm9kZURlYnVnSW5mbywgRGVidWdDb250ZXh0fSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvZGVidWdfY29udGV4dCc7XG5pbXBvcnQge1xuICBmbGF0dGVuTmVzdGVkVmlld1JlbmRlck5vZGVzLFxuICBpbnRlcnBvbGF0ZSxcbiAgY2hlY2tCaW5kaW5nXG59IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci92aWV3X3V0aWxzJztcbmltcG9ydCB7XG4gIHVuaW5pdGlhbGl6ZWQsXG4gIGRldk1vZGVFcXVhbCxcbiAgU2ltcGxlQ2hhbmdlLFxuICBWYWx1ZVVud3JhcHBlcixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENoYW5nZURldGVjdG9yU3RhdGUsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2NoYW5nZV9kZXRlY3Rpb24vY2hhbmdlX2RldGVjdGlvbic7XG5pbXBvcnQge0FwcFZpZXdNYW5hZ2VyX30gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL3ZpZXdfbWFuYWdlcic7XG5pbXBvcnQge0FwcEVsZW1lbnR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci9lbGVtZW50JztcbmltcG9ydCB7RWxlbWVudFJlZn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL2VsZW1lbnRfcmVmJztcbmltcG9ydCB7Vmlld0NvbnRhaW5lclJlZn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL3ZpZXdfY29udGFpbmVyX3JlZic7XG5pbXBvcnQge1JlbmRlcmVyLCBSZW5kZXJDb21wb25lbnRUeXBlLCBSZW5kZXJEZWJ1Z0luZm99IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL3JlbmRlci9hcGknO1xuaW1wb3J0IHtWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbWV0YWRhdGEvdmlldyc7XG5pbXBvcnQge1ZpZXdUeXBlfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvdmlld190eXBlJztcbmltcG9ydCB7UXVlcnlMaXN0fSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXInO1xuaW1wb3J0IHtJbmplY3Rvcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvZGkvaW5qZWN0b3InO1xuaW1wb3J0IHtUZW1wbGF0ZVJlZiwgVGVtcGxhdGVSZWZffSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvdGVtcGxhdGVfcmVmJztcbmltcG9ydCB7TU9EVUxFX1NVRkZJWH0gZnJvbSAnLi91dGlsJztcblxudmFyIEFQUF9WSUVXX01PRFVMRV9VUkwgPSAnYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2xpbmtlci92aWV3JyArIE1PRFVMRV9TVUZGSVg7XG52YXIgVklFV19VVElMU19NT0RVTEVfVVJMID0gJ2Fzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9saW5rZXIvdmlld191dGlscycgKyBNT0RVTEVfU1VGRklYO1xudmFyIENEX01PRFVMRV9VUkwgPSAnYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2NoYW5nZV9kZXRlY3Rpb24vY2hhbmdlX2RldGVjdGlvbicgKyBNT0RVTEVfU1VGRklYO1xuXG4vLyBSZWFzc2lnbiB0aGUgaW1wb3J0cyB0byBkaWZmZXJlbnQgdmFyaWFibGVzIHNvIHdlIGNhblxuLy8gZGVmaW5lIHN0YXRpYyB2YXJpYWJsZXMgd2l0aCB0aGUgbmFtZSBvZiB0aGUgaW1wb3J0LlxuLy8gKG9ubHkgbmVlZGVkIGZvciBEYXJ0KS5cbnZhciBpbXBBcHBWaWV3TWFuYWdlcl8gPSBBcHBWaWV3TWFuYWdlcl87XG52YXIgaW1wQXBwVmlldyA9IEFwcFZpZXc7XG52YXIgaW1wRGVidWdDb250ZXh0ID0gRGVidWdDb250ZXh0O1xudmFyIGltcEFwcEVsZW1lbnQgPSBBcHBFbGVtZW50O1xudmFyIGltcEVsZW1lbnRSZWYgPSBFbGVtZW50UmVmO1xudmFyIGltcFZpZXdDb250YWluZXJSZWYgPSBWaWV3Q29udGFpbmVyUmVmO1xudmFyIGltcENoYW5nZURldGVjdG9yUmVmID0gQ2hhbmdlRGV0ZWN0b3JSZWY7XG52YXIgaW1wUmVuZGVyQ29tcG9uZW50VHlwZSA9IFJlbmRlckNvbXBvbmVudFR5cGU7XG52YXIgaW1wUXVlcnlMaXN0ID0gUXVlcnlMaXN0O1xudmFyIGltcFRlbXBsYXRlUmVmID0gVGVtcGxhdGVSZWY7XG52YXIgaW1wVGVtcGxhdGVSZWZfID0gVGVtcGxhdGVSZWZfO1xudmFyIGltcFZhbHVlVW53cmFwcGVyID0gVmFsdWVVbndyYXBwZXI7XG52YXIgaW1wSW5qZWN0b3IgPSBJbmplY3RvcjtcbnZhciBpbXBWaWV3RW5jYXBzdWxhdGlvbiA9IFZpZXdFbmNhcHN1bGF0aW9uO1xudmFyIGltcFZpZXdUeXBlID0gVmlld1R5cGU7XG52YXIgaW1wQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgPSBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneTtcbnZhciBpbXBTdGF0aWNOb2RlRGVidWdJbmZvID0gU3RhdGljTm9kZURlYnVnSW5mbztcbnZhciBpbXBSZW5kZXJlciA9IFJlbmRlcmVyO1xudmFyIGltcFNpbXBsZUNoYW5nZSA9IFNpbXBsZUNoYW5nZTtcbnZhciBpbXBVbmluaXRpYWxpemVkID0gdW5pbml0aWFsaXplZDtcbnZhciBpbXBDaGFuZ2VEZXRlY3RvclN0YXRlID0gQ2hhbmdlRGV0ZWN0b3JTdGF0ZTtcbnZhciBpbXBGbGF0dGVuTmVzdGVkVmlld1JlbmRlck5vZGVzID0gZmxhdHRlbk5lc3RlZFZpZXdSZW5kZXJOb2RlcztcbnZhciBpbXBEZXZNb2RlRXF1YWwgPSBkZXZNb2RlRXF1YWw7XG52YXIgaW1wSW50ZXJwb2xhdGUgPSBpbnRlcnBvbGF0ZTtcbnZhciBpbXBDaGVja0JpbmRpbmcgPSBjaGVja0JpbmRpbmc7XG5cbmV4cG9ydCBjbGFzcyBJZGVudGlmaWVycyB7XG4gIHN0YXRpYyBBcHBWaWV3TWFuYWdlcl8gPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ0FwcFZpZXdNYW5hZ2VyXycsXG4gICAgbW9kdWxlVXJsOiAnYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2xpbmtlci92aWV3X21hbmFnZXInICsgTU9EVUxFX1NVRkZJWCxcbiAgICBydW50aW1lOiBpbXBBcHBWaWV3TWFuYWdlcl9cbiAgfSk7XG4gIHN0YXRpYyBBcHBWaWV3ID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoXG4gICAgICB7bmFtZTogJ0FwcFZpZXcnLCBtb2R1bGVVcmw6IEFQUF9WSUVXX01PRFVMRV9VUkwsIHJ1bnRpbWU6IGltcEFwcFZpZXd9KTtcbiAgc3RhdGljIEFwcEVsZW1lbnQgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ0FwcEVsZW1lbnQnLFxuICAgIG1vZHVsZVVybDogJ2Fzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9saW5rZXIvZWxlbWVudCcgKyBNT0RVTEVfU1VGRklYLFxuICAgIHJ1bnRpbWU6IGltcEFwcEVsZW1lbnRcbiAgfSk7XG4gIHN0YXRpYyBFbGVtZW50UmVmID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdFbGVtZW50UmVmJyxcbiAgICBtb2R1bGVVcmw6ICdhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvbGlua2VyL2VsZW1lbnRfcmVmJyArIE1PRFVMRV9TVUZGSVgsXG4gICAgcnVudGltZTogaW1wRWxlbWVudFJlZlxuICB9KTtcbiAgc3RhdGljIFZpZXdDb250YWluZXJSZWYgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ1ZpZXdDb250YWluZXJSZWYnLFxuICAgIG1vZHVsZVVybDogJ2Fzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9saW5rZXIvdmlld19jb250YWluZXJfcmVmJyArIE1PRFVMRV9TVUZGSVgsXG4gICAgcnVudGltZTogaW1wVmlld0NvbnRhaW5lclJlZlxuICB9KTtcbiAgc3RhdGljIENoYW5nZURldGVjdG9yUmVmID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdDaGFuZ2VEZXRlY3RvclJlZicsXG4gICAgbW9kdWxlVXJsOiAnYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2NoYW5nZV9kZXRlY3Rpb24vY2hhbmdlX2RldGVjdG9yX3JlZicgKyBNT0RVTEVfU1VGRklYLFxuICAgIHJ1bnRpbWU6IGltcENoYW5nZURldGVjdG9yUmVmXG4gIH0pO1xuICBzdGF0aWMgUmVuZGVyQ29tcG9uZW50VHlwZSA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnUmVuZGVyQ29tcG9uZW50VHlwZScsXG4gICAgbW9kdWxlVXJsOiAnYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL3JlbmRlci9hcGknICsgTU9EVUxFX1NVRkZJWCxcbiAgICBydW50aW1lOiBpbXBSZW5kZXJDb21wb25lbnRUeXBlXG4gIH0pO1xuICBzdGF0aWMgUXVlcnlMaXN0ID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdRdWVyeUxpc3QnLFxuICAgIG1vZHVsZVVybDogJ2Fzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9saW5rZXIvcXVlcnlfbGlzdCcgKyBNT0RVTEVfU1VGRklYLFxuICAgIHJ1bnRpbWU6IGltcFF1ZXJ5TGlzdFxuICB9KTtcbiAgc3RhdGljIFRlbXBsYXRlUmVmID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdUZW1wbGF0ZVJlZicsXG4gICAgbW9kdWxlVXJsOiAnYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2xpbmtlci90ZW1wbGF0ZV9yZWYnICsgTU9EVUxFX1NVRkZJWCxcbiAgICBydW50aW1lOiBpbXBUZW1wbGF0ZVJlZlxuICB9KTtcbiAgc3RhdGljIFRlbXBsYXRlUmVmXyA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnVGVtcGxhdGVSZWZfJyxcbiAgICBtb2R1bGVVcmw6ICdhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvbGlua2VyL3RlbXBsYXRlX3JlZicgKyBNT0RVTEVfU1VGRklYLFxuICAgIHJ1bnRpbWU6IGltcFRlbXBsYXRlUmVmX1xuICB9KTtcbiAgc3RhdGljIFZhbHVlVW53cmFwcGVyID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoXG4gICAgICB7bmFtZTogJ1ZhbHVlVW53cmFwcGVyJywgbW9kdWxlVXJsOiBDRF9NT0RVTEVfVVJMLCBydW50aW1lOiBpbXBWYWx1ZVVud3JhcHBlcn0pO1xuICBzdGF0aWMgSW5qZWN0b3IgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ0luamVjdG9yJyxcbiAgICBtb2R1bGVVcmw6IGBhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvZGkvaW5qZWN0b3Ike01PRFVMRV9TVUZGSVh9YCxcbiAgICBydW50aW1lOiBpbXBJbmplY3RvclxuICB9KTtcbiAgc3RhdGljIFZpZXdFbmNhcHN1bGF0aW9uID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdWaWV3RW5jYXBzdWxhdGlvbicsXG4gICAgbW9kdWxlVXJsOiAnYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL21ldGFkYXRhL3ZpZXcnICsgTU9EVUxFX1NVRkZJWCxcbiAgICBydW50aW1lOiBpbXBWaWV3RW5jYXBzdWxhdGlvblxuICB9KTtcbiAgc3RhdGljIFZpZXdUeXBlID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdWaWV3VHlwZScsXG4gICAgbW9kdWxlVXJsOiBgYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2xpbmtlci92aWV3X3R5cGUke01PRFVMRV9TVUZGSVh9YCxcbiAgICBydW50aW1lOiBpbXBWaWV3VHlwZVxuICB9KTtcbiAgc3RhdGljIENoYW5nZURldGVjdGlvblN0cmF0ZWd5ID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneScsXG4gICAgbW9kdWxlVXJsOiBDRF9NT0RVTEVfVVJMLFxuICAgIHJ1bnRpbWU6IGltcENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG4gIH0pO1xuICBzdGF0aWMgU3RhdGljTm9kZURlYnVnSW5mbyA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnU3RhdGljTm9kZURlYnVnSW5mbycsXG4gICAgbW9kdWxlVXJsOiBgYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2xpbmtlci9kZWJ1Z19jb250ZXh0JHtNT0RVTEVfU1VGRklYfWAsXG4gICAgcnVudGltZTogaW1wU3RhdGljTm9kZURlYnVnSW5mb1xuICB9KTtcbiAgc3RhdGljIERlYnVnQ29udGV4dCA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnRGVidWdDb250ZXh0JyxcbiAgICBtb2R1bGVVcmw6IGBhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvbGlua2VyL2RlYnVnX2NvbnRleHQke01PRFVMRV9TVUZGSVh9YCxcbiAgICBydW50aW1lOiBpbXBEZWJ1Z0NvbnRleHRcbiAgfSk7XG4gIHN0YXRpYyBSZW5kZXJlciA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnUmVuZGVyZXInLFxuICAgIG1vZHVsZVVybDogJ2Fzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9yZW5kZXIvYXBpJyArIE1PRFVMRV9TVUZGSVgsXG4gICAgcnVudGltZTogaW1wUmVuZGVyZXJcbiAgfSk7XG4gIHN0YXRpYyBTaW1wbGVDaGFuZ2UgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgIHtuYW1lOiAnU2ltcGxlQ2hhbmdlJywgbW9kdWxlVXJsOiBDRF9NT0RVTEVfVVJMLCBydW50aW1lOiBpbXBTaW1wbGVDaGFuZ2V9KTtcbiAgc3RhdGljIHVuaW5pdGlhbGl6ZWQgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgIHtuYW1lOiAndW5pbml0aWFsaXplZCcsIG1vZHVsZVVybDogQ0RfTU9EVUxFX1VSTCwgcnVudGltZTogaW1wVW5pbml0aWFsaXplZH0pO1xuICBzdGF0aWMgQ2hhbmdlRGV0ZWN0b3JTdGF0ZSA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKFxuICAgICAge25hbWU6ICdDaGFuZ2VEZXRlY3RvclN0YXRlJywgbW9kdWxlVXJsOiBDRF9NT0RVTEVfVVJMLCBydW50aW1lOiBpbXBDaGFuZ2VEZXRlY3RvclN0YXRlfSk7XG4gIHN0YXRpYyBjaGVja0JpbmRpbmcgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgIHtuYW1lOiAnY2hlY2tCaW5kaW5nJywgbW9kdWxlVXJsOiBWSUVXX1VUSUxTX01PRFVMRV9VUkwsIHJ1bnRpbWU6IGltcENoZWNrQmluZGluZ30pO1xuICBzdGF0aWMgZmxhdHRlbk5lc3RlZFZpZXdSZW5kZXJOb2RlcyA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnZmxhdHRlbk5lc3RlZFZpZXdSZW5kZXJOb2RlcycsXG4gICAgbW9kdWxlVXJsOiBWSUVXX1VUSUxTX01PRFVMRV9VUkwsXG4gICAgcnVudGltZTogaW1wRmxhdHRlbk5lc3RlZFZpZXdSZW5kZXJOb2Rlc1xuICB9KTtcbiAgc3RhdGljIGRldk1vZGVFcXVhbCA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKFxuICAgICAge25hbWU6ICdkZXZNb2RlRXF1YWwnLCBtb2R1bGVVcmw6IENEX01PRFVMRV9VUkwsIHJ1bnRpbWU6IGltcERldk1vZGVFcXVhbH0pO1xuICBzdGF0aWMgaW50ZXJwb2xhdGUgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgIHtuYW1lOiAnaW50ZXJwb2xhdGUnLCBtb2R1bGVVcmw6IFZJRVdfVVRJTFNfTU9EVUxFX1VSTCwgcnVudGltZTogaW1wSW50ZXJwb2xhdGV9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aWZpZXJUb2tlbihpZGVudGlmaWVyOiBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKTogQ29tcGlsZVRva2VuTWV0YWRhdGEge1xuICByZXR1cm4gbmV3IENvbXBpbGVUb2tlbk1ldGFkYXRhKHtpZGVudGlmaWVyOiBpZGVudGlmaWVyfSk7XG59XG4iXX0=