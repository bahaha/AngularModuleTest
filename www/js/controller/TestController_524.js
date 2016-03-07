module.exports= function($scope, $state, TestService){
		console.log('enter controller_524')
		$scope.test = TestService.getTest()
	}
