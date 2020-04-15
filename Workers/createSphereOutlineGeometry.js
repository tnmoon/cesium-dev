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
define(["./when-0488ac89","./Check-78ca6843","./Math-8a4c9da1","./Cartesian2-cc1e6450","./defineProperties-c6a70625","./Transforms-1e8bb4c5","./RuntimeError-4d6e0952","./WebGLConstants-66e14a3b","./ComponentDatatype-9252f28f","./GeometryAttribute-d44fb96a","./GeometryAttributes-3227db5b","./IndexDatatype-8575c917","./GeometryOffsetAttribute-22febf92","./EllipsoidOutlineGeometry-cfde3b62"],function(n,e,i,s,t,r,o,a,d,l,c,u,p,m){"use strict";function y(e){var i=n.defaultValue(e.radius,1),t={radii:new s.Cartesian3(i,i,i),stackPartitions:e.stackPartitions,slicePartitions:e.slicePartitions,subdivisions:e.subdivisions};this._ellipsoidGeometry=new m.EllipsoidOutlineGeometry(t),this._workerName="createSphereOutlineGeometry"}y.packedLength=m.EllipsoidOutlineGeometry.packedLength,y.pack=function(e,i,t){return m.EllipsoidOutlineGeometry.pack(e._ellipsoidGeometry,i,t)};var f=new m.EllipsoidOutlineGeometry,G={radius:void 0,radii:new s.Cartesian3,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0};return y.unpack=function(e,i,t){var r=m.EllipsoidOutlineGeometry.unpack(e,i,f);return G.stackPartitions=r._stackPartitions,G.slicePartitions=r._slicePartitions,G.subdivisions=r._subdivisions,n.defined(t)?(s.Cartesian3.clone(r._radii,G.radii),t._ellipsoidGeometry=new m.EllipsoidOutlineGeometry(G),t):(G.radius=r._radii.x,new y(G))},y.createGeometry=function(e){return m.EllipsoidOutlineGeometry.createGeometry(e._ellipsoidGeometry)},function(e,i){return n.defined(i)&&(e=y.unpack(e,i)),y.createGeometry(e)}});
