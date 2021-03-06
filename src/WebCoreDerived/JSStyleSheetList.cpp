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
#include "JSStyleSheetList.h"

#include "ExceptionCode.h"
#include "JSDOMBinding.h"
#include "JSStyleSheet.h"
#include "StyleSheet.h"
#include "StyleSheetList.h"
#include "wtf/text/AtomicString.h"
#include <runtime/Error.h>
#include <runtime/PropertyNameArray.h>
#include <wtf/GetPtr.h>

using namespace JSC;

namespace WebCore {

/* Hash table */

static const HashTableValue JSStyleSheetListTableValues[] =
{
    { "length", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsStyleSheetListLength), (intptr_t)0 },
    { "constructor", DontEnum | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsStyleSheetListConstructor), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSStyleSheetListTable = { 5, 3, JSStyleSheetListTableValues, 0 };
/* Hash table for constructor */

static const HashTableValue JSStyleSheetListConstructorTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSStyleSheetListConstructorTable = { 1, 0, JSStyleSheetListConstructorTableValues, 0 };
const ClassInfo JSStyleSheetListConstructor::s_info = { "StyleSheetListConstructor", &Base::s_info, &JSStyleSheetListConstructorTable, 0, CREATE_METHOD_TABLE(JSStyleSheetListConstructor) };

JSStyleSheetListConstructor::JSStyleSheetListConstructor(Structure* structure, JSDOMGlobalObject* globalObject)
    : DOMConstructorObject(structure, globalObject)
{
}

void JSStyleSheetListConstructor::finishCreation(VM& vm, JSDOMGlobalObject* globalObject)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
    putDirect(vm, vm.propertyNames->prototype, JSStyleSheetListPrototype::self(vm, globalObject), DontDelete | ReadOnly);
    putDirect(vm, vm.propertyNames->length, jsNumber(0), ReadOnly | DontDelete | DontEnum);
}

bool JSStyleSheetListConstructor::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    return getStaticValueSlot<JSStyleSheetListConstructor, JSDOMWrapper>(exec, JSStyleSheetListConstructorTable, jsCast<JSStyleSheetListConstructor*>(object), propertyName, slot);
}

/* Hash table for prototype */

static const HashTableValue JSStyleSheetListPrototypeTableValues[] =
{
    { "item", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsStyleSheetListPrototypeFunctionItem), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSStyleSheetListPrototypeTable = { 2, 1, JSStyleSheetListPrototypeTableValues, 0 };
const ClassInfo JSStyleSheetListPrototype::s_info = { "StyleSheetListPrototype", &Base::s_info, &JSStyleSheetListPrototypeTable, 0, CREATE_METHOD_TABLE(JSStyleSheetListPrototype) };

JSObject* JSStyleSheetListPrototype::self(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMPrototype<JSStyleSheetList>(vm, globalObject);
}

bool JSStyleSheetListPrototype::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSStyleSheetListPrototype* thisObject = jsCast<JSStyleSheetListPrototype*>(object);
    return getStaticFunctionSlot<JSObject>(exec, JSStyleSheetListPrototypeTable, thisObject, propertyName, slot);
}

const ClassInfo JSStyleSheetList::s_info = { "StyleSheetList", &Base::s_info, &JSStyleSheetListTable, 0 , CREATE_METHOD_TABLE(JSStyleSheetList) };

JSStyleSheetList::JSStyleSheetList(Structure* structure, JSDOMGlobalObject* globalObject, PassRefPtr<StyleSheetList> impl)
    : JSDOMWrapper(structure, globalObject)
    , m_impl(impl.leakRef())
{
}

void JSStyleSheetList::finishCreation(VM& vm)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
}

JSObject* JSStyleSheetList::createPrototype(VM& vm, JSGlobalObject* globalObject)
{
    return JSStyleSheetListPrototype::create(vm, globalObject, JSStyleSheetListPrototype::createStructure(vm, globalObject, globalObject->objectPrototype()));
}

void JSStyleSheetList::destroy(JSC::JSCell* cell)
{
    JSStyleSheetList* thisObject = static_cast<JSStyleSheetList*>(cell);
    thisObject->JSStyleSheetList::~JSStyleSheetList();
}

JSStyleSheetList::~JSStyleSheetList()
{
    releaseImplIfNotNull();
}

bool JSStyleSheetList::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSStyleSheetList* thisObject = jsCast<JSStyleSheetList*>(object);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    const HashEntry* entry = getStaticValueSlotEntryWithoutCaching<JSStyleSheetList>(exec, propertyName);
    if (entry) {
        slot.setCustom(thisObject, entry->attributes(), entry->propertyGetter());
        return true;
    }
    unsigned index = propertyName.asIndex();
    if (index != PropertyName::NotAnIndex && index < thisObject->impl().length()) {
        unsigned attributes = DontDelete | ReadOnly;
        slot.setCustomIndex(thisObject, attributes, index, indexGetter);
        return true;
    }
    if (canGetItemsForName(exec, &thisObject->impl(), propertyName)) {
        slot.setCustom(thisObject, ReadOnly | DontDelete | DontEnum, thisObject->nameGetter);
        return true;
    }
    return getStaticValueSlot<JSStyleSheetList, Base>(exec, JSStyleSheetListTable, thisObject, propertyName, slot);
}

