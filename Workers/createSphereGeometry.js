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
define(["./when-0488ac89","./Check-78ca6843","./Math-8a4c9da1","./Cartesian2-cc1e6450","./defineProperties-c6a70625","./Transforms-1e8bb4c5","./RuntimeError-4d6e0952","./WebGLConstants-66e14a3b","./ComponentDatatype-9252f28f","./GeometryAttribute-d44fb96a","./GeometryAttributes-3227db5b","./IndexDatatype-8575c917","./GeometryOffsetAttribute-22febf92","./VertexFormat-7996cb24","./EllipsoidGeometry-cc3ee65d"],function(a,e,t,o,r,i,n,s,c,d,l,m,p,u,y){"use strict";function G(e){var t=a.defaultValue(e.radius,1),r={radii:new o.Cartesian3(t,t,t),stackPartitions:e.stackPartitions,slicePartitions:e.slicePartitions,vertexFormat:e.vertexFormat};this._ellipsoidGeometry=new y.EllipsoidGeometry(r),this._workerName="createSphereGeometry"}G.packedLength=y.EllipsoidGeometry.packedLength,G.pack=function(e,t,r){return y.EllipsoidGeometry.pack(e._ellipsoidGeometry,t,r)};var f=new y.EllipsoidGeometry,k={radius:void 0,radii:new o.Cartesian3,vertexFormat:new u.VertexFormat,stackPartitions:void 0,slicePartitions:void 0};return G.unpack=function(e,t,r){var i=y.EllipsoidGeometry.unpack(e,t,f);return k.vertexFormat=u.VertexFormat.clone(i._vertexFormat,k.vertexFormat),k.stackPartitions=i._stackPartitions,k.slicePartitions=i._slicePartitions,a.defined(r)?(o.Cartesian3.clone(i._radii,k.radii),r._ellipsoidGeometry=new y.EllipsoidGeometry(k),r):(k.radius=i._radii.x,new G(k))},G.createGeometry=function(e){return y.EllipsoidGeometry.createGeometry(e._ellipsoidGeometry)},function(e,t){return a.defined(t)&&(e=G.unpack(e,t)),G.createGeometry(e)}});
