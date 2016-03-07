module.exports= function($scope, $state, TestService){
		console.log('enter controller_411')
		$scope.test = TestService.getTest()
	}
