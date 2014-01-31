/*
    This file is part of the WebKit open source project.
    This file has been generated by generate-bindings.pl. DO NOT MODIFY!

    This library is free software; you can redistribute it and/or
    modify it under the terms of the GNU Library General Public
    License as published by the Free Software Foundation; either
    version 2 of the License, or (at your option) any later version.

    This library is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
    Library General Public License for more details.

    You should have received a copy of the GNU Library General Public License
    along with this library; see the file COPYING.LIB.  If not, write to
    the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor,
    Boston, MA 02110-1301, USA.
*/

#include "config.h"

#if ENABLE(WEB_TIMING)

#include "JSPerformanceTiming.h"

#include "PerformanceTiming.h"
#include <wtf/GetPtr.h>

using namespace JSC;

namespace WebCore {

/* Hash table */

static const HashTableValue JSPerformanceTimingTableValues[] =
{
    { "navigationStart", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsPerformanceTimingNavigationStart), (intptr_t)0 },
    { "unloadEventStart", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsPerformanceTimingUnloadEventStart), (intptr_t)0 },
    { "unloadEventEnd", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsPerformanceTimingUnloadEventEnd), (intptr_t)0 },
    { "redirectStart", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsPerformanceTimingRedirectStart), (intptr_t)0 },
    { "redirectEnd", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsPerformanceTimingRedirectEnd), (intptr_t)0 },
    { "fetchStart", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsPerformanceTimingFetchStart), (intptr_t)0 },
    { "domainLookupStart", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsPerformanceTimingDomainLookupStart), (intptr_t)0 },
    { "domainLookupEnd", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsPerformanceTimingDomainLookupEnd), (intptr_t)0 },
    { "connectStart", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsPerformanceTimingConnectStart), (intptr_t)0 },
    { "connectEnd", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsPerformanceTimingConnectEnd), (intptr_t)0 },
    { "secureConnectionStart", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsPerformanceTimingSecureConnectionStart), (intptr_t)0 },
    { "requestStart", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsPerformanceTimingRequestStart), (intptr_t)0 },
    { "responseStart", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsPerformanceTimingResponseStart), (intptr_t)0 },
    { "responseEnd", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsPerformanceTimingResponseEnd), (intptr_t)0 },
    { "domLoading", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsPerformanceTimingDomLoading), (intptr_t)0 },
    { "domInteractive", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsPerformanceTimingDomInteractive), (intptr_t)0 },
    { "domContentLoadedEventStart", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsPerformanceTimingDomContentLoadedEventStart), (intptr_t)0 },
    { "domContentLoadedEventEnd", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsPerformanceTimingDomContentLoadedEventEnd), (intptr_t)0 },
    { "domComplete", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsPerformanceTimingDomComplete), (intptr_t)0 },
    { "loadEventStart", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsPerformanceTimingLoadEventStart), (intptr_t)0 },
    { "loadEventEnd", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsPerformanceTimingLoadEventEnd), (intptr_t)0 },
    { "constructor", DontEnum | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsPerformanceTimingConstructor), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSPerformanceTimingTable = { 67, 63, JSPerformanceTimingTableValues, 0 };
/* Hash table for constructor */

static const HashTableValue JSPerformanceTimingConstructorTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSPerformanceTimingConstructorTable = { 1, 0, JSPerformanceTimingConstructorTableValues, 0 };
const ClassInfo JSPerformanceTimingConstructor::s_info = { "PerformanceTimingConstructor", &Base::s_info, &JSPerformanceTimingConstructorTable, 0, CREATE_METHOD_TABLE(JSPerformanceTimingConstructor) };

JSPerformanceTimingConstructor::JSPerformanceTimingConstructor(Structure* structure, JSDOMGlobalObject* globalObject)
    : DOMConstructorObject(structure, globalObject)
{
}

void JSPerformanceTimingConstructor::finishCreation(VM& vm, JSDOMGlobalObject* globalObject)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
    putDirect(vm, vm.propertyNames->prototype, JSPerformanceTimingPrototype::self(vm, globalObject), DontDelete | ReadOnly);
    putDirect(vm, vm.propertyNames->length, jsNumber(0), ReadOnly | DontDelete | DontEnum);
}

