module.exports= function($scope, $state, TestService){
		console.log('enter controller_418')
		$scope.test = TestService.getTest()
	}
