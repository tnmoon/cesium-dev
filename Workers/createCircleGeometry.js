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
define(["./when-0488ac89","./Check-78ca6843","./Math-8a4c9da1","./Cartesian2-cc1e6450","./defineProperties-c6a70625","./Transforms-1e8bb4c5","./RuntimeError-4d6e0952","./WebGLConstants-66e14a3b","./ComponentDatatype-9252f28f","./GeometryAttribute-d44fb96a","./GeometryAttributes-3227db5b","./AttributeCompression-fe1560e2","./GeometryPipeline-10acf4a2","./EncodedCartesian3-97ac8d01","./IndexDatatype-8575c917","./IntersectionTests-b81b9813","./Plane-112f7911","./GeometryOffsetAttribute-22febf92","./VertexFormat-7996cb24","./EllipseGeometryLibrary-77c652a2","./GeometryInstance-7f91b3b2","./EllipseGeometry-13a256bd"],function(o,e,t,a,i,r,n,s,l,m,d,c,u,p,y,_,h,G,x,f,g,b){"use strict";function v(e){var t=(e=o.defaultValue(e,o.defaultValue.EMPTY_OBJECT)).radius,i={center:e.center,semiMajorAxis:t,semiMinorAxis:t,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,vertexFormat:e.vertexFormat,stRotation:e.stRotation,shadowVolume:e.shadowVolume};this._ellipseGeometry=new b.EllipseGeometry(i),this._workerName="createCircleGeometry"}v.packedLength=b.EllipseGeometry.packedLength,v.pack=function(e,t,i){return b.EllipseGeometry.pack(e._ellipseGeometry,t,i)};var E=new b.EllipseGeometry({center:new a.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),w={center:new a.Cartesian3,radius:void 0,ellipsoid:a.Ellipsoid.clone(a.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,vertexFormat:new x.VertexFormat,stRotation:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0,shadowVolume:void 0};return v.unpack=function(e,t,i){var r=b.EllipseGeometry.unpack(e,t,E);return w.center=a.Cartesian3.clone(r._center,w.center),w.ellipsoid=a.Ellipsoid.clone(r._ellipsoid,w.ellipsoid),w.height=r._height,w.extrudedHeight=r._extrudedHeight,w.granularity=r._granularity,w.vertexFormat=x.VertexFormat.clone(r._vertexFormat,w.vertexFormat),w.stRotation=r._stRotation,w.shadowVolume=r._shadowVolume,o.defined(i)?(w.semiMajorAxis=r._semiMajorAxis,w.semiMinorAxis=r._semiMinorAxis,i._ellipseGeometry=new b.EllipseGeometry(w),i):(w.radius=r._semiMajorAxis,new v(w))},v.createGeometry=function(e){return b.EllipseGeometry.createGeometry(e._ellipseGeometry)},v.createShadowVolume=function(e,t,i){var r=e._ellipseGeometry._granularity,o=e._ellipseGeometry._ellipsoid,a=t(r,o),n=i(r,o);return new v({center:e._ellipseGeometry._center,radius:e._ellipseGeometry._semiMajorAxis,ellipsoid:o,stRotation:e._ellipseGeometry._stRotation,granularity:r,extrudedHeight:a,height:n,vertexFormat:x.VertexFormat.POSITION_ONLY,shadowVolume:!0})},i.defineProperties(v.prototype,{rectangle:{get:function(){return this._ellipseGeometry.rectangle}},textureCoordinateRotationPoints:{get:function(){return this._ellipseGeometry.textureCoordinateRotationPoints}}}),function(e,t){return o.defined(t)&&(e=v.unpack(e,t)),e._ellipseGeometry._center=a.Cartesian3.clone(e._ellipseGeometry._center),e._ellipseGeometry._ellipsoid=a.Ellipsoid.clone(e._ellipseGeometry._ellipsoid),v.createGeometry(e)}});