bool JSStyleSheetList::getOwnPropertySlotByIndex(JSObject* object, ExecState* exec, unsigned index, PropertySlot& slot)
{
    JSStyleSheetList* thisObject = jsCast<JSStyleSheetList*>(object);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    if (index < thisObject->impl().length()) {
        unsigned attributes = DontDelete | ReadOnly;
        slot.setCustomIndex(thisObject, attributes, index, thisObject->indexGetter);
        return true;
    }
    PropertyName propertyName = Identifier::from(exec, index);
    if (canGetItemsForName(exec, &thisObject->impl(), propertyName)) {
        slot.setCustom(thisObject, ReadOnly | DontDelete | DontEnum, thisObject->nameGetter);
        return true;
    }
    return Base::getOwnPropertySlotByIndex(thisObject, exec, index, slot);
}

EncodedJSValue jsStyleSheetListLength(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSStyleSheetList* castedThis = jsDynamicCast<JSStyleSheetList*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    StyleSheetList& impl = castedThis->impl();
    JSValue result = jsNumber(impl.length());
    return JSValue::encode(result);
}


EncodedJSValue jsStyleSheetListConstructor(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue, PropertyName)
{
    JSStyleSheetList* domObject = jsDynamicCast<JSStyleSheetList*>(JSValue::decode(thisValue));
    if (!domObject)
        return throwVMTypeError(exec);
    if (!domObject)
        return throwVMTypeError(exec);
    return JSValue::encode(JSStyleSheetList::getConstructor(exec->vm(), domObject->globalObject()));
}

void JSStyleSheetList::getOwnPropertyNames(JSObject* object, ExecState* exec, PropertyNameArray& propertyNames, EnumerationMode mode)
{
    JSStyleSheetList* thisObject = jsCast<JSStyleSheetList*>(object);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    for (unsigned i = 0, count = thisObject->impl().length(); i < count; ++i)
        propertyNames.add(Identifier::from(exec, i));
     Base::getOwnPropertyNames(thisObject, exec, propertyNames, mode);
}

JSValue JSStyleSheetList::getConstructor(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMConstructor<JSStyleSheetListConstructor>(vm, jsCast<JSDOMGlobalObject*>(globalObject));
}

EncodedJSValue JSC_HOST_CALL jsStyleSheetListPrototypeFunctionItem(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSStyleSheetList* castedThis = jsDynamicCast<JSStyleSheetList*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSStyleSheetList::info());
    StyleSheetList& impl = castedThis->impl();
    unsigned index(toUInt32(exec, exec->argument(0), NormalConversion));
    if (exec->hadException())
        return JSValue::encode(jsUndefined());

    JSC::JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(impl.item(index)));
    return JSValue::encode(result);
}


EncodedJSValue JSStyleSheetList::indexGetter(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue, unsigned index)
{
    JSStyleSheetList* thisObj = jsCast<JSStyleSheetList*>(JSValue::decode(slotBase));
    ASSERT_GC_OBJECT_INHERITS(thisObj, info());
    return JSValue::encode(toJS(exec, thisObj->globalObject(), thisObj->impl().item(index)));
}

static inline bool isObservable(JSStyleSheetList* jsStyleSheetList)
{
    if (jsStyleSheetList->hasCustomProperties())
        return true;
    return false;
}

bool JSStyleSheetListOwner::isReachableFromOpaqueRoots(JSC::Handle<JSC::Unknown> handle, void*, SlotVisitor& visitor)
{
    JSStyleSheetList* jsStyleSheetList = jsCast<JSStyleSheetList*>(handle.get().asCell());
    if (!isObservable(jsStyleSheetList))
        return false;
    Document* root = jsStyleSheetList->impl().document();
    if (!root)
        return false;
    return visitor.containsOpaqueRoot(root);
}

void JSStyleSheetListOwner::finalize(JSC::Handle<JSC::Unknown> handle, void* context)
{
    JSStyleSheetList* jsStyleSheetList = jsCast<JSStyleSheetList*>(handle.get().asCell());
    DOMWrapperWorld& world = *static_cast<DOMWrapperWorld*>(context);
    uncacheWrapper(world, &jsStyleSheetList->impl(), jsStyleSheetList);
    jsStyleSheetList->releaseImpl();
}

JSC::JSValue toJS(JSC::ExecState* exec, JSDOMGlobalObject* globalObject, StyleSheetList* impl)
{
    if (!impl)
        return jsNull();
    if (JSValue result = getExistingWrapper<JSStyleSheetList>(exec, impl))
        return result;
#if COMPILER(CLANG)
    // If you hit this failure the interface definition has the ImplementationLacksVTable
    // attribute. You should remove that attribute. If the class has subclasses
    // that may be passed through this toJS() function you should use the SkipVTableValidation
    // attribute to StyleSheetList.
    COMPILE_ASSERT(!__is_polymorphic(StyleSheetList), StyleSheetList_is_polymorphic_but_idl_claims_not_to_be);
#endif
    ReportMemoryCost<StyleSheetList>::reportMemoryCost(exec, impl);
    return createNewWrapper<JSStyleSheetList>(exec, globalObject, impl);
}

StyleSheetList* toStyleSheetList(JSC::JSValue value)
{
    return value.inherits(JSStyleSheetList::info()) ? &jsCast<JSStyleSheetList*>(value)->impl() : 0;
}

}