bool JSPerformanceTimingConstructor::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    return getStaticValueSlot<JSPerformanceTimingConstructor, JSDOMWrapper>(exec, JSPerformanceTimingConstructorTable, jsCast<JSPerformanceTimingConstructor*>(object), propertyName, slot);
}

/* Hash table for prototype */

static const HashTableValue JSPerformanceTimingPrototypeTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSPerformanceTimingPrototypeTable = { 1, 0, JSPerformanceTimingPrototypeTableValues, 0 };
const ClassInfo JSPerformanceTimingPrototype::s_info = { "PerformanceTimingPrototype", &Base::s_info, &JSPerformanceTimingPrototypeTable, 0, CREATE_METHOD_TABLE(JSPerformanceTimingPrototype) };

JSObject* JSPerformanceTimingPrototype::self(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMPrototype<JSPerformanceTiming>(vm, globalObject);
}

const ClassInfo JSPerformanceTiming::s_info = { "PerformanceTiming", &Base::s_info, &JSPerformanceTimingTable, 0 , CREATE_METHOD_TABLE(JSPerformanceTiming) };

JSPerformanceTiming::JSPerformanceTiming(Structure* structure, JSDOMGlobalObject* globalObject, PassRefPtr<PerformanceTiming> impl)
    : JSDOMWrapper(structure, globalObject)
    , m_impl(impl.leakRef())
{
}

void JSPerformanceTiming::finishCreation(VM& vm)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
}

JSObject* JSPerformanceTiming::createPrototype(VM& vm, JSGlobalObject* globalObject)
{
    return JSPerformanceTimingPrototype::create(vm, globalObject, JSPerformanceTimingPrototype::createStructure(vm, globalObject, globalObject->objectPrototype()));
}

void JSPerformanceTiming::destroy(JSC::JSCell* cell)
{
    JSPerformanceTiming* thisObject = static_cast<JSPerformanceTiming*>(cell);
    thisObject->JSPerformanceTiming::~JSPerformanceTiming();
}

JSPerformanceTiming::~JSPerformanceTiming()
{
    releaseImplIfNotNull();
}

bool JSPerformanceTiming::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSPerformanceTiming* thisObject = jsCast<JSPerformanceTiming*>(object);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    return getStaticValueSlot<JSPerformanceTiming, Base>(exec, JSPerformanceTimingTable, thisObject, propertyName, slot);
}

EncodedJSValue jsPerformanceTimingNavigationStart(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSPerformanceTiming* castedThis = jsDynamicCast<JSPerformanceTiming*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    PerformanceTiming& impl = castedThis->impl();
    JSValue result = jsNumber(impl.navigationStart());
    return JSValue::encode(result);
}


EncodedJSValue jsPerformanceTimingUnloadEventStart(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSPerformanceTiming* castedThis = jsDynamicCast<JSPerformanceTiming*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    PerformanceTiming& impl = castedThis->impl();
    JSValue result = jsNumber(impl.unloadEventStart());
    return JSValue::encode(result);
}


EncodedJSValue jsPerformanceTimingUnloadEventEnd(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSPerformanceTiming* castedThis = jsDynamicCast<JSPerformanceTiming*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    PerformanceTiming& impl = castedThis->impl();
    JSValue result = jsNumber(impl.unloadEventEnd());
    return JSValue::encode(result);
}


EncodedJSValue jsPerformanceTimingRedirectStart(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSPerformanceTiming* castedThis = jsDynamicCast<JSPerformanceTiming*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    PerformanceTiming& impl = castedThis->impl();
    JSValue result = jsNumber(impl.redirectStart());
    return JSValue::encode(result);
}


EncodedJSValue jsPerformanceTimingRedirectEnd(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSPerformanceTiming* castedThis = jsDynamicCast<JSPerformanceTiming*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    PerformanceTiming& impl = castedThis->impl();
    JSValue result = jsNumber(impl.redirectEnd());
    return JSValue::encode(result);
}


EncodedJSValue jsPerformanceTimingFetchStart(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSPerformanceTiming* castedThis = jsDynamicCast<JSPerformanceTiming*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    PerformanceTiming& impl = castedThis->impl();
    JSValue result = jsNumber(impl.fetchStart());
    return JSValue::encode(result);
}


