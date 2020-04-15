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
define(["./when-0488ac89","./Check-78ca6843","./Math-8a4c9da1","./Cartesian2-cc1e6450","./defineProperties-c6a70625","./Transforms-1e8bb4c5","./RuntimeError-4d6e0952","./WebGLConstants-66e14a3b","./ComponentDatatype-9252f28f","./GeometryAttribute-d44fb96a","./GeometryAttributes-3227db5b","./IndexDatatype-8575c917","./GeometryOffsetAttribute-22febf92","./EllipsoidRhumbLine-9e95354f","./PolygonPipeline-464da786","./RectangleGeometryLibrary-c554de43"],function(h,e,y,p,t,m,i,a,E,A,G,R,b,r,P,w){"use strict";var _=new m.BoundingSphere,v=new m.BoundingSphere,L=new p.Cartesian3,C=new p.Rectangle;function D(e,t){var i=e._ellipsoid,a=t.height,r=t.width,n=t.northCap,o=t.southCap,l=a,u=2,s=0,p=4;n&&(--u,--l,s+=1,p-=2),o&&(--u,--l,s+=1,p-=2),s+=u*r+2*l-p;var c,d=new Float64Array(3*s),f=0,g=0,h=L;if(n)w.RectangleGeometryLibrary.computePosition(t,i,!1,g,0,h),d[f++]=h.x,d[f++]=h.y,d[f++]=h.z;else for(c=0;c<r;c++)w.RectangleGeometryLibrary.computePosition(t,i,!1,g,c,h),d[f++]=h.x,d[f++]=h.y,d[f++]=h.z;for(c=r-1,g=1;g<a;g++)w.RectangleGeometryLibrary.computePosition(t,i,!1,g,c,h),d[f++]=h.x,d[f++]=h.y,d[f++]=h.z;if(g=a-1,!o)for(c=r-2;0<=c;c--)w.RectangleGeometryLibrary.computePosition(t,i,!1,g,c,h),d[f++]=h.x,d[f++]=h.y,d[f++]=h.z;for(c=0,g=a-2;0<g;g--)w.RectangleGeometryLibrary.computePosition(t,i,!1,g,c,h),d[f++]=h.x,d[f++]=h.y,d[f++]=h.z;for(var y=d.length/3*2,m=R.IndexDatatype.createTypedArray(d.length/3,y),b=0,_=0;_<d.length/3-1;_++)m[b++]=_,m[b++]=_+1;m[b++]=d.length/3-1,m[b++]=0;var v=new A.Geometry({attributes:new G.GeometryAttributes,primitiveType:A.PrimitiveType.LINES});return v.attributes.position=new A.GeometryAttribute({componentDatatype:E.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:d}),v.indices=m,v}function c(e){var t=(e=h.defaultValue(e,h.defaultValue.EMPTY_OBJECT)).rectangle,i=h.defaultValue(e.granularity,y.CesiumMath.RADIANS_PER_DEGREE),a=h.defaultValue(e.ellipsoid,p.Ellipsoid.WGS84),r=h.defaultValue(e.rotation,0),n=h.defaultValue(e.height,0),o=h.defaultValue(e.extrudedHeight,n);this._rectangle=p.Rectangle.clone(t),this._granularity=i,this._ellipsoid=a,this._surfaceHeight=Math.max(n,o),this._rotation=r,this._extrudedHeight=Math.min(n,o),this._offsetAttribute=e.offsetAttribute,this._workerName="createRectangleOutlineGeometry"}c.packedLength=p.Rectangle.packedLength+p.Ellipsoid.packedLength+5,c.pack=function(e,t,i){return i=h.defaultValue(i,0),p.Rectangle.pack(e._rectangle,t,i),i+=p.Rectangle.packedLength,p.Ellipsoid.pack(e._ellipsoid,t,i),i+=p.Ellipsoid.packedLength,t[i++]=e._granularity,t[i++]=e._surfaceHeight,t[i++]=e._rotation,t[i++]=e._extrudedHeight,t[i]=h.defaultValue(e._offsetAttribute,-1),t};var d=new p.Rectangle,f=p.Ellipsoid.clone(p.Ellipsoid.UNIT_SPHERE),g={rectangle:d,ellipsoid:f,granularity:void 0,height:void 0,rotation:void 0,extrudedHeight:void 0,offsetAttribute:void 0};c.unpack=function(e,t,i){t=h.defaultValue(t,0);var a=p.Rectangle.unpack(e,t,d);t+=p.Rectangle.packedLength;var r=p.Ellipsoid.unpack(e,t,f);t+=p.Ellipsoid.packedLength;var n=e[t++],o=e[t++],l=e[t++],u=e[t++],s=e[t];return h.defined(i)?(i._rectangle=p.Rectangle.clone(a,i._rectangle),i._ellipsoid=p.Ellipsoid.clone(r,i._ellipsoid),i._surfaceHeight=o,i._rotation=l,i._extrudedHeight=u,i._offsetAttribute=-1===s?void 0:s,i):(g.granularity=n,g.height=o,g.rotation=l,g.extrudedHeight=u,g.offsetAttribute=-1===s?void 0:s,new c(g))};var x=new p.Cartographic;return c.createGeometry=function(e){var t,i,a=e._rectangle,r=e._ellipsoid,n=w.RectangleGeometryLibrary.computeOptions(a,e._granularity,e._rotation,0,C,x);if(!y.CesiumMath.equalsEpsilon(a.north,a.south,y.CesiumMath.EPSILON10)&&!y.CesiumMath.equalsEpsilon(a.east,a.west,y.CesiumMath.EPSILON10)){var o,l=e._surfaceHeight,u=e._extrudedHeight;if(!y.CesiumMath.equalsEpsilon(l,u,0,y.CesiumMath.EPSILON2)){if(t=function(e,t){var i=e._surfaceHeight,a=e._extrudedHeight,r=e._ellipsoid,n=a,o=i,l=D(e,t),u=t.height,s=t.width,p=P.PolygonPipeline.scaleToGeodeticHeight(l.attributes.position.values,o,r,!1),c=p.length,d=new Float64Array(2*c);d.set(p);var f=P.PolygonPipeline.scaleToGeodeticHeight(l.attributes.position.values,n,r);d.set(f,c),l.attributes.position.values=d;var g=t.northCap,h=t.southCap,y=4;g&&--y,h&&--y;var m=2*(d.length/3+y),b=R.IndexDatatype.createTypedArray(d.length/3,m);c=d.length/6;for(var _,v=0,E=0;E<c-1;E++)b[v++]=E,b[v++]=E+1,b[v++]=E+c,b[v++]=E+c+1;if(b[v++]=c-1,b[v++]=0,b[v++]=c+c-1,b[v++]=c,b[v++]=0,b[v++]=c,g)_=u-1;else{var A=s-1;b[v++]=A,b[v++]=A+c,_=s+u-2}if(b[v++]=_,b[v++]=_+c,!h){var G=s+_-1;b[v++]=G,b[v]=G+c}return l.indices=b,l}(e,n),h.defined(e._offsetAttribute)){var s=t.attributes.position.values.length/3,p=new Uint8Array(s);p=e._offsetAttribute===b.GeometryOffsetAttribute.TOP?b.arrayFill(p,1,0,s/2):(o=e._offsetAttribute===b.GeometryOffsetAttribute.NONE?0:1,b.arrayFill(p,o)),t.attributes.applyOffset=new A.GeometryAttribute({componentDatatype:E.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:p})}var c=m.BoundingSphere.fromRectangle3D(a,r,l,v),d=m.BoundingSphere.fromRectangle3D(a,r,u,_);i=m.BoundingSphere.union(c,d)}else{if((t=D(e,n)).attributes.position.values=P.PolygonPipeline.scaleToGeodeticHeight(t.attributes.position.values,l,r,!1),h.defined(e._offsetAttribute)){var f=t.attributes.position.values.length,g=new Uint8Array(f/3);o=e._offsetAttribute===b.GeometryOffsetAttribute.NONE?0:1,b.arrayFill(g,o),t.attributes.applyOffset=new A.GeometryAttribute({componentDatatype:E.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:g})}i=m.BoundingSphere.fromRectangle3D(a,r,l)}return new A.Geometry({attributes:t.attributes,indices:t.indices,primitiveType:A.PrimitiveType.LINES,boundingSphere:i,offsetAttribute:e._offsetAttribute})}},function(e,t){return h.defined(t)&&(e=c.unpack(e,t)),e._ellipsoid=p.Ellipsoid.clone(e._ellipsoid),e._rectangle=p.Rectangle.clone(e._rectangle),c.createGeometry(e)}});
