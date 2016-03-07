module.exports= function($scope, $state, TestService){
		console.log('enter controller_900')
		$scope.test = TestService.getTest()
	}
