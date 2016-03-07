module.exports= function($scope, $state, TestService){
		console.log('enter controller_327')
		$scope.test = TestService.getTest()
	}
