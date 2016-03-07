module.exports= function($scope, $state, TestService){
		console.log('enter controller_192')
		$scope.test = TestService.getTest()
	}
