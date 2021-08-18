"use strict"

import {Controller} from "./src/js/Controller.js";
import {Model} from "./src/js/Model.js";
import {View} from "./src/js/View.js";

let model = new Model("./src/api/FishEye.json") ;
let view = new View() ;
let controller = new Controller(model, view) ;


const app = controller ;


app.displayContent() ;

