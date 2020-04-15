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
define(["./when-0488ac89","./Check-78ca6843","./Math-8a4c9da1","./Cartesian2-cc1e6450","./defineProperties-c6a70625","./Transforms-1e8bb4c5","./RuntimeError-4d6e0952","./WebGLConstants-66e14a3b","./ComponentDatatype-9252f28f","./GeometryAttribute-d44fb96a","./GeometryAttributes-3227db5b","./AttributeCompression-fe1560e2","./GeometryPipeline-10acf4a2","./EncodedCartesian3-97ac8d01","./IndexDatatype-8575c917","./IntersectionTests-b81b9813","./Plane-112f7911","./GeometryInstance-7f91b3b2","./arrayRemoveDuplicates-c6db543d","./EllipsoidTangentPlane-f27da5bc","./OrientedBoundingBox-521bb99d","./CoplanarPolygonGeometryLibrary-da3014a1","./ArcType-318ba758","./EllipsoidRhumbLine-9e95354f","./PolygonPipeline-464da786","./PolygonGeometryLibrary-e7d927ed"],function(a,e,t,c,r,p,n,o,s,u,d,i,m,y,b,l,f,g,h,P,G,v,L,C,T,E){"use strict";function k(e){for(var t=e.length,r=new Float64Array(3*t),n=b.IndexDatatype.createTypedArray(t,2*t),o=0,a=0,i=0;i<t;i++){var y=e[i];r[o++]=y.x,r[o++]=y.y,r[o++]=y.z,n[a++]=i,n[a++]=(i+1)%t}var l=new d.GeometryAttributes({position:new u.GeometryAttribute({componentDatatype:s.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:r})});return new u.Geometry({attributes:l,indices:n,primitiveType:u.PrimitiveType.LINES})}function H(e){var t=(e=a.defaultValue(e,a.defaultValue.EMPTY_OBJECT)).polygonHierarchy;this._polygonHierarchy=t,this._workerName="createCoplanarPolygonOutlineGeometry",this.packedLength=E.PolygonGeometryLibrary.computeHierarchyPackedLength(t)+1}H.fromPositions=function(e){return new H({polygonHierarchy:{positions:(e=a.defaultValue(e,a.defaultValue.EMPTY_OBJECT)).positions}})},H.pack=function(e,t,r){return r=a.defaultValue(r,0),t[r=E.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,r)]=e.packedLength,t};var w={polygonHierarchy:{}};return H.unpack=function(e,t,r){t=a.defaultValue(t,0);var n=E.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t);t=n.startingIndex,delete n.startingIndex;var o=e[t];return a.defined(r)||(r=new H(w)),r._polygonHierarchy=n,r.packedLength=o,r},H.createGeometry=function(e){var t=e._polygonHierarchy,r=t.positions;if(!((r=h.arrayRemoveDuplicates(r,c.Cartesian3.equalsEpsilon,!0)).length<3)&&v.CoplanarPolygonGeometryLibrary.validOutline(r)){var n=E.PolygonGeometryLibrary.polygonOutlinesFromHierarchy(t,!1);if(0!==n.length){for(var o=[],a=0;a<n.length;a++){var i=new g.GeometryInstance({geometry:k(n[a])});o.push(i)}var y=m.GeometryPipeline.combineInstances(o)[0],l=p.BoundingSphere.fromPoints(t.positions);return new u.Geometry({attributes:y.attributes,indices:y.indices,primitiveType:y.primitiveType,boundingSphere:l})}}},function(e,t){return a.defined(t)&&(e=H.unpack(e,t)),e._ellipsoid=c.Ellipsoid.clone(e._ellipsoid),H.createGeometry(e)}});
