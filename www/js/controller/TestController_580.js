module.exports= function($scope, $state, TestService){
		console.log('enter controller_580')
		$scope.test = TestService.getTest()
	}
