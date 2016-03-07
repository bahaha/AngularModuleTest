module.exports= function($scope, $state, TestService){
		console.log('enter controller_645')
		$scope.test = TestService.getTest()
	}
