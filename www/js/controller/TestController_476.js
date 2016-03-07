module.exports= function($scope, $state, TestService){
		console.log('enter controller_476')
		$scope.test = TestService.getTest()
	}
