module.exports= function($scope, $state, TestService){
		console.log('enter controller_716')
		$scope.test = TestService.getTest()
	}
