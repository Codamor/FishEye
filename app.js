"use strict"

import {Controller} from "./src/js/Controller.js";
import {Model} from "./src/js/Model.js";
import {View} from "./src/js/View.js";


const app = new Controller(new Model("./src/api/FishEye.json"), new View()) ;


app.displayContent()

