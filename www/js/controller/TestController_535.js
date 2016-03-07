module.exports= function($scope, $state, TestService){
		console.log('enter controller_535')
		$scope.test = TestService.getTest()
	}
