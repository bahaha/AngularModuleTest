module.exports= function($scope, $state, TestService){
		console.log('enter controller_698')
		$scope.test = TestService.getTest()
	}
