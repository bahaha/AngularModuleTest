module.exports= function($scope, $state, TestService){
		console.log('enter controller_639')
		$scope.test = TestService.getTest()
	}
