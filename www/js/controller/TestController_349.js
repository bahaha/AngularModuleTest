module.exports= function($scope, $state, TestService){
		console.log('enter controller_349')
		$scope.test = TestService.getTest()
	}
