jQuery.sap.declare("anders.aif.if.overview.model.formatter2");

anders.aif.if.overview.model.formatter2 = {
    staticColorError: function (iStatic) {
        if (iStatic > 0) {

            //  this.addStyleClass("sapThemeHighlight-asColor");
            this.addStyleClass("staticRed");
        } else {
            this.removeStyleClass("staticRed");

        }
        return iStatic;
    },
    staticColorSuccess: function (iStatic) {
        if (iStatic > 0) {

            //  this.addStyleClass("sapThemeHighlight-asColor");
            this.addStyleClass("staticGreen");
        } else {
            this.removeStyleClass("staticGreen");

        }
        return iStatic;
    },
    staticColorInProcess: function (iStatic) {
        if (iStatic > 0) {

            //  this.addStyleClass("sapThemeHighlight-asColor");
            this.addStyleClass("staticYellow");
        } else {
            this.removeStyleClass("staticYellow");

        }
        return iStatic;
    },
    staticColorTError: function (iStatic) {
        if (iStatic > 0) {

            //  this.addStyleClass("sapThemeHighlight-asColor");
            this.addStyleClass("staticTError");
        } else {
            this.removeStyleClass("staticTError");

        }
        return iStatic;
    }
};