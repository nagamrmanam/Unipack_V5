		var sampleData = [
				{Designation: "Designation 1", Reportsto: "PMG head", Action: "<div class='actionslink'><a class='btn btn-sm blue' href='view_designation.html' title='View'><i class='far fa-file'></i></a><a class='edit btn btn-sm green' href='edit_designation.html' title='Edit'><i class='far fa-edit'></i></a> <a data-toggle='modal' href='#divDelete'  class='btn btn-sm btn-danger' title='Delete'><i class='fas fa-trash-alt'></i></a></div>"},
				{Designation: "Designation 2", Reportsto: "Sales head", Action: "<div class='actionslink'><a class='btn btn-sm blue' href='view_designation.html' title='View'><i class='far fa-file'></i></a><a class='edit btn btn-sm green' href='edit_designation.html' title='Edit'><i class='far fa-edit'></i></a><a data-toggle='modal' href='#divDelete'  class='btn btn-sm btn-danger' title='Delete'><i class='fas fa-trash-alt'></i></a></div>"},
				{Designation: "Designation 3", Reportsto: "Marketing head", Action: "<div class='actionslink'><a class='btn btn-sm blue' href='view_designation.html' title='View'><i class='far fa-file'></i></a><a class='edit btn btn-sm green' href='edit_designation.html' title='Edit'><i class='far fa-edit'></i></a><a data-toggle='modal' href='#divDelete'  class='btn btn-sm btn-danger' title='Delete'><i class='fas fa-trash-alt'></i></a></div>"},
				{Designation: "Designation 4", Reportsto: "Development head", Action: "<div class='actionslink'><a class='btn btn-sm blue' href='view_designation.html' title='View'><i class='far fa-file'></i></a><a class='edit btn btn-sm green' href='edit_designation.html' title='Edit'><i class='far fa-edit'></i></a><a data-toggle='modal' href='#divDelete'  class='btn btn-sm btn-danger' title='Delete'><i class='fas fa-trash-alt'></i></a></div>"},
				{Designation: "Designation 5", Reportsto: "Testing head", Action: "<div class='actionslink'><a class='btn btn-sm blue' href='view_designation.html' title='View'><i class='far fa-file'></i></a><a class='edit btn btn-sm green' href='edit_designation.html' title='Edit'><i class='far fa-edit'></i></a><a data-toggle='modal' href='#divDelete'  class='btn btn-sm btn-danger' title='Delete'><i class='fas fa-trash-alt'></i></a></div>"},
				{Designation: "Designation 6", Reportsto: "PMG head", Action: "<div class='actionslink'><a class='btn btn-sm blue' href='view_designation.html' title='View'><i class='far fa-file'></i></a><a class='edit btn btn-sm green' href='edit_designation.html' title='Edit'><i class='far fa-edit'></i></a><a data-toggle='modal' href='#divDelete'  class='btn btn-sm btn-danger' title='Delete'><i class='fas fa-trash-alt'></i></a></div>"},
				{Designation: "Designation 7", Reportsto: "PMG head", Action: "<div class='actionslink'><a class='btn btn-sm blue' href='view_designation.html' title='View'><i class='far fa-file'></i></a><a class='edit btn btn-sm green' href='edit_designation.html' title='Edit'><i class='far fa-edit'></i></a><a data-toggle='modal' href='#divDelete'  class='btn btn-sm btn-danger' title='Delete'><i class='fas fa-trash-alt'></i></a></div>"},
				{Designation: "Designation 8", Reportsto: "PMG head", Action: "<div class='actionslink'><a class='btn btn-sm blue' href='view_designation.html' title='View'><i class='far fa-file'></i></a><a class='edit btn btn-sm green' href='edit_designation.html' title='Edit'><i class='far fa-edit'></i></a><a data-toggle='modal' href='#divDelete'  class='btn btn-sm btn-danger' title='Delete'><i class='fas fa-trash-alt'></i></a></div>"},
				{Designation: "Designation 9", Reportsto: "PMG head", Action: "<div class='actionslink'><a class='btn btn-sm blue' href='view_designation.html' title='View'><i class='far fa-file'></i></a><a class='edit btn btn-sm green' href='edit_designation.html' title='Edit'><i class='far fa-edit'></i></a><a data-toggle='modal' href='#divDelete'  class='btn btn-sm btn-danger' title='Delete'><i class='fas fa-trash-alt'></i></a></div>"},
				{Designation: "Designation 10", Reportsto: "PMG head", Action: "<div class='actionslink'><a class='btn btn-sm blue' href='view_designation.html' title='View'><i class='far fa-file'></i></a><a class='edit btn btn-sm green' href='edit_designation.html' title='Edit'><i class='far fa-edit'></i></a><a data-toggle='modal' href='#divDelete'  class='btn btn-sm btn-danger' title='Delete'><i class='fas fa-trash-alt'></i></a></div>"},
				{Designation: "Designation 11", Reportsto: "PMG head", Action: "<div class='actionslink'><a class='btn btn-sm blue' href='view_designation.html' title='View'><i class='far fa-file'></i></a><a class='edit btn btn-sm green' href='edit_designation.html' title='Edit'><i class='far fa-edit'></i></a><a data-toggle='modal' href='#divDelete'  class='btn btn-sm btn-danger' title='Delete'><i class='fas fa-trash-alt'></i></a></div>"},
				{Designation: "Designation 12", Reportsto: "PMG head", Action: "<div class='actionslink'><a class='btn btn-sm blue' href='view_designation.html' title='View'><i class='far fa-file'></i></a><a class='edit btn btn-sm green' href='edit_designation.html' title='Edit'><i class='far fa-edit'></i></a><a data-toggle='modal' href='#divDelete'  class='btn btn-sm btn-danger' title='Delete'><i class='fas fa-trash-alt'></i></a></div>"},
				
				
				];

                var sampleDataNextID = sampleData.length + 1;

                function getIndexById(id) {

                    var idx,
                    l = sampleData.length;

                    for (var j; j < l; j++) {
                        if (sampleData[j].ProductID == id) {
                            return j;
                        }
                    }
                    return null;
                }
                $(document).ready(function() {
                    $("#grid").kendoGrid({
                        dataSource: {
                            transport: {
                                read: function (e) {
                                    e.success(sampleData);
                                },
                                create: function (e) {
                                    e.data.ProductID = sampleDataNextID++;
                                    sampleData.push(e.data);
                                    e.success(e.data);
                                },
                                update: function (e) {
                                    sampleData[getIndexById(e.data.ProductID)] = e.data;
                                    e.success();
                                },
                                destroy: function (e) {
                                    sampleData.splice(getIndexById(e.data.ProductID), 1);
                                    e.success();
                                }
                            },
                            error: function (e) {
                                // handle data operation error
                                alert("Status: " + e.status + "; Error message: " + e.errorThrown);
                            },
                            pageSize: 10,
                            batch: false,
                            schema: {
                                model: {
                                    id: "ProductID",
                                    fields: {
                                        Designation: { type: "string" },
                                        Reportsto: { type: "string" },
                                        Createddate: { type: "string" },
                                        Action: { 
										type: "celleHtml"
										
										}
                                    }
                                }
                            }
                        },
                        height: 440,
                        sortable: true,
                        reorderable: true,
                        //groupable: true,
                        resizable: true,
                        filterable: true,
                        columnMenu: true,
                        pageable: true,
                        columns: [ {
                                field: "Designation",
                                title: "Designation",								
                                width: 500
                            }, {
                                field: "Reportsto",
                                title: "Reports to",
                                width: 140
                            }, {
                                field: "Action",
								encoded: false,
								attributes: {
      										"class": "action"
											},
                                width: 180,
								
								
                            }
                        ]
                    });
                });
				
				
			/*	$(function(){
						   var celleHtml = "";
	celleHtml = "<div class='actions'>";	
celleHtml += " <a data-toggle='modal' href='#divView'><i class='viewicon' title='View'></i></a> <a href='edit_user.html'><i class='editicon' title='Edit'></i></a> <a href='#'><i class='deleteicon' title='Delete'></i> </a>";	

	celleHtml += "</div>";	
						   $(".action").html(celleHtml);
						   
						   }); */