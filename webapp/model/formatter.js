sap.ui.define([], function () {
	"use strict";
	return {
            staticColorError: function (iStatic) {
                  if (iStatic > 0) {
                     // this.addStyleClass("staticRed");
                     return "Error";
                  } else {
                     // this.removeStyleClass("staticRed");
                  }
                  //return iStatic;
              },
              staticColorSuccess: function (iStatic) {
                  if (iStatic > 0) {
                      //this.addStyleClass("staticGreen");
                      return "Success";
                  } else {
                     //this.removeStyleClass("staticGreen");          
                  }
                  //return iStatic;
              },
              staticColorInProcess: function (iStatic) {
                  if (iStatic > 0) {
                      //this.addStyleClass("staticYellow");
                      return "InProcess";
                  } else {
                     //this.removeStyleClass("staticYellow");
                  }
                 // return iStatic;
              }
	};
});