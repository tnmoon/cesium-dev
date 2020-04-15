/**
 * Cesium - https://github.com/AnalyticalGraphicsInc/cesium
 *
 * Copyright 2011-2017 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md for full licensing details.
 */
define(["./when-0488ac89","./Check-78ca6843","./Math-8a4c9da1","./Cartesian2-cc1e6450","./defineProperties-c6a70625","./Transforms-1e8bb4c5","./RuntimeError-4d6e0952","./WebGLConstants-66e14a3b","./ComponentDatatype-9252f28f","./GeometryAttribute-d44fb96a","./GeometryAttributes-3227db5b","./AttributeCompression-fe1560e2","./GeometryPipeline-10acf4a2","./EncodedCartesian3-97ac8d01","./IndexDatatype-8575c917","./IntersectionTests-b81b9813","./Plane-112f7911","./PrimitivePipeline-c99c983b","./WebMercatorProjection-c0de4fbc","./createTaskProcessorWorker"],function(u,e,r,t,n,a,i,o,c,s,f,b,d,m,p,l,y,P,k,v){"use strict";var C={};function h(e){var r=C[e];return u.defined(r)||("object"==typeof exports?C[r]=r=require("Workers/"+e):require(["Workers/"+e],function(e){C[r=e]=e})),r}return v(function(e,r){for(var t=e.subTasks,n=t.length,a=new Array(n),i=0;i<n;i++){var o=t[i],c=o.geometry,s=o.moduleName;if(u.defined(s)){var f=h(s);a[i]=f(c,o.offset)}else a[i]=c}return u.when.all(a,function(e){return P.PrimitivePipeline.packCreateGeometryResults(e,r)})})});
