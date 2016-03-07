module.exports= function($scope, $state, TestService){
		console.log('enter controller_522')
		$scope.test = TestService.getTest()
	}
