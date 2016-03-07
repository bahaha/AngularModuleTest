module.exports= function($scope, $state, TestService){
		console.log('enter controller_431')
		$scope.test = TestService.getTest()
	}
