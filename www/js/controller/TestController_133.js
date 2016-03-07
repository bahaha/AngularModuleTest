module.exports= function($scope, $state, TestService){
		console.log('enter controller_133')
		$scope.test = TestService.getTest()
	}
