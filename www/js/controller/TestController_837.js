module.exports= function($scope, $state, TestService){
		console.log('enter controller_837')
		$scope.test = TestService.getTest()
	}