EncodedJSValue jsPerformanceTimingDomainLookupStart(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSPerformanceTiming* castedThis = jsDynamicCast<JSPerformanceTiming*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    PerformanceTiming& impl = castedThis->impl();
    JSValue result = jsNumber(impl.domainLookupStart());
    return JSValue::encode(result);
}


EncodedJSValue jsPerformanceTimingDomainLookupEnd(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSPerformanceTiming* castedThis = jsDynamicCast<JSPerformanceTiming*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    PerformanceTiming& impl = castedThis->impl();
    JSValue result = jsNumber(impl.domainLookupEnd());
    return JSValue::encode(result);
}


EncodedJSValue jsPerformanceTimingConnectStart(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSPerformanceTiming* castedThis = jsDynamicCast<JSPerformanceTiming*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    PerformanceTiming& impl = castedThis->impl();
    JSValue result = jsNumber(impl.connectStart());
    return JSValue::encode(result);
}


EncodedJSValue jsPerformanceTimingConnectEnd(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSPerformanceTiming* castedThis = jsDynamicCast<JSPerformanceTiming*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    PerformanceTiming& impl = castedThis->impl();
    JSValue result = jsNumber(impl.connectEnd());
    return JSValue::encode(result);
}


EncodedJSValue jsPerformanceTimingSecureConnectionStart(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSPerformanceTiming* castedThis = jsDynamicCast<JSPerformanceTiming*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    PerformanceTiming& impl = castedThis->impl();
    JSValue result = jsNumber(impl.secureConnectionStart());
    return JSValue::encode(result);
}


EncodedJSValue jsPerformanceTimingRequestStart(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSPerformanceTiming* castedThis = jsDynamicCast<JSPerformanceTiming*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    PerformanceTiming& impl = castedThis->impl();
    JSValue result = jsNumber(impl.requestStart());
    return JSValue::encode(result);
}


EncodedJSValue jsPerformanceTimingResponseStart(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSPerformanceTiming* castedThis = jsDynamicCast<JSPerformanceTiming*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    PerformanceTiming& impl = castedThis->impl();
    JSValue result = jsNumber(impl.responseStart());
    return JSValue::encode(result);
}


EncodedJSValue jsPerformanceTimingResponseEnd(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSPerformanceTiming* castedThis = jsDynamicCast<JSPerformanceTiming*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    PerformanceTiming& impl = castedThis->impl();
    JSValue result = jsNumber(impl.responseEnd());
    return JSValue::encode(result);
}


EncodedJSValue jsPerformanceTimingDomLoading(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSPerformanceTiming* castedThis = jsDynamicCast<JSPerformanceTiming*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    PerformanceTiming& impl = castedThis->impl();
    JSValue result = jsNumber(impl.domLoading());
    return JSValue::encode(result);
}


EncodedJSValue jsPerformanceTimingDomInteractive(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSPerformanceTiming* castedThis = jsDynamicCast<JSPerformanceTiming*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    PerformanceTiming& impl = castedThis->impl();
    JSValue result = jsNumber(impl.domInteractive());
    return JSValue::encode(result);
}


EncodedJSValue jsPerformanceTimingDomContentLoadedEventStart(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSPerformanceTiming* castedThis = jsDynamicCast<JSPerformanceTiming*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    PerformanceTiming& impl = castedThis->impl();
    JSValue result = jsNumber(impl.domContentLoadedEventStart());
    return JSValue::encode(result);
}


EncodedJSValue jsPerformanceTimingDomContentLoadedEventEnd(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSPerformanceTiming* castedThis = jsDynamicCast<JSPerformanceTiming*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    PerformanceTiming& impl = castedThis->impl();
    JSValue result = jsNumber(impl.domContentLoadedEventEnd());
    return JSValue::encode(result);
}


EncodedJSValue jsPerformanceTimingDomComplete(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSPerformanceTiming* castedThis = jsDynamicCast<JSPerformanceTiming*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    PerformanceTiming& impl = castedThis->impl();
    JSValue result = jsNumber(impl.domComplete());
    return JSValue::encode(result);
}


