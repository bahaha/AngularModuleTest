module.exports= function($scope, $state, TestService){
		console.log('enter controller_382')
		$scope.test = TestService.getTest()
	}
