module.exports= function($scope, $state, TestService){
		console.log('enter controller_311')
		$scope.test = TestService.getTest()
	}