EncodedJSValue jsPerformanceTimingLoadEventStart(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSPerformanceTiming* castedThis = jsDynamicCast<JSPerformanceTiming*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    PerformanceTiming& impl = castedThis->impl();
    JSValue result = jsNumber(impl.loadEventStart());
    return JSValue::encode(result);
}


EncodedJSValue jsPerformanceTimingLoadEventEnd(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSPerformanceTiming* castedThis = jsDynamicCast<JSPerformanceTiming*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    PerformanceTiming& impl = castedThis->impl();
    JSValue result = jsNumber(impl.loadEventEnd());
    return JSValue::encode(result);
}


EncodedJSValue jsPerformanceTimingConstructor(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue, PropertyName)
{
    JSPerformanceTiming* domObject = jsDynamicCast<JSPerformanceTiming*>(JSValue::decode(thisValue));
    if (!domObject)
        return throwVMTypeError(exec);
    if (!domObject)
        return throwVMTypeError(exec);
    return JSValue::encode(JSPerformanceTiming::getConstructor(exec->vm(), domObject->globalObject()));
}

JSValue JSPerformanceTiming::getConstructor(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMConstructor<JSPerformanceTimingConstructor>(vm, jsCast<JSDOMGlobalObject*>(globalObject));
}

bool JSPerformanceTimingOwner::isReachableFromOpaqueRoots(JSC::Handle<JSC::Unknown> handle, void*, SlotVisitor& visitor)
{
    UNUSED_PARAM(handle);
    UNUSED_PARAM(visitor);
    return false;
}

void JSPerformanceTimingOwner::finalize(JSC::Handle<JSC::Unknown> handle, void* context)
{
    JSPerformanceTiming* jsPerformanceTiming = jsCast<JSPerformanceTiming*>(handle.get().asCell());
    DOMWrapperWorld& world = *static_cast<DOMWrapperWorld*>(context);
    uncacheWrapper(world, &jsPerformanceTiming->impl(), jsPerformanceTiming);
    jsPerformanceTiming->releaseImpl();
}

#if ENABLE(BINDING_INTEGRITY)
#if PLATFORM(WIN)
#pragma warning(disable: 4483)
extern "C" { extern void (*const __identifier("??_7PerformanceTiming@WebCore@@6B@")[])(); }
#else
extern "C" { extern void* _ZTVN7WebCore17PerformanceTimingE[]; }
#endif
#endif
JSC::JSValue toJS(JSC::ExecState* exec, JSDOMGlobalObject* globalObject, PerformanceTiming* impl)
{
    if (!impl)
        return jsNull();
    if (JSValue result = getExistingWrapper<JSPerformanceTiming>(exec, impl))
        return result;

#if ENABLE(BINDING_INTEGRITY)
    void* actualVTablePointer = *(reinterpret_cast<void**>(impl));
#if PLATFORM(WIN)
    void* expectedVTablePointer = reinterpret_cast<void*>(__identifier("??_7PerformanceTiming@WebCore@@6B@"));
#else
    void* expectedVTablePointer = &_ZTVN7WebCore17PerformanceTimingE[2];
#if COMPILER(CLANG)
    // If this fails PerformanceTiming does not have a vtable, so you need to add the
    // ImplementationLacksVTable attribute to the interface definition
    COMPILE_ASSERT(__is_polymorphic(PerformanceTiming), PerformanceTiming_is_not_polymorphic);
#endif
#endif
    // If you hit this assertion you either have a use after free bug, or
    // PerformanceTiming has subclasses. If PerformanceTiming has subclasses that get passed
    // to toJS() we currently require PerformanceTiming you to opt out of binding hardening
    // by adding the SkipVTableValidation attribute to the interface IDL definition
    RELEASE_ASSERT(actualVTablePointer == expectedVTablePointer);
#endif
    ReportMemoryCost<PerformanceTiming>::reportMemoryCost(exec, impl);
    return createNewWrapper<JSPerformanceTiming>(exec, globalObject, impl);
}

PerformanceTiming* toPerformanceTiming(JSC::JSValue value)
{
    return value.inherits(JSPerformanceTiming::info()) ? &jsCast<JSPerformanceTiming*>(value)->impl() : 0;
}

}

#endif // ENABLE(WEB_TIMING)