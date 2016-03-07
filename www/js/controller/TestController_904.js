module.exports= function($scope, $state, TestService){
		console.log('enter controller_904')
		$scope.test = TestService.getTest()
	}
