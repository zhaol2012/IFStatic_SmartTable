$.sap.require("anders.aif.if.overview.model.formatter2")
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/formatter"
], function (Controller, JSONModel,formatter) {
	'use strict';

	return Controller.extend("anders.aif.if.overview.controller.App", {
		formatter: formatter,
		onInit: function () {
			this.uname = this.getView().byId("UNAME");
			this.dtfrom = this.getView().byId("DTFROM");
			this.dtto = this.getView().byId("DTTO");
			this.ifstatab = this.getTable();
/* 			this.ifstatab.addEventDelegate({
				onAfterRendering: function () {
					let oBinding = this.getBinding("rows");
					oBinding.attachChange(function (oEvent) {
						let sTitle = "Interace Statics";
						let iCount = oBinding.getLength();
						sTitle += "(" + iCount + ")";
						this.setAggregation("title", sTitle);
					})
				}
			}, this.ifstatab); */
			this.oBusyIndicator = this.getTable().getNoData();
			this.oModelIFSTA = this.getOwnerComponent().getModel('ifsta');
			this.getView().setModel(this.oModelIFSTA);
			//this.initBindingEventHandler();
		},
		initBindingEventHandler: function () {
			let oBusyIndicator = this.oBusyIndicator;
			let oTable = this.getTable();
			let oBinding = oTable.getBinding("rows");

			oBinding.attachDataRequested(function () {
				oTable.setNoData(oBusyIndicator);
			});
			oBinding.attachDataReceived(function () {
				oTable.setNoData(null); //Use default again ("No Data" in case no data is available)
				//Set title
				let sTitle = "Interace Statics";
				let iCount = oBinding.getLength();
				sTitle += "(" + iCount + ")";
				oTable.setAggregation("title", sTitle);
			});

			oBinding.attachChange(function () {
				let sTitle = "Interace Statics";
				let iCount = oBinding.getLength();
				sTitle += "(" + iCount + ")";
				oTable.setAggregation("title", sTitle);
			}); 
		},
		onModelRefresh: function () {
			this.getTable().getBinding().refresh(true);
		},
		onExit: function () {
			this.oBusyIndicator.destroy();
			this.oBusyIndicator = null;

		},
		onGetSta: function () {
			let pathTmp = "(uname='%uname%',datetime_from=datetimeoffset'%dtfrom%',datetime_to=datetimeoffset'%dtto%')";
			let uname = this.uname.getValue();
			let dtform = this.dtfrom.getDateValue().toISOString();
			let dtto = this.dtto.getDateValue().toISOString();

			let dtfromtmp = "datetimeoffset'%dtfrom%'";
			let dttotmp = "datetimeoffset'%dtto%'";

			pathTmp = pathTmp.replace("%uname%", uname);
			pathTmp = pathTmp.replace("%dtfrom%", dtform);
			pathTmp = pathTmp.replace("%dtto%", dtto);

			dtfromtmp = dtfromtmp.replace("%dtfrom%", dtform);
			dttotmp = dttotmp.replace("%dtto%", dtto);

			pathTmp = encodeURIComponent(pathTmp);
/* 			let pathReq = "/ZAND_IF_OVERVIEW" + pathTmp + "/Set?$format=json";
			let bindPath = "/ZAND_IF_OVERVIEW" + pathTmp + "/Set"; */
			let pathReq = "/ZAND_IF_STA" + pathTmp + "/Set?$format=json";
			let bindPath = "/ZAND_IF_STA" + pathTmp + "/Set";
			let outthis = this;
			this.oModelIFSTA.read(pathReq, {
				method: "GET",
				success: function (data) {	
					outthis.ifstatab.setTableBindingPath(bindPath);
					outthis.ifstatab.rebindTable(true);
					//outthis.ifstatab.setTableBindingPath(bindPath);
/*					outthis.ifstatab.setTableBindingPath(bindPath);
					outthis.ifstatab.rebindTable(true);

 					outthis.ifstatab.setTableBindingPath(bindPath);
					outthis.ifstatab.rebindTable(true); */
					//outthis.ifstatab.setEntitySet(bindPath);
		

/*		
	 				outthis.ifstatab.bindRows(bindPath);
					let sTitle = "Interace Statics";
					let iCount = data.results.length;
					sTitle += "(" + iCount + ")";
					outthis.ifstatab.setTitle(sTitle);  */	
				},
				error: function (err) {
					console.log(err);
				}
			});
		},
		getTable: function () {
			return this.byId("IFSTA");
		},
		initBindingEventHandler: function () {
			var oBusyIndicator = this.oBusyIndicator;
			var oTable = this.getTable();
			var oBinding = oTable.getBinding("rows");

			oBinding.attachDataRequested(function () {
				oTable.setNoData(oBusyIndicator);
			});
			oBinding.attachDataReceived(function () {
				oTable.setNoData(null); //Use default again ("No Data" in case no data is available)	
			});
/* 			oBinding.attachChange(function (oEvent){
				let sTitle = "Interace Statics";
				let iCount = oBinding.getLength();
				sTitle += "(" + iCount + ")";
				oTable.setAggregation("title", sTitle);				
			}); */
		},
		onBeforeRebindTable: function(oEvent){
			let oBindingParams = oEvent.getParameter( "bindingParams" );
		 //   let oFilter = new sap.ui.model.Filter("STATUS", sap.ui.model.FilterOperator.NE, "D");
			//oBindingParams.preventTableBind = 'true';
		},
		onInitialise:function(oEvent){
			//let oBindingParams = oEvent.getParameter( "bindingParams" );
		}
	});

});