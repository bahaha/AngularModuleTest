module.exports= function($scope, $state, TestService){
		console.log('enter controller_212')
		$scope.test = TestService.getTest()
	}
