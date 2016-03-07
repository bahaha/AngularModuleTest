module.exports= function($scope, $state, TestService){
		console.log('enter controller_789')
		$scope.test = TestService.getTest()
	}
