module.exports= function($scope, $state, TestService){
		console.log('enter controller_691')
		$scope.test = TestService.getTest()
	}
