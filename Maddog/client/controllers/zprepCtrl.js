mdmapp.controller('zprepController', function($scope, $http)
	this.zsignup = function (){
		var data = ({
			zName: this.zprep.name,
			zEmail: this.zprep.email,
			zPhone: this.zprep.phone
		});

		$http.post('/zprepform', data).
			success(function(data,status,headers,config){
			}).
			error(function(data, status, headers, config){
			});
	}
);