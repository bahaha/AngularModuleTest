module.exports= function($scope, $state, TestService){
		console.log('enter controller_918')
		$scope.test = TestService.getTest()
	}
