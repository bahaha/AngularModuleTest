module.exports= function($scope, $state, TestService){
		console.log('enter controller_750')
		$scope.test = TestService.getTest()
	}
