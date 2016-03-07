module.exports= function($scope, $state, TestService){
		console.log('enter controller_30')
		$scope.test = TestService.getTest()
	}
