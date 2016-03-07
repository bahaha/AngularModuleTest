module.exports= function($scope, $state, TestService){
		console.log('enter controller_306')
		$scope.test = TestService.getTest()
	}
