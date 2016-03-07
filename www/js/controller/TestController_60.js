module.exports= function($scope, $state, TestService){
		console.log('enter controller_60')
		$scope.test = TestService.getTest()
	}
