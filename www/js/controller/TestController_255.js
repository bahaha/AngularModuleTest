module.exports= function($scope, $state, TestService){
		console.log('enter controller_255')
		$scope.test = TestService.getTest()
	}
