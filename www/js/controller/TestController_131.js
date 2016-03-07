module.exports= function($scope, $state, TestService){
		console.log('enter controller_131')
		$scope.test = TestService.getTest()
	}
