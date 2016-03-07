module.exports= function($scope, $state, TestService){
		console.log('enter controller_55')
		$scope.test = TestService.getTest()
	}
