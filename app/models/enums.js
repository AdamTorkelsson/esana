/**
 * New node file
 */
"use strict";

var Enum = require('enum');

var worstAsset = new Enum({
	'hardToUse' : 'Ja',
	'easyToUse' : 'Nej'
});

var worstThing = new Enum({
	'pain' : 'Ja',
	'nausea' : 'Nej'
});

var roles = Object.freeze({
    patient: 0,
    doctor: 1,
    admin: 2
});





exports.roles = roles;
exports.worstAsset = worstAsset;
exports.worstThing = worstThing;