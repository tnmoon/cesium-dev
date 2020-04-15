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
define(["./when-0488ac89","./Check-78ca6843","./Math-8a4c9da1","./Cartesian2-cc1e6450","./defineProperties-c6a70625","./Transforms-1e8bb4c5","./RuntimeError-4d6e0952","./WebGLConstants-66e14a3b","./ComponentDatatype-9252f28f","./GeometryAttribute-d44fb96a","./GeometryAttributes-3227db5b","./IndexDatatype-8575c917","./GeometryOffsetAttribute-22febf92","./EllipseGeometryLibrary-77c652a2","./EllipseOutlineGeometry-579b8f47"],function(r,e,t,i,n,a,o,c,l,s,f,b,u,d,p){"use strict";return function(e,t){return r.defined(t)&&(e=p.EllipseOutlineGeometry.unpack(e,t)),e._center=i.Cartesian3.clone(e._center),e._ellipsoid=i.Ellipsoid.clone(e._ellipsoid),p.EllipseOutlineGeometry.createGeometry(e)}});
