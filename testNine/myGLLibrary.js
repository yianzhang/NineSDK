			
			function PLYVertex() {
				this.vertexData = [];
				this.vertexNum = 0;
				
				this.indexData = [];
				this.indexNum = 0;
				
				this.normalData = [];
				this.normalNum = 0;
				
				this.elementVertex = 0;
				this.elementFace = 0;
				this.vertexSize = 0;
			};
			
			function GLPoint () {
				var pointVertex = [];
				
				this.create = function (pointV) {
					pointVertex = pointV;
					this.setVertexBuffer(pointV);
				}
				
				
				this.drawColorR = 1.0;
				this.drawColorG = 1.0;
				this.drawColorB = 1.0;
				this.drawColorA = 1.0;
				
				this.isElement = false;
				
				this.drawType = "POINT";
				
				this.setDrawColor = function (cr, cg, cb, ca) {
					this.drawColorR = cr;
					this.drawColorG = cg;
					this.drawColorB = cb;
					this.drawColorA = ca;
				}
				
				this.setIsElement = function (ele) {
					this.isElement = ele;
				}
				
				this.setDrawType = function (dType) {
					this.drawType = dType;
				}
				
				
				this.vertexBuffer = [];
				this.vertexGLBuffer = null;
				this.vertexSize = 3;
				this.vertexNum = 0;
				
				this.normalBuffer = [];
				this.normalGLBuffer = null;
				this.normalSize = 3;
				this.normalNum = 0;
				
				this.indexBuffer = [];
				this.indexGLBuffer = null;
				this.indexSize = 1;
				this.indexNum = 0;
				
				this.setVertexBuffer = function (vb) {
					if (vb.length == 0) {
						alert("setVertexBuffer error! vb is empty!");
					}
					else {
						this.vertexBuffer = vb;
						this.vertexNum = this.vertexBuffer.length / this.vertexSize;
					}
				}
				
				this.setNormalBuffer = function (nb) {
					if (nb.length == 0) {
						alert("setNormalBuffer error! nb is empty!");
					}
					else {
						this.normalBuffer = nb;
						this.normalNum = this.normalBuffer.length / this.normalSize;
					}
				}
				
				this.setIndexBuffer = function (ib) {
					if (ib.length == 0) {
						alert("setIndexBuffer error! nb is empty!");
					}
					else {
						this.indexBuffer = ib;
						this.indexNum = this.indexBuffer.length / this.indexSize;
					}
				}
				
				
				this.translateXYZ = [0.0, 0.0, 0.0];
				this.scaleXYZ = [1.0, 1.0, 1.0];
				this.angle = 0.0;
				this.rotateAngle = 0.0;
				this.rotateXYZ = [0.0, 1.0, 0.0];
				
				this.translate = function (translate) {
					this.translateXYZ = translate;
				}
				
				this.scale = function (scale) {
					this.scaleXYZ = scale;
				}
				
				this.rotate = function (angle, rotate) {
					this.rotateAngle = angle;
					this.rotateXYZ = rotate;
				}
			};
			
			function GLLine () {
				var pointVertex = [];
				var lineIndex = [];
				
				this.create = function (pointV, lineI) {
					pointVertex = pointV;
					this.setVertexBuffer(pointV);
					lineIndex = lineI;
					this.setIndexBuffer(lineI);
				}
				
				this.shiftToLine = function () {
					this.isElement = true;
					this.drawType = "LINES";
				}
				
				this.shiftToPoint = function () {
					this.isElement = false;
					this.drawType = "POINTS";
				}
				
				
				this.drawColorR = 1.0;
				this.drawColorG = 1.0;
				this.drawColorB = 1.0;
				this.drawColorA = 1.0;
				
				this.isElement = true;
				
				this.drawType = "LINES";
				
				this.setDrawColor = function (cr, cg, cb, ca) {
					this.drawColorR = cr;
					this.drawColorG = cg;
					this.drawColorB = cb;
					this.drawColorA = ca;
				}
				
				this.setIsElement = function (ele) {
					this.isElement = ele;
				}
				
				this.setDrawType = function (dType) {
					this.drawType = dType;
				}
				
				
				this.vertexBuffer = [];
				this.vertexGLBuffer = null;
				this.vertexSize = 3;
				this.vertexNum = 0;
				
				this.normalBuffer = [];
				this.normalGLBuffer = null;
				this.normalSize = 3;
				this.normalNum = 0;
				
				this.indexBuffer = [];
				this.indexGLBuffer = null;
				this.indexSize = 1;
				this.indexNum = 0;
				
				this.setVertexBuffer = function (vb) {
					if (vb.length == 0) {
						alert("setVertexBuffer error! vb is empty!");
					}
					else {
						this.vertexBuffer = vb;
						this.vertexNum = this.vertexBuffer.length / this.vertexSize;
					}
				}
				
				this.setNormalBuffer = function (nb) {
					if (nb.length == 0) {
						alert("setNormalBuffer error! nb is empty!");
					}
					else {
						this.normalBuffer = nb;
						this.normalNum = this.normalBuffer.length / this.normalSize;
					}
				}
				
				this.setIndexBuffer = function (ib) {
					if (ib.length == 0) {
						alert("setIndexBuffer error! nb is empty!");
					}
					else {
						this.indexBuffer = ib;
						this.indexNum = this.indexBuffer.length / this.indexSize;
					}
				}
				
				
				this.translateXYZ = [0.0, 0.0, 0.0];
				this.scaleXYZ = [1.0, 1.0, 1.0];
				this.angle = 0.0;
				this.rotateAngle = 0.0;
				this.rotateXYZ = [0.0, 1.0, 0.0];
				
				this.translate = function (translate) {
					this.translateXYZ = translate;
				}
				
				this.scale = function (scale) {
					this.scaleXYZ = scale;
				}
				
				this.rotate = function (angle, rotate) {
					this.rotateAngle = angle;
					this.rotateXYZ = rotate;
				}
			};
			
			function GLFace () {
				var pointVertex = [];
				var lineIndex = [];
				var triangleIndex = [];
				var triangleNormal = [];
				
				this.create = function (pointV, lineI, triangleI, triangleN) {
					pointVertex = pointV;
					this.setVertexBuffer(pointV);
					
					lineIndex = lineI;
					
					triangleIndex = triangleI;
					this.setIndexBuffer(triangleI);
					
					triangleNormal = triangleN;
					this.setNormalBuffer(triangleN);
				}
				
				this.shiftToTriangle = function () {
					this.isElement = true;
					this.drawType = "TRIANGLES";
					this.setIndexBuffer(triangleIndex);
				}
				
				this.shiftToLine = function () {
					this.isElement = true;
					this.drawType = "LINES";
					this.setIndexBuffer(lineIndex);
				}
				
				this.shiftToPoint = function () {
					this.isElement = false;
					this.drawType = "POINTS";
				}
				
				
				this.drawColorR = 1.0;
				this.drawColorG = 1.0;
				this.drawColorB = 1.0;
				this.drawColorA = 1.0;
				
				this.isElement = true;
				
				this.drawType = "TRIANGLES";
				
				this.setDrawColor = function (cr, cg, cb, ca) {
					this.drawColorR = cr;
					this.drawColorG = cg;
					this.drawColorB = cb;
					this.drawColorA = ca;
				}
				
				this.setIsElement = function (ele) {
					this.isElement = ele;
				}
				
				this.setDrawType = function (dType) {
					this.drawType = dType;
				}
				
				
				this.vertexBuffer = [];
				this.vertexGLBuffer = null;
				this.vertexSize = 3;
				this.vertexNum = 0;
				
				this.normalBuffer = [];
				this.normalGLBuffer = null;
				this.normalSize = 3;
				this.normalNum = 0;
				
				this.indexBuffer = [];
				this.indexGLBuffer = null;
				this.indexSize = 1;
				this.indexNum = 0;
				
				this.setVertexBuffer = function (vb) {
					if (vb.length == 0) {
						alert("setVertexBuffer error! vb is empty!");
					}
					else {
						this.vertexBuffer = vb;
						this.vertexNum = this.vertexBuffer.length / this.vertexSize;
					}
				}
				
				this.setNormalBuffer = function (nb) {
					if (nb.length == 0) {
						alert("setNormalBuffer error! nb is empty!");
					}
					else {
						this.normalBuffer = nb;
						this.normalNum = this.normalBuffer.length / this.normalSize;
					}
				}
				
				this.setIndexBuffer = function (ib) {
					if (ib.length == 0) {
						alert("setIndexBuffer error! nb is empty!");
					}
					else {
						this.indexBuffer = ib;
						this.indexNum = this.indexBuffer.length / this.indexSize;
					}
				}
				
				
				this.translateXYZ = [0.0, 0.0, 0.0];
				this.scaleXYZ = [1.0, 1.0, 1.0];
				this.angle = 0.0;
				this.rotateAngle = 0.0;
				this.rotateXYZ = [0.0, 1.0, 0.0];
				
				this.translate = function (translate) {
					this.translateXYZ = translate;
				}
				
				this.scale = function (scale) {
					this.scaleXYZ = scale;
				}
				
				this.rotate = function (angle, rotate) {
					this.rotateAngle = angle;
					this.rotateXYZ = rotate;
				}
			};
			
			function GLTera () {
				var pointVertex = [];
				var lineIndex = [];
				var triangleIndex = [];
				var triangleNormal = [];
				
				this.create = function (pointV, lineI, triangleI, triangleN) {
					pointVertex = pointV;
					this.setVertexBuffer(pointV);
					
					lineIndex = lineI;
					
					triangleIndex = triangleI;
					this.setIndexBuffer(triangleI);
					
					triangleNormal = triangleN;
					this.setNormalBuffer(triangleN);
				}
				
				this.shiftToTriangle = function () {
					this.isElement = true;
					this.drawType = "TRIANGLES";
					this.setIndexBuffer(triangleIndex);
				}
				
				this.shiftToLine = function () {
					this.isElement = true;
					this.drawType = "LINES";
					this.setIndexBuffer(lineIndex);
				}
				
				this.shiftToPoint = function () {
					this.isElement = false;
					this.drawType = "POINTS";
				}
				
				
				this.drawColorR = 1.0;
				this.drawColorG = 1.0;
				this.drawColorB = 1.0;
				this.drawColorA = 1.0;
				
				this.isElement = true;
				
				this.drawType = "TRIANGLES";
				
				this.setDrawColor = function (cr, cg, cb, ca) {
					this.drawColorR = cr;
					this.drawColorG = cg;
					this.drawColorB = cb;
					this.drawColorA = ca;
				}
				
				this.setIsElement = function (ele) {
					this.isElement = ele;
				}
				
				this.setDrawType = function (dType) {
					this.drawType = dType;
				}
				
				
				this.vertexBuffer = [];
				this.vertexGLBuffer = null;
				this.vertexSize = 3;
				this.vertexNum = 0;
				
				this.normalBuffer = [];
				this.normalGLBuffer = null;
				this.normalSize = 3;
				this.normalNum = 0;
				
				this.indexBuffer = [];
				this.indexGLBuffer = null;
				this.indexSize = 1;
				this.indexNum = 0;
				
				this.setVertexBuffer = function (vb) {
					if (vb.length == 0) {
						alert("setVertexBuffer error! vb is empty!");
					}
					else {
						this.vertexBuffer = vb;
						this.vertexNum = this.vertexBuffer.length / this.vertexSize;
					}
				}
				
				this.setNormalBuffer = function (nb) {
					if (nb.length == 0) {
						alert("setNormalBuffer error! nb is empty!");
					}
					else {
						this.normalBuffer = nb;
						this.normalNum = this.normalBuffer.length / this.normalSize;
					}
				}
				
				this.setIndexBuffer = function (ib) {
					if (ib.length == 0) {
						alert("setIndexBuffer error! nb is empty!");
					}
					else {
						this.indexBuffer = ib;
						this.indexNum = this.indexBuffer.length / this.indexSize;
					}
				}
				
				
				this.translateXYZ = [0.0, 0.0, 0.0];
				this.scaleXYZ = [1.0, 1.0, 1.0];
				this.angle = 0.0;
				this.rotateAngle = 0.0;
				this.rotateXYZ = [0.0, 1.0, 0.0];
				
				this.translate = function (translate) {
					this.translateXYZ = translate;
				}
				
				this.scale = function (scale) {
					this.scaleXYZ = scale;
				}
				
				this.rotate = function (angle, rotate) {
					this.rotateAngle = angle;
					this.rotateXYZ = rotate;
				}
			};
			
			function GLModel (r, g, b, a, isElement, drawType) {
				this.drawColorR = r;
				this.drawColorG = g;
				this.drawColorB = b;
				this.drawColorA = a;
				
				this.isElement = isElement;
				
				this.drawType = drawType;
				
				this.setDrawColor = function (cr, cg, cb, ca) {
					this.drawColorR = cr;
					this.drawColorG = cg;
					this.drawColorB = cb;
					this.drawColorA = ca;
				}
				
				this.setIsElement = function (ele) {
					this.isElement = ele;
				}
				
				this.setDrawType = function (dType) {
					this.drawType = dType;
				}
				
				
				this.vertexBuffer = [];
				this.vertexGLBuffer = null;
				this.vertexSize = 3;
				this.vertexNum = 0;
				
				this.normalBuffer = [];
				this.normalGLBuffer = null;
				this.normalSize = 3;
				this.normalNum = 0;
				
				this.indexBuffer = [];
				this.indexGLBuffer = null;
				this.indexSize = 1;
				this.indexNum = 0;
				
				this.setVertexBuffer = function (vb) {
					if (vb.length == 0) {
						alert("setVertexBuffer error! vb is empty!");
					}
					else {
						this.vertexBuffer = vb;
						this.vertexNum = this.vertexBuffer.length / this.vertexSize;
					}
				}
				
				this.setNormalBuffer = function (nb) {
					if (nb.length == 0) {
						alert("setNormalBuffer error! nb is empty!");
					}
					else {
						this.normalBuffer = nb;
						this.normalNum = this.normalBuffer.length / this.normalSize;
					}
				}
				
				this.setIndexBuffer = function (ib) {
					if (ib.length == 0) {
						alert("setIndexBuffer error! nb is empty!");
					}
					else {
						this.indexBuffer = ib;
						this.indexNum = this.indexBuffer.length / this.indexSize;
					}
				}
				
				
				this.translateXYZ = [0.0, 0.0, 0.0];
				this.scaleXYZ = [1.0, 1.0, 1.0];
				this.angle = 0.0;
				this.rotateAngle = 0.0;
				this.rotateXYZ = [0.0, 1.0, 0.0];
				
				this.translate = function (translate) {
					this.translateXYZ = translate;
				}
				
				this.scale = function (scale) {
					this.scaleXYZ = scale;
				}
				
				this.rotate = function (angle, rotate) {
					this.rotateAngle = angle;
					this.rotateXYZ = rotate;
				}
			};
			
			function colorShader () {
				this.vertexShader = 
				"attribute vec3 aVertexPosition;" +
				"attribute vec4 aVertexColor;" +
				
				"uniform mat4 uMVMatrix;" +
				"uniform mat4 uPMatrix;" +
				
				"varying vec4 vColor;" +
				
				"void main() {" +
					"gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);" +
					"vColor = aVertexColor;" +
				"}";
				
				
				this.fragmentShader = 
				"precision mediump float;" +
				
				"varying vec4 vColor;" +
				"void main() {" +
					"gl_FragColor = vColor;" +
				"}";
			};
			
			function colorLightShader () {
				this.vertexShader = 
				"attribute vec3 aVertexPosition;" +
				"attribute vec4 aVertexColor;" +
			
				"attribute vec3 aVertexNormal;" +
				
				"uniform mat4 uMVMatrix;" +
				"uniform mat4 uPMatrix;" +
				"uniform mat3 uNMatrix;" +
				"uniform vec3 uLightPosition;" +
				"uniform vec3 uAmbientLightColor;" +
				"uniform vec3 uDiffuseLightColor;" +
				"uniform vec3 uSpecularLightColor;" +
				
				"varying vec4 vColor;" +
				"varying vec3 vLightWeighting;" +
				
				"const float shininess = 32.0;" +
				
				"void main() {" +
					"vec4 vertexPositionEye4 = uMVMatrix * vec4(aVertexPosition, 1.0);" +
					"vec3 vertexPositionEye3 = vertexPositionEye4.xyz / vertexPositionEye4.w;" +
					
					"vec3 vectorToLightSource = normalize(uLightPosition - vertexPositionEye3);" +
					
					"vec3 normalEye = normalize(uNMatrix * aVertexNormal);" +
					
					"float diffuseLightWeightning = max(dot(normalEye, vectorToLightSource), 0.0);" +
					
					"vec3 reflectionVector = normalize(reflect(-vectorToLightSource, normalEye));" +
					
					"vec3 viewVectorEye = -normalize(vertexPositionEye3);" +
					
					"float rdotv = max(dot(reflectionVector, viewVectorEye), 0.0);" +
					
					"float specularLightWeightning = pow(rdotv, shininess);" +
					
					"vLightWeighting = uAmbientLightColor + uDiffuseLightColor * diffuseLightWeightning + uSpecularLightColor * specularLightWeightning;" +
					
					"gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);" +
					"vColor = aVertexColor;" +
				"}";
				
				
				this.fragmentShader = 
				"precision mediump float;" +
				
				"varying vec4 vColor;" +
				"varying vec3 vLightWeighting;" +
				
				"void main() {" +
					"gl_FragColor = vec4(vLightWeighting.rgb, 1.0) * vColor;" +
				"}";
			};
			
			function spotLightShader () {
				this.vertexShader =
				"attribute vec3 aVertexPosition;" +
				"attribute vec4 aVertexColor;" +
				"attribute vec3 aVertexNormal;" +
				
				"uniform mat4 uMVMatrix;" +
				"uniform mat4 uPMatrix;" +
				"uniform mat3 uNMatrix;" +
				"uniform vec3 uLightPosition;" +
				
				"varying vec4 vColor;" +
				"varying vec3 vNormalEye;" +
				"varying vec3 vPositionEye3;" +
				"varying vec3 vLightPositionEye3;" +
				
				"void main() {" +
					"vec4 vertexPositionEye4 = uMVMatrix * vec4(aVertexPosition, 1.0);" +
					"vPositionEye3 = vertexPositionEye4.xyz / vertexPositionEye4.w;" +
					
					"vec4 lightPositionEye4 = uMVMatrix * vec4(uLightPosition, 1.0);" +
    				"vLightPositionEye3 = lightPositionEye4.xyz / lightPositionEye4.w;" +
					
					"vNormalEye = normalize(uNMatrix * aVertexNormal);" +
					
					"gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);" +
					"vColor = aVertexColor;" +
				"}";
				
				
				this.fragmentShader = 
				"precision mediump float;" +
				
				"varying vec3 vNormalEye;" +
				"varying vec3 vPositionEye3;" +
				"varying vec3 vLightPositionEye3;" +
				"varying vec4 vColor;" +
				
				"uniform vec3 uAmbientLightColor;" +
				"uniform vec3 uDiffuseLightColor;" +
				"uniform vec3 uSpecularLightColor;" +
				
				"uniform vec3 uSpotDirection;" +
				
				"const float shininess = 32.0;" +
				"const float spotExponent = 40.0;" +
				"const float spotCosCutoff = 0.97;" +
				
				"vec3 lightWeighting = vec3(0.0, 0.0, 0.0);" +
				
				"void main() {" +
					"vec3 vectorToLightSource = normalize(vLightPositionEye3 - vPositionEye3);" +
					
					"float diffuseLightWeighting = max(dot(vNormalEye, vectorToLightSource), 0.0);" +
					
					"if (diffuseLightWeighting > 0.0) {" +
						"float spotEffect = dot(normalize(uSpotDirection), normalize(-vectorToLightSource));" +
						
						"if (spotEffect > spotCosCutoff) {" +
							"spotEffect = pow(spotEffect, spotExponent);" +
							
							"vec3 reflectionVector = normalize(reflect(-vectorToLightSource, vNormalEye));" +
							
							"vec3 viewVectorEye = -normalize(vPositionEye3);" +
							
							"float rdotv = max(dot(reflectionVector, viewVectorEye), 0.0);" +
							
							"float specularLightWeighting = pow(rdotv, shininess);" +
							
							"lightWeighting = spotEffect * uDiffuseLightColor * diffuseLightWeighting + spotEffect * uSpecularLightColor * specularLightWeighting;" +
						"}" +
					"}" +
					
					"lightWeighting += uAmbientLightColor;" +
					
					"gl_FragColor = vec4(lightWeighting.rgb, 1.0) * vColor;" +
				"}";
			};
			
			function pointLightShader () {
				this.vertexShader = 
				"attribute vec3 aVertexPosition;" +
				"attribute vec4 aVertexColor;" +
  				"attribute vec3 aVertexNormal;" +
  				
  				"uniform mat4 uMVMatrix;" +
  				"uniform mat4 uPMatrix;" +
  				"uniform mat3 uNMatrix;" +
  				"uniform vec3 uLightPosition;" +
 				
 				"varying vec4 vColor;" +
  				"varying vec3 vNormalEye;" +
  				"varying vec3 vPositionEye3;" +
  				"varying vec3 vLightPositionEye3;" +
  
  				"void main() {" +
    				"vec4 vertexPositionEye4 = uMVMatrix * vec4(aVertexPosition, 1.0);" +
    				"vPositionEye3 = vertexPositionEye4.xyz / vertexPositionEye4.w;" +
    				
    				"vec4 lightPositionEye4 = uMVMatrix * vec4(uLightPosition, 1.0);" +
    				"vLightPositionEye3 = lightPositionEye4.xyz / lightPositionEye4.w;" +
     				
    				"vNormalEye = normalize(uNMatrix * aVertexNormal);" +
    				
    				"gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0); " +
    				"vColor = aVertexColor;" +
  				"}";
				
				
				this.fragmentShader = 
				"precision mediump float;" +
				
  				"varying vec3 vNormalEye;" +
  				"varying vec3 vPositionEye3;" +
  				"varying vec3 vLightPositionEye3;" +
  				"varying vec4 vColor;" +
  
  				"uniform vec3 uAmbientLightColor;" +
  				"uniform vec3 uDiffuseLightColor;" +
  				"uniform vec3 uSpecularLightColor;" +

  				"const float shininess = 32.0;" +
  
  				"const float constantAtt = 1.0;" +
  				"const float linearAtt = 0.1;" +
  				"const float quadraticAtt = 0.05;" +
  				
  				"vec3 lightWeighting = vec3(0.0, 0.0, 0.0);" +
    
  				"void main() {" +
  					"float att = 0.0;" +
    				
    				"vec3 vectorToLightSource = normalize(vLightPositionEye3 - vPositionEye3);" +
    				
    				"float diffuseLightWeighting = max(dot(vNormalEye, vectorToLightSource), 0.0);" +
    				
    				"if (diffuseLightWeighting > 0.0) {" +
      					"float distance = length(vec3(vLightPositionEye3 - vPositionEye3));" +

      					"att = 1.0/(constantAtt+linearAtt * distance + quadraticAtt * distance * distance);" +
      					
      					"vec3 reflectionVector = normalize(reflect(-vectorToLightSource, vNormalEye));" +
      					
      					"vec3 viewVectorEye = -normalize(vPositionEye3);" +
      					
      					"float rdotv = max(dot(reflectionVector, viewVectorEye), 0.0);" +
      					
      					"float specularLightWeighting = pow(rdotv, shininess);" +
      					
      					"lightWeighting = att * uDiffuseLightColor * diffuseLightWeighting + att * uSpecularLightColor * specularLightWeighting;" +
    				"}" +
    				
    				"lightWeighting += uAmbientLightColor;" +
    				
    				"gl_FragColor = vec4(lightWeighting.rgb, 1.0)  * vColor;" +
    			"}";
			};
			
			function propertyHandler () {
				this.clearColorR = 0.0;
				this.clearColorG = 0.0;
				this.clearColorB = 0.0;
				this.clearColorA = 1.0;
				
				this.lookAtEyeXYZ = [0.0, 0.0, 0.0];
				this.lookAtCenterXYZ = [0.0, 0.0, 0.0];
				this.lookAtUpXYZ = [0.0, 0.0, 0.0];
				
				this.translateXYZ = [0.0, 0.0, 0.0];
				this.scaleXYZ = [1.0, 1.0, 1.0];
				this.angle = 0.0;
				this.rotateAngle = 0.0;
				this.rotateXYZ = [0.0, 1.0, 0.0];
				
				this.animationStartTime = 0;
				this.fpsCounter = null;
				this.nbrOfFrames = 0;
				
				this.lightEnable = false;
				this.spotLightEnable = false;
				this.pointLightEnable = false;
				this.lightPositionXYZ = [0.0, 0.0, 0.0];
				this.spotDirectionXYZ = [0.0, 0.0, 0.0];
			};
			
			
			
			
			function GLContext () {
				var gl;
				var canvas;
				var shaderProgram;
				
				var modelViewMatrix;
				var projectionMatrix;
				var modelViewMatrixStack;
				
				var PLYData;
				
				var modelsToDraw = [];
				
				var pHandler;
				
				
				function readPLYFileForTriangle(fileData) {
					var countVertexSize = false;
					var fileDataIndex = 1;
					
					//scan header
					for (var i = fileDataIndex; fileData[i] !="end_header"; i ++) {
						if (fileData[i] == "element" && fileData[i + 1] == "vertex") {
							PLYData.elementVertex = fileData[i + 2];
							countVertexSize = true;
						}
						else if (fileData[i] == "element" && fileData[i + 1] == "face") {
							PLYData.elementFace = fileData[i + 2];
							countVertexSize = false;
						}
						else if (countVertexSize && fileData[i] == "property") {
							PLYData.vertexSize += 1;
						}
					}
					PLYData.vertexNum = PLYData.elementVertex * PLYData.vertexSize;
					if (PLYData.vertexSize == 6) {
						PLYData.normalNum = PLYData.vertexNum;
					}
					fileDataIndex = i + 1;
					
					//get vertex data & normal data
					var vIndex = 0;
					var nIndex = 0;
					for (var i = 0; i < PLYData.vertexNum; i += PLYData.vertexSize) {
						PLYData.vertexData[vIndex + 0] = fileData[fileDataIndex + 0];
						PLYData.vertexData[vIndex + 1] = fileData[fileDataIndex + 1];
						PLYData.vertexData[vIndex + 2] = fileData[fileDataIndex + 2];
						vIndex += 3;
						
						if (PLYData.vertexSize == 6) {
							PLYData.normalData[nIndex + 0] = fileData[fileDataIndex + 3];
							PLYData.normalData[nIndex + 1] = fileData[fileDataIndex + 4];
							PLYData.normalData[nIndex + 2] = fileData[fileDataIndex + 5];
							nIndex += 3;
						}
						
						fileDataIndex += PLYData.vertexSize;
					}
					
					//get index data
					var i = 0;
					while (fileDataIndex < fileData.length - 1) {
						if (fileData[fileDataIndex] == 3) {
							fileDataIndex ++;
							for (var j = 0; j < 3; j ++) {
								PLYData.indexData[i] = fileData[fileDataIndex];
								i ++;
								fileDataIndex ++;
							}
						}
						else if (fileData[fileDataIndex] == 4) {
							fileDataIndex ++;
							PLYData.indexData[i + 0] = fileData[fileDataIndex + 0];
							PLYData.indexData[i + 1] = fileData[fileDataIndex + 1];
							PLYData.indexData[i + 2] = fileData[fileDataIndex + 2];
							
							PLYData.indexData[i + 3] = fileData[fileDataIndex + 0];
							PLYData.indexData[i + 4] = fileData[fileDataIndex + 2];
							PLYData.indexData[i + 5] = fileData[fileDataIndex + 3];
							
							i += 6;
							fileDataIndex += 4;
							PLYData.elementFace ++;
						}
						else {
							alert("The number of vertex in a face is more than 4!");
							return;
						}
					}
					PLYData.indexNum = PLYData.elementFace * 3;
				}
				
				this.readFiles = function() {
					var files = document.getElementById("fileIn").files;
					if (!files.length) {
						alert("No Files!");
						return;
					}
					PLYData = new PLYVertex();
					var file = files[0];
					var reader = new FileReader();
					reader.readAsText(file);
					
					reader.onload = function(e) {
						var fileData = this.result.split(/\s+/);
						if (fileData[0] == "ply") {
							readPLYFileForTriangle(fileData);
						}
						else {
							alert("Can not read this type of file!");
						}
					};
					return PLYData;
				}
				
				
				function createGLContext(canvas) {
					var names = ["webgl", "experimental-webgl"];
					var context = null;
					for (var i = 0; i < names.length; i ++) {
						try {
							context = canvas.getContext(names[i]);
						}
						catch (e) {
							break;
						}
					}
					if (context) {
						context.viewportWidth = canvas.width;
						context.viewportHeight = canvas.height;
					}
					else {
						alert("Failed to create WebGL context!");
					}
					return context;
				}
				
				function loadShader(type, shaderSource) {
					var shader = gl.createShader(type);
	
					gl.shaderSource(shader, shaderSource);
					gl.compileShader(shader);
	
					if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
						alert("Error compiling shader" + gl.getShaderInfoLog(shader));
						gl.deleteShader(shader);
						return null;
					}
					return shader;
				}
				
				function setupShaders() {
					var shaderSource;
					if (pHandler.lightEnable) {
						if (pHandler.pointLightEnable) {
							shaderSource = new pointLightShader();
						}
						else if (pHandler.spotLightEnable) {
							shaderSource = new spotLightShader();
						}
						else {
							shaderSource = new colorLightShader();
						}
					}
					else {
						shaderSource = new colorShader();
					}
					
					var vertexShader = loadShader(gl.VERTEX_SHADER, shaderSource.vertexShader);
					var fragmentShader = loadShader(gl.FRAGMENT_SHADER, shaderSource.fragmentShader);
					
					shaderProgram = gl.createProgram();
					gl.attachShader(shaderProgram, vertexShader);
					gl.attachShader(shaderProgram, fragmentShader);
					gl.linkProgram(shaderProgram);
					
					if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
						alert("Failed to setup shaders");
					}
					
					gl.useProgram(shaderProgram);
					
					shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
					shaderProgram.vertexColorAttribute = gl.getAttribLocation(shaderProgram, "aVertexColor");
					
					shaderProgram.uniformMVMatrix = gl.getUniformLocation(shaderProgram, "uMVMatrix");
					shaderProgram.uniformProjMatrix = gl.getUniformLocation(shaderProgram, "uPMatrix");
					
					if (pHandler.lightEnable){
						shaderProgram.vertexNormalAttribute = gl.getAttribLocation(shaderProgram, "aVertexNormal");
						
						shaderProgram.uniformLightPosition = gl.getUniformLocation(shaderProgram, "uLightPosition");
						if (pHandler.spotLightEnable) {
							shaderProgram.uniformSpotDirection = gl.getUniformLocation(shaderProgram, "uSpotDirection");
						}
						shaderProgram.uniformAmbientLightColor = gl.getUniformLocation(shaderProgram, "uAmbientLightColor");
						shaderProgram.uniformDiffuseLightColor = gl.getUniformLocation(shaderProgram, "uDiffuseLightColor");
						shaderProgram.uniformSpecularLightColor = gl.getUniformLocation(shaderProgram, "uSpecularLightColor");
						
						shaderProgram.uniformNormalMatrix = gl.getUniformLocation(shaderProgram, "uNMatrix");	
					
						gl.enableVertexAttribArray(shaderProgram.vertexNormalAttribute);
					}
					
					gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);
					
					modelViewMatrix = mat4.create();
					projectionMatrix = mat4.create();
					modelViewMatrixStack = [];
				}
				
				function pushModelViewMatrix() {
					var copyToPush = mat4.create(modelViewMatrix);
					modelViewMatrixStack.push(copyToPush);
				}
				
				function popModelViewMatrix() {
					if (modelViewMatrixStack.length == 0) {
						throw "Error popModelViewMatrix() - Stack was empty";
					}
					modelViewMatrix = modelViewMatrixStack.pop();
				}
				
				this.addModel = function (modelToAdd) {
					setupBuffers(modelToAdd);
					modelsToDraw[modelsToDraw.length] = modelToAdd;	
				}
				
				this.selectModel = function (index) {
					if (index >= modelsToDraw.length) {
						alert("selectModel error! index is out of range!");
					}
					else {
						return modelsToDraw[index];
					}
				}
				
				this.updateModel = function (index, modelToUpdate) {
					if (index >= modelsToDraw.length) {
						alert("updateModel error! index is out of range!");
					}
					else {
						modelsToDraw[index] = modelToUpdate;
					}
				}
				
				this.cleanModelsToDraw = function () {
					modelsToDraw.splice(0);
				}
				
				function setupVertexBuffer(modelToAdd) {
					modelToAdd.vertexGLBuffer = gl.createBuffer();
					gl.bindBuffer(gl.ARRAY_BUFFER, modelToAdd.vertexGLBuffer);
					var vBufferData = [];
					for (var i = 0; i < modelToAdd.vertexNum * modelToAdd.vertexSize; i ++) {
						vBufferData[i] = modelToAdd.vertexBuffer[i];
					}
					gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vBufferData), gl.STATIC_DRAW);
				}
				
				function setupIndexBuffer(modelToAdd) {
					modelToAdd.indexGLBuffer = gl.createBuffer();
					gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, modelToAdd.indexGLBuffer);
					var iBufferData = [];
					for (var i = 0; i < modelToAdd.indexNum * modelToAdd.indexSize; i ++) {
						iBufferData[i] = modelToAdd.indexBuffer[i];
					}
					gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(iBufferData), gl.STATIC_DRAW);
				}
				
				function setupNormalBuffer(modelToAdd) {
					modelToAdd.normalGLBuffer = gl.createBuffer();
					gl.bindBuffer(gl.ARRAY_BUFFER, modelToAdd.normalGLBuffer);
					var nBufferData = [];
					for (var i = 0; i < modelToAdd.normalNum * modelToAdd.normalSize; i ++) {
						nBufferData[i] = modelToAdd.normalBuffer[i];
					}
					gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(nBufferData), gl.STATIC_DRAW);
				}
				
				function setupBuffers(modelToAdd) {
					if (modelToAdd.vertexNum == 0) {
						alert("Setup buffers error! Vertex Data is empty!");
						return;
					}
					else {
						setupVertexBuffer(modelToAdd);
					}
					if (modelToAdd.isElement) {
						if (modelToAdd.indexNum == 0) {
							alert("Setup buffers error! Index Data is empty!");
							return;
						}
						else {
							setupIndexBuffer(modelToAdd);
						}
					}
						
					if (pHandler.lightEnable) {
						if (modelToAdd.normalNum == 0) {
							alert("Setup buffers error! Normal Data is empty!");
							return;
						}
						else {
							setupNormalBuffer(modelToAdd);
						}
					}
				}
				
				function setupLights() {
					gl.uniform3fv(shaderProgram.uniformLightPosition, pHandler.lightPositionXYZ);
					if (pHandler.spotLightEnable) {
						gl.uniform3fv(shaderProgram.uniformSpotDirection, pHandler.spotDirectionXYZ);
					}
					gl.uniform3fv(shaderProgram.uniformAmbientLightColor, [0.4, 0.4, 0.4]);
					gl.uniform3fv(shaderProgram.uniformDiffuseLightColor, [0.6, 0.6, 0.6]);
					gl.uniform3fv(shaderProgram.uniformSpecularLightColor, [0.8, 0.8, 0.8]);
				}
				
				function defineDrawType(drawType) {
					if (drawType == "POINTS") {
						return gl.POINTS;
					}
					else if (drawType == "LINES") {
						return gl.LINES;
					}
					else if (drawType == "LINE_LOOP") {
						return gl.LINE_LOOP;
					}
					else if (drawType == "LINE_STRIP") {
						return gl.LINE_STRIP;
					}
					else if (drawType == "TRIANGLES") {
						return gl.TRIANGLES;
					}
					else if (drawType == "TRIANGLE_STRIP") {
						return gl.TRIANGLE_STRIP;
					}
					else if (drawType == "TRIANGLE_FAN") {
						return gl.TRIANGLE_FAN;
					}
					else {
						alert("Draw type error!");
						return null;
					}
				}
				
				function drawModels() {
					if (modelsToDraw.length == 0) {
//						alert("draw models error! modelsToDraw is empty!");
						return;
					}
					else {
						for (var i = 0; i < modelsToDraw.length; i ++) {
							
							pushModelViewMatrix();
							
							mat4.translate(modelViewMatrix, modelsToDraw[i].translateXYZ, modelViewMatrix);
							mat4.scale(modelViewMatrix, modelsToDraw[i].scaleXYZ, modelViewMatrix);
							
							modelsToDraw[i].angle += modelsToDraw[i].rotateAngle;
							if (modelsToDraw[i].angle >= 360.0) {
								 modelsToDraw[i].angle -= 360.0;
							}
							var rad = modelsToDraw[i].angle / 360.0 * 2.0 * Math.PI;
							mat4.rotate(modelViewMatrix, rad, modelsToDraw[i].rotateXYZ, modelViewMatrix);
							uploadModelViewMatrixToShader();
							//uploadProjectionMatrixToShader();
							if (pHandler.lightEnable && !pHandler.pointLightEnable && !pHandler.spotLightEnable) {
								uploadNormalMatrixToShader();
							}
							
							
							gl.disableVertexAttribArray(shaderProgram.vertexColorAttribute);
							gl.vertexAttrib4f(shaderProgram.vertexColorAttribute, modelsToDraw[i].drawColorR, modelsToDraw[i].drawColorG, modelsToDraw[i].drawColorB, modelsToDraw[i].drawColorA);
							
							gl.bindBuffer(gl.ARRAY_BUFFER, modelsToDraw[i].vertexGLBuffer);
							gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, modelsToDraw[i].vertexSize, gl.FLOAT, false, 0, 0);
							
							if (pHandler.lightEnable) {
								gl.bindBuffer(gl.ARRAY_BUFFER, modelsToDraw[i].normalGLBuffer);
								gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, modelsToDraw[i].normalSize, gl.FLOAT, false, 0, 0);
							}
							
							var type = defineDrawType(modelsToDraw[i].drawType);
							
							if (modelsToDraw[i].isElement) {
								gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, modelsToDraw[i].indexGLBuffer);
								gl.drawElements(type, modelsToDraw[i].indexNum, gl.UNSIGNED_SHORT, 0);
							}
							else {
								gl.drawArrays(type, 0, modelsToDraw[i].vertexNum);
							}
							
							
							popModelViewMatrix();
						}
					}
				}
				
				function uploadModelViewMatrixToShader() {
					gl.uniformMatrix4fv(shaderProgram.uniformMVMatrix, false, modelViewMatrix);
				}
				
				function uploadProjectionMatrixToShader() {
					gl.uniformMatrix4fv(shaderProgram.uniformProjMatrix, false, projectionMatrix);
				}
				
				function uploadNormalMatrixToShader() {
					var normalMatrix = mat3.create();
					mat4.toInverseMat3(modelViewMatrix, normalMatrix);
					mat3.transpose(normalMatrix);
					gl.uniformMatrix3fv(shaderProgram.uniformNormalMatrix, false, normalMatrix);
				}
				
				
				
				this.initialize = function (canvasName) {
					canvas = document.getElementById(canvasName);
					gl = WebGLDebugUtils.makeDebugContext(createGLContext(canvas));
					
					pHandler = new propertyHandler();
					
					pHandler.animationStartTime = undefined;
					pHandler.nbrOfFrames = 0;
					
					pHandler.fpsCounter = document.getElementById("fps");
					
				}
				
				function scene () {
					var currentTime;
					var requesId = requestAnimFrame(scene);
					if (currentTime === undefined) {
						currentTime = Date.now();
					}
					if (pHandler.animationStartTime === undefined) {
						pHandler.animationStartTime = currentTime;
					}
					
					if (currentTime - pHandler.animationStartTime >= 1000) {
						pHandler.fpsCounter.innerHTML = pHandler.nbrOfFrames;
						pHandler.nbrOfFrames = 0;
						pHandler.animationStartTime = currentTime;
					}
					
					gl.clearColor(pHandler.clearColorR, pHandler.clearColorG, pHandler.clearColorB, pHandler.clearColorA);
					gl.enable(gl.DEPTH_TEST);
					
					gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
					gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
					mat4.perspective(60, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0, projectionMatrix);
					mat4.identity(modelViewMatrix);
					mat4.lookAt(pHandler.lookAtEyeXYZ, pHandler.lookAtCenterXYZ, pHandler.lookAtUpXYZ, modelViewMatrix);
					
					uploadModelViewMatrixToShader();
					uploadProjectionMatrixToShader();
					if (pHandler.lightEnable) {
						uploadNormalMatrixToShader();
					}
					
					pushModelViewMatrix();
					mat4.translate(modelViewMatrix, pHandler.translateXYZ, modelViewMatrix);
					mat4.scale(modelViewMatrix, pHandler.scaleXYZ, modelViewMatrix);
					
					pHandler.angle += pHandler.rotateAngle;
					if (pHandler.angle >= 360.0) {
						 pHandler.angle -= 360.0;
					}
					var rad = pHandler.angle / 360.0 * 2.0 * Math.PI;
					mat4.rotate(modelViewMatrix, rad, pHandler.rotateXYZ, modelViewMatrix);
					uploadModelViewMatrixToShader();
					//uploadProjectionMatrixToShader();
					if (pHandler.lightEnable && !pHandler.pointLightEnable && !pHandler.spotLightEnable) {
						uploadNormalMatrixToShader();
					}
					drawModels();
					popModelViewMatrix();
					
					pHandler.nbrOfFrames ++;
				}
				
				this.enableCullFace = function() {
					gl.frontFace(gl.CCW);
					gl.enable(gl.CULL_FACE);
					gl.cullFace(gl.BACK);
				}
				
				this.setClearColor = function(r, g, b, a) {
					pHandler.clearColorR = r;
					pHandler.clearColorG = g;
					pHandler.clearColorB = b;
					pHandler.clearColorA = a;
				}
				
				this.setLookAt = function (lookAtEye, lookAtCenter, lookAtUp) {
					pHandler.lookAtEyeXYZ = lookAtEye;
					pHandler.lookAtCenterXYZ = lookAtCenter;
					pHandler.lookAtUpXYZ = lookAtUp;
				}
				
				this.translate = function (translate) {
					pHandler.translateXYZ = translate;
				}
				
				this.scale = function (scale) {
					pHandler.scaleXYZ = scale;
				}
				
				this.rotate = function (angle, rotate) {
					pHandler.rotateAngle = angle;
					pHandler.rotateXYZ = rotate;
				}
				
				this.lightEnable = function (lightPosition) {
					pHandler.lightEnable = true;
					pHandler.lightPositionXYZ = lightPosition;
				}
				
				this.pointLightEnable = function (lightPosition) {
					pHandler.lightEnable = true;
					pHandler.pointLightEnable = true;
					pHandler.lightPositionXYZ = lightPosition;
				}
				
				this.spotLightEnable = function (lightPosition, spotDirectioin) {
					pHandler.lightEnable = true;
					pHandler.spotLightEnable = true;
					pHandler.lightPositionXYZ = lightPosition;
					pHandler.spotDirectionXYZ = spotDirectioin;
				}
				
				this.setScene = function() {
					setupShaders();
					if (pHandler.lightEnable) {
						setupLights();
					}
					
					scene();
				}
				
				
			}
				
			


