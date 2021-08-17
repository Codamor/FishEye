"use strict"

import {Controller} from "./src/js/Controllers/Controller.js";
import {Model} from "./src/js/Models/Model.js";
import {View} from "./src/js/Views/View.js";


const app = new Controller(new Model("./src/api/FishEye.json"), new View()) ;


app.displayContent()

