import * as Cesium from "cesium";

import "cesium/Widgets/widgets.css";

import "./main.css"

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzYmFjZGI5Ny0yM2RjLTRlZWUtYWVkMS1lODI0N2FiZjVlNTIiLCJpZCI6ODgxMDQsImlhdCI6MTY0ODg5ODM3Nn0.xbWbDzDLSjZNUgNTiV-ncvBRecBaYBiEM8SE6cC16kI';


const viewer = new Cesium.Viewer("cesiumContainer");