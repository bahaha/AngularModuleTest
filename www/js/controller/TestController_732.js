module.exports= function($scope, $state, TestService){
		console.log('enter controller_732')
		$scope.test = TestService.getTest()
	}
