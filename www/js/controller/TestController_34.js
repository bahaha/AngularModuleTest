module.exports= function($scope, $state, TestService){
		console.log('enter controller_34')
		$scope.test = TestService.getTest()
	}
