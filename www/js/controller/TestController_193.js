module.exports= function($scope, $state, TestService){
		console.log('enter controller_193')
		$scope.test = TestService.getTest()
	}
