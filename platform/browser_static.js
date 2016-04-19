'use strict';"use strict";
var angular_entrypoint_1 = require('angular2/src/core/angular_entrypoint');
exports.AngularEntrypoint = angular_entrypoint_1.AngularEntrypoint;
var browser_common_1 = require('angular2/src/platform/browser_common');
exports.BROWSER_PROVIDERS = browser_common_1.BROWSER_PROVIDERS;
exports.ELEMENT_PROBE_PROVIDERS = browser_common_1.ELEMENT_PROBE_PROVIDERS;
exports.ELEMENT_PROBE_PROVIDERS_PROD_MODE = browser_common_1.ELEMENT_PROBE_PROVIDERS_PROD_MODE;
exports.inspectNativeElement = browser_common_1.inspectNativeElement;
exports.BrowserDomAdapter = browser_common_1.BrowserDomAdapter;
exports.By = browser_common_1.By;
exports.Title = browser_common_1.Title;
exports.enableDebugTools = browser_common_1.enableDebugTools;
exports.disableDebugTools = browser_common_1.disableDebugTools;
var lang_1 = require('angular2/src/facade/lang');
var browser_common_2 = require('angular2/src/platform/browser_common');
var core_1 = require('angular2/core');
/**
 * An array of providers that should be passed into `application()` when bootstrapping a component
 * when all templates
 * have been precompiled offline.
 */
exports.BROWSER_APP_PROVIDERS = browser_common_2.BROWSER_APP_COMMON_PROVIDERS;
/**
 * See {@link bootstrap} for more information.
 */
function bootstrapStatic(appComponentType, customProviders, initReflector) {
    if (lang_1.isPresent(initReflector)) {
        initReflector();
    }
    var appProviders = lang_1.isPresent(customProviders) ? [exports.BROWSER_APP_PROVIDERS, customProviders] : exports.BROWSER_APP_PROVIDERS;
    return core_1.platform(browser_common_2.BROWSER_PROVIDERS).application(appProviders).bootstrap(appComponentType);
}
exports.bootstrapStatic = bootstrapStatic;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlcl9zdGF0aWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLTN6MUNrMzFqLnRtcC9hbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyX3N0YXRpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsbUNBQWdDLHNDQUFzQyxDQUFDO0FBQS9ELG1FQUErRDtBQUN2RSwrQkFVTyxzQ0FBc0MsQ0FBQztBQVQ1QywrREFBaUI7QUFDakIsMkVBQXVCO0FBQ3ZCLCtGQUFpQztBQUNqQyxxRUFBb0I7QUFDcEIsK0RBQWlCO0FBQ2pCLGlDQUFFO0FBQ0YsdUNBQUs7QUFDTCw2REFBZ0I7QUFDaEIsK0RBQzRDO0FBRTlDLHFCQUE4QiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3pELCtCQUdPLHNDQUFzQyxDQUFDLENBQUE7QUFDOUMscUJBQXFDLGVBQWUsQ0FBQyxDQUFBO0FBRXJEOzs7O0dBSUc7QUFDVSw2QkFBcUIsR0FDOUIsNkNBQTRCLENBQUM7QUFFakM7O0dBRUc7QUFDSCx5QkFBZ0MsZ0JBQXNCLEVBQ3RCLGVBQXdELEVBQ3hELGFBQXdCO0lBQ3RELEVBQUUsQ0FBQyxDQUFDLGdCQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdCLGFBQWEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxJQUFJLFlBQVksR0FDWixnQkFBUyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsNkJBQXFCLEVBQUUsZUFBZSxDQUFDLEdBQUcsNkJBQXFCLENBQUM7SUFDbEcsTUFBTSxDQUFDLGVBQVEsQ0FBQyxrQ0FBaUIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUMzRixDQUFDO0FBVmUsdUJBQWUsa0JBVTlCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge0FuZ3VsYXJFbnRyeXBvaW50fSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9hbmd1bGFyX2VudHJ5cG9pbnQnO1xuZXhwb3J0IHtcbiAgQlJPV1NFUl9QUk9WSURFUlMsXG4gIEVMRU1FTlRfUFJPQkVfUFJPVklERVJTLFxuICBFTEVNRU5UX1BST0JFX1BST1ZJREVSU19QUk9EX01PREUsXG4gIGluc3BlY3ROYXRpdmVFbGVtZW50LFxuICBCcm93c2VyRG9tQWRhcHRlcixcbiAgQnksXG4gIFRpdGxlLFxuICBlbmFibGVEZWJ1Z1Rvb2xzLFxuICBkaXNhYmxlRGVidWdUb29sc1xufSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vYnJvd3Nlcl9jb21tb24nO1xuXG5pbXBvcnQge1R5cGUsIGlzUHJlc2VudH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7XG4gIEJST1dTRVJfUFJPVklERVJTLFxuICBCUk9XU0VSX0FQUF9DT01NT05fUFJPVklERVJTXG59IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9icm93c2VyX2NvbW1vbic7XG5pbXBvcnQge0NvbXBvbmVudFJlZiwgcGxhdGZvcm19IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG4vKipcbiAqIEFuIGFycmF5IG9mIHByb3ZpZGVycyB0aGF0IHNob3VsZCBiZSBwYXNzZWQgaW50byBgYXBwbGljYXRpb24oKWAgd2hlbiBib290c3RyYXBwaW5nIGEgY29tcG9uZW50XG4gKiB3aGVuIGFsbCB0ZW1wbGF0ZXNcbiAqIGhhdmUgYmVlbiBwcmVjb21waWxlZCBvZmZsaW5lLlxuICovXG5leHBvcnQgY29uc3QgQlJPV1NFUl9BUFBfUFJPVklERVJTOiBBcnJheTxhbnkgLypUeXBlIHwgUHJvdmlkZXIgfCBhbnlbXSovPiA9XG4gICAgQlJPV1NFUl9BUFBfQ09NTU9OX1BST1ZJREVSUztcblxuLyoqXG4gKiBTZWUge0BsaW5rIGJvb3RzdHJhcH0gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBib290c3RyYXBTdGF0aWMoYXBwQ29tcG9uZW50VHlwZTogVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tUHJvdmlkZXJzPzogQXJyYXk8YW55IC8qVHlwZSB8IFByb3ZpZGVyIHwgYW55W10qLz4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRSZWZsZWN0b3I/OiBGdW5jdGlvbik6IFByb21pc2U8Q29tcG9uZW50UmVmPiB7XG4gIGlmIChpc1ByZXNlbnQoaW5pdFJlZmxlY3RvcikpIHtcbiAgICBpbml0UmVmbGVjdG9yKCk7XG4gIH1cblxuICBsZXQgYXBwUHJvdmlkZXJzID1cbiAgICAgIGlzUHJlc2VudChjdXN0b21Qcm92aWRlcnMpID8gW0JST1dTRVJfQVBQX1BST1ZJREVSUywgY3VzdG9tUHJvdmlkZXJzXSA6IEJST1dTRVJfQVBQX1BST1ZJREVSUztcbiAgcmV0dXJuIHBsYXRmb3JtKEJST1dTRVJfUFJPVklERVJTKS5hcHBsaWNhdGlvbihhcHBQcm92aWRlcnMpLmJvb3RzdHJhcChhcHBDb21wb25lbnRUeXBlKTtcbn1cbiJdfQ==