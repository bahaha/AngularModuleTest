module.exports= function($scope, $state, TestService){
		console.log('enter controller_452')
		$scope.test = TestService.getTest()
	}
