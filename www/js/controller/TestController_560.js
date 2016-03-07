module.exports= function($scope, $state, TestService){
		console.log('enter controller_560')
		$scope.test = TestService.getTest()
	}
