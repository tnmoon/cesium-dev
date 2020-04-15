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
define(["./when-0488ac89","./Check-78ca6843","./Math-8a4c9da1","./Cartesian2-cc1e6450","./defineProperties-c6a70625","./Transforms-1e8bb4c5","./RuntimeError-4d6e0952","./WebGLConstants-66e14a3b","./ComponentDatatype-9252f28f","./AttributeCompression-fe1560e2","./IntersectionTests-b81b9813","./Plane-112f7911","./WebMercatorProjection-c0de4fbc","./createTaskProcessorWorker","./EllipsoidTangentPlane-f27da5bc","./OrientedBoundingBox-521bb99d","./TerrainEncoding-c442f7a9"],function(je,e,Ge,qe,t,Qe,l,a,i,r,n,s,Je,o,Ke,$e,et){"use strict";var f=je.freezeObject({NONE:0,LERC:1}),tt={};tt.DEFAULT_STRUCTURE=je.freezeObject({heightScale:1,heightOffset:0,elementsPerHeight:1,stride:1,elementMultiplier:256,isBigEndian:!1});var at=new qe.Cartesian3,it=new Qe.Matrix4,rt=new qe.Cartesian3,nt=new qe.Cartesian3;tt.computeVertices=function(e){var t,a,i,r,n=Math.cos,s=Math.sin,l=Math.sqrt,o=Math.atan,f=Math.exp,u=Ge.CesiumMath.PI_OVER_TWO,c=Ge.CesiumMath.toRadians,d=e.heightmap,h=e.width,m=e.height,g=e.skirtHeight,p=je.defaultValue(e.isGeographic,!0),w=je.defaultValue(e.ellipsoid,qe.Ellipsoid.WGS84),x=1/w.maximumRadius,k=e.nativeRectangle,y=e.rectangle;r=je.defined(y)?(t=y.west,a=y.south,i=y.east,y.north):p?(t=c(k.west),a=c(k.south),i=c(k.east),c(k.north)):(t=k.west*x,a=u-2*o(f(-k.south*x)),i=k.east*x,u-2*o(f(-k.north*x)));var I=e.relativeToCenter,b=je.defined(I);I=b?I:qe.Cartesian3.ZERO;var v=je.defaultValue(e.exaggeration,1),U=je.defaultValue(e.includeWebMercatorT,!1),T=je.defaultValue(e.structure,tt.DEFAULT_STRUCTURE),M=je.defaultValue(T.heightScale,tt.DEFAULT_STRUCTURE.heightScale),V=je.defaultValue(T.heightOffset,tt.DEFAULT_STRUCTURE.heightOffset),A=je.defaultValue(T.elementsPerHeight,tt.DEFAULT_STRUCTURE.elementsPerHeight),B=je.defaultValue(T.stride,tt.DEFAULT_STRUCTURE.stride),D=je.defaultValue(T.elementMultiplier,tt.DEFAULT_STRUCTURE.elementMultiplier),S=je.defaultValue(T.isBigEndian,tt.DEFAULT_STRUCTURE.isBigEndian),P=qe.Rectangle.computeWidth(k),E=qe.Rectangle.computeHeight(k),C=P/(h-1),F=E/(m-1);p||(P*=x,E*=x);var L,N,O=w.radiiSquared,z=O.x,R=O.y,H=O.z,_=65536,Y=-65536,W=Qe.Transforms.eastNorthUpToFixedFrame(I,w),X=Qe.Matrix4.inverseTransformation(W,it);U&&(L=Je.WebMercatorProjection.geodeticLatitudeToMercatorAngle(a),N=1/(Je.WebMercatorProjection.geodeticLatitudeToMercatorAngle(r)-L));var Z=rt;Z.x=Number.POSITIVE_INFINITY,Z.y=Number.POSITIVE_INFINITY,Z.z=Number.POSITIVE_INFINITY;var j=nt;j.x=Number.NEGATIVE_INFINITY,j.y=Number.NEGATIVE_INFINITY,j.z=Number.NEGATIVE_INFINITY;var G=Number.POSITIVE_INFINITY,q=h+(0<g?2:0),Q=m+(0<g?2:0),J=q*Q,K=new Array(J),$=new Array(J),ee=new Array(J),te=U?new Array(J):[],ae=0,ie=m,re=0,ne=h;0<g&&(--ae,++ie,--re,++ne);for(var se=0,le=ae;le<ie;++le){var oe=le;oe<0&&(oe=0),m<=oe&&(oe=m-1);var fe,ue=k.north-F*oe,ce=n(ue=p?c(ue):u-2*o(f(-ue*x))),de=s(ue),he=H*de,me=(ue-a)/(r-a);me=Ge.CesiumMath.clamp(me,0,1),U&&(fe=(Je.WebMercatorProjection.geodeticLatitudeToMercatorAngle(ue)-L)*N);for(var ge=re;ge<ne;++ge){var pe=ge;pe<0&&(pe=0),h<=pe&&(pe=h-1);var we=k.west+C*pe;p?we=c(we):we*=x;var xe,ke,ye=oe*(h*B)+pe*B;if(1===A)xe=d[ye];else if(xe=0,S)for(ke=0;ke<A;++ke)xe=xe*D+d[ye+ke];else for(ke=A-1;0<=ke;--ke)xe=xe*D+d[ye+ke];xe=(xe*M+V)*v;var Ie=(we-t)/(i-t);if(Ie=Ge.CesiumMath.clamp(Ie,0,1),ee[se]=new qe.Cartesian2(Ie,me),Y=Math.max(Y,xe),_=Math.min(_,xe),ge!==pe||le!==oe){ge<0?we-=1e-5*P:we+=1e-5*P,le<0?ue+=1e-5*E:ue-=1e-5*E,ce=n(ue),he=H*(de=s(ue)),xe-=g}var be=ce*n(we),ve=ce*s(we),Ue=z*be,Te=R*ve,Me=1/l(Ue*be+Te*ve+he*de),Ve=Ue*Me,Ae=Te*Me,Be=he*Me,De=new qe.Cartesian3;De.x=Ve+be*xe,De.y=Ae+ve*xe,De.z=Be+de*xe,K[se]=De,$[se]=xe,U&&(te[se]=fe),se++,Qe.Matrix4.multiplyByPoint(X,De,at),qe.Cartesian3.minimumByComponent(at,Z,Z),qe.Cartesian3.maximumByComponent(at,j,j),G=Math.min(G,xe)}}var Se,Pe,Ee=Qe.BoundingSphere.fromPoints(K);je.defined(y)&&(Se=$e.OrientedBoundingBox.fromRectangle(y,_,Y,w)),b&&(Pe=new et.EllipsoidalOccluder(w).computeHorizonCullingPointPossiblyUnderEllipsoid(I,K,_));for(var Ce,Fe,Le,Ne,Oe=new Ke.AxisAlignedBoundingBox(Z,j,I),ze=new et.TerrainEncoding(Oe,G,Y,W,!1,U),Re=new Float32Array(J*ze.getStride()),He=0,_e=0;_e<J;++_e)He=ze.encode(Re,He,K[_e],ee[_e],$[_e],void 0,te[_e]);if(0<g){Ne=[],Fe=[];for(var Ye=0;Ye<h;++Ye)Ne.push(q+1+Ye),Fe.push(q*(Q-1)-2-Ye);Ce=[],Le=[];for(var We=0;We<m;++We)Le.push((We+1)*q+h),Ce.push((m-We)*q+1)}else{Ne=[],Fe=[];for(var Xe=0;Xe<h;++Xe)Ne.push(Xe),Fe.push(h*m-1-Xe);Ce=[],Le=[];for(var Ze=0;Ze<m;++Ze)Le.push((Ze+1)*h-1),Ce.push((m-Ze-1)*h)}return{vertices:Re,maximumHeight:Y,minimumHeight:_,encoding:ze,boundingSphere3D:Ee,orientedBoundingBox:Se,occludeePointInScaledSpace:Pe,westIndicesSouthToNorth:Ce,southIndicesEastToWest:Fe,eastIndicesNorthToSouth:Le,northIndicesWestToEast:Ne}};var u,c,d,h,m,B,V,A,D,S,P,E,R,C,g,p,x,k,y,w,I={};u={defaultNoDataValue:-34027999387901484e22,decode:function(e,t){var a=(t=t||{}).encodedMaskData||null===t.encodedMaskData,i=m(e,t.inputOffset||0,a),r=null!==t.noDataValue?t.noDataValue:u.defaultNoDataValue,n=c(i,t.pixelType||Float32Array,t.encodedMaskData,r,t.returnMask),s={width:i.width,height:i.height,pixelData:n.resultPixels,minValue:n.minValue,maxValue:i.pixels.maxValue,noDataValue:r};return n.resultMask&&(s.maskData=n.resultMask),t.returnEncodedMask&&i.mask&&(s.encodedMaskData=i.mask.bitset?i.mask.bitset:null),t.returnFileInfo&&(s.fileInfo=d(i),t.computeUsedBitDepths&&(s.fileInfo.bitDepths=h(i))),s}},c=function(e,t,a,i,r){var n,s,l,o=0,f=e.pixels.numBlocksX,u=e.pixels.numBlocksY,c=Math.floor(e.width/f),d=Math.floor(e.height/u),h=2*e.maxZError,m=Number.MAX_VALUE;a=a||(e.mask?e.mask.bitset:null),s=new t(e.width*e.height),r&&a&&(l=new Uint8Array(e.width*e.height));for(var g,p,w=new Float32Array(c*d),x=0;x<=u;x++){var k=x!==u?d:e.height%u;if(0!==k)for(var y=0;y<=f;y++){var I=y!==f?c:e.width%f;if(0!==I){var b,v,U,T,M=x*e.width*d+y*c,V=e.width-I,A=e.pixels.blocks[o];if(A.encoding<2?(b=0===A.encoding?A.rawData:(B(A.stuffedData,A.bitsPerPixel,A.numValidPixels,A.offset,h,w,e.pixels.maxValue),w),v=0):U=2===A.encoding?0:A.offset,a)for(p=0;p<k;p++){for(7&M&&(T=a[M>>3],T<<=7&M),g=0;g<I;g++)7&M||(T=a[M>>3]),128&T?(l&&(l[M]=1),m=(n=A.encoding<2?b[v++]:U)<m?n:m,s[M++]=n):(l&&(l[M]=0),s[M++]=i),T<<=1;M+=V}else if(A.encoding<2)for(p=0;p<k;p++){for(g=0;g<I;g++)m=(n=b[v++])<m?n:m,s[M++]=n;M+=V}else for(m=U<m?U:m,p=0;p<k;p++){for(g=0;g<I;g++)s[M++]=U;M+=V}if(1===A.encoding&&v!==A.numValidPixels)throw"Block and Mask do not match";o++}}}return{resultPixels:s,resultMask:l,minValue:m}},d=function(e){return{fileIdentifierString:e.fileIdentifierString,fileVersion:e.fileVersion,imageType:e.imageType,height:e.height,width:e.width,maxZError:e.maxZError,eofOffset:e.eofOffset,mask:e.mask?{numBlocksX:e.mask.numBlocksX,numBlocksY:e.mask.numBlocksY,numBytes:e.mask.numBytes,maxValue:e.mask.maxValue}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,numBytes:e.pixels.numBytes,maxValue:e.pixels.maxValue,noDataValue:e.noDataValue}}},h=function(e){for(var t=e.pixels.numBlocksX*e.pixels.numBlocksY,a={},i=0;i<t;i++){var r=e.pixels.blocks[i];0===r.encoding?a.float32=!0:1===r.encoding?a[r.bitsPerPixel]=!0:a[0]=!0}return Object.keys(a)},m=function(e,t,a){var i={},r=new Uint8Array(e,t,10);if(i.fileIdentifierString=String.fromCharCode.apply(null,r),"CntZImage"!==i.fileIdentifierString.trim())throw"Unexpected file identifier string: "+i.fileIdentifierString;t+=10;var n=new DataView(e,t,24);if(i.fileVersion=n.getInt32(0,!0),i.imageType=n.getInt32(4,!0),i.height=n.getUint32(8,!0),i.width=n.getUint32(12,!0),i.maxZError=n.getFloat64(16,!0),t+=24,!a)if(n=new DataView(e,t,16),i.mask={},i.mask.numBlocksY=n.getUint32(0,!0),i.mask.numBlocksX=n.getUint32(4,!0),i.mask.numBytes=n.getUint32(8,!0),i.mask.maxValue=n.getFloat32(12,!0),t+=16,0<i.mask.numBytes){var s=new Uint8Array(Math.ceil(i.width*i.height/8)),l=(n=new DataView(e,t,i.mask.numBytes)).getInt16(0,!0),o=2,f=0;do{if(0<l)for(;l--;)s[f++]=n.getUint8(o++);else{var u=n.getUint8(o++);for(l=-l;l--;)s[f++]=u}l=n.getInt16(o,!0),o+=2}while(o<i.mask.numBytes);if(-32768!==l||f<s.length)throw"Unexpected end of mask RLE encoding";i.mask.bitset=s,t+=i.mask.numBytes}else 0==(i.mask.numBytes|i.mask.numBlocksY|i.mask.maxValue)&&(i.mask.bitset=new Uint8Array(Math.ceil(i.width*i.height/8)));n=new DataView(e,t,16),i.pixels={},i.pixels.numBlocksY=n.getUint32(0,!0),i.pixels.numBlocksX=n.getUint32(4,!0),i.pixels.numBytes=n.getUint32(8,!0),i.pixels.maxValue=n.getFloat32(12,!0),t+=16;var c=i.pixels.numBlocksX,d=i.pixels.numBlocksY,h=c+(0<i.width%c?1:0),m=d+(0<i.height%d?1:0);i.pixels.blocks=new Array(h*m);for(var g=0,p=0;p<m;p++)for(var w=0;w<h;w++){var x=0,k=e.byteLength-t;n=new DataView(e,t,Math.min(10,k));var y={};i.pixels.blocks[g++]=y;var I=n.getUint8(0);if(x++,y.encoding=63&I,3<y.encoding)throw"Invalid block encoding ("+y.encoding+")";if(2!==y.encoding){if(0!==I&&2!==I){if(I>>=6,2===(y.offsetType=I))y.offset=n.getInt8(1),x++;else if(1===I)y.offset=n.getInt16(1,!0),x+=2;else{if(0!==I)throw"Invalid block offset type";y.offset=n.getFloat32(1,!0),x+=4}if(1===y.encoding)if(I=n.getUint8(x),x++,y.bitsPerPixel=63&I,I>>=6,2===(y.numValidPixelsType=I))y.numValidPixels=n.getUint8(x),x++;else if(1===I)y.numValidPixels=n.getUint16(x,!0),x+=2;else{if(0!==I)throw"Invalid valid pixel count type";y.numValidPixels=n.getUint32(x,!0),x+=4}}var b;if(t+=x,3!==y.encoding)if(0===y.encoding){var v=(i.pixels.numBytes-1)/4;if(v!==Math.floor(v))throw"uncompressed block has invalid length";b=new ArrayBuffer(4*v),new Uint8Array(b).set(new Uint8Array(e,t,4*v));var U=new Float32Array(b);y.rawData=U,t+=4*v}else if(1===y.encoding){var T=Math.ceil(y.numValidPixels*y.bitsPerPixel/8),M=Math.ceil(T/4);b=new ArrayBuffer(4*M),new Uint8Array(b).set(new Uint8Array(e,t,T)),y.stuffedData=new Uint32Array(b),t+=T}}else t++}return i.eofOffset=t,i},B=function(e,t,a,i,r,n,s){var l,o,f,u=(1<<t)-1,c=0,d=0,h=Math.ceil((s-i)/r),m=4*e.length-Math.ceil(t*a/8);for(e[e.length-1]<<=8*m,l=0;l<a;l++){if(0===d&&(f=e[c++],d=32),t<=d)o=f>>>d-t&u,d-=t;else{var g=t-d;o=(f&u)<<g&u,o+=(f=e[c++])>>>(d=32-g)}n[l]=o<h?i+o*r:s}return n},x=u,V=function(e,t,a,i,r,n,s,l){var o,f,u,c,d,h=(1<<a)-1,m=0,g=0,p=4*e.length-Math.ceil(a*i/8);if(e[e.length-1]<<=8*p,r)for(o=0;o<i;o++)0===g&&(u=e[m++],g=32),a<=g?(f=u>>>g-a&h,g-=a):(f=(u&h)<<(c=a-g)&h,f+=(u=e[m++])>>>(g=32-c)),t[o]=r[f];else for(d=Math.ceil((l-n)/s),o=0;o<i;o++)0===g&&(u=e[m++],g=32),a<=g?(f=u>>>g-a&h,g-=a):(f=(u&h)<<(c=a-g)&h,f+=(u=e[m++])>>>(g=32-c)),t[o]=f<d?n+f*s:l},A=function(e,t,a,i,r,n){var s,l=(1<<t)-1,o=0,f=0,u=0,c=0,d=0,h=[],m=4*e.length-Math.ceil(t*a/8);e[e.length-1]<<=8*m;var g=Math.ceil((n-i)/r);for(f=0;f<a;f++)0===c&&(s=e[o++],c=32),t<=c?(d=s>>>c-t&l,c-=t):(d=(s&l)<<(u=t-c)&l,d+=(s=e[o++])>>>(c=32-u)),h[f]=d<g?i+d*r:n;return h.unshift(i),h},D=function(e,t,a,i,r,n,s,l){var o,f,u,c,d=(1<<a)-1,h=0,m=0,g=0;if(r)for(o=0;o<i;o++)0===m&&(u=e[h++],m=32,g=0),a<=m?(f=u>>>g&d,m-=a,g+=a):(f=u>>>g&d,m=32-(c=a-m),f|=((u=e[h++])&(1<<c)-1)<<a-c,g=c),t[o]=r[f];else{var p=Math.ceil((l-n)/s);for(o=0;o<i;o++)0===m&&(u=e[h++],m=32,g=0),a<=m?(f=u>>>g&d,m-=a,g+=a):(f=u>>>g&d,m=32-(c=a-m),f|=((u=e[h++])&(1<<c)-1)<<a-c,g=c),t[o]=f<p?n+f*s:l}return t},S=function(e,t,a,i,r,n){var s,l=(1<<t)-1,o=0,f=0,u=0,c=0,d=0,h=0,m=[],g=Math.ceil((n-i)/r);for(f=0;f<a;f++)0===c&&(s=e[o++],c=32,h=0),t<=c?(d=s>>>h&l,c-=t,h+=t):(d=s>>>h&l,c=32-(u=t-c),d|=((s=e[o++])&(1<<u)-1)<<t-u,h=u),m[f]=d<g?i+d*r:n;return m.unshift(i),m},P=function(e,t,a,i){var r,n,s,l,o=(1<<a)-1,f=0,u=0,c=4*e.length-Math.ceil(a*i/8);for(e[e.length-1]<<=8*c,r=0;r<i;r++)0===u&&(s=e[f++],u=32),a<=u?(n=s>>>u-a&o,u-=a):(n=(s&o)<<(l=a-u)&o,n+=(s=e[f++])>>>(u=32-l)),t[r]=n;return t},E=function(e,t,a,i){var r,n,s,l,o=(1<<a)-1,f=0,u=0,c=0;for(r=0;r<i;r++)0===u&&(s=e[f++],u=32,c=0),a<=u?(n=s>>>c&o,u-=a,c+=a):(n=s>>>c&o,u=32-(l=a-u),n|=((s=e[f++])&(1<<l)-1)<<a-l,c=l),t[r]=n;return t},R={HUFFMAN_LUT_BITS_MAX:12,computeChecksumFletcher32:function(e){for(var t=65535,a=65535,i=e.length,r=Math.floor(i/2),n=0;r;){var s=359<=r?359:r;for(r-=s;t+=e[n++]<<8,a+=t+=e[n++],--s;);t=(65535&t)+(t>>>16),a=(65535&a)+(a>>>16)}return 1&i&&(a+=t+=e[n]<<8),((a=(65535&a)+(a>>>16))<<16|(t=(65535&t)+(t>>>16)))>>>0},readHeaderInfo:function(e,t){var a=t.ptr,i=new Uint8Array(e,a,6),r={};if(r.fileIdentifierString=String.fromCharCode.apply(null,i),0!==r.fileIdentifierString.lastIndexOf("Lerc2",0))throw"Unexpected file identifier string (expect Lerc2 ): "+r.fileIdentifierString;a+=6;var n,s=new DataView(e,a,8),l=s.getInt32(0,!0);if(a+=4,3<=(r.fileVersion=l)&&(r.checksum=s.getUint32(4,!0),a+=4),s=new DataView(e,a,12),r.height=s.getUint32(0,!0),r.width=s.getUint32(4,!0),a+=8,4<=l?(r.numDims=s.getUint32(8,!0),a+=4):r.numDims=1,s=new DataView(e,a,40),r.numValidPixel=s.getUint32(0,!0),r.microBlockSize=s.getInt32(4,!0),r.blobSize=s.getInt32(8,!0),r.imageType=s.getInt32(12,!0),r.maxZError=s.getFloat64(16,!0),r.zMin=s.getFloat64(24,!0),r.zMax=s.getFloat64(32,!0),a+=40,t.headerInfo=r,t.ptr=a,3<=l&&(n=4<=l?52:48,this.computeChecksumFletcher32(new Uint8Array(e,a-n,r.blobSize-14))!==r.checksum))throw"Checksum failed.";return!0},checkMinMaxRanges:function(e,t){var a=t.headerInfo,i=this.getDataTypeArray(a.imageType),r=a.numDims*this.getDataTypeSize(a.imageType),n=this.readSubArray(e,t.ptr,i,r),s=this.readSubArray(e,t.ptr+r,i,r);t.ptr+=2*r;var l,o=!0;for(l=0;l<a.numDims;l++)if(n[l]!==s[l]){o=!1;break}return a.minValues=n,a.maxValues=s,o},readSubArray:function(e,t,a,i){var r;if(a===Uint8Array)r=new Uint8Array(e,t,i);else{var n=new ArrayBuffer(i);new Uint8Array(n).set(new Uint8Array(e,t,i)),r=new a(n)}return r},readMask:function(e,t){var a,i,r=t.ptr,n=t.headerInfo,s=n.width*n.height,l=n.numValidPixel,o=new DataView(e,r,4),f={};if(f.numBytes=o.getUint32(0,!0),r+=4,(0===l||s===l)&&0!==f.numBytes)throw"invalid mask";if(0===l)a=new Uint8Array(Math.ceil(s/8)),f.bitset=a,i=new Uint8Array(s),t.pixels.resultMask=i,r+=f.numBytes;else if(0<f.numBytes){a=new Uint8Array(Math.ceil(s/8));var u=(o=new DataView(e,r,f.numBytes)).getInt16(0,!0),c=2,d=0,h=0;do{if(0<u)for(;u--;)a[d++]=o.getUint8(c++);else for(h=o.getUint8(c++),u=-u;u--;)a[d++]=h;u=o.getInt16(c,!0),c+=2}while(c<f.numBytes);if(-32768!==u||d<a.length)throw"Unexpected end of mask RLE encoding";i=new Uint8Array(s);var m=0,g=0;for(g=0;g<s;g++)7&g?(m=a[g>>3],m<<=7&g):m=a[g>>3],128&m&&(i[g]=1);t.pixels.resultMask=i,f.bitset=a,r+=f.numBytes}return t.ptr=r,t.mask=f,!0},readDataOneSweep:function(e,t,a){var i,r=t.ptr,n=t.headerInfo,s=n.numDims,l=n.width*n.height,o=n.imageType,f=n.numValidPixel*R.getDataTypeSize(o)*s,u=t.pixels.resultMask;if(a===Uint8Array)i=new Uint8Array(e,r,f);else{var c=new ArrayBuffer(f);new Uint8Array(c).set(new Uint8Array(e,r,f)),i=new a(c)}if(i.length===l*s)t.pixels.resultPixels=i;else{t.pixels.resultPixels=new a(l*s);var d=0,h=0,m=0,g=0;if(1<s)for(m=0;m<s;m++)for(g=m*l,h=0;h<l;h++)u[h]&&(t.pixels.resultPixels[g+h]=i[d++]);else for(h=0;h<l;h++)u[h]&&(t.pixels.resultPixels[h]=i[d++])}return r+=f,t.ptr=r,!0},readHuffmanTree:function(e,t){var a=this.HUFFMAN_LUT_BITS_MAX,i=new DataView(e,t.ptr,16);if(t.ptr+=16,i.getInt32(0,!0)<2)throw"unsupported Huffman version";var r=i.getInt32(4,!0),n=i.getInt32(8,!0),s=i.getInt32(12,!0);if(s<=n)return!1;var l=new Uint32Array(s-n);R.decodeBits(e,t,l);var o,f,u,c,d=[];for(o=n;o<s;o++)d[f=o-(o<r?0:r)]={first:l[o-n],second:null};var h=e.byteLength-t.ptr,m=Math.ceil(h/4),g=new ArrayBuffer(4*m);new Uint8Array(g).set(new Uint8Array(e,t.ptr,h));var p,w=new Uint32Array(g),x=0,k=0;for(p=w[0],o=n;o<s;o++)0<(c=d[f=o-(o<r?0:r)].first)&&(d[f].second=p<<x>>>32-c,c<=32-x?32===(x+=c)&&(x=0,p=w[++k]):(x+=c-32,p=w[++k],d[f].second|=p>>>32-x));var y=0,I=0,b=new C;for(o=0;o<d.length;o++)void 0!==d[o]&&(y=Math.max(y,d[o].first));I=a<=y?a:y,30<=y&&console.log("WARning, large NUM LUT BITS IS "+y);var v,U,T,M,V,A=[];for(o=n;o<s;o++)if(0<(c=d[f=o-(o<r?0:r)].first))if(v=[c,f],c<=I)for(U=d[f].second<<I-c,T=1<<I-c,u=0;u<T;u++)A[U|u]=v;else for(U=d[f].second,V=b,M=c-1;0<=M;M--)V=U>>>M&1?(V.right||(V.right=new C),V.right):(V.left||(V.left=new C),V.left),0!==M||V.val||(V.val=v[1]);return{decodeLut:A,numBitsLUTQick:I,numBitsLUT:y,tree:b,stuffedData:w,srcPtr:k,bitPos:x}},readHuffman:function(e,t,a){var i,r,n,s,l,o,f,u,c,d=t.headerInfo,h=d.numDims,m=t.headerInfo.height,g=t.headerInfo.width,p=g*m,w=this.readHuffmanTree(e,t),x=w.decodeLut,k=w.tree,y=w.stuffedData,I=w.srcPtr,b=w.bitPos,v=w.numBitsLUTQick,U=w.numBitsLUT,T=0===t.headerInfo.imageType?128:0,M=t.pixels.resultMask,V=0;0<b&&(I++,b=0);var A,B=y[I],D=1===t.encodeMode,S=new a(p*h),P=S;for(A=0;A<d.numDims;A++){if(1<h&&(P=new a(S.buffer,p*A,p),V=0),t.headerInfo.numValidPixel===g*m)for(o=u=0;o<m;o++)for(f=0;f<g;f++,u++){if(r=0,l=s=B<<b>>>32-v,32-b<v&&(l=s|=y[I+1]>>>64-b-v),x[l])r=x[l][1],b+=x[l][0];else for(l=s=B<<b>>>32-U,32-b<U&&(l=s|=y[I+1]>>>64-b-U),i=k,c=0;c<U;c++)if(!(i=s>>>U-c-1&1?i.right:i.left).left&&!i.right){r=i.val,b=b+c+1;break}32<=b&&(b-=32,B=y[++I]),n=r-T,D?(n+=0<f?V:0<o?P[u-g]:V,n&=255,V=P[u]=n):P[u]=n}else for(o=u=0;o<m;o++)for(f=0;f<g;f++,u++)if(M[u]){if(r=0,l=s=B<<b>>>32-v,32-b<v&&(l=s|=y[I+1]>>>64-b-v),x[l])r=x[l][1],b+=x[l][0];else for(l=s=B<<b>>>32-U,32-b<U&&(l=s|=y[I+1]>>>64-b-U),i=k,c=0;c<U;c++)if(!(i=s>>>U-c-1&1?i.right:i.left).left&&!i.right){r=i.val,b=b+c+1;break}32<=b&&(b-=32,B=y[++I]),n=r-T,D?(0<f&&M[u-1]?n+=V:0<o&&M[u-g]?n+=P[u-g]:n+=V,n&=255,V=P[u]=n):P[u]=n}t.ptr=t.ptr+4*(I+1)+(0<b?4:0)}t.pixels.resultPixels=S},decodeBits:function(e,t,a,i,r){var n=t.headerInfo,s=n.fileVersion,l=0,o=5<=e.byteLength-t.ptr?5:e.byteLength-t.ptr,f=new DataView(e,t.ptr,o),u=f.getUint8(0);l++;var c=u>>6,d=0==c?4:3-c,h=0<(32&u),m=31&u,g=0;if(1==d)g=f.getUint8(l),l++;else if(2==d)g=f.getUint16(l,!0),l+=2;else{if(4!=d)throw"Invalid valid pixel count type";g=f.getUint32(l,!0),l+=4}var p,w,x,k,y,I,b,v,U,T=2*n.maxZError,M=1<n.numDims?n.maxValues[r]:n.zMax;if(h){for(t.counter.lut++,v=f.getUint8(l),l++,k=Math.ceil((v-1)*m/8),y=Math.ceil(k/4),w=new ArrayBuffer(4*y),x=new Uint8Array(w),t.ptr+=l,x.set(new Uint8Array(e,t.ptr,k)),b=new Uint32Array(w),t.ptr+=k,U=0;v-1>>>U;)U++;k=Math.ceil(g*U/8),y=Math.ceil(k/4),w=new ArrayBuffer(4*y),(x=new Uint8Array(w)).set(new Uint8Array(e,t.ptr,k)),p=new Uint32Array(w),t.ptr+=k,I=(3<=s?S:A)(b,m,v-1,i,T,M),(3<=s?D:V)(p,a,U,g,I)}else t.counter.bitstuffer++,U=m,t.ptr+=l,0<U&&(k=Math.ceil(g*U/8),y=Math.ceil(k/4),w=new ArrayBuffer(4*y),(x=new Uint8Array(w)).set(new Uint8Array(e,t.ptr,k)),p=new Uint32Array(w),t.ptr+=k,3<=s?null===i?E(p,a,U,g):D(p,a,U,g,!1,i,T,M):null===i?P(p,a,U,g):V(p,a,U,g,!1,i,T,M))},readTiles:function(e,t,a){var i=t.headerInfo,r=i.width,n=i.height,s=i.microBlockSize,l=i.imageType,o=R.getDataTypeSize(l),f=Math.ceil(r/s),u=Math.ceil(n/s);t.pixels.numBlocksY=u,t.pixels.numBlocksX=f;var c,d,h,m,g,p,w,x,k=t.pixels.ptr=0,y=0,I=0,b=0,v=0,U=0,T=0,M=0,V=0,A=0,B=0,D=0,S=0,P=0,E=0,C=new a(s*s),F=n%s||s,L=r%s||s,N=i.numDims,O=t.pixels.resultMask,z=t.pixels.resultPixels;for(I=0;I<u;I++)for(v=I!==u-1?s:F,b=0;b<f;b++)for(A=I*r*s+b*s,B=r-(U=b!==f-1?s:L),x=0;x<N;x++){if(1<N&&(z=new a(t.pixels.resultPixels.buffer,r*n*x*o,r*n)),T=e.byteLength-t.ptr,d={},E=0,E++,V=(M=(c=new DataView(e,t.ptr,Math.min(10,T))).getUint8(0))>>6&255,(M>>2&15)!==(b*s>>3&15))throw"integrity issue";if(3<(g=3&M))throw t.ptr+=E,"Invalid block encoding ("+g+")";if(2!=g)if(0==g){if(t.counter.uncompressed++,t.ptr+=E,D=(D=v*U*o)<(S=e.byteLength-t.ptr)?D:S,h=new ArrayBuffer(D%o==0?D:D+o-D%o),new Uint8Array(h).set(new Uint8Array(e,t.ptr,D)),m=new a(h),P=0,O)for(k=0;k<v;k++){for(y=0;y<U;y++)O[A]&&(z[A]=m[P++]),A++;A+=B}else for(k=0;k<v;k++){for(y=0;y<U;y++)z[A++]=m[P++];A+=B}t.ptr+=P*o}else if(p=R.getDataTypeUsed(l,V),w=R.getOnePixel(d,E,p,c),E+=R.getDataTypeSize(p),3==g)if(t.ptr+=E,t.counter.constantoffset++,O)for(k=0;k<v;k++){for(y=0;y<U;y++)O[A]&&(z[A]=w),A++;A+=B}else for(k=0;k<v;k++){for(y=0;y<U;y++)z[A++]=w;A+=B}else if(t.ptr+=E,R.decodeBits(e,t,C,w,x),E=0,O)for(k=0;k<v;k++){for(y=0;y<U;y++)O[A]&&(z[A]=C[E++]),A++;A+=B}else for(k=0;k<v;k++){for(y=0;y<U;y++)z[A++]=C[E++];A+=B}else t.counter.constant++,t.ptr+=E}},formatFileInfo:function(e){return{fileIdentifierString:e.headerInfo.fileIdentifierString,fileVersion:e.headerInfo.fileVersion,imageType:e.headerInfo.imageType,height:e.headerInfo.height,width:e.headerInfo.width,numValidPixel:e.headerInfo.numValidPixel,microBlockSize:e.headerInfo.microBlockSize,blobSize:e.headerInfo.blobSize,maxZError:e.headerInfo.maxZError,pixelType:R.getPixelType(e.headerInfo.imageType),eofOffset:e.eofOffset,mask:e.mask?{numBytes:e.mask.numBytes}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,maxValue:e.headerInfo.zMax,minValue:e.headerInfo.zMin,noDataValue:e.noDataValue}}},constructConstantSurface:function(e){var t=e.headerInfo.zMax,a=e.headerInfo.numDims,i=e.headerInfo.height*e.headerInfo.width,r=i*a,n=0,s=0,l=0,o=e.pixels.resultMask;if(o)if(1<a)for(n=0;n<a;n++)for(l=n*i,s=0;s<i;s++)o[s]&&(e.pixels.resultPixels[l+s]=t);else for(s=0;s<i;s++)o[s]&&(e.pixels.resultPixels[s]=t);else if(e.pixels.resultPixels.fill)e.pixels.resultPixels.fill(t);else for(s=0;s<r;s++)e.pixels.resultPixels[s]=t},getDataTypeArray:function(e){var t;switch(e){case 0:t=Int8Array;break;case 1:t=Uint8Array;break;case 2:t=Int16Array;break;case 3:t=Uint16Array;break;case 4:t=Int32Array;break;case 5:t=Uint32Array;break;case 6:t=Float32Array;break;case 7:t=Float64Array;break;default:t=Float32Array}return t},getPixelType:function(e){var t;switch(e){case 0:t="S8";break;case 1:t="U8";break;case 2:t="S16";break;case 3:t="U16";break;case 4:t="S32";break;case 5:t="U32";break;case 6:t="F32";break;case 7:t="F64";break;default:t="F32"}return t},isValidPixelValue:function(e,t){if(null===t)return!1;var a;switch(e){case 0:a=-128<=t&&t<=127;break;case 1:a=0<=t&&t<=255;break;case 2:a=-32768<=t&&t<=32767;break;case 3:a=0<=t&&t<=65536;break;case 4:a=-2147483648<=t&&t<=2147483647;break;case 5:a=0<=t&&t<=4294967296;break;case 6:a=-34027999387901484e22<=t&&t<=34027999387901484e22;break;case 7:a=5e-324<=t&&t<=17976931348623157e292;break;default:a=!1}return a},getDataTypeSize:function(e){var t=0;switch(e){case 0:case 1:t=1;break;case 2:case 3:t=2;break;case 4:case 5:case 6:t=4;break;case 7:t=8;break;default:t=e}return t},getDataTypeUsed:function(e,t){var a=e;switch(e){case 2:case 4:a=e-t;break;case 3:case 5:a=e-2*t;break;case 6:a=0===t?e:1===t?2:1;break;case 7:a=0===t?e:e-2*t+1;break;default:a=e}return a},getOnePixel:function(e,t,a,i){var r=0;switch(a){case 0:r=i.getInt8(t);break;case 1:r=i.getUint8(t);break;case 2:r=i.getInt16(t,!0);break;case 3:r=i.getUint16(t,!0);break;case 4:r=i.getInt32(t,!0);break;case 5:r=i.getUInt32(t,!0);break;case 6:r=i.getFloat32(t,!0);break;case 7:r=i.getFloat64(t,!0);break;default:throw"the decoder does not understand this pixel type"}return r}},C=function(e,t,a){this.val=e,this.left=t,this.right=a},k={decode:function(e,t){var a=(t=t||{}).noDataValue,i=0,r={};if(r.ptr=t.inputOffset||0,r.pixels={},R.readHeaderInfo(e,r)){var n=r.headerInfo,s=n.fileVersion,l=R.getDataTypeArray(n.imageType);R.readMask(e,r),n.numValidPixel===n.width*n.height||r.pixels.resultMask||(r.pixels.resultMask=t.maskData);var o,f=n.width*n.height;if(r.pixels.resultPixels=new l(f*n.numDims),r.counter={onesweep:0,uncompressed:0,lut:0,bitstuffer:0,constant:0,constantoffset:0},0!==n.numValidPixel)if(n.zMax===n.zMin)R.constructConstantSurface(r);else if(4<=s&&R.checkMinMaxRanges(e,r))R.constructConstantSurface(r);else{var u=new DataView(e,r.ptr,2),c=u.getUint8(0);if(r.ptr++,c)R.readDataOneSweep(e,r,l);else if(1<s&&n.imageType<=1&&Math.abs(n.maxZError-.5)<1e-5){var d=u.getUint8(1);if(r.ptr++,2<(r.encodeMode=d)||s<4&&1<d)throw"Invalid Huffman flag "+d;d?R.readHuffman(e,r,l):R.readTiles(e,r,l)}else R.readTiles(e,r,l)}r.eofOffset=r.ptr,t.inputOffset?(o=r.headerInfo.blobSize+t.inputOffset-r.ptr,1<=Math.abs(o)&&(r.eofOffset=t.inputOffset+r.headerInfo.blobSize)):(o=r.headerInfo.blobSize-r.ptr,1<=Math.abs(o)&&(r.eofOffset=r.headerInfo.blobSize));var h={width:n.width,height:n.height,pixelData:r.pixels.resultPixels,minValue:n.zMin,maxValue:n.zMax,validPixelCount:n.numValidPixel,dimCount:n.numDims,dimStats:{minValues:n.minValues,maxValues:n.maxValues},maskData:r.pixels.resultMask};if(r.pixels.resultMask&&R.isValidPixelValue(n.imageType,a)){var m=r.pixels.resultMask;for(i=0;i<f;i++)m[i]||(h.pixelData[i]=a);h.noDataValue=a}return r.noDataValue=a,t.returnFileInfo&&(h.fileInfo=R.formatFileInfo(r)),h}},getBandCount:function(e){for(var t=0,a=0,i={ptr:0,pixels:{}};a<e.byteLength-58;)R.readHeaderInfo(e,i),a+=i.headerInfo.blobSize,t++,i.ptr=a;return t}},g=new ArrayBuffer(4),p=new Uint8Array(g),y=(new Uint32Array(g)[0]=1)===p[0],w={decode:function(e,t){if(!y)throw"Big endian system is not supported.";var a,i,r=(t=t||{}).inputOffset||0,n=new Uint8Array(e,r,10),s=String.fromCharCode.apply(null,n);if("CntZImage"===s.trim())a=x,i=1;else{if("Lerc2"!==s.substring(0,5))throw"Unexpected file identifier string: "+s;a=k,i=2}for(var l,o,f,u,c,d,h=0,m=e.byteLength-10,g=[],p={width:0,height:0,pixels:[],pixelType:t.pixelType,mask:null,statistics:[]};r<m;){var w=a.decode(e,{inputOffset:r,encodedMaskData:l,maskData:f,returnMask:0===h,returnEncodedMask:0===h,returnFileInfo:!0,pixelType:t.pixelType||null,noDataValue:t.noDataValue||null});r=w.fileInfo.eofOffset,0===h&&(l=w.encodedMaskData,f=w.maskData,p.width=w.width,p.height=w.height,p.dimCount=w.dimCount||1,p.pixelType=w.pixelType||w.fileInfo.pixelType,p.mask=w.maskData),1<i&&w.fileInfo.mask&&0<w.fileInfo.mask.numBytes&&g.push(w.maskData),h++,p.pixels.push(w.pixelData),p.statistics.push({minValue:w.minValue,maxValue:w.maxValue,noDataValue:w.noDataValue,dimStats:w.dimStats})}if(1<i&&1<g.length){for(d=p.width*p.height,p.bandMasks=g,(f=new Uint8Array(d)).set(g[0]),u=1;u<g.length;u++)for(o=g[u],c=0;c<d;c++)f[c]=f[c]&o[c];p.maskData=f}return p}},I.Lerc=w;var b=I.Lerc;return o(function(e,t){if(e.encoding===f.LERC){var a;try{a=b.decode(e.heightmap)}catch(e){throw new l.RuntimeError(e)}if(a.statistics[0].minValue===Number.MAX_VALUE)throw new l.RuntimeError("Invalid tile data");e.heightmap=a.pixels[0],e.width=a.width,e.height=a.height}var i=e.width,r=e.height;0<e.skirtHeight&&(i+=2,r+=2),e.ellipsoid=qe.Ellipsoid.clone(e.ellipsoid),e.rectangle=qe.Rectangle.clone(e.rectangle);var n=tt.computeVertices(e),s=n.vertices;return t.push(s.buffer),{vertices:s.buffer,numberOfAttributes:n.encoding.getStride(),minimumHeight:n.minimumHeight,maximumHeight:n.maximumHeight,gridWidth:i,gridHeight:r,boundingSphere3D:n.boundingSphere3D,orientedBoundingBox:n.orientedBoundingBox,occludeePointInScaledSpace:n.occludeePointInScaledSpace,encoding:n.encoding,westIndicesSouthToNorth:n.westIndicesSouthToNorth,southIndicesEastToWest:n.southIndicesEastToWest,eastIndicesNorthToSouth:n.eastIndicesNorthToSouth,northIndicesWestToEast:n.northIndicesWestToEast}})});
