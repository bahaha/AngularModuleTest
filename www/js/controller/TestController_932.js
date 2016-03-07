module.exports= function($scope, $state, TestService){
		console.log('enter controller_932')
		$scope.test = TestService.getTest()
	}
