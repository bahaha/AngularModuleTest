module.exports= function($scope, $state, TestService){
		console.log('enter controller_562')
		$scope.test = TestService.getTest()
	}
