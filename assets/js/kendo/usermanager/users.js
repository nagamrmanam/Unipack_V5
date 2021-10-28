		var sampleData = [
				{Name: "User 1", Status: "Inactive", Action: "<div class='actionslink'><a class='btn btn-sm blue' href='view_user.html' title='View'><i class='fa fa-file-text-o font-padding'></i></a><a class='edit btn btn-sm green' href='edit_user.html' title='Edit'><i class='fa fa-pencil-square-o font-padding '></i></a><a class='btn btn-sm btn-danger' href='#' title='Delete'  data-toggle='modal' data-target='#divDelete'><i class='fa fa-trash-o font-padding'></i></a></div>"},
				{Name: "User 2", Status: "Active", Action: "<div class='actionslink'><a class='btn btn-sm blue' href='view_user.html' title='View'><i class='fa fa-file-text-o font-padding'></i></a><a class='edit btn btn-sm green' href='edit_user.html' title='Edit'><i class='fa fa-pencil-square-o font-padding '></i></a><a class='btn btn-sm btn-danger' href='#' title='Delete'  data-toggle='modal' data-target='#divDelete'><i class='fa fa-trash-o font-padding'></i></a></div>"},
				{Name: "User 3", Status: "Inactive", Action: "<div class='actionslink'><a class='btn btn-sm blue' href='view_user.html' title='View'><i class='fa fa-file-text-o font-padding'></i></a><a class='edit btn btn-sm green' href='edit_user.html' title='Edit'><i class='fa fa-pencil-square-o font-padding '></i></a><a class='btn btn-sm btn-danger' href='#' title='Delete'  data-toggle='modal' data-target='#divDelete'><i class='fa fa-trash-o font-padding'></i></a></div>"},
				{Name: "User 4", Status: "Active", Action: "<div class='actionslink'><a class='btn btn-sm blue' href='view_user.html' title='View'><i class='fa fa-file-text-o font-padding'></i></a><a class='edit btn btn-sm green' href='edit_user.html' title='Edit'><i class='fa fa-pencil-square-o font-padding '></i></a><a class='btn btn-sm btn-danger' href='#' title='Delete'  data-toggle='modal' data-target='#divDelete'><i class='fa fa-trash-o font-padding'></i></a></div>"},
				{Name: "User 5", Status: "Active", Action: "<div class='actionslink'><a class='btn btn-sm blue' href='view_user.html' title='View'><i class='fa fa-file-text-o font-padding'></i></a><a class='edit btn btn-sm green' href='edit_user.html' title='Edit'><i class='fa fa-pencil-square-o font-padding '></i></a><a class='btn btn-sm btn-danger' href='#' title='Delete'  data-toggle='modal' data-target='#divDelete'><i class='fa fa-trash-o font-padding'></i></a></div>"},
				{Name: "User 6", Status: "Inactive", Action: "<div class='actionslink'><a class='btn btn-sm blue' href='view_user.html' title='View'><i class='fa fa-file-text-o font-padding'></i></a><a class='edit btn btn-sm green' href='edit_user.html' title='Edit'><i class='fa fa-pencil-square-o font-padding '></i></a><a class='btn btn-sm btn-danger' href='#' title='Delete'  data-toggle='modal' data-target='#divDelete'><i class='fa fa-trash-o font-padding'></i></a></div>"},
				{Name: "User 7", Status: "Active", Action: "<div class='actionslink'><a class='btn btn-sm blue' href='view_user.html' title='View'><i class='fa fa-file-text-o font-padding'></i></a><a class='edit btn btn-sm green' href='edit_user.html' title='Edit'><i class='fa fa-pencil-square-o font-padding '></i></a><a class='btn btn-sm btn-danger' href='#' title='Delete'  data-toggle='modal' data-target='#divDelete'><i class='fa fa-trash-o font-padding'></i></a></div>"},
				{Name: "User 8", Status: "Inactive", Action: "<div class='actionslink'><a class='btn btn-sm blue' href='view_user.html' title='View'><i class='fa fa-file-text-o font-padding'></i></a><a class='edit btn btn-sm green' href='edit_user.html' title='Edit'><i class='fa fa-pencil-square-o font-padding '></i></a><a class='btn btn-sm btn-danger' href='#' title='Delete'  data-toggle='modal' data-target='#divDelete'><i class='fa fa-trash-o font-padding'></i></a></div>"},
				{Name: "User 9", Status: "Inactive", Action: "<div class='actionslink'><a class='btn btn-sm blue' href='view_user.html' title='View'><i class='fa fa-file-text-o font-padding'></i></a><a class='edit btn btn-sm green' href='edit_user.html' title='Edit'><i class='fa fa-pencil-square-o font-padding '></i></a><a class='btn btn-sm btn-danger' href='#' title='Delete'  data-toggle='modal' data-target='#divDelete'><i class='fa fa-trash-o font-padding'></i></a></div>"},
				{Name: "User 10", Status: "Active", Action: "<div class='actionslink'><a class='btn btn-sm blue' href='view_user.html' title='View'><i class='fa fa-file-text-o font-padding'></i></a><a class='edit btn btn-sm green' href='edit_user.html' title='Edit'><i class='fa fa-pencil-square-o font-padding '></i></a><a class='btn btn-sm btn-danger' href='#' title='Delete'  data-toggle='modal' data-target='#divDelete'><i class='fa fa-trash-o font-padding'></i></a></div>"},
				{Name: "User 11", Status: "Inactive", Action: "<div class='actionslink'><a class='btn btn-sm blue' href='view_user.html' title='View'><i class='fa fa-file-text-o font-padding'></i></a><a class='edit btn btn-sm green' href='edit_user.html' title='Edit'><i class='fa fa-pencil-square-o font-padding '></i></a><a class='btn btn-sm btn-danger' href='#' title='Delete'  data-toggle='modal' data-target='#divDelete'><i class='fa fa-trash-o font-padding'></i></a></div>"}
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
                                        Name: { type: "string" },
                                        Status: { type: "string" },
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
                                field: "Name",
                                title: "User name",								
                                width: 500
                            }, {
                                field: "Status",
                                title: "Email id",
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