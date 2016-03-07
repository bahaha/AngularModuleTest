module.exports= function($scope, $state, TestService){
		console.log('enter controller_764')
		$scope.test = TestService.getTest()
	}
