module.exports= function($scope, $state, TestService){
		console.log('enter controller_590')
		$scope.test = TestService.getTest()
	}
