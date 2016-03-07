module.exports= function($scope, $state, TestService){
		console.log('enter controller_868')
		$scope.test = TestService.getTest()
	}
