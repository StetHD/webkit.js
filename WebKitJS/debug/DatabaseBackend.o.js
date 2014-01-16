// Note: For maximum-speed code, see "Optimizing Code" on the Emscripten wiki, https://github.com/kripken/emscripten/wiki/Optimizing-Code
// Note: Some Emscripten settings may limit the speed of the generated code.
// Capture the output of this into a variable, if you want
(function(FUNCTION_TABLE_OFFSET, parentModule) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  Module.print = parentModule.print;
  Module.printErr = parentModule.printErr;
  Module.cleanups = [];
  var H_BASE = 0;
  // Each module has its own stack
  var STACKTOP = parentModule['_malloc'](TOTAL_STACK);
  assert(STACKTOP % 8 == 0);
  var STACK_MAX = STACKTOP + TOTAL_STACK;
  Module.cleanups.push(function() {
    parentModule['_free'](STACKTOP); // XXX ensure exported
    parentModule['_free'](H_BASE);
  });
// === Auto-generated preamble library stuff ===
//========================================
// Runtime essentials
//========================================
function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.pop();
    var func = callback.func;
    if (typeof func === 'number') {
      func = FUNCTION_TABLE[func];
    }
    func(callback.arg === undefined ? null : callback.arg);
  }
}
var __ATINIT__ = []; // functions called during startup
function initRuntime() {
  callRuntimeCallbacks(__ATINIT__);
}
// === Body ===
H_BASE = parentModule["_malloc"](72 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 72;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var Math_min = Math.min;
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vii(index,a1,a2) {
  try {
    Module["dynCall_vii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iii(index,a1,a2) {
  try {
    return Module["dynCall_iii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function asmPrintInt(x, y) {
  Module.print('int ' + x + ',' + y);// + ' ' + new Error().stack);
}
function asmPrintFloat(x, y) {
  Module.print('float ' + x + ',' + y);// + ' ' + new Error().stack);
}
// EMSCRIPTEN_START_ASM
var asm = (function(global, env, buffer) {
  'almost asm';
  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore15DatabaseBackendE=(H_BASE+8)|0;
  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var tempInt = 0, tempBigInt = 0, tempBigIntP = 0, tempBigIntS = 0, tempBigIntR = 0.0, tempBigIntI = 0, tempBigIntD = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;
  var tempRet1 = 0;
  var tempRet2 = 0;
  var tempRet3 = 0;
  var tempRet4 = 0;
  var tempRet5 = 0;
  var tempRet6 = 0;
  var tempRet7 = 0;
  var tempRet8 = 0;
  var tempRet9 = 0;
  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var abort=env.abort;
  var assert=env.assert;
  var asmPrintInt=env.asmPrintInt;
  var asmPrintFloat=env.asmPrintFloat;
  var Math_min=env.min;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore15DatabaseBackend14runTransactionEN3WTF10PassRefPtrINS_14SQLTransactionEEEbPKNS_17ChangeVersionDataE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i2 + 180 | 0;
 i13 = (i12 | 0) == 0;
 if (!i13) {
  __ZN3WTF5Mutex4lockEv(i12);
 }
 do {
  if ((HEAP8[i2 + 205 | 0] & 1) == 0) {
   HEAP32[i1 >> 2] = 0;
  } else {
   do {
    if ((i5 | 0) == 0) {
     i14 = 0;
    } else {
     i15 = i7 | 0;
     i16 = HEAP32[i5 >> 2] | 0;
     HEAP32[i15 >> 2] = i16;
     if ((i16 | 0) != 0) {
      i17 = i16 | 0;
      HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
     }
     i17 = i8 | 0;
     i16 = HEAP32[i5 + 4 >> 2] | 0;
     HEAP32[i17 >> 2] = i16;
     if ((i16 | 0) != 0) {
      i18 = i16 | 0;
      HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
     }
     i18 = __ZN3WTF10fastMallocEj(20) | 0;
     __ZN7WebCore20ChangeVersionWrapperC1ERKN3WTF6StringES4_(i18, i7, i8);
     i16 = i18;
     i18 = HEAP32[i17 >> 2] | 0;
     do {
      if ((i18 | 0) != 0) {
       i17 = i18 | 0;
       i19 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
       if ((i19 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i18);
        break;
       } else {
        HEAP32[i17 >> 2] = i19;
        break;
       }
      }
     } while (0);
     i18 = HEAP32[i15 >> 2] | 0;
     if ((i18 | 0) == 0) {
      i14 = i16;
      break;
     }
     i19 = i18 | 0;
     i17 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      i14 = i16;
      break;
     } else {
      HEAP32[i19 >> 2] = i17;
      i14 = i16;
      break;
     }
    }
   } while (0);
   i17 = i10 | 0;
   i19 = i3 | 0;
   i18 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = 0;
   HEAP32[i17 >> 2] = (i18 | 0) == 0 ? 0 : i18 + 12 | 0;
   i18 = i11 | 0;
   HEAP32[i18 >> 2] = i14;
   i19 = (i14 | 0) == 0;
   if (!i19) {
    i20 = i14 + 4 | 0;
    tempValue = HEAP32[i20 >> 2] | 0, HEAP32[i20 >> 2] = tempValue + 1, tempValue;
   }
   __ZN7WebCore21SQLTransactionBackend6createEPNS_15DatabaseBackendEN3WTF10PassRefPtrINS_22AbstractSQLTransactionEEENS4_INS_21SQLTransactionWrapperEEEb(i9, i2, i10, i11, i4);
   i20 = i9 | 0;
   i21 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   i20 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i18 = i20 + 4 | 0;
     i22 = i18 | 0;
     if (((tempValue = HEAP32[i22 >> 2] | 0, HEAP32[i22 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
      break;
     }
     i22 = i18 - 4 | 0;
     if ((i22 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 7](i22);
    }
   } while (0);
   i20 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i22 = i20 + 4 | 0;
     i18 = i22 | 0;
     if (((tempValue = HEAP32[i18 >> 2] | 0, HEAP32[i18 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
      break;
     }
     i18 = i22 - 4 | 0;
     if ((i18 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 7](i18);
    }
   } while (0);
   i20 = i2 + 160 | 0;
   i17 = HEAP32[i20 >> 2] | 0;
   i18 = i2 + 164 | 0;
   i22 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i17 | 0) == 0) {
     i23 = HEAP32[i2 + 172 >> 2] | 0;
     if ((i22 | 0) == 0) {
      if ((i23 | 0) == 0) {
       i24 = 33;
       break;
      } else {
       i25 = 0;
       break;
      }
     } else {
      if ((i22 | 0) == (i23 - 1 | 0)) {
       i24 = 33;
       break;
      } else {
       i25 = i22;
       break;
      }
     }
    } else {
     if ((i22 + 1 | 0) == (i17 | 0)) {
      i24 = 33;
     } else {
      i25 = i22;
     }
    }
   } while (0);
   if ((i24 | 0) == 33) {
    __ZN3WTF5DequeINS_6RefPtrIN7WebCore21SQLTransactionBackendEEELj0EE14expandCapacityEv(i20);
    i25 = HEAP32[i18 >> 2] | 0;
   }
   HEAP32[(HEAP32[i2 + 168 >> 2] | 0) + (i25 << 2) >> 2] = i21;
   i22 = (i21 | 0) == 0;
   if (!i22) {
    i17 = i21 + 16 | 0;
    tempValue = HEAP32[i17 >> 2] | 0, HEAP32[i17 >> 2] = tempValue + 1, tempValue;
   }
   i17 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = (i17 | 0) == ((HEAP32[i2 + 172 >> 2] | 0) - 1 | 0) ? 0 : i17 + 1 | 0;
   if ((HEAP8[i2 + 204 | 0] & 1) == 0) {
    __ZN7WebCore15DatabaseBackend19scheduleTransactionEv(i2);
   }
   HEAP32[i1 >> 2] = i21;
   do {
    if (!i22) {
     i17 = i21 + 16 | 0;
     tempValue = HEAP32[i17 >> 2] | 0, HEAP32[i17 >> 2] = tempValue + 1, tempValue;
     i17 = i21 + 16 | 0;
     i23 = i17 | 0;
     if (((tempValue = HEAP32[i23 >> 2] | 0, HEAP32[i23 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
      break;
     }
     i23 = i17 - 4 | 0;
     if ((i23 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 7](i23);
    }
   } while (0);
   if (i19) {
    break;
   }
   i21 = i14 + 4 | 0;
   i22 = i21 | 0;
   if (((tempValue = HEAP32[i22 >> 2] | 0, HEAP32[i22 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i22 = i21 - 4 | 0;
   if ((i22 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 7](i22);
  }
 } while (0);
 if (i13) {
  STACKTOP = i6;
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i12);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore15DatabaseBackend5closeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = i1 + 180 | 0;
 i3 = (i2 | 0) == 0;
 if (!i3) {
  __ZN3WTF5Mutex4lockEv(i2);
 }
 i4 = i1 + 160 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 + 164 | 0;
 do {
  if ((i5 | 0) == (HEAP32[i6 >> 2] | 0)) {
   HEAP8[i1 + 205 | 0] = 0;
   HEAP8[i1 + 204 | 0] = 0;
  } else {
   i7 = i1 + 168 | 0;
   i8 = i1 + 172 | 0;
   i9 = 0;
   i10 = i5;
   while (1) {
    i11 = (HEAP32[i7 >> 2] | 0) + (i10 << 2) | 0;
    i12 = HEAP32[i11 >> 2] | 0;
    HEAP32[i11 >> 2] = 0;
    i11 = HEAP32[(HEAP32[i7 >> 2] | 0) + (HEAP32[i4 >> 2] << 2) >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i13 = i11 + 16 | 0;
      i14 = i13 | 0;
      if (((tempValue = HEAP32[i14 >> 2] | 0, HEAP32[i14 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
       break;
      }
      i14 = i13 - 4 | 0;
      if ((i14 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 7](i14);
     }
    } while (0);
    i11 = HEAP32[i4 >> 2] | 0;
    HEAP32[i4 >> 2] = (i11 | 0) == ((HEAP32[i8 >> 2] | 0) - 1 | 0) ? 0 : i11 + 1 | 0;
    do {
     if ((i9 | 0) != 0) {
      i11 = i9 + 16 | 0;
      i14 = i11 | 0;
      if (((tempValue = HEAP32[i14 >> 2] | 0, HEAP32[i14 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
       break;
      }
      i14 = i11 - 4 | 0;
      if ((i14 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 7](i14);
     }
    } while (0);
    __ZN7WebCore21SQLTransactionBackend34notifyDatabaseThreadIsShuttingDownEv(i12);
    i14 = HEAP32[i4 >> 2] | 0;
    if ((i14 | 0) == (HEAP32[i6 >> 2] | 0)) {
     break;
    } else {
     i9 = i12;
     i10 = i14;
    }
   }
   HEAP8[i1 + 205 | 0] = 0;
   HEAP8[i1 + 204 | 0] = 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i10 = i12 + 16 | 0;
   i9 = i10 | 0;
   if (((tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i9 = i10 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 7](i9);
  }
 } while (0);
 if (!i3) {
  __ZN3WTF5Mutex6unlockEv(i2);
 }
 __ZN7WebCore19DatabaseBackendBase13closeDatabaseEv(i1 | 0);
 i2 = i1 + 4 | 0;
 tempValue = HEAP32[i2 >> 2] | 0, HEAP32[i2 >> 2] = tempValue + 1, tempValue;
 i2 = i1 + 12 | 0;
 __ZN7WebCore14DatabaseThread20recordDatabaseClosedEPNS_15DatabaseBackendE(__ZN7WebCore15DatabaseContext14databaseThreadEv(HEAP32[i2 >> 2] | 0) | 0, i1);
 __ZN7WebCore14DatabaseThread23unscheduleDatabaseTasksEPNS_15DatabaseBackendE(__ZN7WebCore15DatabaseContext14databaseThreadEv(HEAP32[i2 >> 2] | 0) | 0, i1);
 i2 = i1 + 4 | 0;
 i1 = i2 | 0;
 if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
  return;
 }
 i1 = i2 - 4 | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 7](i1);
 return;
}
function __ZN7WebCore15DatabaseBackend19scheduleTransactionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 do {
  if ((HEAP8[i1 + 205 | 0] & 1) != 0) {
   i5 = i1 + 160 | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   if ((i6 | 0) == (HEAP32[i1 + 164 >> 2] | 0)) {
    break;
   }
   i7 = i1 + 168 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) + (i6 << 2) | 0;
   i6 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   i8 = HEAP32[(HEAP32[i7 >> 2] | 0) + (HEAP32[i5 >> 2] << 2) >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i7 = i8 + 16 | 0;
     i9 = i7 | 0;
     if (((tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
      break;
     }
     i9 = i7 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 7](i9);
    }
   } while (0);
   i8 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = (i8 | 0) == ((HEAP32[i1 + 172 >> 2] | 0) - 1 | 0) ? 0 : i8 + 1 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i8 = i1 + 12 | 0;
   do {
    if ((__ZN7WebCore15DatabaseContext14databaseThreadEv(HEAP32[i8 >> 2] | 0) | 0) == 0) {
     HEAP8[i1 + 204 | 0] = 0;
    } else {
     i9 = i6 + 16 | 0;
     tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue + 1, tempValue;
     i9 = __ZN3WTF10fastMallocEj(20) | 0;
     i7 = i3 | 0;
     HEAP32[i7 >> 2] = i6;
     __ZN7WebCore15DatabaseBackend23DatabaseTransactionTaskC1EN3WTF10PassRefPtrINS_21SQLTransactionBackendEEE(i9, i3);
     i10 = HEAP32[i7 >> 2] | 0;
     do {
      if ((i10 | 0) != 0) {
       i7 = i10 + 16 | 0;
       i11 = i7 | 0;
       if (((tempValue = HEAP32[i11 >> 2] | 0, HEAP32[i11 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
        break;
       }
       i11 = i7 - 4 | 0;
       if ((i11 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 7](i11);
      }
     } while (0);
     HEAP8[i1 + 204 | 0] = 1;
     i10 = __ZN7WebCore15DatabaseContext14databaseThreadEv(HEAP32[i8 >> 2] | 0) | 0;
     i11 = i4 | 0;
     HEAP32[i11 >> 2] = i9;
     __ZN7WebCore14DatabaseThread12scheduleTaskENSt3__110unique_ptrINS_12DatabaseTaskENS1_14default_deleteIS3_EEEE(i10, i4);
     i10 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = 0;
     if ((i10 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 7](i10);
    }
   } while (0);
   i8 = i6 + 16 | 0;
   i5 = i8 | 0;
   if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    STACKTOP = i2;
    return;
   }
   i5 = i8 - 4 | 0;
   if ((i5 | 0) == 0) {
    STACKTOP = i2;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 7](i5);
   STACKTOP = i2;
   return;
  }
 } while (0);
 HEAP8[i1 + 204 | 0] = 0;
 STACKTOP = i2;
 return;
}
function __ZN3WTF5DequeINS_6RefPtrIN7WebCore21SQLTransactionBackendEEELj0EE10destroyAllEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i6 + (i4 << 2) | 0;
 if (i3 >>> 0 <= i4 >>> 0) {
  if ((i3 | 0) == (i4 | 0)) {
   return;
  }
  i8 = i6 + (i3 << 2) | 0;
  while (1) {
   i9 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i10 = i9 + 16 | 0;
     i11 = i10 | 0;
     if (((tempValue = HEAP32[i11 >> 2] | 0, HEAP32[i11 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
      break;
     }
     i11 = i10 - 4 | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 7](i11);
    }
   } while (0);
   i8 = i8 + 4 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    break;
   }
  }
  return;
 }
 if ((i4 | 0) == 0) {
  i12 = i6;
  i13 = i3;
 } else {
  i3 = i6;
  while (1) {
   i6 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i4 = i6 + 16 | 0;
     i8 = i4 | 0;
     if (((tempValue = HEAP32[i8 >> 2] | 0, HEAP32[i8 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
      break;
     }
     i8 = i4 - 4 | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 7](i8);
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i7 | 0)) {
    break;
   }
  }
  i12 = HEAP32[i5 >> 2] | 0;
  i13 = HEAP32[i2 >> 2] | 0;
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = i12 + (i2 << 2) | 0;
 if ((i13 | 0) == (i2 | 0)) {
  return;
 }
 i2 = i12 + (i13 << 2) | 0;
 while (1) {
  i13 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i13 | 0) != 0) {
    i12 = i13 + 16 | 0;
    i5 = i12 | 0;
    if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
     break;
    }
    i5 = i12 - 4 | 0;
    if ((i5 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 7](i5);
   }
  } while (0);
  i2 = i2 + 4 | 0;
  if ((i2 | 0) == (i1 | 0)) {
   break;
  }
 }
 return;
}
function __ZN7WebCore15DatabaseBackend20openAndVerifyVersionEbRNS_13DatabaseErrorERN3WTF6StringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i6 = i5 | 0;
 i7 = i5 + 80 | 0;
 i8 = i5 + 88 | 0;
 __ZN7WebCore24DatabaseTaskSynchronizerC1Ev(i6);
 i9 = i1 + 12 | 0;
 if ((__ZN7WebCore15DatabaseContext14databaseThreadEv(HEAP32[i9 >> 2] | 0) | 0) == 0) {
  i10 = 0;
  i11 = i6 + 28 | 0;
  __ZN3WTF15ThreadConditionD1Ev(i11);
  i12 = i6 + 4 | 0;
  __ZN3WTF5MutexD1Ev(i12);
  STACKTOP = i5;
  return i10 | 0;
 }
 if (__ZNK7WebCore14DatabaseThread20terminationRequestedEPNS_24DatabaseTaskSynchronizerE(__ZN7WebCore15DatabaseContext14databaseThreadEv(HEAP32[i9 >> 2] | 0) | 0, i6) | 0) {
  i10 = 0;
  i11 = i6 + 28 | 0;
  __ZN3WTF15ThreadConditionD1Ev(i11);
  i12 = i6 + 4 | 0;
  __ZN3WTF5MutexD1Ev(i12);
  STACKTOP = i5;
  return i10 | 0;
 }
 HEAP8[i7] = 0;
 i13 = __ZN3WTF10fastMallocEj(28) | 0;
 __ZN7WebCore15DatabaseBackend16DatabaseOpenTaskC1EPS0_bPNS_24DatabaseTaskSynchronizerERNS_13DatabaseErrorERN3WTF6StringERb(i13, i1, i2, i6, i3, i4, i7);
 i4 = __ZN7WebCore15DatabaseContext14databaseThreadEv(HEAP32[i9 >> 2] | 0) | 0;
 i9 = i8 | 0;
 HEAP32[i9 >> 2] = i13;
 __ZN7WebCore14DatabaseThread21scheduleImmediateTaskENSt3__110unique_ptrINS_12DatabaseTaskENS1_14default_deleteIS3_EEEE(i4, i8);
 i8 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 if ((i8 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 7](i8);
 }
 __ZN7WebCore24DatabaseTaskSynchronizer21waitForTaskCompletionEv(i6);
 i10 = (HEAP8[i7] & 1) != 0;
 i11 = i6 + 28 | 0;
 __ZN3WTF15ThreadConditionD1Ev(i11);
 i12 = i6 + 4 | 0;
 __ZN3WTF5MutexD1Ev(i12);
 STACKTOP = i5;
 return i10 | 0;
}
function __ZN7WebCore15DatabaseBackend23scheduleTransactionStepEPNS_21SQLTransactionBackendE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 12 | 0;
 if ((__ZN7WebCore15DatabaseContext14databaseThreadEv(HEAP32[i6 >> 2] | 0) | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((i2 | 0) != 0) {
  i1 = i2 + 16 | 0;
  tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue + 1, tempValue;
 }
 i1 = __ZN3WTF10fastMallocEj(20) | 0;
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = i2;
 __ZN7WebCore15DatabaseBackend23DatabaseTransactionTaskC1EN3WTF10PassRefPtrINS_21SQLTransactionBackendEEE(i1, i4);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 16 | 0;
   i2 = i7 | 0;
   if (((tempValue = HEAP32[i2 >> 2] | 0, HEAP32[i2 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i2 = i7 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 7](i2);
  }
 } while (0);
 i4 = __ZN7WebCore15DatabaseContext14databaseThreadEv(HEAP32[i6 >> 2] | 0) | 0;
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = i1;
 __ZN7WebCore14DatabaseThread12scheduleTaskENSt3__110unique_ptrINS_12DatabaseTaskENS1_14default_deleteIS3_EEEE(i4, i5);
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 7](i5);
 STACKTOP = i3;
 return;
}
function __ZN3WTF5DequeINS_6RefPtrIN7WebCore21SQLTransactionBackendEEELj0EE14expandCapacityEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i3 + 1 + (i3 >>> 2) | 0;
 i7 = i6 >>> 0 > 16 >>> 0 ? i6 : 16;
 if (i7 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i6 = __ZN3WTF18fastMallocGoodSizeEj(i7 << 2) | 0;
 HEAP32[i2 >> 2] = i6 >>> 2;
 i7 = __ZN3WTF10fastMallocEj(i6) | 0;
 i6 = i7;
 HEAP32[i4 >> 2] = i6;
 i8 = i1 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i1 + 4 >> 2] | 0;
 if (i9 >>> 0 > i10 >>> 0) {
  _memcpy(i7 | 0, i5 | 0, i10 << 2) | 0;
  i7 = HEAP32[i8 >> 2] | 0;
  i1 = i7 - i3 + (HEAP32[i2 >> 2] | 0) | 0;
  _memcpy((HEAP32[i4 >> 2] | 0) + (i1 << 2) | 0, i5 + (i7 << 2) | 0, i3 - i7 << 2) | 0;
  HEAP32[i8 >> 2] = i1;
 } else {
  _memcpy(i6 + (i9 << 2) | 0, i5 + (i9 << 2) | 0, i10 - i9 << 2) | 0;
 }
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i2 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore15DatabaseBackendC2EN3WTF10PassRefPtrINS_22DatabaseBackendContextEEERKNS1_6StringES7_S7_m(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 i9 = i8 | 0;
 i10 = i2 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i9 >> 2] = i2;
 __ZN7WebCore19DatabaseBackendBaseC2EN3WTF10PassRefPtrINS_22DatabaseBackendContextEEERKNS1_6StringES7_S7_mNS_12DatabaseTypeE(i1 | 0, i8, i3, i4, i5, i6, 0);
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 + 12 | 0;
   i5 = i9 | 0;
   if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i5 = i9 - 12 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 7](i5);
  }
 } while (0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 _memset(i1 + 160 | 0, 0, 20) | 0;
 __ZN3WTF5MutexC1Ev(i1 + 180 | 0);
 HEAP8[i1 + 204 | 0] = 0;
 HEAP8[i1 + 205 | 0] = 1;
 STACKTOP = i7;
 return;
}
function __ZN7WebCore15DatabaseBackend20performOpenAndVerifyEbRNS_13DatabaseErrorERN3WTF6StringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 if (!(__ZN7WebCore19DatabaseBackendBase20performOpenAndVerifyEbRNS_13DatabaseErrorERN3WTF6StringE(i1 | 0, i2, i3, i4) | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 i4 = i1 + 12 | 0;
 if ((__ZN7WebCore15DatabaseContext14databaseThreadEv(HEAP32[i4 >> 2] | 0) | 0) == 0) {
  i5 = 1;
  return i5 | 0;
 }
 __ZN7WebCore14DatabaseThread18recordDatabaseOpenEPNS_15DatabaseBackendE(__ZN7WebCore15DatabaseContext14databaseThreadEv(HEAP32[i4 >> 2] | 0) | 0, i1);
 i5 = 1;
 return i5 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_iiiii + 4;
}
function __ZN7WebCore15DatabaseBackendD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 __ZN3WTF5MutexD1Ev(i1 + 180 | 0);
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore21SQLTransactionBackendEEELj0EE10destroyAllEv(i1 + 160 | 0);
 i2 = i1 + 168 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = i1 | 0;
  __ZN7WebCore19DatabaseBackendBaseD2Ev(i4);
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 172 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 i4 = i1 | 0;
 __ZN7WebCore19DatabaseBackendBaseD2Ev(i4);
 return;
}
function _memset(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = i1 + i3 | 0;
 if ((i3 | 0) >= 20) {
  i2 = i2 & 255;
  i5 = i1 & 3;
  i6 = i2 | i2 << 8 | i2 << 16 | i2 << 24;
  i7 = i4 & ~3;
  if (i5) {
   i5 = i1 + 4 - i5 | 0;
   while ((i1 | 0) < (i5 | 0)) {
    HEAP8[i1] = i2;
    i1 = i1 + 1 | 0;
   }
  }
  while ((i1 | 0) < (i7 | 0)) {
   HEAP32[i1 >> 2] = i6;
   i1 = i1 + 4 | 0;
  }
 }
 while ((i1 | 0) < (i4 | 0)) {
  HEAP8[i1] = i2;
  i1 = i1 + 1 | 0;
 }
 return i1 - i3 | 0;
}
function _memcpy(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1 | 0;
 if ((i1 & 3) == (i2 & 3)) {
  while (i1 & 3) {
   if ((i3 | 0) == 0) return i4 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
   i1 = i1 + 1 | 0;
   i2 = i2 + 1 | 0;
   i3 = i3 - 1 | 0;
  }
  while ((i3 | 0) >= 4) {
   HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
   i1 = i1 + 4 | 0;
   i2 = i2 + 4 | 0;
   i3 = i3 - 4 | 0;
  }
 }
 while ((i3 | 0) > 0) {
  HEAP8[i1] = HEAP8[i2] | 0;
  i1 = i1 + 1 | 0;
  i2 = i2 + 1 | 0;
  i3 = i3 - 1 | 0;
 }
 return i4 | 0;
}
function __ZN7WebCore15DatabaseBackendD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 __ZN3WTF5MutexD1Ev(i1 + 180 | 0);
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore21SQLTransactionBackendEEELj0EE10destroyAllEv(i1 + 160 | 0);
 i2 = i1 + 168 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 172 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 __ZN7WebCore19DatabaseBackendBaseD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function copyTempDouble(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
 HEAP8[tempDoublePtr + 4 | 0] = HEAP8[i1 + 4 | 0];
 HEAP8[tempDoublePtr + 5 | 0] = HEAP8[i1 + 5 | 0];
 HEAP8[tempDoublePtr + 6 | 0] = HEAP8[i1 + 6 | 0];
 HEAP8[tempDoublePtr + 7 | 0] = HEAP8[i1 + 7 | 0];
}
function __ZN7WebCore15DatabaseBackend30inProgressTransactionCompletedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 180 | 0;
 if ((i2 | 0) == 0) {
  HEAP8[i1 + 204 | 0] = 0;
  __ZN7WebCore15DatabaseBackend19scheduleTransactionEv(i1);
  return;
 } else {
  __ZN3WTF5Mutex4lockEv(i2);
  HEAP8[i1 + 204 | 0] = 0;
  __ZN7WebCore15DatabaseBackend19scheduleTransactionEv(i1);
  __ZN3WTF5Mutex6unlockEv(i2);
  return;
 }
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore15DatabaseBackend22transactionCoordinatorEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(__ZN7WebCore15DatabaseContext14databaseThreadEv(HEAP32[i1 + 12 >> 2] | 0) | 0) + 156 >> 2] | 0;
}
function __ZNK7WebCore15DatabaseBackend17transactionClientEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(__ZN7WebCore15DatabaseContext14databaseThreadEv(HEAP32[i1 + 12 >> 2] | 0) | 0) + 152 >> 2] | 0;
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function vii___ZNK7WebCore19DatabaseBackendBase16stringIdentifierEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore19DatabaseBackendBase16stringIdentifierEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore19DatabaseBackendBase11displayNameEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore19DatabaseBackendBase11displayNameEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore19DatabaseBackendBase8fileNameEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore19DatabaseBackendBase8fileNameEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore19DatabaseBackendBase7versionEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore19DatabaseBackendBase7versionEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore19DatabaseBackendBase7detailsEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore19DatabaseBackendBase7detailsEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore19DatabaseBackendBase14securityOriginEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore19DatabaseBackendBase14securityOriginEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore19DatabaseBackendBase13estimatedSizeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore19DatabaseBackendBase13estimatedSizeEv(i1 | 0) | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function _strlen(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1;
 while (HEAP8[i2] | 0) {
  i2 = i2 + 1 | 0;
 }
 return i2 - i1 | 0;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 15](i2 | 0, i3 | 0);
}
function b0(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(0);
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
 return 0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
}
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
}
function stackRestore(i1) {
 i1 = i1 | 0;
 STACKTOP = i1;
}
function setTempRet9(i1) {
 i1 = i1 | 0;
 tempRet9 = i1;
}
function setTempRet8(i1) {
 i1 = i1 | 0;
 tempRet8 = i1;
}
function setTempRet7(i1) {
 i1 = i1 | 0;
 tempRet7 = i1;
}
function setTempRet6(i1) {
 i1 = i1 | 0;
 tempRet6 = i1;
}
function setTempRet5(i1) {
 i1 = i1 | 0;
 tempRet5 = i1;
}
function setTempRet4(i1) {
 i1 = i1 | 0;
 tempRet4 = i1;
}
function setTempRet3(i1) {
 i1 = i1 | 0;
 tempRet3 = i1;
}
function setTempRet2(i1) {
 i1 = i1 | 0;
 tempRet2 = i1;
}
function setTempRet1(i1) {
 i1 = i1 | 0;
 tempRet1 = i1;
}
function setTempRet0(i1) {
 i1 = i1 | 0;
 tempRet0 = i1;
}
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b4() {
 abort(4);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiiii = [b0,b0,__ZN7WebCore15DatabaseBackend20openAndVerifyVersionEbRNS_13DatabaseErrorERN3WTF6StringE,b0,__ZN7WebCore15DatabaseBackend20performOpenAndVerifyEbRNS_13DatabaseErrorERN3WTF6StringE,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore15DatabaseBackendD0Ev,b1,__ZN7WebCore15DatabaseBackendD1Ev,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,vii___ZNK7WebCore19DatabaseBackendBase16stringIdentifierEv__wrapper,b2,vii___ZNK7WebCore19DatabaseBackendBase11displayNameEv__wrapper,b2,vii___ZNK7WebCore19DatabaseBackendBase7versionEv__wrapper,b2,vii___ZNK7WebCore19DatabaseBackendBase7detailsEv__wrapper,b2,vii___ZNK7WebCore19DatabaseBackendBase8fileNameEv__wrapper,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,ii___ZNK7WebCore19DatabaseBackendBase14securityOriginEv__wrapper,b3,ii___ZNK7WebCore19DatabaseBackendBase13estimatedSizeEv__wrapper,b3,b3,b3];
  var FUNCTION_TABLE_v = [b4,b4,v____cxa_pure_virtual__wrapper,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiii: dynCall_iiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiii": invoke_iiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
// Warning: printing of i64 values may be slightly rounded! No deep i64 math used, so precise i64 code not included
var i64Math = null;
// === Auto-generated postamble setup entry stuff ===
function run(args) {
  initRuntime();
}
Module['run'] = run;
// {{PRE_RUN_ADDITIONS}}
run();
// {{POST_RUN_ADDITIONS}}
  // {{MODULE_ADDITIONS}}
  return Module;
});
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore15DatabaseBackend5closeEv","_strlen","__ZN7WebCore15DatabaseBackend30inProgressTransactionCompletedEv","_memcpy","__ZN3WTF5DequeINS_6RefPtrIN7WebCore21SQLTransactionBackendEEELj0EE10destroyAllEv","__ZN3WTF5DequeINS_6RefPtrIN7WebCore21SQLTransactionBackendEEELj0EE14expandCapacityEv","__ZN7WebCore15DatabaseBackend19scheduleTransactionEv","__ZN7WebCore15DatabaseBackend14runTransactionEN3WTF10PassRefPtrINS_14SQLTransactionEEEbPKNS_17ChangeVersionDataE","__ZNK7WebCore15DatabaseBackend17transactionClientEv","__ZN7WebCore15DatabaseBackendC2EN3WTF10PassRefPtrINS_22DatabaseBackendContextEEERKNS1_6StringES7_S7_m","__ZN7WebCore15DatabaseBackendD0Ev","__ZN7WebCore15DatabaseBackend20performOpenAndVerifyEbRNS_13DatabaseErrorERN3WTF6StringE","__ZN7WebCore15DatabaseBackend23scheduleTransactionStepEPNS_21SQLTransactionBackendE","__ZN7WebCore15DatabaseBackend20openAndVerifyVersionEbRNS_13DatabaseErrorERN3WTF6StringE","_memset","__ZNK7WebCore15DatabaseBackend22transactionCoordinatorEv","__ZN7WebCore15DatabaseBackendD1Ev"]