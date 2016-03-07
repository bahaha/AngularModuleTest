module.exports= function($scope, $state, TestService){
		console.log('enter controller_172')
		$scope.test = TestService.getTest()
	}
