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
define(["./when-0488ac89","./Check-78ca6843","./Math-8a4c9da1","./Cartesian2-cc1e6450","./defineProperties-c6a70625","./Transforms-1e8bb4c5","./RuntimeError-4d6e0952","./WebGLConstants-66e14a3b","./ComponentDatatype-9252f28f","./GeometryAttribute-d44fb96a","./GeometryAttributes-3227db5b","./IndexDatatype-8575c917","./IntersectionTests-b81b9813","./Plane-112f7911","./arrayRemoveDuplicates-c6db543d","./BoundingRectangle-71a8d821","./EllipsoidTangentPlane-f27da5bc","./EllipsoidRhumbLine-9e95354f","./PolygonPipeline-464da786","./PolylineVolumeGeometryLibrary-4582cd22","./EllipsoidGeodesic-80f12c10","./PolylinePipeline-fd7cf5e3"],function(d,e,a,c,i,y,n,t,h,f,g,m,r,o,l,s,p,u,v,E,P,_){"use strict";function b(e){var i=(e=d.defaultValue(e,d.defaultValue.EMPTY_OBJECT)).polylinePositions,n=e.shapePositions;this._positions=i,this._shape=n,this._ellipsoid=c.Ellipsoid.clone(d.defaultValue(e.ellipsoid,c.Ellipsoid.WGS84)),this._cornerType=d.defaultValue(e.cornerType,E.CornerType.ROUNDED),this._granularity=d.defaultValue(e.granularity,a.CesiumMath.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeOutlineGeometry";var t=1+i.length*c.Cartesian3.packedLength;t+=1+n.length*c.Cartesian2.packedLength,this.packedLength=t+c.Ellipsoid.packedLength+2}b.pack=function(e,i,n){var t;n=d.defaultValue(n,0);var a=e._positions,r=a.length;for(i[n++]=r,t=0;t<r;++t,n+=c.Cartesian3.packedLength)c.Cartesian3.pack(a[t],i,n);var o=e._shape;for(r=o.length,i[n++]=r,t=0;t<r;++t,n+=c.Cartesian2.packedLength)c.Cartesian2.pack(o[t],i,n);return c.Ellipsoid.pack(e._ellipsoid,i,n),n+=c.Ellipsoid.packedLength,i[n++]=e._cornerType,i[n]=e._granularity,i};var k=c.Ellipsoid.clone(c.Ellipsoid.UNIT_SPHERE),C={polylinePositions:void 0,shapePositions:void 0,ellipsoid:k,height:void 0,cornerType:void 0,granularity:void 0};b.unpack=function(e,i,n){var t;i=d.defaultValue(i,0);var a=e[i++],r=new Array(a);for(t=0;t<a;++t,i+=c.Cartesian3.packedLength)r[t]=c.Cartesian3.unpack(e,i);a=e[i++];var o=new Array(a);for(t=0;t<a;++t,i+=c.Cartesian2.packedLength)o[t]=c.Cartesian2.unpack(e,i);var l=c.Ellipsoid.unpack(e,i,k);i+=c.Ellipsoid.packedLength;var s=e[i++],p=e[i];return d.defined(n)?(n._positions=r,n._shape=o,n._ellipsoid=c.Ellipsoid.clone(l,n._ellipsoid),n._cornerType=s,n._granularity=p,n):(C.polylinePositions=r,C.shapePositions=o,C.cornerType=s,C.granularity=p,new b(C))};var L=new s.BoundingRectangle;return b.createGeometry=function(e){var i=e._positions,n=l.arrayRemoveDuplicates(i,c.Cartesian3.equalsEpsilon),t=e._shape;if(t=E.PolylineVolumeGeometryLibrary.removeDuplicatesFromShape(t),!(n.length<2||t.length<3)){v.PolygonPipeline.computeWindingOrder2D(t)===v.WindingOrder.CLOCKWISE&&t.reverse();var a=s.BoundingRectangle.fromPoints(t,L);return function(e,i){var n=new g.GeometryAttributes;n.position=new f.GeometryAttribute({componentDatatype:h.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e});var t,a,r=i.length,o=n.position.values.length/3,l=e.length/3/r,s=m.IndexDatatype.createTypedArray(o,2*r*(1+l)),p=0,d=(t=0)*r;for(a=0;a<r-1;a++)s[p++]=a+d,s[p++]=a+d+1;for(s[p++]=r-1+d,s[p++]=d,d=(t=l-1)*r,a=0;a<r-1;a++)s[p++]=a+d,s[p++]=a+d+1;for(s[p++]=r-1+d,s[p++]=d,t=0;t<l-1;t++){var c=r*t,u=c+r;for(a=0;a<r;a++)s[p++]=a+c,s[p++]=a+u}return new f.Geometry({attributes:n,indices:m.IndexDatatype.createTypedArray(o,s),boundingSphere:y.BoundingSphere.fromVertices(e),primitiveType:f.PrimitiveType.LINES})}(E.PolylineVolumeGeometryLibrary.computePositions(n,t,a,e,!1),t)}},function(e,i){return d.defined(i)&&(e=b.unpack(e,i)),e._ellipsoid=c.Ellipsoid.clone(e._ellipsoid),b.createGeometry(e)}});
