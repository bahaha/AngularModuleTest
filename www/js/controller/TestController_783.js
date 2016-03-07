module.exports= function($scope, $state, TestService){
		console.log('enter controller_783')
		$scope.test = TestService.getTest()
	}
