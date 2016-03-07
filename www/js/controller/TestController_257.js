module.exports= function($scope, $state, TestService){
		console.log('enter controller_257')
		$scope.test = TestService.getTest()
	}
